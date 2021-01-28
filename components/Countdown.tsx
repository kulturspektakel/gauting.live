import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { nextEventDate } from "../utils/betterplace";

export default function Countdown() {
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

  const diff = differenceInSeconds(nextEventDate(), now);
  const seconds = diff % 60;
  const minutes = Math.floor(diff / 60) % 60;
  const hours = Math.floor(diff / 3600) % 24;
  const days = Math.floor(diff / 86400);

  return (
    <div className="countdown">
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
    </div>
  );
}
