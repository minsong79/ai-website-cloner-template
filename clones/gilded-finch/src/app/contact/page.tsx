import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/site/ContactForm";
import { MapEmbed } from "@/components/site/MapEmbed";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
};

const HOURS = [
  { day: "Mon-Thu", time: "4 PM - 12 AM" },
  { day: "Fri", time: "4 PM - 2 AM" },
  { day: "Sat", time: "2 PM - 2 AM" },
  { day: "Sun", time: "2 PM - 11 PM" },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className={`wx-section ${styles.intro}`}>
        <div className={`wx-stage ${styles.stage}`}>
          <div className={styles.container}>
            <h1 className={styles.title}>Drop By or Drop Us a Line</h1>
            <p className={styles.lead}>We’re looking forward to welcoming you</p>
            <p className={styles.email}>info@mysite.com</p>
            <p className={styles.phone}>123-456-7890</p>
            <div className={styles.photo}>
              <Image
                src="/assets/images/contact-bar.jpg"
                alt=""
                fill
                sizes="(max-width: 1023px) 77vw, 32vw"
                className={styles.cover}
              />
            </div>
            <p className={styles.hoursTitle}>Opening Hours</p>
            <dl className={styles.hours}>
              {HOURS.map((row, index) => (
                <div key={row.day} className={styles.hoursRow} data-row={index}>
                  <dt>{row.day}</dt>
                  <dd>{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={`wx-section ${styles.formSection}`}>
        <div className={`wx-stage ${styles.stage}`}>
          <div className={styles.container}>
            <h2 className={styles.formTitle}>Contact form</h2>
            <ContactForm className={styles.form} />
            <MapEmbed className={styles.map} />
          </div>
        </div>
      </section>
    </>
  );
}
