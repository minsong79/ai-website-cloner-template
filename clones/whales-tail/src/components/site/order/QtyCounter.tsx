"use client";

import { MinusIcon, PlusIcon } from "../Icons";
import s from "./QtyCounter.module.css";

/** Wix quantity counter: − value + inside a 1px box. */
export function QtyCounter({
  value,
  onChange,
  label,
  min = 1,
  max = 99,
  className,
}: {
  value: number;
  onChange: (v: number) => void;
  label: string;
  min?: number;
  max?: number;
  className?: string;
}) {
  return (
    <div className={`${s.counter} ${className ?? ""}`} role="group" aria-label={`${label} quantity`}>
      <button type="button" aria-label="Decrease quantity" disabled={value <= min} onClick={() => onChange(value - 1)}>
        <MinusIcon />
      </button>
      <input
        aria-label="Quantity"
        inputMode="numeric"
        value={value}
        onChange={(e) => {
          const n = Number.parseInt(e.target.value, 10);
          if (!Number.isNaN(n)) onChange(Math.max(min, Math.min(max, n)));
        }}
      />
      <button type="button" aria-label="Increase quantity" disabled={value >= max} onClick={() => onChange(value + 1)}>
        <PlusIcon />
      </button>
    </div>
  );
}
