"use client";

import { closeOverlay, useUI } from "@/lib/ui-store";
import { Modal } from "./Modal";
import { NoticeModal } from "./NoticeModal";
import { SideCart } from "./order/SideCart";
import { ThinCloseIcon } from "./icons";
import styles from "./GlobalOverlays.module.css";

/** Site-wide lightboxes: Members "Log In" (demo mode), side cart, checkout notice. */
export function GlobalOverlays() {
  const { overlay } = useUI();
  return (
    <>
      <Modal open={overlay === "demo-mode"} onClose={closeOverlay} backdrop="solid" label="Demo Mode" closeOnBackdrop={false}>
        <button type="button" className={styles.demoX} aria-label="Close" onClick={closeOverlay}>
          <ThinCloseIcon />
        </button>
        <div className={styles.demo}>
          <h2 className={`${styles.demoTitle} lulo`}>Demo Mode</h2>
          <p className={styles.demoText}>To make this template yours, start editing it.</p>
          <p className="visually-hidden">Member sign-in is not connected in this local clone.</p>
          <button type="button" className={styles.demoOk} onClick={closeOverlay}>
            OK
          </button>
        </div>
      </Modal>
      <SideCart />
      <NoticeModal
        open={overlay === "checkout-notice"}
        onClose={closeOverlay}
        title="Checkout is not connected"
        body="This is a local clone: your cart is saved in this browser only and no order is sent."
      />
    </>
  );
}
