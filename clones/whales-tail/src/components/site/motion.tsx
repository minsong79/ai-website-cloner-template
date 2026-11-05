"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Wix "Float In" entrance animation: the element starts 60px lower (or 60px to
 * the left for `from="left"`) at opacity 0 and settles over 1200ms when it
 * scrolls into view. It plays once.
 */
export function Reveal({
  children,
  className,
  style,
  from = "bottom",
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  from?: "bottom" | "left";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = "in";
            io.disconnect();
          }
        }
      },
      { threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const offset: CSSProperties =
    from === "left" ? ({ "--reveal-x": "-60px", "--reveal-y": "0px" } as CSSProperties) : {};

  return (
    <div ref={ref} data-reveal="" className={className} style={{ ...offset, ...style }}>
      {children}
    </div>
  );
}

/**
 * Wix background "Parallax" effect, measured on the source: the media layer is
 * max(100vh, container height) tall and its top sits at 0.2 x the container's
 * viewport top, i.e. it scrolls at 20% of the page speed. Desktop only; the
 * Wix mobile layout shows the image as a plain cover background.
 */
export function ParallaxImage({
  src,
  alt = "",
  objectPosition = "50% 50%",
  className,
  imgClassName,
  children,
  style,
}: {
  src: string;
  alt?: string;
  objectPosition?: string;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const img = imgRef.current;
    if (!box || !img) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!desktop.matches || reduce.matches) {
        img.style.transform = "";
        return;
      }
      const rect = box.getBoundingClientRect();
      const vh = window.innerHeight;
      const top = Math.min(Math.max(rect.top, -rect.height), vh);
      img.style.transform = `translate3d(0, ${(-0.8 * top).toFixed(2)}px, 0)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    desktop.addEventListener("change", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      desktop.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <div ref={boxRef} className={className} style={{ position: "relative", overflow: "hidden", ...style }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- parallax layer needs a raw, transformable img */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={imgClassName}
        data-parallax=""
        style={{ objectPosition }}
        decoding="async"
      />
      {children}
    </div>
  );
}

/** Publishes the classic scrollbar width as --sbw so the scaled layouts never overflow. */
export function ScrollbarWidth() {
  useEffect(() => {
    const root = document.documentElement;
    const set = () => {
      const w = Math.max(0, window.innerWidth - root.clientWidth);
      root.style.setProperty("--sbw", `${w}px`);
    };
    set();
    const ro = new ResizeObserver(set);
    ro.observe(document.body);
    window.addEventListener("resize", set);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", set);
    };
  }, []);
  return null;
}
