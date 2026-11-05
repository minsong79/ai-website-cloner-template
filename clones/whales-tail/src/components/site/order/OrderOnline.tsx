"use client";

import { useEffect, useRef, useState } from "react";
import { cartCount, formatPrice } from "@/lib/cart-store";
import { MENU_DESCRIPTION, MENU_SECTIONS, type MenuItem, type MenuLabel } from "@/lib/menu";
import { ClockIcon, HotIcon, PinIcon, ScrollArrowIcon, VeganIcon } from "../Icons";
import { useSite } from "../SiteProvider";
import { FulfillmentModal } from "./FulfillmentModal";
import { ItemModal } from "./ItemModal";
import s from "./OrderOnline.module.css";

export function LabelIcon({ label, className }: { label: MenuLabel; className?: string }) {
  return label === "vegan" ? <VeganIcon className={className} aria-label="Vegan" /> : <HotIcon className={className} aria-label="Hot" />;
}

/** Wix Restaurants Online Orders page: fulfillment header, sticky section tabs, item cards. */
export function OrderOnline() {
  const { cart, setFulfillment, setSideCartOpen } = useSite();
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [fulfillmentOpen, setFulfillmentOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(MENU_SECTIONS[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const count = cartCount(cart);
  const method = cart.fulfillment.method;
  const when = cart.fulfillment.when === "later" && cart.fulfillment.date ? `${cart.fulfillment.date}, ${cart.fulfillment.time ?? ""}` : "Up to 30 minutes";

  const qtyFor = (id: string) => cart.lines.filter((l) => l.itemId === id).reduce((n, l) => n + l.qty, 0);

  // Highlight the tab of the section currently in view.
  useEffect(() => {
    const sections = MENU_SECTIONS.map((sec) => document.getElementById(`section-${sec.id}`)).filter((el): el is HTMLElement => Boolean(el));
    const onScroll = () => {
      const offset = (tabsRef.current?.getBoundingClientRect().height ?? 0) + 10;
      let current = MENU_SECTIONS[0].id;
      for (const el of sections) if (el.getBoundingClientRect().top - offset <= 1) current = el.id.replace("section-", "");
      setActiveTab(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (!el) return;
    const offset = tabsRef.current?.getBoundingClientRect().height ?? 0;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
  };

  return (
    <div className={s.frame}>
      <header className={s.head}>
        <h1 className={s.title}>Order Online</h1>
        <p className={s.intro}>You can order online! Browse our menu items and choose what you’d like to order from us.</p>
        <p className={s.pill}>
          <span className={s.dot} aria-hidden="true" />
          Accepting Orders
        </p>
        <div className={s.toggle} role="radiogroup" aria-label="Fulfillment method">
          <button
            type="button"
            role="radio"
            aria-checked={method === "pickup"}
            className={s.toggleButton}
            onClick={() => setFulfillment({ ...cart.fulfillment, method: "pickup" })}
          >
            Pickup
          </button>
          <button type="button" role="radio" aria-checked={method === "delivery"} className={s.toggleButton} onClick={() => setFulfillmentOpen(true)}>
            Delivery
          </button>
        </div>
        <div className={s.info}>
          <p className={s.infoItem}>
            <ClockIcon className={s.infoIcon} />
            <span>
              {method === "pickup" ? "Pickup" : "Delivery"} time: {when}
            </span>
            <button type="button" className={s.change} onClick={() => setFulfillmentOpen(true)}>
              Change
            </button>
          </p>
          <p className={s.infoItem}>
            <PinIcon className={s.infoIcon} />
            <span>{method === "pickup" ? "Pickup Address: San Francisco, CA" : `Delivery Address: ${cart.fulfillment.address || "—"}`}</span>
          </p>
        </div>
      </header>

      <div className={s.tabsBar} ref={tabsRef} data-cart={count > 0 ? "true" : undefined}>
        <div className={s.tabsScroller}>
          <span className={s.tabsArrow} aria-hidden="true">
            <ScrollArrowIcon />
          </span>
          <div className={s.tabs} role="tablist" aria-label="Menu sections">
            {MENU_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                role="tab"
                aria-selected={activeTab === sec.id}
                className={s.tab}
                onClick={() => goTo(sec.id)}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>
        {count > 0 ? (
          <div className={s.viewCartCell}>
            <button type="button" className={s.viewCart} onClick={() => setSideCartOpen(true)}>
              View Cart ({count})
            </button>
          </div>
        ) : null}
      </div>

      <div className={s.menu}>
        <h2 className={s.menuTitle}>Menu</h2>
        <p className={s.menuText}>{MENU_DESCRIPTION}</p>
        {MENU_SECTIONS.map((sec) => (
          <section key={sec.id} id={`section-${sec.id}`} className={s.section}>
            <h3 className={s.sectionTitle}>{sec.title}</h3>
            <p className={s.sectionText}>{sec.description}</p>
            <div className={s.cards}>
              {sec.items.map((item) => {
                const qty = qtyFor(item.id);
                return (
                  <button key={item.id} type="button" className={s.card} onClick={() => setActiveItem(item)}>
                    <span className={s.cardBody}>
                      <span className={s.cardName}>
                        {qty > 0 ? <span className={s.qtyBadge}>{qty}</span> : null}
                        {item.name}
                      </span>
                      <span className={s.cardDesc}>{item.description}</span>
                      {item.labels.length ? (
                        <span className={s.cardLabels}>
                          {item.labels.map((l) => (
                            <LabelIcon key={l} label={l} className={s.labelIcon} />
                          ))}
                        </span>
                      ) : null}
                      <span className={s.cardPrice}>{formatPrice(item.variants ? item.variants[0].price : item.price)}</span>
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element -- menu item photo */}
                    <img className={s.cardImage} src={item.image} alt="" loading="lazy" />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <ItemModal item={activeItem} onClose={() => setActiveItem(null)} />
      <FulfillmentModal open={fulfillmentOpen} onClose={() => setFulfillmentOpen(false)} />
    </div>
  );
}
