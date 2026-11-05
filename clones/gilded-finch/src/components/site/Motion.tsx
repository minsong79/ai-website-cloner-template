"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./motion.module.css";

/**
 * Reproduces the Wix Studio interactions on the home page:
 * - "parallax": LEGACY_ParallaxScroll (speed 0.5) → translateY from -25vh to 25vh over
 *   the element's view range "cover -25vh → cover 100% + 25vh".
 * - "spin": LEGACY_SpinScroll (1 clockwise spin, medium) → rotate(base - 180° → base + 180°)
 *   and scale(1 → 0.7) over the "cover" range.
 * - "airy": LEGACY_AiryMouse (vertical, 5px, inverted, soft) → the image tilts and lifts
 *   away from the pointer; 5s ease-out transition. Desktop pointers only.
 * - "wiggle": LEGACY_Wiggle (soft) looping keyframes that start once in view.
 * The outer wrapper is never transformed, so its layout box drives the progress.
 */
export type MotionKind = "parallax" | "spin" | "airy" | "wiggle";

type MotionProps = {
  kind: MotionKind;
  className?: string;
  /** Static rotation of the element in degrees (Wix --comp-rotate-z). */
  rotate?: number;
  /** Wiggle variant: cycle length in ms and the share of the cycle that moves. */
  wiggle?: "a" | "b";
  children: ReactNode;
};

type Entry = { outer: HTMLElement; inner: HTMLElement; kind: MotionKind; rotate: number };

const entries = new Set<Entry>();
let frame = 0;
let pointer: { x: number; y: number } | null = null;
let listening = false;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function update() {
  frame = 0;
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const desktopPointer = window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;
  for (const entry of entries) {
    const rect = entry.outer.getBoundingClientRect();
    if (entry.kind === "parallax") {
      // progress over [top - vh - 0.25vh, top + height + 0.25vh]
      const start = rect.top - vh - 0.25 * vh;
      const length = vh + rect.height + 0.5 * vh;
      const p = clamp(-start / length, 0, 1);
      const ty = (-0.25 + 0.5 * p) * vh;
      entry.inner.style.transform = `translateY(${ty.toFixed(2)}px) rotate(${entry.rotate}deg)`;
    } else if (entry.kind === "spin") {
      const start = rect.top - vh;
      const length = vh + rect.height;
      const p = clamp(-start / length, 0, 1);
      const angle = entry.rotate - 180 + 360 * p;
      const scale = 1 - 0.3 * p;
      entry.inner.style.transform = `scale(${scale.toFixed(4)}) rotate(${angle.toFixed(2)}deg)`;
    } else if (entry.kind === "airy") {
      if (!desktopPointer || !pointer) {
        entry.inner.style.transform = "";
        continue;
      }
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const px = clamp((pointer.x - cx) / Math.max(cx, vw - cx, 1), -1, 1);
      const py = clamp((pointer.y - cy) / Math.max(cy, vh - cy, 1), -1, 1);
      const angle = -10 * px + entry.rotate;
      const ty = -5 * py;
      entry.inner.style.transform = `translateY(${ty.toFixed(3)}px) rotate(${angle.toFixed(3)}deg)`;
    }
  }
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(update);
}

function onPointerMove(event: PointerEvent) {
  if (event.pointerType !== "mouse") return;
  pointer = { x: event.clientX, y: event.clientY };
  schedule();
}

function listen() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  window.addEventListener("pointermove", onPointerMove, { passive: true });
}

function unlistenIfIdle() {
  if (entries.size > 0 || !listening) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
  window.removeEventListener("pointermove", onPointerMove);
}

/** Server-rendered transform, matching the animation's state before its range starts. */
function initialTransform(kind: MotionKind, rotate: number): string | undefined {
  if (kind === "parallax") return `translateY(-25vh) rotate(${rotate}deg)`;
  if (kind === "spin") return `scale(1) rotate(${rotate - 180}deg)`;
  return rotate ? `rotate(${rotate}deg)` : undefined;
}

export function Motion({ kind, className, rotate = 0, wiggle = "a", children }: MotionProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (kind === "wiggle") {
      if (reduced) return;
      const observer = new IntersectionObserver(
        (records) => {
          if (records.some((record) => record.isIntersecting)) {
            inner.dataset.running = "true";
            observer.disconnect();
          }
        },
        { threshold: 0 },
      );
      observer.observe(outer);
      return () => observer.disconnect();
    }

    if (reduced) {
      inner.style.transform = rotate ? `rotate(${rotate}deg)` : "";
      return;
    }
    const entry: Entry = { outer, inner, kind, rotate };
    entries.add(entry);
    listen();
    schedule();
    return () => {
      entries.delete(entry);
      unlistenIfIdle();
    };
  }, [kind, rotate]);

  const innerClass = [
    styles.inner,
    kind === "airy" ? styles.airy : "",
    kind === "wiggle" ? (wiggle === "a" ? styles.wiggleA : styles.wiggleB) : "",
  ].join(" ");

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef} className={innerClass} style={{ transform: initialTransform(kind, rotate) }}>
        {children}
      </div>
    </div>
  );
}
