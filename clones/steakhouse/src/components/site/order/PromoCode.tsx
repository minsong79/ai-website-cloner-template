"use client";

import { useState } from "react";
import { TagIcon } from "../icons";
import styles from "./PromoCode.module.css";

/** "Enter a promo code" disclosure with input + Apply (validated locally only). */
export function PromoCode({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={`${styles.promo} ${className ?? ""}`}>
      <button type="button" className={styles.toggle} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <TagIcon className={styles.icon} />
        <span>Enter a promo code</span>
      </button>
      {open && (
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            if (!code.trim()) return;
            setMessage("Promo codes aren’t connected in this local clone.");
          }}
        >
          <input
            className={styles.input}
            placeholder="e.g., SAVE50"
            aria-label="Enter a promo code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setMessage("");
            }}
          />
          <button type="submit" className={styles.apply} disabled={!code.trim()}>
            Apply
          </button>
          {message && (
            <p className={styles.message} role="alert">
              {message}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
