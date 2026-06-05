import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas, practiceSummaries } from "@/data/practices";
import sectionStyles from "@/components/sections.module.css";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "An overview of Lexcord's seven practice areas — property, commercial, wills and estates, intellectual property, criminal, notarial, and migration law.",
};

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner}>
            <span className="eyebrow eyebrow--light">Our Services</span>
            <h1 className={sectionStyles.heroTitle}>
              Seven practice areas, <span className="accent">one standard of care</span>
            </h1>
            <p className={sectionStyles.heroLede}>
              Lexcord brings the breadth of a general practice together with the depth of specialist
              counsel — advising individuals, families, and businesses across every Australian state
              and territory.
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
          <ol className={styles.list}>
            {practiceAreas.map((area, i) => (
              <li key={area.slug}>
                <Link href={`/expertise/${area.slug}`} className={styles.row}>
                  <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                  <div className={styles.rowMain}>
                    <h2 className={styles.rowTitle}>{area.navLabel}</h2>
                    <p className={styles.rowDesc}>{practiceSummaries[area.slug]}</p>
                  </div>
                  <span className={styles.rowGo} aria-hidden="true">
                    <ArrowRight />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
