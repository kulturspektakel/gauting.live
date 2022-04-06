import { isAfter } from "date-fns";
import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import Video from "./Video";

export default () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const ref = setInterval(() => {
      setNow(new Date());
    }, 30000);
    return clearInterval(ref);
  }, []);

  const startTime = new Date("2022-04-08T20:00:00+02:00");
  const youtube = "TZ1OprXAhCg";
  const isLive = isAfter(now, startTime);

  return (
    <main className="livestream">
      <div className="container">
        {isLive ? (
          <div className="video">
            <div className="videoInner">
              <a
                className="clickableArea"
                title="Video abspielen"
                href="https://www.youtube.com/watch?v=TZ1OprXAhCg"
                target="_blank"
              >
                <img src="vid.gif" className="thumbnail backgroundVid" />
                <img src="/play.png" className="play" width="73" height="73" />
              </a>
            </div>
            <div className="liveBadge">Live</div>
          </div>
        ) : (
          <div className="video">
            <div className="videoInner">
              <div className="info">
                <Countdown date={startTime} ended="Gleich geht's los&hellip;" />
                <h3>Benefizkonzert für die Ukraine</h3>
                <p>
                  mit Erik Berthold, Susanne Karl, Stefan Berchtold, Micha
                  Reiserer, Jane Höchstetter Markus Schmitt u.v.a.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
