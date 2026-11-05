"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { isoFromDate, toInputDate } from "@/lib/reservations";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ChevronDownIcon } from "../Icons";
import s from "./Fields.module.css";

type Option = { value: string; label: string };

function useClickOutside(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [open, close]);
  return ref;
}

/** Wix "core dropdown": a button with a listbox popover. */
export function Dropdown({ label, value, options, onChange }: { label: string; value: string; options: Option[]; onChange: (v: string) => void }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const ref = useClickOutside(open, () => setOpen(false));
  const listRef = useRef<HTMLUListElement>(null);
  const current = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLElement>('[data-active="true"]');
    el?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  const openList = () => {
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    setOpen(true);
  };
  const choose = (i: number) => {
    onChange(options[i].value);
    setOpen(false);
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openList();
      return;
    }
    if (!open) return;
    if (e.key === "Escape") setOpen(false);
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(options.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (active >= 0) choose(active);
    }
  };

  return (
    <div className={s.group}>
      <label className={s.label} id={`${id}-label`}>
        {label}
      </label>
      <div className={s.control} ref={ref}>
        <button
          type="button"
          className={`${s.field} ${s.dropdownField}`}
          data-open={open ? "true" : undefined}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label`}
          aria-controls={`${id}-list`}
          onClick={() => (open ? setOpen(false) : openList())}
          onKeyDown={onKeyDown}
        >
          <span className={s.value}>{current?.label}</span>
          <ChevronDownIcon className={s.suffix} />
        </button>
        {open ? (
          <ul className={s.list} role="listbox" id={`${id}-list`} ref={listRef} aria-labelledby={`${id}-label`}>
            {options.map((o, i) => (
              <li
                key={o.value}
                role="option"
                aria-selected={o.value === value}
                data-active={i === active ? "true" : undefined}
                className={s.option}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(i)}
              >
                {o.label}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

const noop = () => () => {};
let todayCache = "";
function getToday() {
  const now = isoFromDate(new Date());
  if (now !== todayCache) todayCache = now;
  return todayCache;
}

/** Today's date as YYYY-MM-DD on the client ("" while server rendering). */
export function useToday() {
  return useSyncExternalStore(noop, getToday, () => "");
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** Wix date picker: read-only input with a calendar popover; past days are disabled. */
export function DatePicker({ label, value, onChange }: { label: string; value: string; onChange: (iso: string) => void }) {
  const id = useId();
  const today = useToday();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<{ y: number; m: number } | null>(null);
  const ref = useClickOutside(open, () => setOpen(false));

  const base = value || today;
  const [by, bm] = base ? base.split("-").map(Number) : [2026, 11];
  const shown = view ?? { y: by, m: bm - 1 };
  const first = new Date(shown.y, shown.m, 1);
  const startOffset = first.getDay();
  const cells = Array.from({ length: 42 }, (_, i) => new Date(shown.y, shown.m, 1 - startOffset + i));

  const toggle = () => {
    setView(null);
    setOpen((o) => !o);
  };
  const shift = (delta: number) => {
    const d = new Date(shown.y, shown.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  };

  return (
    <div className={s.group}>
      <label className={s.label} htmlFor={`${id}-input`}>
        {label}
      </label>
      <div className={s.control} ref={ref}>
        <div className={`${s.field} ${s.dateField}`} data-open={open ? "true" : undefined}>
          <input
            id={`${id}-input`}
            className={s.dateInput}
            readOnly
            placeholder="MM/DD/YY"
            value={toInputDate(value || today)}
            onClick={toggle}
          />
          <button type="button" className={s.calendarButton} aria-label={label} aria-expanded={open} onClick={toggle}>
            <CalendarIcon />
          </button>
        </div>
        {open ? (
          <div className={s.calendar} role="dialog" aria-label="Choose date">
            <div className={s.calHead}>
              <button type="button" aria-label="Previous month" onClick={() => shift(-1)}>
                <ArrowLeftIcon />
              </button>
              <span>
                {MONTHS[shown.m]}&nbsp;&nbsp;{shown.y}
              </span>
              <button type="button" aria-label="Next month" onClick={() => shift(1)}>
                <ArrowRightIcon />
              </button>
            </div>
            <div className={s.calGrid}>
              {WEEKDAYS.map((d) => (
                <span key={d} className={s.weekday}>
                  {d}
                </span>
              ))}
              {cells.map((d) => {
                const iso = isoFromDate(d);
                const outside = d.getMonth() !== shown.m;
                const past = today !== "" && iso < today;
                const selected = iso === (value || today);
                return (
                  <button
                    key={iso}
                    type="button"
                    className={s.day}
                    disabled={past}
                    data-outside={outside ? "true" : undefined}
                    data-selected={selected ? "true" : undefined}
                    onClick={() => {
                      onChange(iso);
                      setOpen(false);
                    }}
                  >
                    <span>{d.getDate()}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
