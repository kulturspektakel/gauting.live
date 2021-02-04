import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, VideoStatus } from "@prisma/client";
import { sub, add } from "date-fns";
const prisma = new PrismaClient();

export default async (_req: NextApiRequest, res: NextApiResponse) =>
  res.json(await fetchLive());

export async function fetchLive() {
  const isToday = {
    gt: sub(new Date(), {
      hours: 2,
    }),
    lt: add(new Date(), {
      hours: 8,
    }),
  };

  const liveEvent = await prisma.live.findFirst({
    where: {
      status: {
        in: [
          VideoStatus.live,
          VideoStatus.vod,
          VideoStatus.scheduled_live,
          VideoStatus.scheduled_unpublished,
        ],
      },
      OR: [
        {
          planned_start_time: isToday,
        },
        {
          broadcast_start_time: isToday,
        },
      ],
    },
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      pageId: true,
      videoId: true,
      planned_start_time: true,
      broadcast_start_time: true,
      title: true,
      description: true,
      status: true,
    },
  });

  return { data: liveEvent };
}
