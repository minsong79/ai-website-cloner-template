"use client";

import { useState } from "react";
import { PARTY_SIZES, TIME_OPTIONS } from "@/lib/reservations";
import { CloseThinIcon } from "../Icons";
import { Portal, useOverlay } from "../layout/Overlays";
import { DatePicker, Dropdown } from "./Fields";
import s from "./Reservation.module.css";

/** The demo's reservation step: online booking is switched off, so Wix shows this notice. */
export function UnavailableDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  useOverlay(open, onClose);
  if (!open) return null;
  return (
    <Portal>
      <div className={s.overlay} onClick={onClose}>
        <div className={s.dialog} role="dialog" aria-modal="true" aria-labelledby="res-unavailable" onClick={(e) => e.stopPropagation()}>
          <button type="button" className={s.dialogClose} aria-label="Close" onClick={onClose}>
            <CloseThinIcon />
          </button>
          <h2 id="res-unavailable" className={s.dialogTitle}>
            Online reservations are currently unavailable
          </h2>
          <p className={s.dialogText}>To make a reservation, contact us directly by phone.</p>
          <button type="button" className={s.dialogButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Portal>
  );
}

export function useReservationState() {
  const [party, setParty] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(TIME_OPTIONS[0].value);
  return { party, setParty, date, setDate, time, setTime };
}

export function ReservationFields({ state }: { state: ReturnType<typeof useReservationState> }) {
  return (
    <>
      <Dropdown label="Party size" value={state.party} options={PARTY_SIZES} onChange={state.setParty} />
      <DatePicker label="Date" value={state.date} onChange={state.setDate} />
      <Dropdown label="Time" value={state.time} options={TIME_OPTIONS} onChange={state.setTime} />
    </>
  );
}

/** Home page "Reserve a Table" add-on (light theme). */
export function ReserveTableWidget() {
  const state = useReservationState();
  const [open, setOpen] = useState(false);
  return (
    <div className={s.widget}>
      <h2 className={s.title}>Reserve a Table</h2>
      <p className={s.subtitle}>To help us find the best table for you, select the preferred party size, date, and time of your reservation.</p>
      <form
        className={s.form}
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <ReservationFields state={state} />
        <button type="submit" className={s.find}>
          Find a Table
        </button>
      </form>
      <UnavailableDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
