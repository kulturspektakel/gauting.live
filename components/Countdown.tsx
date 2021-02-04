import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

export default function Countdown(props: { date: Date; ended?: string }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const ref = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(ref);
  }, [setNow]);

  if (!now) {
    return null;
  }

  const diff = differenceInSeconds(props.date, now);
  const seconds = diff % 60;
  const minutes = Math.floor(diff / 60) % 60;
  const hours = Math.floor(diff / 3600) % 24;
  const days = Math.floor(diff / 86400);

  return (
    <div className="countdown">
      {props.ended && diff <= 0 ? (
        <div className="ended">{props.ended}</div>
      ) : (
        <>
          <div>
            <time>{Math.max(0, days)}</time>
            Tage
          </div>
          <div>
            <time>{Math.max(0, hours)}</time>
            Stunden
          </div>
          <div>
            <time>{Math.max(0, minutes)}</time>
            Minuten
          </div>
          <div>
            <time>{Math.max(0, seconds)}</time>
            Sekunden
          </div>
        </>
      )}
    </div>
  );
}
