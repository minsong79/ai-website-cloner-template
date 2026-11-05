"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { CalendarIcon, ChevronDownIcon, ArrowLeftIcon, ArrowRightIcon } from "../icons";
import styles from "./ReservationControls.module.css";

export type ControlVariant = "home" | "page";

function useOutsideClose(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);
  return ref;
}

type DropdownProps<T extends string | number> = {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  variant: ControlVariant;
};

/** Wix TPA dropdown (combobox + listbox) used by Table Reservations. */
export function Dropdown<T extends string | number>({ label, value, options, onChange, variant }: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const ref = useOutsideClose(open, () => setOpen(false));
  const listRef = useRef<HTMLUListElement>(null);
  const current = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const sel = listRef.current.querySelector<HTMLElement>("[aria-selected='true']");
    sel?.scrollIntoView({ block: "nearest" });
    sel?.focus();
  }, [open]);

  const onListKey = (e: KeyboardEvent<HTMLUListElement>) => {
    const items = Array.from(listRef.current?.querySelectorAll<HTMLElement>("[role='option']") ?? []);
    const idx = items.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[Math.min(items.length - 1, idx + 1)]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      items[Math.max(0, idx - 1)]?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div className={styles.field} data-variant={variant} ref={ref}>
      <label className={styles.label} htmlFor={`${id}-btn`}>
        {label}
      </label>
      <button
        id={`${id}-btn`}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-controls={`${id}-list`}
        aria-label={label}
        className={styles.control}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.value}>{current?.label}</span>
        <ChevronDownIcon className={styles.chevron} data-open={open || undefined} />
      </button>
      {open && (
        <ul id={`${id}-list`} role="listbox" aria-label={label} className={styles.list} ref={listRef} onKeyDown={onListKey}>
          {options.map((o) => (
            <li
              key={String(o.value)}
              role="option"
              tabIndex={-1}
              aria-selected={o.value === value}
              className={styles.option}
              onClick={() => {
                onChange(o.value);
                setOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onChange(o.value);
                  setOpen(false);
                }
              }}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export function formatDate(d: Date): string {
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${mm}/${dd}/${d.getFullYear()}`;
}

type DatePickerProps = {
  label: string;
  value: Date | null;
  onChange: (d: Date) => void;
  variant: ControlVariant;
};

/** Date text field + month calendar popover; past days are disabled. */
export function DatePicker({ label, value, onChange, variant }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const ref = useOutsideClose(open, () => setOpen(false));
  const [view, setView] = useState<{ y: number; m: number } | null>(null);

  const today = value ? startOfToday() : null;
  const shown = view ?? (value ? { y: value.getFullYear(), m: value.getMonth() } : null);

  const toggle = () => {
    if (!open && value) setView({ y: value.getFullYear(), m: value.getMonth() });
    setOpen((v) => !v);
  };

  const cells: Date[] = [];
  if (shown) {
    const first = new Date(shown.y, shown.m, 1);
    const start = new Date(first);
    start.setDate(1 - first.getDay());
    for (let i = 0; i < 42; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      cells.push(d);
    }
  }

  const step = (delta: number) => {
    if (!shown) return;
    const d = new Date(shown.y, shown.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  };

  return (
    <div className={styles.field} data-variant={variant} ref={ref}>
      <label className={styles.label} htmlFor={`${id}-input`}>
        {label}
      </label>
      <div className={`${styles.control} ${styles.dateControl}`}>
        <input
          id={`${id}-input`}
          className={styles.dateInput}
          readOnly
          aria-label={label}
          value={value ? formatDate(value) : ""}
          onClick={toggle}
        />
        <button type="button" className={styles.calendarBtn} aria-label={label} aria-expanded={open} onClick={toggle}>
          <CalendarIcon />
        </button>
      </div>
      {open && shown && today && (
        <div className={styles.calendar} role="dialog" aria-label="Choose a date">
          <div className={styles.calHead}>
            <button type="button" className={styles.calArrow} aria-label="Previous month" onClick={() => step(-1)}>
              <ArrowLeftIcon />
            </button>
            <span className={styles.calMonth}>
              {MONTHS[shown.m]} {shown.y}
            </span>
            <button type="button" className={styles.calArrow} aria-label="Next month" onClick={() => step(1)}>
              <ArrowRightIcon />
            </button>
          </div>
          <div className={styles.calGrid} role="grid">
            {WEEKDAYS.map((w) => (
              <span key={w} className={styles.weekday} role="columnheader">
                {w}
              </span>
            ))}
            {cells.map((d) => {
              const outside = d.getMonth() !== shown.m;
              const past = d < today;
              const selected = !!value && d.getTime() === value.getTime();
              return (
                <button
                  key={d.toISOString()}
                  type="button"
                  role="gridcell"
                  className={styles.day}
                  data-muted={outside || past || undefined}
                  data-selected={selected || undefined}
                  disabled={past}
                  aria-label={d.toDateString()}
                  onClick={() => {
                    onChange(d);
                    setOpen(false);
                  }}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
