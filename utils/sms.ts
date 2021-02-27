import twilio from "twilio";
import { PrismaClient, reminders } from "@prisma/client";
import inquirer from "inquirer";
import { sub } from "date-fns";

const prisma = new PrismaClient();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

(async () => {
  const { band } = await inquirer.prompt([
    {
      type: "input",
      message: "Who is playing?",
      name: "band",
    },
  ]);

  const body = `🔴 Wir sind live mit "${band}": https://gauting.live`;
  console.log("This is what your message will look like:");
  console.log(body);

  const debugReminders = await prisma.reminders.findMany({
    where: getWhere(true),
  });

  const { debug } = await inquirer.prompt([
    {
      type: "confirm",
      message: `Send debug message to ${debugReminders.length} numbers?`,
      name: "debug",
    },
  ]);

  if (debug) {
    await send(body, debugReminders);
  }

  const productionReminders = await prisma.reminders.findMany({
    where: getWhere(false),
  });

  const { production } = await inquirer.prompt([
    {
      type: "confirm",
      message: `Send production message to ${productionReminders.length} numbers?`,
      name: "production",
      default: false,
    },
  ]);

  if (production) {
    await send(body, productionReminders);
  }

  process.exit(0);
})();

async function send(body: string, res: reminders[]) {
  for (const reminder of res) {
    if (reminder.number) {
      try {
        const { status, errorCode } = await client.messages.create({
          body,
          from: "gautingLIVE",
          messagingServiceSid: process.env.TWILIO_MESSAGING_SID,
          to: reminder.number,
        });

        if (errorCode == null) {
          await prisma.reminders.update({
            where: {
              number: reminder.number,
            },
            data: {
              lastContacted: new Date(),
            },
          });
          console.log(`${reminder.number}: ${status}`);
        } else {
          throw new Error(String(errorCode));
        }
      } catch (e) {
        console.error(`Failed to send to: ${reminder.number}: ${e}`);
      }
    }
  }
}

function getWhere(debug: boolean) {
  return {
    OR: [
      {
        debug,
        lastContacted: {
          lt: sub(new Date(), { hours: 8 }),
        },
      },
      {
        debug,
        lastContacted: null,
      },
    ],
  };
}
