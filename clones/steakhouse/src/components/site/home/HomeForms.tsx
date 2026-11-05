"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { GlobeIcon, SmallChevronDownIcon } from "../icons";
import styles from "./HomeForms.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMAIL_ERROR = "Enter an email address like example@mysite.com.";

function ErrorText({ children }: { children: ReactNode }) {
  return (
    <p className={styles.error} role="alert">
      <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.errorIcon}>
        <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" />
        <path d="M8 4.5v4.2M8 10.4v1.1" stroke="currentColor" strokeWidth="1.1" />
      </svg>
      <span>{children}</span>
    </p>
  );
}

/** "Join our mailing list" Wix Form: email (required) + consent checkbox (required). Local only. */
export function MailingForm() {
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [tried, setTried] = useState(false);
  const [done, setDone] = useState(false);
  const emailBad = !EMAIL_RE.test(email.trim());

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setTried(true);
    if (emailBad || !agree) return;
    setDone(true);
    setTried(false);
    setEmail("");
    setAgree(false);
  };

  return (
    <form className={styles.mailing} aria-label="Subscriptions" noValidate onSubmit={submit}>
      <label className={styles.mLabel} htmlFor="mailing-email">
        Enter your email here<span aria-hidden="true">*</span>
      </label>
      <input
        id="mailing-email"
        type="email"
        required
        aria-invalid={tried && emailBad}
        aria-label="Enter your email here"
        className={styles.mInput}
        data-error={(tried && emailBad) || undefined}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setDone(false);
        }}
      />
      {tried && emailBad && <ErrorText>{EMAIL_ERROR}</ErrorText>}
      <label className={styles.check}>
        <input
          type="checkbox"
          required
          checked={agree}
          aria-invalid={tried && !agree}
          onChange={(e) => {
            setAgree(e.target.checked);
            setDone(false);
          }}
        />
        <span className={styles.box} data-error={(tried && !agree) || undefined} aria-hidden="true" />
        <span className={styles.checkText}>
          Yes, subscribe me to your newsletter<span aria-hidden="true"> *</span>
        </span>
      </label>
      {tried && !agree && <ErrorText>Check the box to continue.</ErrorText>}
      <button type="submit" className={`${styles.subscribe} lulo`}>
        Subscribe now
      </button>
      <p className={styles.status} role="status" data-show={done || undefined}>
        {done ? "Thanks for subscribing!" : ""}
      </p>
    </form>
  );
}

type ContactValues = { first: string; last: string; email: string; phone: string; message: string };
const EMPTY: ContactValues = { first: "", last: "", email: "", phone: "", message: "" };

const COUNTRY_CODES = [
  { code: "", label: "Select a country code" },
  { code: "+1", label: "United States +1" },
  { code: "+1 ", label: "Canada +1" },
  { code: "+44", label: "United Kingdom +44" },
  { code: "+61", label: "Australia +61" },
  { code: "+82", label: "South Korea +82" },
  { code: "+49", label: "Germany +49" },
  { code: "+33", label: "France +33" },
];

/** "Contact & Location" Wix Form. Required: first name, last name, email. Local only. */
export function ContactForm() {
  const [v, setV] = useState<ContactValues>(EMPTY);
  const [country, setCountry] = useState("");
  const [tried, setTried] = useState(false);
  const [done, setDone] = useState(false);
  const errors = {
    first: !v.first.trim() ? "Enter a first name." : "",
    last: !v.last.trim() ? "Enter a last name." : "",
    email: !EMAIL_RE.test(v.email.trim()) ? EMAIL_ERROR : "",
  };
  const show = (k: keyof typeof errors) => (tried ? errors[k] : "");

  const field = (k: keyof ContactValues) => ({
    value: v[k],
    onChange: (e: { target: { value: string } }) => {
      setV((prev) => ({ ...prev, [k]: e.target.value }));
      setDone(false);
    },
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setTried(true);
    if (errors.first || errors.last || errors.email) return;
    setDone(true);
    setTried(false);
    setV(EMPTY);
    setCountry("");
  };

  return (
    <form className={styles.contact} aria-label="Contact" noValidate onSubmit={submit}>
      <div className={styles.cRow}>
        <div className={styles.cField}>
          <label className={styles.cLabel} htmlFor="contact-first">
            First name<span aria-hidden="true">*</span>
          </label>
          <input id="contact-first" className={styles.cInput} data-error={show("first") || undefined} required {...field("first")} />
          {show("first") && <ErrorText>{show("first")}</ErrorText>}
        </div>
        <div className={styles.cField}>
          <label className={styles.cLabel} htmlFor="contact-last">
            Last name<span aria-hidden="true">*</span>
          </label>
          <input id="contact-last" className={styles.cInput} data-error={show("last") || undefined} required {...field("last")} />
          {show("last") && <ErrorText>{show("last")}</ErrorText>}
        </div>
      </div>
      <div className={styles.cRow}>
        <div className={styles.cField}>
          <label className={styles.cLabel} htmlFor="contact-email">
            Email<span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            className={styles.cInput}
            data-error={show("email") || undefined}
            required
            {...field("email")}
          />
          {show("email") && <ErrorText>{show("email")}</ErrorText>}
        </div>
        <div className={styles.cField}>
          <label className={styles.cLabel} htmlFor="contact-phone">
            Phone
          </label>
          <div className={styles.phoneBox}>
            <span className={styles.country}>
              <GlobeIcon className={styles.globe} />
              {country && <span className={styles.code}>{country.trim()}</span>}
              <SmallChevronDownIcon className={styles.countryChevron} />
              <select
                aria-label="Phone. Select a country code"
                className={styles.countrySelect}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.label} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
            </span>
            <input id="contact-phone" type="tel" inputMode="tel" className={styles.phoneInput} {...field("phone")} />
          </div>
        </div>
      </div>
      <div className={styles.cField}>
        <label className={styles.cLabel} htmlFor="contact-message">
          Type your message here...
        </label>
        <textarea id="contact-message" className={styles.cTextarea} {...field("message")} />
      </div>
      <div className={styles.submitRow}>
        <button type="submit" className={`${styles.submit} lulo`}>
          Submit
        </button>
      </div>
      <p className={styles.status} role="status" data-show={done || undefined}>
        {done ? "Thanks for submitting!" : ""}
      </p>
    </form>
  );
}
