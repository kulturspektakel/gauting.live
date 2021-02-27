import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import phone from "phone";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const [number, cc] = phone(String(req.query.tel), "DEU");

  if (number == null || cc !== "DEU") {
    throw Error("Invalid nubmer");
  }

  try {
    await prisma.reminders.create({
      data: {
        number,
      },
    });
  } catch (e) {
    if (e.code !== "P2002") {
      res.status(400);
    }
  }
  res.send("ok");
};
