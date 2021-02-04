import { isBefore, differenceInMinutes } from "date-fns";

const EVENTS = [
  new Date("2021-02-12T20:00:00+01:00"),
  new Date("2021-02-13T16:00:00+01:00"),
  new Date("2021-02-26T20:00:00+01:00"),
  new Date("2021-03-12T20:00:00+01:00"),
  new Date("2021-03-26T20:00:00+01:00"),
];

export function nextEventDate(): Date {
  const i = EVENTS.findIndex((e) => isBefore(e, new Date())) + 1;
  return EVENTS[i];
}

export function nearestEventDate(): Date {
  const now = new Date();
  const i = EVENTS.findIndex((e) => Math.abs(differenceInMinutes(e, now)) < 30);
  return EVENTS[i];
}
