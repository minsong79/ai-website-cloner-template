import Link from "next/link";

import { Img } from "@/components/site/Img";
import { contact } from "@/lib/site-data";

import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logo}>
        <Img src="/assets/svg/wordmark-dark.svg" alt="logo" width={350} height={52} />
      </Link>

      <p className={`${styles.social} ${styles.instagram}`}>
        <a href={contact.instagram} target="_blank" rel="noopener noreferrer">
          INSTAGRAM
        </a>
      </p>
      <p className={`${styles.social} ${styles.facebook}`}>
        <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
          FACEBOOK
        </a>
      </p>

      <p className={`${styles.text} ${styles.address}`}>
        500 Terry Francine Street, San Francisco, CA 94158
      </p>
      <p className={`${styles.text} ${styles.email}`}>{contact.email}</p>
      <p className={`${styles.text} ${styles.phone}`}>{contact.phone}</p>

      <p className={`${styles.legal} ${styles.terms}`}>
        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
      </p>
      <p className={`${styles.legal} ${styles.accessibility}`}>
        <Link href="/accessibility-statement">Accessibility Statement</Link>
      </p>
      {/* The template's "Privacy Policy" link points at the accessibility statement. */}
      <p className={`${styles.legal} ${styles.privacy}`}>
        <Link href="/accessibility-statement">Privacy Policy</Link>
      </p>

      <p className={`${styles.legal} ${styles.copyright}`}>
        © 2035 by Asphalt Bloom Cafe. Powered and secured by{" "}
        <a href={contact.wix} target="_blank" rel="noopener noreferrer">
          Wix
        </a>
      </p>
    </footer>
  );
}
