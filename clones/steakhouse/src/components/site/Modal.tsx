"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export type Backdrop = "photo-dark" | "photo-light" | "dim" | "solid";

const noop = () => () => {};

export function useIsClient() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}

type ModalProps = {
  open: boolean;
  onClose: () => void;
  backdrop: Backdrop;
  label: string;
  children: ReactNode;
  /** Close when the backdrop is clicked (Wix lightboxes do). */
  closeOnBackdrop?: boolean;
  className?: string;
};

/**
 * Wix-style lightbox: full-viewport fixed layer. "photo-*" backdrops reproduce the
 * popup background measured on the source (color layer + site photo at 49% opacity).
 */
export function Modal({ open, onClose, backdrop, label, children, closeOnBackdrop = true, className }: ModalProps) {
  const isClient = useIsClient();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!isClient || !open) return null;

  return createPortal(
    <div className={`${styles.root} ${className ?? ""}`} role="dialog" aria-modal="true" aria-label={label}>
      <div
        className={styles.backdrop}
        data-variant={backdrop}
        onClick={closeOnBackdrop ? onClose : undefined}
        aria-hidden="true"
      >
        {(backdrop === "photo-dark" || backdrop === "photo-light") && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/page-bg-steak-forks.jpg" alt="" className={styles.photo} />
          </>
        )}
      </div>
      {children}
    </div>,
    document.body,
  );
}
