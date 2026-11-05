"use client";

import { useId, useState, type FormEvent } from "react";
import { ErrorCircleIcon } from "../Icons";
import s from "./NewsletterForm.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Wix Forms newsletter block. Validates like the source; nothing is sent anywhere. */
export function NewsletterForm() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);

  const emailError = submitted && !EMAIL_RE.test(email.trim());
  const consentError = submitted && !consent;

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (!EMAIL_RE.test(email.trim()) || !consent) return;
    setDone(true);
    setSubmitted(false);
    setEmail("");
    setConsent(false);
  };

  return (
    <form className={s.form} noValidate onSubmit={onSubmit}>
      <label className={s.label} htmlFor={`${id}-email`}>
        Email <span>*</span>
      </label>
      <div className={s.inputWrap} data-error={emailError ? "true" : undefined}>
        <input
          id={`${id}-email`}
          className={s.input}
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          aria-invalid={emailError}
          aria-describedby={emailError ? `${id}-email-error` : undefined}
          onChange={(e) => {
            setEmail(e.target.value);
            setDone(false);
          }}
        />
      </div>
      {emailError ? (
        <p className={s.error} id={`${id}-email-error`}>
          <ErrorCircleIcon />
          Enter an email address like example@mysite.com.
        </p>
      ) : null}
      <label className={s.check}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            setDone(false);
          }}
        />
        <span className={s.box} data-error={consentError ? "true" : undefined} aria-hidden="true" />
        <span className={s.checkText}>
          Yes, subscribe me to your newsletter. <span>*</span>
        </span>
      </label>
      {consentError ? (
        <p className={s.error}>
          <ErrorCircleIcon />
          Check the box to continue.
        </p>
      ) : null}
      <button type="submit" className={s.submit}>
        Subscribe
      </button>
      {done ? (
        <p className={s.thanks} role="status">
          Thanks, we received your submission.
        </p>
      ) : null}
    </form>
  );
}
