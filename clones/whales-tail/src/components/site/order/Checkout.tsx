"use client";

import Link from "next/link";
import { useState } from "react";
import { cartCount, cartSubtotal, formatPrice } from "@/lib/cart-store";
import { ChevronDownIcon, LockIcon, TagIcon } from "../Icons";
import { useSite } from "../SiteProvider";
import s from "./Checkout.module.css";

/** Wix checkout as the demo shows it: online payments are not accepted. */
export function Checkout() {
  const { cart } = useSite();
  const [summaryOpen, setSummaryOpen] = useState(false);
  const count = cartCount(cart);
  const subtotal = cartSubtotal(cart);

  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.headerInner}>
          <p className={s.brand}>
            <Link href="/">The Whale&apos;s Tail</Link>
            <span>CHECKOUT</span>
          </p>
          <Link href="/" className={s.continue}>
            Continue Browsing
          </Link>
        </div>
      </header>
      <button type="button" className={s.summaryToggle} aria-expanded={summaryOpen} onClick={() => setSummaryOpen((o) => !o)}>
        <span>
          {summaryOpen ? "Hide summary" : "Show summary"}
          <ChevronDownIcon data-open={summaryOpen ? "true" : undefined} />
        </span>
        <span>{formatPrice(subtotal)}</span>
      </button>
      <div className={s.body}>
        <section className={s.notice}>
          <svg viewBox="0 0 28 28" className={s.noticeIcon} aria-hidden="true">
            <circle cx="14" cy="14" r="9.5" fill="none" stroke="currentColor" />
            <path d="M10.8 10.8l6.4 6.4M17.2 10.8l-6.4 6.4" stroke="currentColor" />
          </svg>
          <h1 className={s.noticeTitle}>We can’t accept online payments</h1>
          <p className={s.noticeText}>Contact us for help with your order.</p>
          <p className={s.localNote}>Checkout is not connected in this local clone.</p>
        </section>
        <aside className={s.summary} data-open={summaryOpen ? "true" : undefined}>
          <div className={s.summaryHead}>
            <h2>
              Order summary <span>({count} {count === 1 ? "item" : "items"})</span>
            </h2>
            <Link href="/cart-page" className={s.edit} aria-label="Edit cart">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M17.85 3.15a2 2 0 0 1 2.83 2.83L8.4 18.25 4 19.5l1.25-4.4L17.85 3.15Zm-.7 1.41L6.13 15.6l-.7 2.47 2.47-.7L18.97 6.3a1 1 0 0 0-1.41-1.41l-.41-.33Z"
                />
              </svg>
            </Link>
          </div>
          <ul className={s.items}>
            {cart.lines.map((line) => (
              <li key={line.key}>
                <span className={s.thumbWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- order thumbnail */}
                  <img src={line.image} alt="" />
                  <span className={s.badge}>{line.qty}</span>
                </span>
                <span className={s.itemName}>
                  {line.name}
                  {line.variant ? <small>{line.variant}</small> : null}
                </span>
                <span>{formatPrice(line.qty * line.unitPrice)}</span>
              </li>
            ))}
          </ul>
          <div className={s.promo}>
            <TagIcon />
            <span>Enter a promo code</span>
          </div>
          <dl className={s.rows}>
            <div>
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div>
              <dt>{cart.fulfillment.method === "delivery" ? "Delivery" : "Pickup"}</dt>
              <dd>Free</dd>
            </div>
            <div className={s.totalRow}>
              <dt>Total</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
          </dl>
        </aside>
      </div>
      <footer className={s.footer}>
        <p>
          <LockIcon />
          Secure Checkout
        </p>
      </footer>
    </div>
  );
}
