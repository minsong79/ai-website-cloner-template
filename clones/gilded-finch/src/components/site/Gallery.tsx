"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./icons";
import styles from "./gallery.module.css";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type GalleryProps = {
  images: GalleryImage[];
  className?: string;
};

/**
 * Wix "fast gallery": a 4-up grid on desktop and a swipeable strip on mobile.
 * Clicking an item opens the white "expand" view with a horizontal, snapping
 * image track, previous/next arrows, Escape/arrow-key support and a fade.
 */
export function Gallery({ images, className }: GalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const scrollToIndex = useCallback((next: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.children[next] as HTMLElement | undefined;
    if (item) track.scrollTo({ left: item.offsetLeft, behavior });
  }, []);

  const open = (event: MouseEvent<HTMLAnchorElement>, next: number) => {
    event.preventDefault();
    const dialog = dialogRef.current;
    if (!dialog) return;
    setIndex(next);
    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
    requestAnimationFrame(() => {
      scrollToIndex(next, "instant");
      setVisible(true);
    });
  };

  const close = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => {
      dialogRef.current?.close();
      document.documentElement.style.overflow = "";
    }, 300);
  }, []);

  const go = useCallback(
    (next: number) => {
      const bounded = Math.max(0, Math.min(images.length - 1, next));
      setIndex(bounded);
      scrollToIndex(bounded, "smooth");
    },
    [images.length, scrollToIndex],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timer = 0;
    const onScroll = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const width = track.clientWidth + 100;
        setIndex(Math.round(track.scrollLeft / width));
      }, 80);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(index - 1);
    }
  };

  return (
    <>
      <div className={`${styles.strip} ${className ?? ""}`}>
        <div className={styles.scroller}>
          <ul className={styles.list}>
            {images.map((image, i) => (
              <li key={image.src} className={styles.item}>
                <a href={image.src} className={styles.link} onClick={(event) => open(event, i)}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1023px) 80vw, 25vw"
                    className={styles.thumb}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className={`${styles.dialog} ${visible ? styles.dialogVisible : ""}`}
        aria-label="Expanded gallery"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onKeyDown={onKeyDown}
      >
        <div className={styles.expanded}>
          <button type="button" className={styles.close} aria-label="Close" onClick={close}>
            <CloseIcon className={styles.icon} />
          </button>
          {index > 0 ? (
            <button type="button" className={`${styles.nav} ${styles.prev}`} aria-label="Previous" onClick={() => go(index - 1)}>
              <ChevronLeftIcon className={styles.icon} />
            </button>
          ) : null}
          {index < images.length - 1 ? (
            <button type="button" className={`${styles.nav} ${styles.next}`} aria-label="Next" onClick={() => go(index + 1)}>
              <ChevronRightIcon className={styles.icon} />
            </button>
          ) : null}
          <div ref={trackRef} className={styles.track}>
            {images.map((image, i) => (
              <div key={image.src} className={styles.slide} aria-hidden={i !== index}>
                <Image src={image.src} alt={image.alt} fill sizes="100vw" className={styles.full} />
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}
