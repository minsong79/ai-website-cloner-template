import type { Metadata } from "next";

import { ContactForm } from "@/components/site/ContactForm";
import { ContactMap } from "@/components/site/ContactMap";
import { contact } from "@/lib/site-data";

import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className={`tex ${styles.intro}`}>
        <h2 className={`t-display c-light center ${styles.title}`} data-enter="fade-blur">
          Drop A Line,
          <br />
          Or Just Drop In
        </h2>
        <p className={`t-lead c-gray center ${styles.subtitle}`}>We&apos;re here. Let&apos;s talk</p>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </section>

      <section className={`tex ${styles.details}`}>
        <div className={`${styles.block} ${styles.location}`}>
          <h2 className="t-lead c-gray center">Location</h2>
          <p className="t-body c-light center">
            {contact.street}
            <br />
            {contact.city}
          </p>
        </div>
        <div className={`${styles.block} ${styles.hours}`}>
          <h2 className="t-lead c-gray center">Hours</h2>
          <p className="t-body c-light center">
            {contact.hours[0]}
            <br />
            {contact.hours[1]}
          </p>
        </div>
        <div className={`${styles.block} ${styles.contact}`}>
          <h2 className="t-lead c-gray center">Contact</h2>
          <p className="t-body c-light center">
            {contact.phone}
            <br />
            {contact.email}
          </p>
        </div>
        <div className={styles.map} data-enter="fade-blur">
          <ContactMap />
        </div>
      </section>
    </>
  );
}
