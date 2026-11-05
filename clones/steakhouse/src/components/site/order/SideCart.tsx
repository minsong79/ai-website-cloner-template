"use client";

import Link from "next/link";
import { cartCount, cartTotal, useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/site-data";
import { closeOverlay, openOverlay, useUI } from "@/lib/ui-store";
import { Modal } from "../Modal";
import { LockIcon, ThinCloseIcon } from "../icons";
import { CartLineItem } from "./CartLineItem";
import { PromoCode } from "./PromoCode";
import styles from "./SideCart.module.css";

/** Wix eCommerce side cart (desktop "View Cart" on Order Online). */
export function SideCart() {
  const { overlay } = useUI();
  const cart = useCart();
  const count = cartCount(cart);

  return (
    <Modal open={overlay === "side-cart"} onClose={closeOverlay} backdrop="photo-light" label="Side cart">
      <main className={styles.panel} aria-label="Side cart">
        <div className={styles.top}>
          <header className={styles.header}>
            <h2 className={`${styles.title} lulo`}>Cart</h2>
            <span className={styles.count}>({count === 1 ? "1 item" : `${count} items`})</span>
            <button type="button" className={styles.close} aria-label="Close cart" onClick={closeOverlay}>
              <ThinCloseIcon />
            </button>
          </header>
          {cart.lines.length === 0 ? (
            <p className={styles.empty}>Cart is empty</p>
          ) : (
            <ul className={styles.lines}>
              {cart.lines.map((line) => (
                <CartLineItem key={line.key} line={line} variant="side" />
              ))}
            </ul>
          )}
        </div>
        <div className={styles.promoRow}>
          <PromoCode />
        </div>
        <section className={styles.footer}>
          <div className={styles.totalRow}>
            <h3 className={styles.totalLabel}>Estimated total</h3>
            <span className={styles.totalValue}>{formatPrice(cartTotal(cart))}</span>
          </div>
          <p className={styles.disclaimer}>Taxes and shipping are calculated at checkout.</p>
          <button type="button" className={styles.checkout} onClick={() => openOverlay("checkout-notice")}>
            Checkout
          </button>
          <Link href="/cart-page" className={styles.viewCart} onClick={closeOverlay}>
            View Cart
          </Link>
          <p className={styles.secure}>
            <LockIcon className={styles.lock} />
            Secure Checkout
          </p>
        </section>
      </main>
    </Modal>
  );
}
