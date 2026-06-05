"use client";

import { useState } from "react";
import { practiceAreas } from "@/data/practices";
import styles from "./contact.module.css";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={styles.form} role="status">
        <h3 style={{ fontSize: "var(--text-xl)" }}>Thank you — we have your enquiry.</h3>
        <p className={styles.note}>
          A member of our team will be in touch within one business day to arrange your
          consultation. For urgent criminal or bail matters, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="firstName">
            First name
          </label>
          <input className={styles.input} id="firstName" name="firstName" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="lastName">
            Last name
          </label>
          <input className={styles.input} id="lastName" name="lastName" required />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input className={styles.input} id="email" name="email" type="email" required />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Phone
          </label>
          <input className={styles.input} id="phone" name="phone" type="tel" />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="matter">
          Area of law
        </label>
        <select className={styles.select} id="matter" name="matter" defaultValue="">
          <option value="" disabled>
            Select the area that best fits…
          </option>
          {practiceAreas.map((area) => (
            <option key={area.slug} value={area.slug}>
              {area.navLabel}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          How can we help?
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          placeholder="Tell us a little about your matter. There is no obligation, and your enquiry is confidential."
          required
        />
      </div>

      <button type="submit" className={`btn btn--primary ${styles.submit}`}>
        Request a consultation
      </button>
      <p className={styles.note}>
        By submitting this form you agree to be contacted about your enquiry. The information you
        provide is general and does not create a lawyer–client relationship.
      </p>
    </form>
  );
}
