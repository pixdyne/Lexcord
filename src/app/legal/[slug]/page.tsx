import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderText } from "@/components/placeholder";
import sectionStyles from "@/components/sections.module.css";
import styles from "./legal.module.css";

interface LegalDoc {
  slug: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

const LEGAL: Record<string, LegalDoc> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    intro:
      "How Lexcord collects, uses, stores, and protects your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.",
    sections: [
      { heading: "Information we collect", body: "" },
      { heading: "How we use your information", body: "" },
      { heading: "Disclosure to third parties", body: "" },
      { heading: "Data security and retention", body: "" },
      { heading: "Accessing and correcting your information", body: "" },
      { heading: "Contact and complaints", body: "" },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Use",
    intro: "The terms governing your use of the Lexcord website.",
    sections: [
      { heading: "Acceptance of terms", body: "" },
      { heading: "Use of the website", body: "" },
      { heading: "Intellectual property", body: "" },
      { heading: "Limitation of liability", body: "" },
      { heading: "Governing law", body: "" },
    ],
  },
  disclaimer: {
    slug: "disclaimer",
    title: "Disclaimer",
    intro:
      "Important information about the general nature of the content on this website and the absence of a lawyer–client relationship.",
    sections: [
      { heading: "No legal advice", body: "" },
      { heading: "No lawyer–client relationship", body: "" },
      { heading: "Accuracy of information", body: "" },
      { heading: "External links", body: "" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(LEGAL).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const doc = LEGAL[params.slug];
  if (!doc) return {};
  return { title: doc.title, description: doc.intro };
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const doc = LEGAL[params.slug];
  if (!doc) notFound();

  return (
    <>
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner} style={{ paddingBlock: "clamp(3rem,2rem + 5vw,5.5rem)" }}>
            <span className="eyebrow eyebrow--light">Legal</span>
            <h1 className={sectionStyles.heroTitle} style={{ fontSize: "var(--text-3xl)" }}>
              {doc.title}
            </h1>
            <p className={sectionStyles.heroLede}>{doc.intro}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.doc}>
            <p className={styles.lead}>
              <PlaceholderText>
                This page is a placeholder. The firm&apos;s final {doc.title.toLowerCase()} wording
                is pending and should be reviewed by a qualified practitioner before publication.
              </PlaceholderText>
            </p>
            {doc.sections.map((section, i) => (
              <div key={i} className={styles.section}>
                <h2 className={styles.heading}>
                  {String(i + 1)}. {section.heading}
                </h2>
                <p className={styles.body}>
                  <PlaceholderText tag="Pending">Section content to be supplied.</PlaceholderText>
                </p>
              </div>
            ))}
            <p className={styles.updated}>Last updated: pending</p>
          </div>
        </div>
      </section>
    </>
  );
}
