import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/data/practices";
import sectionStyles from "@/components/sections.module.css";

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
              A general practice with{" "}
              <span className="accent">specialist depth</span>
            </h1>
            <p className={sectionStyles.heroLede}>
              Lexcord brings together the breadth of a full-service firm and the focus of specialist
              counsel — advising individuals, families, and businesses across every Australian state
              and territory in plain language, without jargon.
            </p>
            <div className={sectionStyles.heroActions}>
              <Link href="/contact" className="btn btn--primary">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              Counsel across seven areas of law
            </h2>
            <p>
              Each area is led by practitioners who treat your matter as their own. Explore any
              practice area to see how we work.
            </p>
          </div>
          <div className={sectionStyles.tagGrid} style={{ marginTop: "clamp(2rem,1rem + 3vw,3.5rem)" }}>
            {practiceAreas.map((area) => (
              <Link key={area.slug} href={`/expertise/${area.slug}`} className={sectionStyles.tagCard}>
                <h3 className={sectionStyles.tagCardTitle}>{area.navLabel}</h3>
                <p className={sectionStyles.tagCardBody}>{area.heroLede}</p>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: "2.5rem", color: "var(--ink-400)", fontStyle: "italic" }}>
            Firm history, team profiles, admissions, and credentials are placeholders pending your
            content.
          </p>
        </div>
      </section>
    </>
  );
}
