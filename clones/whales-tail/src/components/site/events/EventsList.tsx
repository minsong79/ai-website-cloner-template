"use client";

import Link from "next/link";
import { useState } from "react";
import { EVENTS } from "@/lib/events";
import { EventChevronIcon } from "../Icons";
import s from "./EventsList.module.css";

/** Wix Events "list" widget: each row expands to show time, address and description. */
export function EventsList() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <ul className={s.list}>
      {EVENTS.map((event) => {
        const expanded = open === event.slug;
        const toggle = () => setOpen(expanded ? null : event.slug);
        return (
          <li key={event.slug} className={s.item} data-expanded={expanded ? "true" : "false"}>
            <div className={s.head}>
              <div className={s.info}>
                <p className={s.date}>{event.shortDate}</p>
                <button type="button" className={s.titleButton} aria-expanded={expanded} onClick={toggle}>
                  <span className={s.title}>{event.title}</span>
                  <span className={s.location}>
                    <span className={s.slash}> / </span>
                    {event.location}
                  </span>
                  <EventChevronIcon className={s.chevron} />
                </button>
                <Link href={`/event-details/${event.slug}`} className={s.titleLink}>
                  {event.title}
                </Link>
                <p className={s.dateMobile}>{event.shortDate}</p>
                <button type="button" className={s.moreInfo} aria-expanded={expanded} onClick={toggle}>
                  <span>{expanded ? "Less info" : "More info"}</span>
                  <EventChevronIcon className={s.moreChevron} />
                </button>
              </div>
              <Link href={`/event-details/${event.slug}`} className={`${s.rsvp} ${s.rsvpDesktop}`}>
                RSVP
              </Link>
            </div>
            <div className={s.details} aria-hidden={!expanded}>
              <div className={s.detailsInner}>
                <p>{event.dateTime}</p>
                <p>{event.address}</p>
                <p className={s.description}>{event.description}</p>
              </div>
            </div>
            <Link href={`/event-details/${event.slug}`} className={`${s.rsvp} ${s.rsvpMobile}`}>
              RSVP
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
