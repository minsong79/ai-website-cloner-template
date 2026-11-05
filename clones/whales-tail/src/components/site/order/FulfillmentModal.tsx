"use client";

import { useState } from "react";
import { CloseThinIcon } from "../Icons";
import { Portal, useOverlay } from "../layout/Overlays";
import { useSite } from "../SiteProvider";
import s from "./ItemModal.module.css";

/** "How would you like to receive your order?" dialog (Pickup / Delivery, when). */
export function FulfillmentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useOverlay(open, onClose);
  if (!open) return null;
  return (
    <Portal>
      <FulfillmentDialog onClose={onClose} />
    </Portal>
  );
}

function FulfillmentDialog({ onClose }: { onClose: () => void }) {
  const { cart, setFulfillment } = useSite();
  const [method, setMethod] = useState(cart.fulfillment.method);
  const [address, setAddress] = useState(cart.fulfillment.address);
  const [when, setWhen] = useState(cart.fulfillment.when);
  const [date, setDate] = useState(cart.fulfillment.date ?? "");
  const [time, setTime] = useState(cart.fulfillment.time ?? "");
  const canSave = method === "pickup" ? when === "asap" || Boolean(date && time) : address.trim().length > 3;

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={`${s.dialog} ${s.small}`} role="dialog" aria-modal="true" aria-labelledby="ff-title" onClick={(e) => e.stopPropagation()}>
        <div className={s.smallBody}>
          <h2 id="ff-title" className={s.smallTitle}>
            How would you like to receive your order?
          </h2>
          <div className={s.methods} role="radiogroup" aria-label="Fulfillment method">
            {(["pickup", "delivery"] as const).map((m) => (
              <button key={m} type="button" role="radio" aria-checked={method === m} className={s.method} onClick={() => setMethod(m)}>
                {m === "pickup" ? "Pickup" : "Delivery"}
              </button>
            ))}
          </div>
          {method === "pickup" ? (
            <>
              <p className={s.smallLabel}>Pickup from:</p>
              <p className={s.smallValue}>San Francisco, CA, USA</p>
              <p className={s.smallLabel}>When:</p>
              <label className={s.radio}>
                <input type="radio" name="when" checked={when === "asap"} onChange={() => setWhen("asap")} />
                <span className={s.radioMark} aria-hidden="true" />
                <span>Up to 30 minutes</span>
              </label>
              <label className={s.radio}>
                <input type="radio" name="when" checked={when === "later"} onChange={() => setWhen("later")} />
                <span className={s.radioMark} aria-hidden="true" />
                <span>Schedule for later</span>
              </label>
              {when === "later" ? (
                <div className={s.schedule}>
                  <label>
                    <span className={s.smallLabel}>Date</span>
                    <input type="date" className={s.input} value={date} onChange={(e) => setDate(e.target.value)} />
                  </label>
                  <label>
                    <span className={s.smallLabel}>Time</span>
                    <input type="time" className={s.input} value={time} onChange={(e) => setTime(e.target.value)} />
                  </label>
                </div>
              ) : null}
            </>
          ) : (
            <>
              <label className={s.smallLabel} htmlFor="ff-address">
                Deliver to:
              </label>
              <input
                id="ff-address"
                className={s.input}
                placeholder="Type in your delivery address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </>
          )}
        </div>
        <div className={s.smallFooter}>
          <button
            type="button"
            className={s.save}
            disabled={!canSave}
            onClick={() => {
              setFulfillment({ method, address, when, date, time });
              onClose();
            }}
          >
            Save
          </button>
        </div>
        <button type="button" className={s.smallClose} aria-label="Close" onClick={onClose}>
          <CloseThinIcon />
        </button>
      </div>
    </div>
  );
}
