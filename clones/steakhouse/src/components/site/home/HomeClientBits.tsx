"use client";

import { SOCIAL_LINKS } from "@/lib/site-data";
import { GoTopChevronIcon } from "../icons";
import styles from "./Home.module.css";

/** Fixed social bar (Twitter, Instagram) pinned to the right edge — home page only, desktop only. */
export function SocialBar() {
  return (
    <ul className={styles.social} aria-label="Social Bar">
      {SOCIAL_LINKS.map((s) => (
        <li key={s.label}>
          <a href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.label}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.icon} alt={s.label} width={32} height={32} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function toTop(e: React.MouseEvent) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/** "GO TO TOP" anchor link + rotated chevron (Wix SCROLL_TO_TOP anchor). */
export function GoToTop() {
  return (
    <div className={styles.goTop}>
      <a href="#top" className={styles.goTopArrow} onClick={toTop} aria-hidden="true" tabIndex={-1}>
        <GoTopChevronIcon />
      </a>
      <a href="#top" className={`${styles.goTopLink} lulo`} onClick={toTop} aria-label="GO TO TOP">
        Go to top
      </a>
    </div>
  );
}
