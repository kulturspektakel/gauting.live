import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { fetchNextEvent } from "../pages/api/nextEvent";
import Countdown from "./Countdown";

type Props = {
  isDark?: boolean;
};

export default function Reminder(props: Props) {
  const [tel, setTel] = useState("");
  const [set, setSet] = useState(false);
  const { data: nextEvent } = useSWR<Await<ReturnType<typeof fetchNextEvent>>>(
    "/api/nextEvent"
  );

  useEffect(() => {
    setSet(Boolean(localStorage.getItem("reminder")));
  }, []);

  const onClick = useCallback(async () => {
    if (tel.length > 5) {
      localStorage.setItem("reminder", tel);
      setSet(true);
      await fetch(`/api/reminder?tel=${tel}`);
    }
  }, [setSet, tel]);

  return (
    <>
      <p>
        Alle Livestreams werden kostenlos für alle zugänglich aus dem Bosco auf
        dieser Seite und Facebook übertragen. Noch&hellip;
      </p>
      <Countdown date={new Date(nextEvent?.data?.planned_start_time ?? 0)} />
      <br />
      {nextEvent?.data?.title && (
        <>
          &hellip;bis <strong>&bdquo;{nextEvent?.data?.title}&rdquo;</strong>{" "}
          beginnt.
        </>
      )}
      <div className={`reminder ${props.isDark ? "dark" : ""}`}>
        {!set ? (
          <div>
            <p>Per SMS an den Livestream erinnern lassen:</p>
            <div className="form">
              <input
                type="tel"
                name="tel"
                id="tel"
                autoComplete="tel"
                placeholder="Handynummer"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <button onClick={onClick}>Erinner' mich</button>
            </div>
          </div>
        ) : (
          <div className="set">
            <img src="/alarm-bell-check.svg" />
            Du wirst per SMS erinnert, wenn unser Livestream startet.
          </div>
        )}
      </div>
    </>
  );
}
