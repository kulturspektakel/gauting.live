import { NextApiRequest, NextApiResponse } from "next";
import { fetchDonation } from "../../utils/betterplace";
import formatCurrency from "../../utils/formatCurrency";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const {
        status,
        donation_client_reference,
        amount,
        donation_token,
      } = JSON.parse(req.body);

      await prisma.donations.update({
        data: {
          status,
          amount,
          betterplace: donation_token,
        },
        where: {
          id: donation_client_reference,
        },
      });

      const donation = await fetchDonation(donation_token);

      await fetch(
        "https://hooks.slack.com/services/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",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            text: `${
              ["💰", "💵", "💶", "💷", "💴", "🤑"][
                Math.floor(Math.random() * 5)
              ]
            } Neue Spende: *${formatCurrency(donation.amount_in_cents)}* von *${
              donation.donor?.name ?? "anonym"
            }*:\n> ${donation.message}`,
          }),
        }
      );
    } catch (e) {
      console.error(e);
    }
    res.send("ok");
  } else {
    const result = await prisma.donations.create({
      data: {},
      select: {
        id: true,
      },
    });
    res.json(result);
  }
};
