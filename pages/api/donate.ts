import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";
import { fetchDonation, formatCurrency } from "../../utils/betterplace";
const pool = new Pool();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const {
        status,
        donation_client_reference,
        amount,
        donation_token,
      } = JSON.parse(req.body);
      await pool.query(
        "UPDATE donations SET  status=$1, amount=$2, betterplace=$3 WHERE id=$4",
        [status, amount, donation_token, donation_client_reference]
      );

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
    const a = await pool.query(
      "INSERT INTO donations(status) VALUES('started') RETURNING id"
    );
    res.json(a.rows[0]);
  }
};
