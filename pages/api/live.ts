import { NextApiRequest, NextApiResponse } from "next";
import fetch from "unfetch";

export default async (_req: NextApiRequest, res: NextApiResponse) =>
  res.json(
    await fetch(
      "https://api.betterplace.org/de/api_v4/projects/1114.json"
    ).then((r) => r.json())
  );
