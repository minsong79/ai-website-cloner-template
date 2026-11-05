"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { HamburgerIcon, MenuCloseIcon } from "./icons";
import { Marquee } from "./Marquee";
import styles from "./header.module.css";

export const NAV_ITEMS = [
  { href: "/menus", label: "Menu" },
  { href: "/contact", label: "Contact" },
] as const;

export const TAGLINE = "Your neighborhood spot for every kind of night";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => {
      setOpen(false);
      openButtonRef.current?.focus({ preventScroll: true });
    }, 400);
  }, []);

  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => {
      setVisible(true);
      firstLinkRef.current?.focus({ preventScroll: true });
    });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [open, close]);

  // Close the dialog when the viewport grows into the desktop layout.
  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (query.matches) {
        setVisible(false);
        setOpen(false);
      }
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/svg/logo-bird.svg" alt="Homepage" width={32} height={32} />
        </Link>

        <nav className={styles.nav} aria-label="Site">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <span className={styles.navLabel}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.pill}>
          <Marquee text={TAGLINE} className={styles.pillMarquee} />
        </div>

        <button
          ref={openButtonRef}
          type="button"
          className={styles.burger}
          aria-label="Menu"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <HamburgerIcon className={styles.burgerIcon} />
        </button>
        </div>
      </div>

      {open ? (
        <div
          className={`${styles.dialog} ${visible ? styles.dialogVisible : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Site"
        >
          <div className={styles.dialogHeader}>
            <button type="button" className={styles.dialogClose} aria-label="Close Menu" onClick={close}>
              <MenuCloseIcon className={styles.dialogCloseIcon} />
            </button>
          </div>
          <nav aria-label="Site">
            <ul className={styles.dialogList}>
              {NAV_ITEMS.map((item, index) => (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    className={styles.dialogLink}
                    aria-current={pathname === item.href ? "page" : undefined}
                    onClick={() => {
                      setVisible(false);
                      setOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.dialogPill}>
            <Marquee text={TAGLINE} className={styles.pillMarquee} />
          </div>
        </div>
      ) : null}
    </header>
  );
}
