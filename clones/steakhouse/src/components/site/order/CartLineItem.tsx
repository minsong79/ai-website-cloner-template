"use client";

import Link from "next/link";
import { removeLine, setLineQuantity, type CartLine } from "@/lib/cart-store";
import { formatPrice } from "@/lib/site-data";
import { MinusIcon, PlusIcon, TrashIcon } from "../icons";
import styles from "./CartLineItem.module.css";

type Props = {
  line: CartLine;
  variant: "side" | "page";
};

/** One cart line (Wix eCommerce cart): thumbnail, name, notes, stepper, price, remove. */
export function CartLineItem({ line, variant }: Props) {
  return (
    <li className={styles.row} data-variant={variant}>
      <Link href="/order-online" className={styles.thumb} aria-label={line.name}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/images/cart-item-placeholder.jpg" alt="" />
      </Link>
      <div className={styles.info}>
        <Link href="/order-online" className={styles.name}>
          {line.name}
        </Link>
        {line.notes && <p className={styles.notes}>Customer notes: {line.notes}</p>}
        <fieldset className={styles.qty}>
          <legend className="visually-hidden">Quantity</legend>
          <button
            type="button"
            aria-label="Remove one"
            disabled={line.quantity <= 1}
            onClick={() => setLineQuantity(line.key, line.quantity - 1)}
          >
            <MinusIcon />
          </button>
          <input
            aria-label="Choose quantity"
            inputMode="numeric"
            value={line.quantity}
            onChange={(e) => {
              const n = Number.parseInt(e.target.value, 10);
              if (Number.isFinite(n) && n > 0) setLineQuantity(line.key, n);
            }}
          />
          <button type="button" aria-label="Add one" onClick={() => setLineQuantity(line.key, line.quantity + 1)}>
            <PlusIcon />
          </button>
        </fieldset>
      </div>
      <div className={styles.price}>{formatPrice(line.price * line.quantity)}</div>
      <button
        type="button"
        className={styles.remove}
        aria-label={`remove ${line.name} from the cart`}
        onClick={() => removeLine(line.key)}
      >
        <TrashIcon />
      </button>
    </li>
  );
}
