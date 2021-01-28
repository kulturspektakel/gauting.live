import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";
const pool = new Pool();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await pool.query("INSERT INTO reminders(number) VALUES($1)", [req.query.tel]);
  res.send("ok");
};
