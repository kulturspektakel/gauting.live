import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";
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
    } catch (e) {}
    res.send("ok");
  } else {
    const a = await pool.query(
      "INSERT INTO donations(status) VALUES('started') RETURNING id"
    );
    res.json(a.rows[0]);
  }
};
