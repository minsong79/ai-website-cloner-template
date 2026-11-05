"use client";

import { useEffect, useRef } from "react";
import styles from "./PageBackground.module.css";

/**
 * Wix page background: #323232 with a steak photo at 49% opacity.
 * Desktop: fixed layer, image 120vh tall that drifts up by 20vh over the
 * full page scroll (measured: translateY = -(scrollY / maxScroll) * 180px at 900px).
 * Mobile: a top-aligned portrait photo that scrolls with the page.
 */
export function PageBackground() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const img = imgRef.current;
      if (!img) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      img.style.transform = `translate3d(0, ${(-progress * 0.2 * window.innerHeight).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const ro = new ResizeObserver(onScroll);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div className={styles.fixed}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={imgRef} className={styles.desktopImg} src="/assets/images/page-bg-steak-forks.jpg" alt="" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.mobileImg} src="/assets/images/page-bg-steak-fork-mobile.jpg" alt="" />
    </div>
  );
}
