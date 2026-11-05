"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/cart-store";
import { LABEL_NAMES, type MenuItem } from "@/lib/menu";
import { CloseBoldIcon, HotIcon, VeganIcon } from "../Icons";
import { Portal, useOverlay } from "../layout/Overlays";
import { useSite } from "../SiteProvider";
import { QtyCounter } from "./QtyCounter";
import s from "./ItemModal.module.css";

/** Online Orders item dialog: options, notes, quantity and "Add to cart | $price". */
export function ItemModal({ item, onClose }: { item: MenuItem | null; onClose: () => void }) {
  useOverlay(Boolean(item), onClose);
  if (!item) return null;
  return (
    <Portal>
      <ItemDialog key={item.id} item={item} onClose={onClose} />
    </Portal>
  );
}

function ItemDialog({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const { addLine } = useSite();
  const [variant, setVariant] = useState(item.variants?.[0].id ?? "");
  const [notes, setNotes] = useState("");
  const [qty, setQty] = useState(1);
  const chosen = item.variants?.find((v) => v.id === variant);
  const unit = chosen ? chosen.price : item.price;

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.dialog} role="dialog" aria-modal="true" aria-labelledby="item-title" onClick={(e) => e.stopPropagation()}>
        <div className={s.scroll}>
          {/* eslint-disable-next-line @next/next/no-img-element -- menu item photo */}
          <img className={s.image} src={item.image} alt="" />
          <div className={s.body}>
            <h2 id="item-title" className={s.name}>
              {item.name}
            </h2>
            <p className={s.desc}>{item.description}</p>
            {item.labels.length ? (
              <ul className={s.labels}>
                {item.labels.map((l) => (
                  <li key={l}>
                    {l === "vegan" ? <VeganIcon /> : <HotIcon />}
                    <span>{LABEL_NAMES[l]}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {item.variants ? (
              <fieldset className={s.options}>
                <legend>
                  Choose one <span>*</span>
                </legend>
                {item.variants.map((v) => (
                  <label key={v.id} className={s.radio}>
                    <input type="radio" name="variant" checked={variant === v.id} onChange={() => setVariant(v.id)} />
                    <span className={s.radioMark} aria-hidden="true" />
                    <span>
                      {v.name} ({formatPrice(v.price)})
                    </span>
                  </label>
                ))}
              </fieldset>
            ) : null}
            <label className={s.fieldLabel} htmlFor="item-notes">
              Important notes
            </label>
            <textarea
              id="item-notes"
              className={s.notes}
              placeholder="Add allergies or other notes..."
              value={notes}
              maxLength={250}
              onChange={(e) => setNotes(e.target.value)}
            />
            <p className={s.fieldLabel}>Quantity</p>
            <QtyCounter className={s.counter} value={qty} onChange={setQty} label={item.name} />
          </div>
        </div>
        <div className={s.footer}>
          <button
            type="button"
            className={s.add}
            onClick={() => {
              addLine({
                itemId: item.id,
                name: item.name,
                image: item.image,
                unitPrice: unit,
                variant: chosen?.name,
                notes: notes.trim() || undefined,
                qty,
              });
              onClose();
            }}
          >
            Add to cart | {formatPrice(unit * qty)}
          </button>
        </div>
        <button type="button" className={s.close} aria-label="Close" onClick={onClose}>
          <CloseBoldIcon />
        </button>
      </div>
    </div>
  );
}
