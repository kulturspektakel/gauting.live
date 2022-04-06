import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import DonateNow from "./Donate";
import Link from "next/link";
import formatCurrency from "../utils/formatCurrency";
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Bar(props: { goals: number[] }) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { data } = useSWR(
    "https://api.betterplace.org/de/api_v4/projects/108338.json",
    fetcher,
    {
      refreshInterval: 30000,
      suspense: true,
    }
  );

  const totalAmount = data.donated_amount_in_cents;
  const donationsCount = data.donations_count;

  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(visible || inView), [inView]);

  const finalGoal = props.goals[props.goals.length - 1];

  return (
    <main className="current bgcolor">
      <div className="container">
        <h2>
          <strong>{formatCurrency(totalAmount)}</strong> von {donationsCount}
          &nbsp;Spender*innen
        </h2>
        <div className="state">
          <span>{`${Math.floor((totalAmount / finalGoal) * 100)}%`}</span>
          <span>{formatCurrency(finalGoal, false)}</span>
        </div>
        <div className="bar" ref={ref}>
          <div
            className="fill"
            style={{
              width: `${Math.min(1, totalAmount / finalGoal) * 100}%`,
              transform: `scaleX(${visible ? 1 : 0})`,
            }}
          />

          {props.goals.map((goal, i) => (
            <Marker
              key={i}
              value={goal}
              finalGoal={finalGoal}
              current={totalAmount}
            />
          ))}
        </div>
        <DonateNow />
        <div className="wireTransfer">
          <Link href="/ueberweisung">oder per Überweisung spenden</Link>
        </div>
      </div>
    </main>
  );
}

function Marker(props: { value: number; finalGoal: number; current: number }) {
  return (
    <div
      className={`marker ${
        props.current > props.value ? "reached" : undefined
      }`}
      style={{ left: `${(props.value / props.finalGoal) * 100}%` }}
    >
      {formatCurrency(props.value, false)}
    </div>
  );
}
