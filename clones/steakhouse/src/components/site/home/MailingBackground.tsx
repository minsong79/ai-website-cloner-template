"use client";

import { useEffect, useRef } from "react";
import styles from "./Home.module.css";

/**
 * Mailing-list strip background: looping grill video at 46% opacity over #242323
 * with a 6x6 dot overlay. Desktop parallax measured on the source: the video's top
 * edge sits at 0.2 x the section's viewport offset. Mobile shows the poster only.
 */
export function MailingBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const wrap = wrapRef.current;
      const media = mediaRef.current;
      if (!wrap || !media) return;
      const top = wrap.getBoundingClientRect().top;
      media.style.transform = `translate3d(0, ${(-0.8 * top).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.mailBg} ref={wrapRef} aria-hidden="true">
      <div className={styles.mailMedia} ref={mediaRef}>
        <video
          className={styles.mailVideo}
          src="/assets/video/mailing-grill-720p.mp4"
          poster="/assets/images/mailing-grill-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.mailPoster} src="/assets/images/mailing-grill-poster.jpg" alt="" />
      </div>
      <div className={styles.mailDots} />
    </div>
  );
}
