import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.reminders.create({
    data: {
      number: String(req.query.tel),
    },
  });
  res.send("ok");
};
