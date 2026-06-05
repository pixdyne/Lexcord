import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description:
    "Book a confidential consultation with Lexcord Lawyers. We will assess your matter honestly and explain your options with no obligation to proceed.",
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className="eyebrow eyebrow--light">Book a consultation</span>
            <h1 className={styles.heroTitle}>Let&apos;s talk about your matter</h1>
            <p className={styles.heroLede}>
              Tell us a little about your situation. We will give you an honest view, explain your
              options, and tell you what it will cost — with no obligation to proceed.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <ContactForm />

            <aside className={styles.aside}>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>Email</p>
                <p className={`${styles.asideValue} ${styles.placeholder}`}>
                  hello@lexcord.com.au <br />
                  <span style={{ fontSize: "0.8rem" }}>(placeholder — to be confirmed)</span>
                </p>
              </div>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>Phone</p>
                <p className={`${styles.asideValue} ${styles.placeholder}`}>
                  To be confirmed
                </p>
              </div>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>Offices</p>
                <p className={`${styles.asideValue} ${styles.placeholder}`}>
                  Servicing all Australian states &amp; territories. <br />
                  Office address to be confirmed.
                </p>
              </div>
              <div className={styles.asideBlock}>
                <p className={styles.asideLabel}>Hours</p>
                <p className={styles.asideValue}>
                  Monday – Friday, by appointment. <br />
                  Urgent criminal &amp; bail matters: contact us any time.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
