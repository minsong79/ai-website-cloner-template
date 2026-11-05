"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { GALLERY_ACCOUNT, GALLERY_CAPTION, GALLERY_IMAGES } from "@/lib/site-data";
import { Modal } from "../Modal";
import { ArrowLeftIcon, ArrowRightIcon, InstagramOutlineIcon, ThinCloseIcon } from "../icons";
import styles from "./Gallery.module.css";

const noop = () => () => {};

function useTodayLabel() {
  return useSyncExternalStore(
    noop,
    () => new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    () => "",
  );
}

/** Instagram feed grid (8 posts) with hover caption and the post lightbox. */
export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const today = useTodayLabel();
  const close = useCallback(() => setIndex(null), []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : Math.min(GALLERY_IMAGES.length - 1, i + 1)));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : Math.max(0, i - 1)));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  return (
    <>
      <ul className={styles.grid}>
        {GALLERY_IMAGES.map((src, i) => (
          <li key={src} className={styles.item}>
            <button type="button" className={styles.itemBtn} aria-label={GALLERY_CAPTION} onClick={() => setIndex(i)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={GALLERY_CAPTION} loading="lazy" className={styles.img} />
              <span className={styles.hover} aria-hidden="true">
                <span className={styles.caption}>{GALLERY_CAPTION}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Modal open={index !== null} onClose={close} backdrop="photo-dark" label="Instagram post">
        {index !== null && (
          <div className={styles.card}>
            <div className={styles.media}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={GALLERY_IMAGES[index]} alt={GALLERY_CAPTION} />
            </div>
            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <a
                  className={styles.igLink}
                  href="https://www.instagram.com/wix"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                >
                  <InstagramOutlineIcon />
                </a>
                <p className={styles.account}>{GALLERY_ACCOUNT}</p>
                <button type="button" className={styles.close} aria-label="Close button" onClick={close}>
                  <ThinCloseIcon />
                </button>
              </div>
              <div className={styles.nav}>
                {index > 0 ? (
                  <button type="button" aria-label="previous post" onClick={() => setIndex(index - 1)}>
                    <ArrowLeftIcon />
                  </button>
                ) : (
                  <span />
                )}
                {index < GALLERY_IMAGES.length - 1 && (
                  <button type="button" aria-label="next post" onClick={() => setIndex(index + 1)}>
                    <ArrowRightIcon />
                  </button>
                )}
              </div>
              <p className={styles.text}>{GALLERY_CAPTION}</p>
              <p className={styles.date}>{today}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
