"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { cartCount, useCart } from "@/lib/cart-store";
import { NAV_ITEMS, type NavItem } from "@/lib/site-data";
import { closeOverlay, openOverlay, useUI } from "@/lib/ui-store";
import { CartIcon } from "./icons";
import styles from "./Header.module.css";

type ActiveKey = "home" | "our-place" | "contact" | "/menu" | "/order-online" | "/reservations" | "none";

function itemKey(item: NavItem): ActiveKey {
  if (item.anchor) return item.anchor;
  if (item.href === "/") return "home";
  return item.href as ActiveKey;
}

function itemHref(item: NavItem) {
  return item.anchor ? `/#${item.anchor}` : item.href;
}

/** Smooth-scroll to a home-page anchor, compensating for the sticky desktop header. */
export function scrollToAnchor(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.getElementById("site-header");
  const sticky = header ? getComputedStyle(header).position === "sticky" : false;
  const offset = sticky && header ? header.offsetHeight : 0;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

function useActiveKey(pathname: string): ActiveKey {
  const [anchor, setAnchor] = useState<ActiveKey>("home");
  useEffect(() => {
    if (pathname !== "/") return;
    const update = () => {
      const header = document.getElementById("site-header");
      const offset = header && getComputedStyle(header).position === "sticky" ? header.offsetHeight : 0;
      let next: ActiveKey = "home";
      // Wix anchor menu: an anchor is current from the moment it reaches the header
      // until its section has scrolled out from under the header.
      for (const id of ["our-place", "contact"] as const) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - offset;
        const section = el.closest("section");
        const bottom = section ? section.getBoundingClientRect().bottom - offset : top + window.innerHeight;
        if (top <= 1 && bottom > 0) next = id;
      }
      // At the very bottom Wix selects its "bottom of page" anchor, which is not in the menu.
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY >= max - 1) next = "home";
      setAnchor(next);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);
  if (pathname === "/") return anchor;
  if (pathname.startsWith("/menu")) return "/menu";
  if (pathname.startsWith("/order-online")) return "/order-online";
  if (pathname.startsWith("/reservations")) return "/reservations";
  return "none";
}

export function Header() {
  const pathname = usePathname();
  const active = useActiveKey(pathname);
  const cart = useCart();
  const count = cartCount(cart);
  const { overlay } = useUI();
  const menuOpen = overlay === "mobile-menu";

  const onNavClick = (item: NavItem) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (menuOpen) closeOverlay();
    if (pathname !== "/") return;
    e.preventDefault();
    if (item.anchor) {
      scrollToAnchor(item.anchor);
      window.history.replaceState(null, "", `/#${item.anchor}`);
    } else if (item.href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
  };

  const mobileActive = pathname === "/" ? "home" : active;

  return (
    <>
      <header id="site-header" className={styles.header}>
        <div className={styles.stage}>
          <nav aria-label="Site" className={styles.nav}>
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <Link
                    href={itemHref(item)}
                    className={`${styles.navLink} lulo`}
                    data-active={active === itemKey(item) || undefined}
                    aria-current={active === itemKey(item) ? "page" : undefined}
                    onClick={item.anchor || item.href === "/" ? onNavClick(item) : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button type="button" className={`${styles.login} lulo`} onClick={() => openOverlay("demo-mode")}>
            Log In
          </button>
          <Link href="/cart-page" className={styles.cart} aria-label={`Cart with ${count} items`}>
            <CartIcon count={count} className={styles.cartSvg} />
          </Link>
        </div>

        <div className={styles.mobileBar}>
          <Link href="/cart-page" className={styles.mobileCart} aria-label={`Cart with ${count} items`}>
            <CartIcon count={count} className={styles.cartSvg} />
          </Link>
          <button
            type="button"
            className={styles.burger}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => (menuOpen ? closeOverlay() : openOverlay("mobile-menu"))}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={styles.mobileMenu} data-open={menuOpen || undefined} aria-hidden={!menuOpen}>
        <button
          type="button"
          className={`${styles.mobileLogin} lulo`}
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => openOverlay("demo-mode")}
        >
          Log In
        </button>
        <button
          type="button"
          className={styles.mobileClose}
          aria-label="Close navigation menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => closeOverlay()}
        >
          <span />
          <span />
        </button>
        <nav aria-label="Site mobile">
          <ul className={styles.mobileList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={itemHref(item)}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`${styles.mobileLink} lulo`}
                  data-active={mobileActive === itemKey(item) || undefined}
                  onClick={(e) => {
                    closeOverlay();
                    if (item.anchor || item.href === "/") onNavClick(item)(e);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
