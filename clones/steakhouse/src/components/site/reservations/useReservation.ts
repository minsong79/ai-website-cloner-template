"use client";

import { useState, useSyncExternalStore } from "react";
import { TIME_OPTIONS } from "@/lib/site-data";
import { formatDate, startOfToday } from "./ReservationControls";

const noop = () => () => {};

/** Party size / date / time state. The date defaults to "today" on the client only (no SSR mismatch). */
export function useReservation() {
  const todayKey = useSyncExternalStore(
    noop,
    () => formatDate(startOfToday()),
    () => "",
  );
  const [party, setParty] = useState(2);
  const [picked, setPicked] = useState<Date | null>(null);
  const [time, setTime] = useState(TIME_OPTIONS[0]);

  let date: Date | null = picked;
  if (!date && todayKey) {
    const [mm, dd, yyyy] = todayKey.split("/").map(Number);
    date = new Date(yyyy, mm - 1, dd);
  }

  return { party, setParty, date, setDate: setPicked, time, setTime };
}
