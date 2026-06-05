import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/data/practices";
import { PlaceholderText, PlaceholderImage } from "@/components/placeholder";
import sectionStyles from "@/components/sections.module.css";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Lexcord",
  description:
    "Lexcord is an Australian law firm offering clear, considered counsel across property, commercial, estates, intellectual property, criminal, notarial, and migration law.",
};

export default function AboutPage() {
  return (
    <>
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner}>
            <span className="eyebrow eyebrow--light">About the firm</span>
            <h1 className={sectionStyles.heroTitle}>
              <PlaceholderText light tag="Headline">
                Firm headline pending — e.g. a general practice with specialist depth.
              </PlaceholderText>
            </h1>
            <p className={sectionStyles.heroLede}>
              <PlaceholderText light>
                Firm overview pending. This copy is not part of the supplied document. Replace with
                the firm&apos;s real story, values, and positioning.
              </PlaceholderText>
            </p>
            <div className={sectionStyles.heroActions}>
              <Link href="/contact" className="btn btn--primary">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story + portrait placeholders */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <span className="eyebrow">Our story</span>
              <h2 style={{ fontSize: "var(--text-2xl)", margin: "1rem 0 1.2rem" }}>
                <PlaceholderText tag="Pending">Firm history headline</PlaceholderText>
              </h2>
              <p className={styles.storyText}>
                <PlaceholderText>
                  Firm history, founding story, values, and approach to be supplied. This section is
                  a placeholder, not part of the source document.
                </PlaceholderText>
              </p>
            </div>
            <PlaceholderImage label="Office / firm photography" ratio="4 / 3" />
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className={`section ${styles.teamBand}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The team</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              <PlaceholderText tag="Pending">Our people</PlaceholderText>
            </h2>
            <p>Lawyer profiles, photos, admissions, and credentials are pending your content.</p>
          </div>
          <div className={styles.teamGrid}>
            {[1, 2, 3].map((n) => (
              <div key={n} className={styles.teamCard}>
                <PlaceholderImage label={`Lawyer ${n} portrait`} ratio="1 / 1" />
                <div className={styles.teamBody}>
                  <h3 className={styles.teamName}>
                    <PlaceholderText tag="Name">Lawyer name</PlaceholderText>
                  </h3>
                  <p className={styles.teamRole}>Title · Admissions</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do — uses PDF-sourced practice intros */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              Counsel across seven areas of law
            </h2>
            <p>Explore any practice area to see how we work.</p>
          </div>
          <div className={sectionStyles.tagGrid} style={{ marginTop: "clamp(2rem,1rem + 3vw,3.5rem)" }}>
            {practiceAreas.map((area) => (
              <Link key={area.slug} href={`/expertise/${area.slug}`} className={sectionStyles.tagCard}>
                <h3 className={sectionStyles.tagCardTitle}>{area.navLabel}</h3>
                <p className={sectionStyles.tagCardBody}>{area.heroLede}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
