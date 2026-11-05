"use client";

import { useState } from "react";
import { PARTY_SIZES, TIME_OPTIONS, partyLabel } from "@/lib/site-data";
import { NoticeModal } from "../NoticeModal";
import { DatePicker, Dropdown } from "../reservations/ReservationControls";
import { useReservation } from "../reservations/useReservation";
import styles from "./Home.module.css";

export const UNAVAILABLE_TITLE = "Online reservations are currently unavailable";
export const UNAVAILABLE_BODY = "To make a reservation, contact us directly by phone.";

/** Table Reservations add-on widget ("Make a reservation" strip on the home page). */
export function HomeReservation() {
  const r = useReservation();
  const [notice, setNotice] = useState(false);

  return (
    <div className={styles.resWidget} aria-label="Table Reservation" role="region">
      <h2 className={`${styles.resTitle} lulo`}>Make a reservation</h2>
      <p className={styles.resText}>
        To help us find the best table for you, select the preferred party size, date, and time of your reservation.
      </p>
      <form
        className={styles.resRow}
        onSubmit={(e) => {
          e.preventDefault();
          setNotice(true);
        }}
      >
        <Dropdown
          label="Party size"
          variant="home"
          value={r.party}
          onChange={r.setParty}
          options={PARTY_SIZES.map((n) => ({ value: n, label: partyLabel(n) }))}
        />
        <DatePicker label="Date" variant="home" value={r.date} onChange={r.setDate} />
        <Dropdown
          label="Time"
          variant="home"
          value={r.time}
          onChange={r.setTime}
          options={TIME_OPTIONS.map((t) => ({ value: t, label: t }))}
        />
        <button type="submit" className={styles.findTable}>
          Find a Table
        </button>
      </form>
      <NoticeModal open={notice} onClose={() => setNotice(false)} title={UNAVAILABLE_TITLE} body={UNAVAILABLE_BODY} />
    </div>
  );
}
