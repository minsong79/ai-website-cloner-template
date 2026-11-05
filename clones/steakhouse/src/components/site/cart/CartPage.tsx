"use client";

import Link from "next/link";
import { useState } from "react";
import { cartTotal, useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/site-data";
import { openOverlay } from "@/lib/ui-store";
import { LockIcon, NoteIcon } from "../icons";
import { CartLineItem } from "../order/CartLineItem";
import { PromoCode } from "../order/PromoCode";
import styles from "./CartPage.module.css";

/** Wix eCommerce cart page ("My cart" + "Order summary"). Checkout shows a local notice. */
export function CartPage() {
  const cart = useCart();
  const [noteOpen, setNoteOpen] = useState(false);
  const [note, setNote] = useState("");
  const total = cartTotal(cart);
  const delivery = cart.fulfillment.method === "delivery";
  const empty = cart.lines.length === 0;

  const checkout = (
    <button type="button" className={styles.checkout} onClick={() => openOverlay("checkout-notice")}>
      Checkout
    </button>
  );

  return (
    <section className={styles.page}>
      <div className={styles.main} data-empty={empty || undefined}>
        {!empty && <div className={styles.mobileTopCheckout}>{checkout}</div>}
        <div className={styles.items}>
          <div className={styles.head}>
            <h1 className={styles.headline}>My cart</h1>
          </div>
          {empty ? (
            <div className={styles.empty}>
              <h2 className={styles.emptyTitle}>Cart is empty</h2>
              <Link href="/" className={styles.continue}>
                Continue Browsing
              </Link>
            </div>
          ) : (
            <>
              <ul className={styles.lines}>
                {cart.lines.map((line) => (
                  <CartLineItem key={line.key} line={line} variant="page" />
                ))}
              </ul>
              <div className={styles.extras}>
                <PromoCode />
                <div className={styles.note}>
                  <button type="button" className={styles.noteToggle} aria-expanded={noteOpen} onClick={() => setNoteOpen((v) => !v)}>
                    <NoteIcon className={styles.noteIcon} />
                    <span>Add a note</span>
                  </button>
                  {noteOpen && (
                    <textarea
                      className={styles.noteInput}
                      aria-label="Add a note"
                      placeholder="Instructions? Special requests? Add them here."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        {!empty && (
          <aside className={styles.summary} aria-label="Order summary">
            <h2 className={styles.summaryTitle}>Order summary</h2>
            <dl className={styles.rows}>
              <div className={styles.row}>
                <dt>Subtotal</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
              <div className={styles.row}>
                <dt>{delivery ? "Delivery" : "Pickup"}</dt>
                <dd>FREE</dd>
              </div>
            </dl>
            <div className={styles.total}>
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            {checkout}
            <p className={styles.secure}>
              <LockIcon className={styles.lock} />
              Secure Checkout
            </p>
          </aside>
        )}
      </div>
    </section>
  );
}
