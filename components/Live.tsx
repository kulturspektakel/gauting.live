import React from "react";
import Countdown from "./Countdown";
import { fetchLive } from "../pages/api/live";
import Video from "./Video";

export default React.forwardRef<
  any,
  {
    liveVideo: Await<ReturnType<typeof fetchLive>>["data"];
    fbCapableBrowser: boolean;
  }
>(({ liveVideo, fbCapableBrowser }, ref) => {
  if (!liveVideo) {
    return null;
  }

  let video = (
    <>
      <Video
        autoPlay={liveVideo.status === "live"}
        id={liveVideo.videoId}
        page={liveVideo.pageId}
        service="facebook"
      />
      {liveVideo.youtube && (
        <a
          href={`https://www.youtube.com/watch?v=${liveVideo.youtube}`}
          target="_blank"
          className="openYouTube"
        >
          auf YouTube ansehen
        </a>
      )}
    </>
  );

  if (
    liveVideo.status === "scheduled_unpublished" &&
    liveVideo.planned_start_time
  ) {
    // countdown
    video = (
      <div className="video">
        <div className="videoInner">
          <div className="info">
            <Countdown
              date={new Date(liveVideo.planned_start_time)}
              ended="Gleich geht's los&hellip;"
            />
            <h3>{liveVideo.title}</h3>
            <p>{liveVideo.description}</p>
          </div>
        </div>
      </div>
    );
  } else if (!fbCapableBrowser && liveVideo.youtube) {
    video = (
      <Video
        id={liveVideo.youtube}
        service="youtube"
        openExternal={liveVideo.status === "live"}
      />
    );
  }

  return (
    <main className="livestream" ref={ref}>
      <div className="container">{video}</div>
    </main>
  );
});
