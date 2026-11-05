"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AvatarIcon, CloseBoldIcon } from "../Icons";
import { useSite } from "../SiteProvider";
import { NAV_ITEMS } from "./Header";
import s from "./Overlays.module.css";

/** Locks page scroll and closes on Escape while an overlay is open. */
export function useOverlay(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
}

export function Portal({ children }: { children: ReactNode }) {
  if (typeof document === "undefined") return null;
  return createPortal(children, document.body);
}

export function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen, setDemoModeOpen } = useSite();
  const pathname = usePathname();
  const close = () => setMobileMenuOpen(false);
  useOverlay(mobileMenuOpen, close);
  if (!mobileMenuOpen) return null;
  return (
    <Portal>
      <div className={s.mobileMenu} role="dialog" aria-modal="true" aria-label="Site navigation">
        <button
          type="button"
          className={s.menuLogin}
          onClick={() => {
            close();
            setDemoModeOpen(true);
          }}
        >
          <AvatarIcon className={s.menuAvatar} />
          <span>Log In</span>
        </button>
        <button type="button" className={s.menuClose} aria-label="Close" onClick={close}>
          <span />
          <span />
        </button>
        <nav className={s.menuNav}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={s.menuLink}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </Portal>
  );
}

/** The demo's "Log In" opens Wix's Demo Mode notice; reproduced locally. */
export function DemoModeDialog() {
  const { demoModeOpen, setDemoModeOpen } = useSite();
  const close = () => setDemoModeOpen(false);
  useOverlay(demoModeOpen, close);
  if (!demoModeOpen) return null;
  return (
    <Portal>
      <div className={s.demo} role="dialog" aria-modal="true" aria-labelledby="demo-mode-title">
        <button type="button" className={s.demoClose} aria-label="Close" onClick={close}>
          <CloseBoldIcon />
        </button>
        <div className={s.demoBody}>
          <h2 id="demo-mode-title" className={s.demoTitle}>
            Demo Mode
          </h2>
          <p className={s.demoText}>To make this template yours, start editing it.</p>
          <p className={s.demoNote}>Sign-in is not connected in this local clone.</p>
          <button type="button" className={s.demoOk} onClick={close}>
            OK
          </button>
        </div>
      </div>
    </Portal>
  );
}

/** Home-only vertical tabs pinned to the right edge (desktop). */
export function SideTabs() {
  return (
    <div className={s.sideTabs}>
      <Link href="/#bookatable" className={`${s.sideTab} ${s.sideTabFirst}`}>
        <span>Book a Table</span>
      </Link>
      <Link href="/order-online" className={`${s.sideTab} ${s.sideTabSecond}`}>
        <span>Order Online</span>
      </Link>
    </div>
  );
}

/** Wix mobile "back to top" button, shown after scrolling. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      className={s.backToTop}
      data-visible={visible ? "true" : "false"}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="20 20 160 160" aria-hidden="true">
        <path fill="#20241A" d="M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z" />
        <path fill="#CFD3C7" d="M63.412 114L60 109.649 100.034 78 140 109.652 136.584 114l-36.55-28.3L63.412 114z" />
        <path
          fill="#A3A79C"
          d="M100 24c-41.974 0-76 34.026-76 76s34.026 76 76 76 76-34.026 76-76-34.026-76-76-76zm0-4c44.183 0 80 35.817 80 80s-35.817 80-80 80-80-35.817-80-80 35.817-80 80-80z"
        />
      </svg>
    </button>
  );
}
