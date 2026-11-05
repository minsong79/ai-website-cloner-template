"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cartCount, itemQuantity, useCart } from "@/lib/cart-store";
import { MENU_NAME, MENU_SECTIONS, formatPrice, type MenuItem } from "@/lib/site-data";
import { openOverlay } from "@/lib/ui-store";
import { ClockIcon, PinIcon, ScrollChevronIcon } from "../icons";
import { FulfillmentModal } from "./FulfillmentModal";
import { ItemModal } from "./ItemModal";
import styles from "./OrderOnlinePage.module.css";

function stickyOffset(): number {
  const header = document.getElementById("site-header");
  const headerH = header && getComputedStyle(header).position === "sticky" ? header.offsetHeight : 0;
  const tabs = document.getElementById("order-tabs");
  return headerH + (tabs ? tabs.offsetHeight : 0);
}

/** Wix Online Orders: header, fulfillment, sticky section tabs, item cards, item modal, cart entry points. */
export function OrderOnlinePage() {
  const cart = useCart();
  const count = cartCount(cart);
  const [item, setItem] = useState<MenuItem | null>(null);
  const [fulfillmentOpen, setFulfillmentOpen] = useState<"pickup" | "delivery" | null>(null);
  const [active, setActive] = useState(MENU_SECTIONS[0].id);
  const delivery = cart.fulfillment.method === "delivery";

  useEffect(() => {
    const onScroll = () => {
      const offset = stickyOffset() + 2;
      let current = MENU_SECTIONS[0].id;
      for (const s of MENU_SECTIONS) {
        const el = document.getElementById(`section-${s.id}`);
        if (el && el.getBoundingClientRect().top <= offset) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - stickyOffset();
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/images/order-online-hero-steak.jpg" alt="" />
      </div>
      <div className={styles.inner}>
        <h1 className={`${styles.title} lulo`}>ORDER ONLINE</h1>
        <p className={styles.intro}>You can order online! Browse our menu items and choose what you&rsquo;d like to order from us.</p>
        <p className={styles.chip}>
          <span className={styles.dot} aria-hidden="true" />
          Accepting Orders
        </p>
        <div className={styles.toggle} role="radiogroup" aria-label="Fulfillment method">
          <button type="button" role="radio" aria-checked={!delivery} onClick={() => {
              if (delivery) setFulfillmentOpen("pickup");
            }}>
            Pickup
          </button>
          <button type="button" role="radio" aria-checked={delivery} onClick={() => setFulfillmentOpen("delivery")}>
            Delivery
          </button>
        </div>
        <div className={styles.info}>
          <p className={styles.infoItem}>
            <ClockIcon className={styles.infoIcon} />
            <span>{delivery ? "Delivery time: Up to 30 minutes" : "Pickup time: Up to 30 minutes"}</span>
            <button type="button" className={styles.change} onClick={() => setFulfillmentOpen(cart.fulfillment.method)}>
              Change
            </button>
          </p>
          <p className={styles.infoItem}>
            <PinIcon className={styles.pinIcon} />
            <span>{delivery ? `Delivery Address: ${cart.fulfillment.address}` : "Pickup Address: San Francisco, CA"}</span>
          </p>
        </div>
      </div>

      <div id="order-tabs" className={styles.tabsBar}>
        <div className={styles.tabsInner}>
          <nav className={styles.tabs} aria-label="Menu sections">
            {MENU_SECTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={styles.tab}
                aria-current={active === s.id ? "true" : undefined}
                onClick={() => goTo(s.id)}
              >
                {s.name}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className={styles.tabsNext}
            aria-label="scroll"
            onClick={() => goTo(MENU_SECTIONS[MENU_SECTIONS.length - 1].id)}
          >
            <ScrollChevronIcon />
          </button>
          <button
            type="button"
            className={styles.viewCart}
            data-visible={count > 0 || undefined}
            tabIndex={count > 0 ? 0 : -1}
            onClick={() => openOverlay("side-cart")}
          >
            View Cart ({count})
          </button>
        </div>
      </div>

      <div className={styles.inner}>
        <h2 className={`${styles.menuName} lulo`}>{MENU_NAME}</h2>
        <hr className={styles.menuLine} />
        {MENU_SECTIONS.map((section) => (
          <div key={section.id} id={`section-${section.id}`} className={styles.section}>
            <h2 className={`${styles.sectionName} lulo`}>{section.name}</h2>
            <p className={styles.sectionDesc}>{section.description}</p>
            <ul className={styles.grid}>
              {section.items.map((it) => {
                const q = itemQuantity(cart, it.id);
                return (
                  <li key={it.id}>
                    <button type="button" className={styles.card} onClick={() => setItem(it)}>
                      <span className={styles.cardName}>
                        {q > 0 && <span className={styles.badge}>{q}</span>}
                        <span className={`${styles.cardNameText} lulo`}>{it.name}</span>
                      </span>
                      <span className={styles.cardDesc}>{it.description}</span>
                      <span className={styles.cardPrice}>{formatPrice(it.price)}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {count > 0 && (
        <Link href="/cart-page" className={styles.mobileCart}>
          <span>View Cart ({count})</span>
        </Link>
      )}

      <ItemModal item={item} onClose={() => setItem(null)} />
      <FulfillmentModal
        open={fulfillmentOpen !== null}
        initial={{ method: fulfillmentOpen ?? cart.fulfillment.method, address: cart.fulfillment.address }}
        onClose={() => setFulfillmentOpen(null)}
      />
    </section>
  );
}
