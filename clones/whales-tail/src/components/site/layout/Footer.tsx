import Link from "next/link";
import { SparkleIcon } from "../Icons";
import { NewsletterForm } from "./NewsletterForm";
import s from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`${s.box} ${s.rowTop}`}>
        <div className={`${s.cell} ${s.cellBrand}`}>
          <Link href="/" className={s.logo} aria-label="Homepage">
            {/* eslint-disable-next-line @next/next/no-img-element -- vector logo from the source */}
            <img src="/assets/svg/whale-logo.svg" alt="" width={40} height={29} />
          </Link>
          <p className={s.brand}>The Whale&apos;s Tail</p>
        </div>
        <div className={`${s.cell} ${s.cellSocial}`}>
          <a className={s.facebook} href="https://www.facebook.com/wix" target="_blank" rel="noreferrer noopener">
            Facebook
          </a>
          <a className={s.instagram} href="https://www.instagram.com/wix" target="_blank" rel="noreferrer noopener">
            Instagram
          </a>
          <a className={s.yelp} href="https://www.yelp.com" target="_blank" rel="noreferrer noopener">
            Yelp!
          </a>
        </div>
        <div className={`${s.cell} ${s.cellContact}`}>
          <a className={s.email} href="mailto:info@mysite.com">
            info@mysite.com
          </a>
          <a className={s.phone} href="tel:123-456-7890">
            123-456-7890
          </a>
          <p className={s.address}>
            500 Terry Francine Street
            <br />
            San Francisco, CA 94158
          </p>
        </div>
      </div>
      <div className={`${s.box} ${s.rowBottom}`}>
        <div className={`${s.cell} ${s.cellStar}`}>
          <SparkleIcon className={s.star} />
        </div>
        <div className={`${s.cell} ${s.cellNews}`}>
          <p className={s.newsText}>Subscribe to get notified about special events.</p>
          <div className={s.newsForm}>
            <NewsletterForm />
          </div>
        </div>
        <div className={`${s.cell} ${s.cellCopy}`}>
          <p className={s.copy}>
            © 2035 by The Whale&apos;s Tail.
            <br />
            Powered and secured by{" "}
            <a href="https://wix.com/?utm_campaign=vir_created_with" target="_blank" rel="noreferrer noopener">
              Wix
            </a>
          </p>
        </div>
        <div className={`${s.cell} ${s.cellStar}`}>
          <SparkleIcon className={s.star} />
        </div>
      </div>
    </footer>
  );
}
