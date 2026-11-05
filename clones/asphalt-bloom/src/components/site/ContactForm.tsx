"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import styles from "./ContactForm.module.css";

type FieldName = "firstName" | "lastName" | "email" | "message";

type Field = {
  name: FieldName;
  label: string;
  type: "text" | "email";
  required: boolean;
  autoComplete: string;
};

const fields: Field[] = [
  { name: "firstName", label: "First name", type: "text", required: true, autoComplete: "given-name" },
  { name: "lastName", label: "Last name", type: "text", required: true, autoComplete: "family-name" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "message", label: "Message", type: "text", required: false, autoComplete: "off" },
];

// Messages from the Wix Forms app used by the template.
const requiredMessages: Partial<Record<FieldName, string>> = {
  firstName: "Enter a first name.",
  lastName: "Enter a last name.",
  email: "Enter an email address like example@mysite.com.",
};
const EMAIL_FORMAT = "Enter an email address like example@mysite.com.";
const SUCCESS_MESSAGE = "Thanks, we received your submission.";
const SUCCESS_SECONDS = 8;

type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const emptyValues: Values = { firstName: "", lastName: "", email: "", message: "" };

function validate(field: Field, value: string): string | undefined {
  const trimmed = value.trim();
  if (field.required && !trimmed) return requiredMessages[field.name];
  if (field.type === "email" && trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
    return EMAIL_FORMAT;
  }
  return undefined;
}

// Local-only contact form: validates like the Wix form and shows its thank-you
// message. Nothing is sent anywhere.
export function ContactForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [dirty, setDirty] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const inputs = useRef<Partial<Record<FieldName, HTMLInputElement | null>>>({});

  useEffect(() => {
    if (!submitted) return;
    const timer = window.setTimeout(() => setSubmitted(false), SUCCESS_SECONDS * 1000);
    return () => window.clearTimeout(timer);
  }, [submitted]);

  const setFieldError = (name: FieldName, message: string | undefined) => {
    setErrors((current) => {
      const next = { ...current };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const firstInvalid = fields.find((field) => validate(field, values[field.name]));
    if (firstInvalid) {
      setFieldError(firstInvalid.name, validate(firstInvalid, values[firstInvalid.name]));
      inputs.current[firstInvalid.name]?.focus();
      return;
    }
    setErrors({});
    setDirty({});
    setValues(emptyValues);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.form}>
        <p className={styles.success} role="status">
          {SUCCESS_MESSAGE}
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate aria-label="Contact form">
      {fields.map((field) => {
        const id = `contact-${field.name}`;
        const error = errors[field.name];
        return (
          <div key={field.name} className={styles.field}>
            <label htmlFor={id} className={styles.label}>
              {field.label}
              {field.required ? (
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              ) : null}
            </label>
            <div className={styles.inputWrap} data-invalid={error ? true : undefined}>
              <input
                ref={(node) => {
                  inputs.current[field.name] = node;
                }}
                id={id}
                name={field.name}
                type={field.type}
                required={field.required}
                autoComplete={field.autoComplete}
                maxLength={field.name === "message" ? 1000 : 100}
                value={values[field.name]}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${id}-error` : undefined}
                onChange={(event) => {
                  const value = event.target.value;
                  setValues((current) => ({ ...current, [field.name]: value }));
                  setDirty((current) => ({ ...current, [field.name]: true }));
                  if (errors[field.name]) setFieldError(field.name, validate(field, value));
                }}
                onBlur={() => {
                  if (dirty[field.name]) setFieldError(field.name, validate(field, values[field.name]));
                }}
              />
            </div>
            {error ? (
              <p id={`${id}-error`} className={styles.error}>
                <svg viewBox="0 0 18 18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M9 2.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM9.5 5.5v4h-1v-4h1Z"
                  />
                </svg>
                {error}
              </p>
            ) : null}
          </div>
        );
      })}
      <button type="submit" className={styles.submit}>
        <span>Submit</span>
      </button>
    </form>
  );
}
