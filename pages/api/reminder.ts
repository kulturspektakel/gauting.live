import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const tel = String(req.query.tel)
    .replace(/\D/g, "")
    .replace(/^00/, "")
    .replace(/^0/, "49");

  await prisma.reminders.create({
    data: {
      number: `+${tel}`,
    },
  });
  res.send("ok");
};
