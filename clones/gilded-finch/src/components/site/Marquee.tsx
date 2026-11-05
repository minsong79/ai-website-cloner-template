"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./marquee.module.css";

/** Wix text marquee: the source scrolls one repeated group at ~73.5px/s. */
const PIXELS_PER_SECOND = 73.5;

type MarqueeProps = {
  text: string;
  className?: string;
};

export function Marquee({ text, className }: MarqueeProps) {
  const groupRef = useRef<HTMLSpanElement>(null);
  const [duration, setDuration] = useState(17.4);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    const update = () => {
      const width = group.getBoundingClientRect().width;
      if (width > 0) setDuration(width / PIXELS_PER_SECOND);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  const units = [0, 1, 2, 3];

  return (
    <div
      className={`${styles.root} ${paused ? styles.paused : ""} ${className ?? ""}`}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <button
        type="button"
        className="wx-sr-only"
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? "Play animation" : "Pause animation"}
      </button>
      <p className={styles.track}>
        <span className="wx-sr-only">{text}</span>
        {[0, 1].map((group) => (
          <span
            key={group}
            ref={group === 0 ? groupRef : undefined}
            className={styles.group}
            aria-hidden="true"
          >
            {units.map((unit) => (
              <span key={unit} className={styles.unit}>
                {text}
              </span>
            ))}
          </span>
        ))}
      </p>
    </div>
  );
}
