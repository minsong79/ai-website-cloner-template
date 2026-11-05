"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart-store";
import { formatPrice, type MenuItem } from "@/lib/site-data";
import { Modal } from "../Modal";
import { MinusIcon, ModalCloseIcon, PlusIcon } from "../icons";
import styles from "./ItemModal.module.css";

type Props = {
  item: MenuItem | null;
  onClose: () => void;
};

/** Online Orders item details lightbox: notes, quantity, "Add to cart | $price". */
export function ItemModal({ item, onClose }: Props) {
  return (
    <Modal open={!!item} onClose={onClose} backdrop="photo-dark" label="Item Details">
      {item && <ItemBody key={item.id} item={item} onClose={onClose} />}
    </Modal>
  );
}

function ItemBody({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const [qty, setQty] = useState(1);
  const [notes, setNotes] = useState("");

  return (
    <div className={styles.card}>
      <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>
        <ModalCloseIcon />
      </button>
      <div className={styles.scroll}>
        <h2 className={`${styles.name} lulo`}>{item.name}</h2>
        <p className={styles.desc}>{item.description}</p>
        <label className={styles.label} htmlFor="item-notes">
          Important notes
        </label>
        <textarea
          id="item-notes"
          className={styles.notes}
          placeholder="Add allergies or other notes..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <p className={styles.qtyLabel}>Quantity</p>
        <div className={styles.stepper}>
          <button
            type="button"
            aria-label="decrease item quantity"
            disabled={qty <= 1}
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            <MinusIcon />
          </button>
          <input
            aria-label="Quantity"
            inputMode="numeric"
            value={qty}
            onChange={(e) => {
              const n = Number.parseInt(e.target.value, 10);
              setQty(Number.isFinite(n) ? Math.min(99, Math.max(1, n)) : 1);
            }}
          />
          <button type="button" aria-label="increase item quantity" onClick={() => setQty((q) => Math.min(99, q + 1))}>
            <PlusIcon />
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <button
          type="button"
          className={styles.add}
          onClick={() => {
            addToCart(item.id, qty, notes);
            onClose();
          }}
        >
          Add to cart | {formatPrice(item.price * qty)}
        </button>
      </div>
    </div>
  );
}
