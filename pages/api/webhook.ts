import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient, VideoStatus } from "@prisma/client";

const prisma = new PrismaClient();

/*

video ID : 1011172722744492
WENT LIVE
{"object":"page","entry":[{"id":"1477025869109592","time":1612223661,"changes":[{"value":{"id":"2424790960999740","status":"live"},"field":"live_videos"}]}]}

STOPPED
{"object":"page","entry":[{"id":"1477025869109592","time":1612223690,"changes":[{"value":{"id":"2424790960999740","status":"live_stopped"},"field":"live_videos"}]}]}

VOD
{"object":"page","entry":[{"id":"1477025869109592","time":1612223697,"changes":[{"value":{"id":"2424790960999740","status":"vod"},"field":"live_videos"}]}]}

*/

type Payload = {
  object: "page";
  entry: Entry[];
};

type Entry = {
  id: string;
  time: number;
  changes: Change[];
};

type Change = {
  value: {
    id: string;
    status: VideoStatus;
  };
  field: "live_videos";
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const mode = req.query["hub.mode"];
  const challenge = req.query["hub.challenge"];
  const token = req.query["hub.verify_token"];
  if (req.method === "GET" && token === "gautingLIVE" && challenge) {
    return res.send(challenge);
  }

  const body: Payload =
    typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  console.log(JSON.stringify(body));

  const handleEvents = body?.entry?.flatMap((entry) =>
    entry.changes.map(async (change) => {
      if (change.field !== "live_videos") {
        return;
      }

      const fb: {
        video: {
          id: string;
        };
        broadcast_start_time?: string; //"2021-02-01T23:54:16+0000",
        planned_start_time?: string; //"2021-02-01T23:54:16+0000",
        title: string;
        description: string;
        id: string;
      } = await fetch(
        `https://graph.facebook.com/${change.value.id}?access_token=${process.env.FB_TOKEN}&fields=video,planned_start_time,broadcast_start_time,title,description`
      ).then((res) => res.json());

      const payload: Omit<Prisma.liveUncheckedCreateInput, "broadcastId"> = {
        status: change.value.status,
        updatedAt: new Date(),
        pageId: entry.id,
        videoId: fb.video.id,
        title: fb.title,
        description: fb.description,
        broadcast_start_time: fb.broadcast_start_time
          ? new Date(fb.broadcast_start_time)
          : null,
        planned_start_time: fb.planned_start_time
          ? new Date(fb.planned_start_time)
          : null,
      };

      await prisma.live.upsert({
        create: {
          ...payload,
          broadcastId: change.value.id,
        },
        update: payload,
        where: {
          broadcastId: change.value.id,
        },
      });
    })
  );

  await Promise.all(handleEvents ?? []);

  return res.send("ok");
};
