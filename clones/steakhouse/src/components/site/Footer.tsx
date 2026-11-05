import { WIX_URL } from "@/lib/site-data";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © 2035 by Steakhouse. Powered and secured by{" "}
        <a href={WIX_URL} target="_blank" rel="noreferrer noopener">
          Wix
        </a>
      </p>
    </footer>
  );
}
