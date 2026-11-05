import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/site/Icons";
import { EVENT_MAP, EVENTS, SOURCE_ORIGIN, findEvent } from "@/lib/events";
import s from "./event.module.css";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = findEvent(slug);
  return { title: event ? event.title : "Event" };
}

export default async function EventDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) notFound();
  const shareUrl = `${SOURCE_ORIGIN}/event-details/${event.slug}`;
  const mapSrc = `https://maps.google.com/maps?q=${EVENT_MAP.lat},${EVENT_MAP.lng}&z=14&output=embed`;

  return (
    <div className={s.page}>
      <section className={s.hero}>
        <h1 className={s.title}>{event.title}</h1>
        <p className={s.when}>
          <span>{event.shortDate}</span>
          <span className={s.sep}>|</span>
          <span>{event.location}</span>
        </p>
        <p className={s.description}>{event.description}</p>
        <Link href={`/event-details/${event.slug}/form`} className={`${s.rsvp} ${s.rsvpCenter}`}>
          RSVP
        </Link>
      </section>
      <section className={s.column}>
        <h2 className={s.h2}>Time &amp; Location</h2>
        <p className={s.info}>{event.dateTime}</p>
        <p className={s.info}>{event.address}</p>
        <Link href={`/event-details/${event.slug}/form`} className={`${s.rsvp} ${s.rsvpLeft}`}>
          RSVP
        </Link>
      </section>
      <div className={s.map}>
        <iframe title={`Map of ${event.address}`} src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <section className={`${s.column} ${s.share}`}>
        <h2 className={s.h2}>Share this event</h2>
        <div className={s.icons}>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share event on Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=Check%20out%20this%20event.%20Hope%20to%20see%20you%20there!`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share event on X"
          >
            <XIcon />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Share event on LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </section>
    </div>
  );
}
