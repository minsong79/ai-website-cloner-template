"use client";

import Link from "next/link";
import { useState } from "react";
import { slotsFor } from "@/lib/reservations";
import { BreadcrumbChevronIcon } from "../Icons";
import { ReservationFields, UnavailableDialog, useReservationState } from "./Reservation";
import s from "./ReservationPage.module.css";

/** Wix Table Reservations page: party/date/time, a slot grid and "Reserve Now". */
export function ReservationPage() {
  const state = useReservationState();
  const slots = slotsFor(state.time);
  const [picked, setPicked] = useState<string | null>(null);
  const selected = picked && slots.includes(picked) ? picked : state.time;
  const [open, setOpen] = useState(false);

  return (
    <div className={s.root}>
      <nav className={s.crumbs} aria-label="Breadcrumbs">
        <Link href="/">Home</Link>
        <BreadcrumbChevronIcon className={s.crumbIcon} />
        <span aria-current="page">Reservations</span>
      </nav>
      <h1 className={s.title}>Make a reservation</h1>
      <p className={s.subtitle}>To help us find the best table for you, select the preferred party size, date, and time of your reservation.</p>
      <div className={s.fields}>
        <ReservationFields
          state={{
            ...state,
            setTime: (t: string) => {
              state.setTime(t);
              setPicked(null);
            },
          }}
        />
      </div>
      <hr className={s.rule} />
      <fieldset className={s.slots}>
        <legend className={s.legend}>Choose an available time slot:</legend>
        <div className={s.grid}>
          {slots.map((slot) => (
            <label key={slot} className={s.slot} data-selected={slot === selected ? "true" : undefined}>
              <input type="radio" name="time-slots" value={slot} checked={slot === selected} onChange={() => setPicked(slot)} />
              <time>{slot}</time>
            </label>
          ))}
        </div>
      </fieldset>
      <button type="button" className={s.reserve} onClick={() => setOpen(true)}>
        Reserve Now
      </button>
      <UnavailableDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
