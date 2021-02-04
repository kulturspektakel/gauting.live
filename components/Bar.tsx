import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import formatCurrency from "../utils/formatCurrency";

export default function Bar(props: {
  totalAmount: number;
  goals: number[];
  donationsCount: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(visible || inView), [inView]);

  const finalGoal = props.goals[props.goals.length - 1];

  return (
    <main className="current bgcolor">
      <div className="container">
        <h2>
          <strong>{formatCurrency(props.totalAmount)}</strong> von{" "}
          {props.donationsCount}&nbsp;Spender*innen
        </h2>
        <div className="state">
          <span>{`${Math.floor((props.totalAmount / finalGoal) * 100)}%`}</span>
          <span>{formatCurrency(finalGoal, false)}</span>
        </div>
        <div className="bar" ref={ref}>
          <div
            className="fill"
            style={{
              width: `${Math.min(1, props.totalAmount / finalGoal) * 100}%`,
              transform: `scaleX(${visible ? 1 : 0})`,
            }}
          />

          {props.goals.map((goal, i) => (
            <Marker
              key={i}
              value={goal}
              finalGoal={finalGoal}
              current={props.totalAmount}
            />
          ))}
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
