import React from "react";

export default function SeasonBadge(props: { season: number }) {
  return (
    <span className={`seasonLabel season${props.season}`}>
      Staffel {props.season}
    </span>
  );
}
