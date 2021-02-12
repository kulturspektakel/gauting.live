import React from "react";
import Countdown from "./Countdown";
import live, { fetchLive } from "../pages/api/live";

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
        <div className="video">
          <div className="videoInner">
            {liveVideo.status === "scheduled_unpublished" &&
            liveVideo.planned_start_time ? (
              <div className="info">
                <Countdown
                  date={new Date(liveVideo.planned_start_time)}
                  ended="Gleich geht's los&hellip;"
                />
                <h3>{liveVideo.title}</h3>
                <p>{liveVideo.description}</p>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                allow="encrypted-media"
                src={`https://www.facebook.com/plugins/video.php?autoplay=${
                  liveVideo.status === "live" ? "true" : "false"
                }&href=https%3A%2F%2Fwww.facebook.com%2F${
                  liveVideo.pageId
                }%2Fvideos%2F${liveVideo.videoId}%2F`}
              />
            )}
          </div>
        </div>

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
