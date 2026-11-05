"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import type { PubEvent } from "@/lib/events";
import s from "./RsvpForm.module.css";

type Field = "firstName" | "lastName" | "email";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Wix Events RSVP "Add your details" step. Local only: shows the RSVP confirmation copy. */
export function RsvpForm({ event }: { event: PubEvent }) {
  const [values, setValues] = useState<Record<Field, string>>({ firstName: "", lastName: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);

  const errors: Partial<Record<Field, string>> = {};
  if (!values.firstName.trim()) errors.firstName = "Enter a first name";
  if (!values.lastName.trim()) errors.lastName = "Enter a last name";
  if (!values.email.trim()) errors.email = "Enter an email address";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Enter a valid email address";

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length === 0) setDone(true);
  };

  const field = (name: Field, label: string, type = "text") => (
    <div className={s.field}>
      <label htmlFor={`rsvp-${name}`} className={s.label}>
        {label} <span>*</span>
      </label>
      <input
        id={`rsvp-${name}`}
        type={type}
        className={s.input}
        value={values[name]}
        aria-invalid={submitted && Boolean(errors[name])}
        data-error={submitted && errors[name] ? "true" : undefined}
        onChange={(e) => setValues((v) => ({ ...v, [name]: e.target.value }))}
      />
      {submitted && errors[name] ? <p className={s.error}>{errors[name]}</p> : null}
    </div>
  );

  return (
    <div className={s.layout}>
      <aside className={s.summary}>
        <h2>{event.title}</h2>
        <p>{event.dateTime}</p>
        <p>{event.location}</p>
      </aside>
      <div className={s.main}>
        {done ? (
          <div className={s.done} role="status">
            <h1 className={s.heading}>Thank you!</h1>
            <p className={s.doneText}>An email with all the event info was sent to you.</p>
            <p className={s.note}>(Local clone: nothing was sent.)</p>
            <div className={s.doneActions}>
              <a
                className={s.secondary}
                href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&location=${encodeURIComponent(event.address)}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                Add to Calendar
              </a>
              <Link className={s.secondary} href={`/event-details/${event.slug}`}>
                Share
              </Link>
            </div>
          </div>
        ) : (
          <form className={s.form} noValidate onSubmit={onSubmit}>
            <h1 className={s.heading}>Add your details</h1>
            <div className={s.row}>
              {field("firstName", "First name")}
              {field("lastName", "Last Name")}
            </div>
            {field("email", "Email", "email")}
            <button type="submit" className={s.submit}>
              SUBMIT
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
