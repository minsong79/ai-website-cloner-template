"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { Img } from "@/components/site/Img";
import { navItems } from "@/lib/site-data";

import styles from "./SiteHeader.module.css";

// Wix "hide on scroll": the header slides up once the page is scrolled past
// ~400px while moving down, and slides back after ~150px of upward scroll.
const HIDE_AFTER = 400;
const SHOW_AFTER_UP = 120;
const HIDE_AFTER_DOWN = 50;

function useHideOnScroll(enabled: boolean) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    let lastY = window.scrollY;
    let up = 0;
    let down = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (dy > 0) {
        down += dy;
        up = 0;
        if (y > HIDE_AFTER && down >= HIDE_AFTER_DOWN) setHidden(true);
      } else if (dy < 0) {
        up -= dy;
        down = 0;
        if (up >= SHOW_AFTER_UP || y <= HIDE_AFTER) setHidden(false);
      }
      if (y <= 0) setHidden(false);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return hidden;
}

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const hidden = useHideOnScroll(!menuOpen);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    openRef.current?.focus();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    if (!menuOpen) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onChange);
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.bar} data-hidden={hidden || undefined}>
          <Link href="/" className={styles.logo}>
            <Img
              src="/assets/svg/wordmark-light.svg"
              alt="Homepage"
              width={350}
              height={52}
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          <nav className={styles.nav} aria-label="Site">
            <ul>
              {navItems.map((item) => {
                const current = isCurrent(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      data-current={current || undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            ref={openRef}
            type="button"
            className={styles.burger}
            aria-label="Menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg viewBox="0 0 200 200" aria-hidden="true">
              <path d="M156 64v6H44v-6h112z" />
              <path d="M156 97v6H44v-6h112z" />
              <path d="M156 130v6H44v-6h112z" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Site"
        data-open={menuOpen || undefined}
        inert={!menuOpen}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          aria-label="Close Menu"
          onClick={closeMenu}
        >
          <svg viewBox="0 0 600 592" aria-hidden="true">
            <path d="M531.936 536.904L323.094 328.063 114.253 536.904l-32.064-32.062L291.032 296 82.189 87.157l32.064-32.061 208.842 208.842L531.936 55.096 564 87.157 355.155 296 564 504.842l-32.064 32.062z" />
          </svg>
        </button>
        <nav className={styles.panelNav} aria-label="Site">
          <ul>
            {navItems.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    data-current={current || undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link href="/" className={styles.panelLogo} onClick={() => setMenuOpen(false)}>
          <Img src="/assets/svg/wordmark-light.svg" alt="Asphalt-Bloom-Cafe-logo" width={350} height={52} />
        </Link>
      </div>
    </>
  );
}
