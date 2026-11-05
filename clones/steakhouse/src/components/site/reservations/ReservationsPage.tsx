"use client";

import Link from "next/link";
import { useState } from "react";
import { PARTY_SIZES, TIME_OPTIONS, partyLabel } from "@/lib/site-data";
import { UNAVAILABLE_BODY, UNAVAILABLE_TITLE } from "../home/HomeReservation";
import { ChevronRightIcon } from "../icons";
import { NoticeModal } from "../NoticeModal";
import { DatePicker, Dropdown } from "./ReservationControls";
import { useReservation } from "./useReservation";
import styles from "./ReservationsPage.module.css";

const SLOT_COUNT = 15;

/** Table Reservations page: party/date/time, 15 time slots, Reserve Now (shows the source's notice). */
export function ReservationsPage() {
  const r = useReservation();
  const [notice, setNotice] = useState(false);
  const startIndex = Math.min(TIME_OPTIONS.indexOf(r.time), TIME_OPTIONS.length - SLOT_COUNT);
  const [slot, setSlot] = useState<string | null>(null);
  const slots = TIME_OPTIONS.slice(Math.max(0, startIndex), Math.max(0, startIndex) + SLOT_COUNT);
  const selected = slot && slots.includes(slot) ? slot : r.time;

  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <nav className={styles.crumbs} aria-label="Breadcrumbs">
          <Link href="/">Home</Link>
          <ChevronRightIcon className={styles.crumbIcon} />
          <span aria-current="page">RESERVATIONS</span>
        </nav>
        <h1 className={`${styles.title} lulo`}>Make a reservation</h1>
        <p className={styles.text}>
          To help us find the best table for you, select the preferred party size, date, and time of your reservation.
        </p>
        <div className={styles.controls}>
          <Dropdown
            label="Party size"
            variant="page"
            value={r.party}
            onChange={r.setParty}
            options={PARTY_SIZES.map((n) => ({ value: n, label: partyLabel(n) }))}
          />
          <DatePicker label="Date" variant="page" value={r.date} onChange={r.setDate} />
          <Dropdown
            label="Time"
            variant="page"
            value={r.time}
            onChange={(t) => {
              r.setTime(t);
              setSlot(null);
            }}
            options={TIME_OPTIONS.map((t) => ({ value: t, label: t }))}
          />
        </div>
        <hr className={styles.divider} />
        <fieldset className={styles.slots}>
          <legend className={styles.legend}>Choose an available time slot:</legend>
          <div className={styles.slotGrid}>
            {slots.map((t) => (
              <button
                key={t}
                type="button"
                className={styles.slot}
                aria-pressed={selected === t}
                onClick={() => setSlot(t)}
              >
                <time>{t}</time>
              </button>
            ))}
          </div>
        </fieldset>
        <button type="button" className={styles.reserve} onClick={() => setNotice(true)}>
          Reserve Now
        </button>
      </div>
      <NoticeModal open={notice} onClose={() => setNotice(false)} title={UNAVAILABLE_TITLE} body={UNAVAILABLE_BODY} />
    </section>
  );
}
