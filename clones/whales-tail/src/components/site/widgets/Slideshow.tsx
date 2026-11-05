"use client";

import { useRef, useState, type PointerEvent } from "react";
import { SlideArrowIcon } from "../Icons";
import s from "./Slideshow.module.css";

export type Slide = { src: string; position: string; alt: string };

// The Wix Pro Gallery slideshow keeps going forward through repeated copies of the
// slides; "Previous" only appears once you have moved away from the first one.
const REPEATS = 8;

export function Slideshow({ slides, className }: { slides: Slide[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const total = slides.length * REPEATS;
  const startX = useRef<number | null>(null);

  const go = (next: number) => setIndex(Math.max(0, Math.min(total - 1, next)));

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") return;
    startX.current = e.clientX;
  };
  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <div
      className={`${s.root} ${className ?? ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Happy Moments gallery"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div className={s.track} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {Array.from({ length: total }, (_, i) => {
          const slide = slides[i % slides.length];
          const near = Math.abs(i - index) <= 1;
          return (
            <div key={i} className={s.slide} aria-hidden={i !== index}>
              {near || i < slides.length ? (
                // eslint-disable-next-line @next/next/no-img-element -- gallery image with focal-point crop
                <img src={slide.src} alt={slide.alt} style={{ objectPosition: slide.position }} loading={i === 0 ? "eager" : "lazy"} />
              ) : null}
            </div>
          );
        })}
      </div>
      {index > 0 ? (
        <button type="button" className={`${s.arrow} ${s.prev}`} aria-label="Previous Item" onClick={() => go(index - 1)}>
          <SlideArrowIcon />
        </button>
      ) : null}
      {index < total - 1 ? (
        <button type="button" className={`${s.arrow} ${s.next}`} aria-label="Next Item" onClick={() => go(index + 1)}>
          <SlideArrowIcon />
        </button>
      ) : null}
    </div>
  );
}
