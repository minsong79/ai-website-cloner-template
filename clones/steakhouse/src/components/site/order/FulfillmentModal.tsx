"use client";

import { useState } from "react";
import { setFulfillment, type Fulfillment } from "@/lib/cart-store";
import { Modal } from "../Modal";
import { ThinCloseIcon } from "../icons";
import styles from "./FulfillmentModal.module.css";

type Props = {
  open: boolean;
  initial: Fulfillment;
  onClose: () => void;
};

/** "How would you like to receive your order?" — Pickup / Delivery (local state only). */
export function FulfillmentModal({ open, initial, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} backdrop="photo-dark" label="How would you like to receive your order?">
      {open && <Body initial={initial} onClose={onClose} />}
    </Modal>
  );
}

function Body({ initial, onClose }: { initial: Fulfillment; onClose: () => void }) {
  const [method, setMethod] = useState<Fulfillment["method"]>(initial.method);
  const [address, setAddress] = useState(initial.address);
  const canSave = method === "pickup" || address.trim().length > 0;

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <h2 className={`${styles.title} lulo`}>How would you like to receive your order?</h2>
        <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>
          <ThinCloseIcon />
        </button>
      </div>
      <div className={styles.toggle} role="radiogroup" aria-label="Fulfillment method">
        {(["pickup", "delivery"] as const).map((m) => (
          <button key={m} type="button" role="radio" aria-checked={method === m} onClick={() => setMethod(m)}>
            {m === "pickup" ? "Pickup" : "Delivery"}
          </button>
        ))}
      </div>
      {method === "delivery" ? (
        <label className={styles.field}>
          <span>Deliver to:</span>
          <input
            placeholder="Type in your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoComplete="street-address"
          />
        </label>
      ) : (
        <div className={styles.pickup}>
          <p>Pickup Address: San Francisco, CA</p>
          <p>Pickup time: Up to 30 minutes</p>
        </div>
      )}
      <div className={styles.footer}>
        <button
          type="button"
          className={styles.save}
          disabled={!canSave}
          onClick={() => {
            setFulfillment({ method, address: address.trim() });
            onClose();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
