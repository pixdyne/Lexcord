import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderText, PlaceholderImage } from "@/components/placeholder";
import sectionStyles from "@/components/sections.module.css";
import styles from "./resources.module.css";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Plain-language guides and commentary on Australian property, commercial, estates, IP, criminal, notarial, and migration law from Lexcord Lawyers.",
};

// Placeholder topics derived from the practice areas — real articles pending.
const TOPICS = [
  "Property & Conveyancing",
  "Commercial",
  "Wills & Estates",
  "Intellectual Property",
  "Criminal Law",
  "Migration Law",
];

export default function ResourcesPage() {
  return (
    <>
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner}>
            <span className="eyebrow eyebrow--light">Resources &amp; Insights</span>
            <h1 className={sectionStyles.heroTitle}>
              Plain-language guidance on{" "}
              <span className="accent">the law that affects you</span>
            </h1>
            <p className={sectionStyles.heroLede}>
              <PlaceholderText light>
                Article and insight content is not part of the supplied document and is pending the
                firm&apos;s real publications. The layout below shows how it will be presented.
              </PlaceholderText>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Latest insights</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              Articles &amp; guides
            </h2>
            <p>Placeholder cards — replace each with a real article when content is ready.</p>
          </div>

          <div className={styles.grid}>
            {TOPICS.map((topic, i) => (
              <article key={topic} className={styles.card}>
                <PlaceholderImage label={`${topic} cover`} ratio="16 / 9" />
                <div className={styles.cardBody}>
                  <span className={styles.cardCat}>{topic}</span>
                  <h3 className={styles.cardTitle}>
                    <PlaceholderText tag={`Article ${i + 1}`}>Article title goes here</PlaceholderText>
                  </h3>
                  <p className={styles.cardExcerpt}>
                    A short standfirst summarising the article will appear here once real content is
                    supplied.
                  </p>
                  <span className={styles.cardMeta}>Author · Date · 5 min read</span>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.note}>
            <Link href="/contact" className="btn btn--ghost">
              Have a question now? Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
