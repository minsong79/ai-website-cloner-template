"use client";

import { useEffect, useState } from "react";
import styles from "./testimonials.module.css";

export type Testimonial = { quote: string; name: string };

type TestimonialSlideshowProps = {
  items: Testimonial[];
  className?: string;
};

/** Wix slideshow: autoplay every 5s, 3s "slide" transition from bottom to top, no visible controls. */
const INTERVAL_MS = 5000;
const TRANSITION_MS = 3000;

type SlideState = { active: number; previous: number | null };

export function TestimonialSlideshow({ items, className }: TestimonialSlideshowProps) {
  const [{ active, previous }, setState] = useState<SlideState>({ active: 0, previous: null });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setState((current) => ({
        active: (current.active + 1) % items.length,
        previous: current.active,
      }));
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [items.length]);

  useEffect(() => {
    if (previous === null) return;
    const timer = window.setTimeout(
      () => setState((current) => ({ ...current, previous: null })),
      TRANSITION_MS,
    );
    return () => window.clearTimeout(timer);
  }, [previous, active]);

  return (
    <section
      className={`${styles.root} ${className ?? ""}`}
      aria-label="Slideshow"
      aria-roledescription="carousel"
    >
      <ul className={styles.slides} aria-live="off">
        {items.map((item, i) => {
          const isActive = i === active;
          const isPrevious = i === previous;
          const state = isActive
            ? previous !== null
              ? styles.enter
              : styles.active
            : isPrevious
              ? styles.exit
              : "";
          return (
            <li
              key={item.name}
              className={`${styles.slide} ${state}`}
              inert={!isActive}
              aria-hidden={!isActive}
            >
              <blockquote className={styles.quote}>{item.quote}</blockquote>
              <p className={styles.name}>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
