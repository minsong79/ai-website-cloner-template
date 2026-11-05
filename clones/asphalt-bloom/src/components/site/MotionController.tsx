"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
 * Reproduces the template's Wix motion presets:
 *  - [data-enter]   entrance effect, played once when the element enters the viewport
 *  - [data-loop]    looping effect (breathe / wiggle), runs only while visible
 *  - [data-parallax="20"]  scroll-linked translateY from -20vh to +20vh over the
 *                   element's "cover" range extended by the same distance
 *                   (optionally [data-parallax-mobile] below 1024px)
 *  - [data-spin]    scroll-linked rotation from -180deg to 180deg over "cover"
 * Scroll-linked values are written to CSS custom properties consumed in globals.css.
 */
export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px)");

    const enterObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-in", "");
          enterObserver.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px 15% 0px", threshold: 0 },
    );
    document.querySelectorAll<HTMLElement>("[data-enter]:not([data-in])").forEach((el) => {
      enterObserver.observe(el);
    });

    const loopObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.toggleAttribute("data-playing", entry.isIntersecting);
      }
    });
    document.querySelectorAll<HTMLElement>("[data-loop]").forEach((el) => loopObserver.observe(el));

    const parallax = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    const spin = [...document.querySelectorAll<HTMLElement>("[data-spin]")];
    const applied = new WeakMap<HTMLElement, number>();
    let frame = 0;

    // Top of the element's untransformed box relative to the viewport.
    const layoutTop = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top + rect.height / 2 - el.offsetHeight / 2 - (applied.get(el) ?? 0);
    };

    const update = () => {
      frame = 0;
      if (reduced.matches) return;
      const vh = window.innerHeight;
      for (const el of parallax) {
        const raw = desktop.matches ? el.dataset.parallax : (el.dataset.parallaxMobile ?? el.dataset.parallax);
        const to = (Number(raw) / 100) * vh;
        const top = layoutTop(el);
        const span = vh + el.offsetHeight + 2 * to;
        const progress = span > 0 ? Math.min(1, Math.max(0, (vh + to - top) / span)) : 0;
        const y = -to + 2 * to * progress;
        applied.set(el, y);
        el.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
      }
      for (const el of spin) {
        const top = layoutTop(el);
        const span = vh + el.offsetHeight;
        const progress = Math.min(1, Math.max(0, (vh - top) / span));
        el.style.setProperty("--spin", `${(-180 + 360 * progress).toFixed(2)}deg`);
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    desktop.addEventListener("change", schedule);

    return () => {
      enterObserver.disconnect();
      loopObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      desktop.removeEventListener("change", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
