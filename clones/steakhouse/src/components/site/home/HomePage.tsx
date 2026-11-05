import Link from "next/link";
import { ADDRESS_LINE, MAP_QUERY, PARAGRAPH_LONG, PARAGRAPH_SHORT, PHONE } from "@/lib/site-data";
import { FixedBackground } from "./FixedBackground";
import { Gallery } from "./Gallery";
import { GoToTop, SocialBar } from "./HomeClientBits";
import { ContactForm, MailingForm } from "./HomeForms";
import { HomeReservation } from "./HomeReservation";
import { MailingBackground } from "./MailingBackground";
import styles from "./Home.module.css";

const COLUMNS = [
  { num: "01", title: <>Traditional steakhouse, Modern twist</> },
  { num: "02", title: <>Serving the finest cuts of meat</> },
  {
    num: "03",
    title: (
      <>
        Located in
        <br />
        the heart
        <br />
        of the city
      </>
    ),
  },
];

export function HomePage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=14&output=embed`;
  return (
    <div className={styles.home} id="top">
      <SocialBar />

      {/* HERO — transparent strip over the fixed page background */}
      <section className={styles.hero}>
        <div className={styles.strip}>
          <p className={styles.address}>
            {ADDRESS_LINE} <a href={`tel:${PHONE}`}>{PHONE}</a>
          </p>
        </div>
        <div className={styles.stage}>
          <h1 className={styles.brand}>
            <span className={styles.ls3}>ST</span>
            <span className={styles.ls2}>E</span>
            <span className={styles.ls3}>AKHOUSE</span>
          </h1>
          <p className={`${styles.tagline} lulo`}>GReAT aMERICAN FOOD</p>
          <Link href="/menu" className={`${styles.menuBtn} lulo`} aria-label="MENU">
            <span>Menu</span>
          </Link>
        </div>
      </section>

      {/* THE RESTAURANT */}
      <section className={styles.restaurant}>
        <span id="our-place" className={styles.anchorOurPlace} />
        <FixedBackground src="/assets/images/restaurant-chef-kitchen.jpg" opacity={0.48} />
        <div className={`${styles.stage} ${styles.content}`}>
          <h2 className={`${styles.restTitle} lulo`}>THe RESTAURANT</h2>
          <div className={styles.columns}>
            {COLUMNS.map((c, i) => (
              <div key={c.num} className={styles.col} data-col={i + 1}>
                <p className={`${styles.num} lulo`}>{c.num}</p>
                <hr className={styles.numLine} />
                <h3 className={`${styles.colTitle} lulo`}>{c.title}</h3>
                <p className={styles.colText}>{PARAGRAPH_SHORT}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAKE A RESERVATION */}
      <section className={styles.reservation}>
        <FixedBackground src="/assets/images/reservation-fork-knife.jpg" />
        <div className={styles.content}>
          <HomeReservation />
        </div>
      </section>

      {/* STEAK PERFECTION TAKES TIME */}
      <section className={styles.steak}>
        <FixedBackground src="/assets/images/steak-perfection-cow.jpg" />
        <div className={`${styles.stage} ${styles.content}`}>
          <h2 className={`${styles.steakTitle} lulo`}>Steak perfection takes time</h2>
          <p className={styles.steakText}>{PARAGRAPH_LONG}</p>
        </div>
      </section>

      {/* HAVE A DRINK AT THE BAR */}
      <section className={styles.bar}>
        <FixedBackground src="/assets/images/bar-martini.jpg" />
        <div className={`${styles.stage} ${styles.content}`}>
          <h2 className={`${styles.barTitle} lulo`}>
            Have a drink
            <br />
            at the bar
          </h2>
          <p className={styles.barText}>{PARAGRAPH_LONG}</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallery}>
        <div className={styles.stage}>
          <h2 className={`${styles.galleryTitle} lulo`}>GALLERY</h2>
        </div>
        <div className={styles.galleryGrid}>
          <Gallery />
        </div>
      </section>

      {/* MAILING LIST */}
      <section className={styles.mailing}>
        <MailingBackground />
        <div className={`${styles.stage} ${styles.content}`}>
          <p className={`${styles.mailTitle} lulo`}>JOIN OUR MAILING LIST</p>
          <MailingForm />
        </div>
      </section>

      {/* CONTACT & LOCATION */}
      <section className={styles.contact}>
        <span id="contact" className={styles.anchorContact} />
        <div className={styles.stage}>
          <h2 className={`${styles.contactTitle} lulo`}>
            CONTACT &amp;
            <br />
            LOCATION
          </h2>
          <p className={`${styles.contactSub} lulo`}>TELL US WHAT YOU THINK AND HOW WE&apos;RE DOING</p>
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
          <p className={`${styles.hours} lulo`}>
            500 Terry FrancINE St. San Francine, CA 94158
            <br />
            Monday to Friday 12pm-11pm&nbsp; / Saturday to Sunday 12pm-1am
          </p>
          <div className={styles.map}>
            <iframe title="Google Maps" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <GoToTop />
        </div>
      </section>
    </div>
  );
}
