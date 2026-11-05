"use client";

import { useEffect } from "react";

/**
 * Wix subtracts the classic scrollbar width from the viewport before scaling
 * (`--scrollbar-width`). Mirror that so 100vw-based sizes never overflow.
 */
export function ScrollbarWidth() {
  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const width = Math.max(0, window.innerWidth - root.clientWidth);
      root.style.setProperty("--sbw", `${width}px`);
    };
    update();
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    return () => {
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);
  return null;
}
