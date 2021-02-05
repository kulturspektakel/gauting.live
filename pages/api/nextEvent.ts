import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (_req: NextApiRequest, res: NextApiResponse) =>
  res.json(await fetchNextEvent());

export async function fetchNextEvent() {
  const nextEvent = await prisma.live.findFirst({
    where: {
      planned_start_time: {
        gt: new Date(),
      },
    },
    orderBy: {
      planned_start_time: "asc",
    },
    select: {
      planned_start_time: true,
      title: true,
    },
  });

  return { data: nextEvent };
}
