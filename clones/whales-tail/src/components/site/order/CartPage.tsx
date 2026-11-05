"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cartSubtotal, formatPrice } from "@/lib/cart-store";
import { LockIcon, NoteIcon, TagIcon, TrashIcon } from "../Icons";
import { useSite } from "../SiteProvider";
import { QtyCounter } from "./QtyCounter";
import s from "./CartPage.module.css";

/** Wix eCommerce cart page (empty state and line items with order summary). */
export function CartPage() {
  const { cart, setQty, removeLine, setNote } = useSite();
  const router = useRouter();
  const [promoOpen, setPromoOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const subtotal = cartSubtotal(cart);
  const empty = cart.lines.length === 0;

  if (empty) {
    return (
      <div className={s.page}>
        <div className={s.emptyBox}>
          <h1 className={s.title}>My cart</h1>
          <div className={s.emptyBody}>
            <h2 className={s.emptyTitle}>Cart is empty</h2>
            <Link href="/" className={s.continue}>
              Continue Browsing
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.page}>
      <div className={s.layout}>
        <div className={s.main}>
          <h1 className={s.title}>My cart</h1>
          <ul className={s.lines}>
            {cart.lines.map((line) => (
              <li key={line.key} className={s.line}>
                {/* eslint-disable-next-line @next/next/no-img-element -- cart thumbnail */}
                <img src={line.image} alt="" className={s.thumb} />
                <div className={s.lineInfo}>
                  <p className={s.name}>{line.name}</p>
                  {line.variant ? <p className={s.variant}>{line.variant}</p> : null}
                  {line.notes ? <p className={s.variant}>{line.notes}</p> : null}
                </div>
                <QtyCounter className={s.counter} value={line.qty} onChange={(q) => setQty(line.key, q)} label={line.name} />
                <p className={s.price}>{formatPrice(line.qty * line.unitPrice)}</p>
                <button type="button" className={s.remove} aria-label={`Remove ${line.name}`} onClick={() => removeLine(line.key)}>
                  <TrashIcon />
                </button>
              </li>
            ))}
          </ul>
          <div className={s.extras}>
            <button type="button" className={s.extra} onClick={() => setPromoOpen((o) => !o)}>
              <TagIcon />
              <span>Enter a promo code</span>
            </button>
            {promoOpen ? (
              <form className={s.promoForm} onSubmit={(e) => e.preventDefault()}>
                <input className={s.input} placeholder="e.g., SAVE50" aria-label="Promo code" />
                <button type="submit" className={s.apply}>
                  Apply
                </button>
              </form>
            ) : null}
            <button type="button" className={s.extra} onClick={() => setNoteOpen((o) => !o)}>
              <NoteIcon />
              <span>Add a note</span>
            </button>
            {noteOpen ? (
              <textarea
                className={s.note}
                placeholder="Instructions? Special requests? Add them here."
                aria-label="Note to the restaurant"
                value={cart.note}
                onChange={(e) => setNote(e.target.value)}
              />
            ) : null}
          </div>
        </div>
        <aside className={s.summary}>
          <h2 className={s.title}>Order summary</h2>
          <dl className={s.rows}>
            <div>
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div>
              <dt>{cart.fulfillment.method === "delivery" ? "Delivery" : "Pickup"}</dt>
              <dd>FREE</dd>
            </div>
          </dl>
          <div className={s.total}>
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <button type="button" className={s.checkout} onClick={() => router.push("/checkout")}>
            Checkout
          </button>
          <p className={s.secure}>
            <LockIcon />
            Secure Checkout
          </p>
        </aside>
      </div>
    </div>
  );
}
