"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cartCount, cartSubtotal, formatPrice } from "@/lib/cart-store";
import { CloseThinIcon, TagIcon } from "../Icons";
import { Portal, useOverlay } from "../layout/Overlays";
import { useSite } from "../SiteProvider";
import { QtyCounter } from "./QtyCounter";
import s from "./SideCart.module.css";

/** Wix eCommerce side cart, opened from the header cart icon when the cart has items. */
export function SideCart() {
  const { cart, sideCartOpen, setSideCartOpen, setQty, removeLine } = useSite();
  const router = useRouter();
  const [promoOpen, setPromoOpen] = useState(false);
  const close = () => setSideCartOpen(false);
  useOverlay(sideCartOpen, close);
  if (!sideCartOpen) return null;
  const count = cartCount(cart);

  return (
    <Portal>
      <div className={s.overlay} onClick={close}>
        <aside className={s.panel} role="dialog" aria-modal="true" aria-label="Cart" onClick={(e) => e.stopPropagation()}>
          <div className={s.head}>
            <h2 className={s.title}>
              Cart <span>({count} {count === 1 ? "item" : "items"})</span>
            </h2>
            <button type="button" className={s.close} aria-label="Close" onClick={close}>
              <CloseThinIcon />
            </button>
          </div>
          <ul className={s.lines}>
            {cart.lines.length === 0 ? <li className={s.empty}>Cart is empty</li> : null}
            {cart.lines.map((line) => (
              <li key={line.key} className={s.line}>
                {/* eslint-disable-next-line @next/next/no-img-element -- cart thumbnail */}
                <img src={line.image} alt="" className={s.thumb} />
                <div className={s.lineBody}>
                  <p className={s.name}>{line.name}</p>
                  {line.variant ? <p className={s.variant}>{line.variant}</p> : null}
                  <div className={s.lineRow}>
                    <QtyCounter value={line.qty} onChange={(q) => setQty(line.key, q)} label={line.name} />
                    <span className={s.price}>{formatPrice(line.qty * line.unitPrice)}</span>
                  </div>
                </div>
                <button type="button" className={s.remove} aria-label={`Remove ${line.name}`} onClick={() => removeLine(line.key)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M13.5,3 C14.327,3 15,3.673 15,4.5 L15,5 L19,5 L19,6 L18,6 L18,17.5 C18,18.879 16.878,20 15.5,20 L7.5,20 C6.122,20 5,18.879 5,17.5 L5,6 L4,6 L4,5 L8,5 L8,4.5 C8,3.673 8.673,3 9.5,3 Z M17,6 L6,6 L6,17.5 C6,18.327 6.673,19 7.5,19 L15.5,19 C16.327,19 17,18.327 17,17.5 Z M10,9 L10,16 L9,16 L9,9 Z M14,9 L14,16 L13,16 L13,9 Z M13.5,4 L9.5,4 C9.224,4 9,4.225 9,4.5 L9,5 L14,5 L14,4.5 C14,4.225 13.776,4 13.5,4 Z"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <div className={s.foot}>
            <div className={s.promo}>
              <button type="button" className={s.promoToggle} onClick={() => setPromoOpen((o) => !o)}>
                <TagIcon />
                <span>Enter a promo code</span>
              </button>
              {promoOpen ? (
                <form
                  className={s.promoForm}
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input className={s.promoInput} placeholder="e.g., SAVE50" aria-label="Promo code" />
                  <button type="submit" className={s.promoApply}>
                    Apply
                  </button>
                </form>
              ) : null}
            </div>
            <div className={s.total}>
              <span>Estimated total</span>
              <span>{formatPrice(cartSubtotal(cart))}</span>
            </div>
            <button
              type="button"
              className={s.button}
              onClick={() => {
                close();
                router.push("/checkout");
              }}
            >
              Checkout
            </button>
            <Link href="/cart-page" className={`${s.button} ${s.viewCart}`} onClick={close}>
              View Cart
            </Link>
          </div>
        </aside>
      </div>
    </Portal>
  );
}
