import React, { useCallback, useEffect, useState } from "react";
import { nextEventDate } from "../utils/events";
import Countdown from "./Countdown";

type Props = {
  isDark?: boolean;
};

export default function Reminder(props: Props) {
  const [tel, setTel] = useState("");
  const [set, setSet] = useState(false);

  useEffect(() => {
    setSet(Boolean(localStorage.getItem("reminder")));
  }, []);

  const onClick = useCallback(async () => {
    const normalizedTel = tel.replace(/\D/g, "");
    if (normalizedTel.length > 5) {
      localStorage.setItem("reminder", tel);
      setSet(true);
      await fetch(`/api/reminder?tel=${normalizedTel}`);
    }
  }, [setSet, tel]);

  return (
    <>
      <p>
        Kommt das Geld für unsere Veranstaltung zusammen, übertragen wir die
        Konzerte frei für alle, im Livestream auf dieser Webseite und Facebook.
      </p>
      <Countdown date={nextEventDate()} />
      <br />
      <div className={`reminder ${props.isDark ? "dark" : ""}`}>
        {!set ? (
          <div>
            <p>Lass dich per SMS an den Livestream erinnern</p>
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
