"use client";

import { Modal } from "./Modal";
import { ModalCloseIcon } from "./icons";
import styles from "./NoticeModal.module.css";

type NoticeModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  body: string;
};

/**
 * White notice lightbox used by Table Reservations in the source
 * ("Online reservations are currently unavailable"). Reused for the
 * local-only checkout notice.
 */
export function NoticeModal({ open, onClose, title, body }: NoticeModalProps) {
  return (
    <Modal open={open} onClose={onClose} backdrop="dim" label={title}>
      <div className={styles.box}>
        <button type="button" className={styles.x} aria-label="Close" onClick={onClose}>
          <ModalCloseIcon />
        </button>
        <h2 className={`${styles.title} lulo`}>{title}</h2>
        <p className={styles.body}>{body}</p>
        <button type="button" className={styles.close} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}
