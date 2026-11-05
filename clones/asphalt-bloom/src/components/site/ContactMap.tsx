"use client";

import { useState } from "react";

import { contact } from "@/lib/site-data";

import styles from "./ContactMap.module.css";

// The template uses a styled Google Maps JS widget. Here a keyless Google Maps
// embed (same center/zoom) is tinted dark with CSS, and the widget's marker and
// info window are recreated on top of it.
const MAP_SRC = "https://maps.google.com/maps?q=37.7749,-122.4194&z=15&hl=en&output=embed";

export function ContactMap() {
  const [infoOpen, setInfoOpen] = useState(true);

  return (
    <div className={styles.map}>
      <iframe
        className={styles.frame}
        src={MAP_SRC}
        title="Google Map: Asphalt Bloom Cafe, 500 Terry Francine St, San Francisco"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <button
        type="button"
        className={styles.marker}
        aria-label="Asphalt Bloom Cafe"
        aria-expanded={infoOpen}
        onClick={() => setInfoOpen(true)}
      >
        <svg viewBox="0 0 27 43" aria-hidden="true">
          <path
            fill="#ea4335"
            stroke="#c5221f"
            strokeWidth="1"
            d="M13.5 1C6.6 1 1 6.6 1 13.5c0 9.4 12.5 28 12.5 28S26 22.9 26 13.5C26 6.6 20.4 1 13.5 1Z"
          />
          <circle cx="13.5" cy="13.5" r="4.6" fill="#b31412" />
        </svg>
      </button>
      {infoOpen ? (
        <div className={styles.info} role="dialog" aria-label="Asphalt Bloom Cafe">
          <h2 className={styles.infoTitle}>Asphalt Bloom Cafe</h2>
          <a className={styles.infoLink} href={contact.directions} target="_blank" rel="noopener noreferrer">
            Directions
          </a>
          <button type="button" className={styles.infoClose} aria-label="Close" onClick={() => setInfoOpen(false)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}
