"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { ErrorGlyph } from "./icons";
import styles from "./contact-form.module.css";

type FieldName = "firstName" | "lastName" | "email" | "message";
type Values = Record<FieldName, string>;

const EMPTY: Values = { firstName: "", lastName: "", email: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Wix Forms validation copy, as published by the source form. */
function validate(values: Values): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  if (!values.firstName.trim()) errors.firstName = "Enter a first name.";
  if (!values.lastName.trim()) errors.lastName = "Enter a last name.";
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter an email address like example@mysite.com.";
  }
  return errors;
}

/**
 * Wix "Contact Form" (first/last name, email, message). Validation runs on blur and on
 * submit; a valid submit shows the source's thank-you message for 8 seconds. Nothing is
 * sent anywhere: this clone has no form backend.
 */
export function ContactForm({ className }: { className?: string }) {
  const id = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const errors = validate(values);

  useEffect(() => {
    if (!submitted) return;
    const timer = window.setTimeout(() => setSubmitted(false), 8000);
    return () => window.clearTimeout(timer);
  }, [submitted]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ firstName: true, lastName: true, email: true, message: true });
    const current = validate(values);
    const firstInvalid = (Object.keys(current) as FieldName[])[0];
    if (firstInvalid) {
      document.getElementById(`${id}-${firstInvalid}`)?.focus();
      return;
    }
    setValues(EMPTY);
    setTouched({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`${styles.root} ${className ?? ""}`} role="status">
        <div className={styles.thanks}>
          <p>
            <em>Thanks for submitting!</em>
          </p>
          <p>We’ll get back to you shortly.</p>
        </div>
      </div>
    );
  }

  const field = (name: FieldName, label: string, options: { required?: boolean; type?: string; multiline?: boolean; wide?: boolean }) => {
    const error = touched[name] ? errors[name] : undefined;
    const inputId = `${id}-${name}`;
    const errorId = `${inputId}-error`;
    const common = {
      id: inputId,
      name,
      value: values[name],
      required: options.required,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? errorId : undefined,
      onChange: (event: { target: { value: string } }) =>
        setValues((current) => ({ ...current, [name]: event.target.value })),
      onBlur: () => setTouched((current) => ({ ...current, [name]: true })),
    };
    return (
      <div className={`${styles.field} ${options.wide ? styles.wide : ""}`}>
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {options.required ? <span aria-hidden="true"> *</span> : null}
        </label>
        <div className={`${styles.box} ${options.multiline ? styles.boxArea : ""}`}>
          {options.multiline ? (
            <textarea {...common} className={styles.textarea} />
          ) : (
            <input {...common} type={options.type ?? "text"} className={styles.input} />
          )}
        </div>
        {error ? (
          <p id={errorId} className={styles.error}>
            <ErrorGlyph width={20} height={20} />
            {error}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    <form className={`${styles.root} ${className ?? ""}`} onSubmit={onSubmit} noValidate aria-label="Contact Form">
      <div className={styles.grid}>
        {field("firstName", "First name", { required: true })}
        {field("lastName", "Last name", { required: true })}
        {field("email", "Email", { required: true, type: "email", wide: true })}
        {field("message", "Write a message", { multiline: true, wide: true })}
        <button type="submit" className={styles.submit}>
          SEND
        </button>
      </div>
    </form>
  );
}
