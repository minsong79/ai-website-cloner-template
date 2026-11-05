"use client";

import { useState } from "react";
import styles from "./map-embed.module.css";

const LAT = 37.77065;
const LNG = -122.387301;
const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=500+Terry+Francois+Street%2C+6th+Floor.+San+Francisco%2C+CA+94158";

/**
 * Wix Google Maps element. The source renders a Maps JS map centred on the pin with an
 * open info window ("Location Name" + Directions). Here a keyless Google Maps embed is
 * centred on the same coordinates and the info window is recreated on top of it.
 */
export function MapEmbed({ className }: { className?: string }) {
  const [infoOpen, setInfoOpen] = useState(true);
  return (
    <div className={`${styles.root} ${className ?? ""}`}>
      <iframe
        className={styles.frame}
        title="Google Maps"
        src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=16&hl=en&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {infoOpen ? (
        <div className={styles.info} role="dialog" aria-label="Location Name">
          <div className={styles.infoHeader}>
            <h2 className={styles.infoTitle}>Location Name</h2>
            <button type="button" className={styles.infoClose} aria-label="Close" onClick={() => setInfoOpen(false)}>
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
          <a className={styles.infoLink} href={DIRECTIONS} target="_blank" rel="noreferrer noopener">
            Directions
          </a>
        </div>
      ) : null}
    </div>
  );
}
