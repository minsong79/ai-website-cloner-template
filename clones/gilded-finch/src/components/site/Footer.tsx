import Link from "next/link";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "./icons";
import styles from "./footer.module.css";

const SOCIAL = [
  { href: "https://www.facebook.com/wix", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/wix", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.tiktok.com/@wix", label: "Tiktok", Icon: TiktokIcon },
] as const;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.stage}>
        <ul className={styles.social} aria-label="Social Bar">
          {SOCIAL.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label}>
                <Icon className={styles.socialIcon} />
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.address}>
          500 Terry Francine St
          <br />
          San Francisco, CA 94158
        </p>
        <p className={styles.email}>info@mysite.com</p>
        <p className={styles.phone}>123-456-7890</p>

        <p className={`${styles.link} ${styles.privacy}`}>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </p>
        <p className={`${styles.link} ${styles.accessibility}`}>
          <Link href="/accessibility-statement">Accessibility Statement</Link>
        </p>
        <p className={`${styles.link} ${styles.refund}`}>
          <Link href="/refund-policy">Refund Policy</Link>
        </p>
        <p className={`${styles.link} ${styles.terms}`}>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </p>

        <Link href="/" className={styles.wordmark} aria-label="The Gilded Finch home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/svg/logo-wordmark.svg" alt="Homepage" width={58} height={43} />
        </Link>

        <p className={styles.copyright}>
          © 2035 by The Gilded Finch. Powered and secured by{" "}
          <a href="https://www.wix.com" target="_blank" rel="noreferrer noopener">
            Wix
          </a>
        </p>
      </div>
    </footer>
  );
}
