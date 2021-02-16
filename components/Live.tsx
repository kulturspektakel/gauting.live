import React from "react";
import Countdown from "./Countdown";
import { fetchLive } from "../pages/api/live";
import Video from "./Video";

export default React.forwardRef<
  any,
  {
    liveVideo: Await<ReturnType<typeof fetchLive>>["data"];
  }
>(({ liveVideo }, ref) => {
  if (!liveVideo) {
    return null;
  }
  return (
    <main className="livestream" ref={ref}>
      <div className="container">
        {liveVideo.status === "scheduled_unpublished" &&
        liveVideo.planned_start_time ? (
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
        ) : (
          <Video
            autoPlay={liveVideo.status === "live"}
            id={liveVideo.videoId}
            page={liveVideo.pageId}
          />
        )}

        <a
          className="openLink"
          target="_blank"
          href={`https://facebook.com/${liveVideo.pageId}/videos/${liveVideo.videoId}`}
        >
          {liveVideo.status === "live" ? "Video in externem Player öffnen" : ""}
        </a>
      </div>
    </main>
  );
});
