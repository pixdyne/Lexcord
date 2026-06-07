"use client";

import Link from "next/link";
import { practiceAreas } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import styles from "./expertise.module.css";

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExpertiseContent() {
  const { t, areaLabel } = useLang();
  const s = t.pages.services;

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <span className="eyebrow">{s.heroEyebrow}</span>
          <h1 className={styles.introTitle}>
            {s.heroTitlePre}
            <span className="accent">{s.heroTitleEm}</span>
          </h1>
          <p className={styles.introLede}>{s.heroLede}</p>
        </div>
      </section>

      <section className={styles.listSection}>
        <div className="container">
          <ul className={styles.list}>
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/expertise/${area.slug}`} className={styles.row}>
                  <div className={styles.rowMain}>
                    <h2 className={styles.rowTitle}>{areaLabel(area.slug, area.navLabel)}</h2>
                    <p className={styles.rowDesc}>{t.summaries[area.slug]}</p>
                  </div>
                  <span className={styles.rowGo} aria-hidden="true">
                    <ArrowRight />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
