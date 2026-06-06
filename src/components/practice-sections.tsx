"use client";

import Link from "next/link";
import Image from "next/image";
import type { PracticeArea } from "@/data/types";
import { team } from "@/data/people";
import { renderAccent } from "@/lib/accent";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./reveal";
import { PlaceholderText, PlaceholderImage } from "./placeholder";
import styles from "./sections.module.css";

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface PracticeSectionsProps {
  area: PracticeArea;
  areaZh: PracticeArea;
}

export function PracticeSections({ area: areaEn, areaZh }: PracticeSectionsProps) {
  const { lang, t } = useLang();
  const area = lang === "zh" ? areaZh : areaEn;
  const c = t.common;

  // Solicitors who work across this practice area.
  const areaTeam = team.filter((m) => !m.placeholder && m.areas.includes(area.slug));

  return (
    <>
      {/* Hero — title + overview */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className="eyebrow eyebrow--light">{area.heroEyebrow}</span>
            <h1 className={styles.heroTitle}>{renderAccent(area.heroTitle)}</h1>
            <p className={styles.heroLede}>{area.heroLede}</p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn--primary">
                {t.nav.book}
              </Link>
              <a href="#services" className="btn btn--ghost-light">
                {c.ourServices}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section id="services" className="section">
        <div className="container">
          <Reveal className={styles.split} as="div">
            <div>
              <span className="eyebrow">{area.servicesEyebrow}</span>
              <h2 className="section-head" style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
                {area.servicesHeading}
              </h2>
            </div>
            <p>{area.servicesIntro}</p>
          </Reveal>

          <div className={styles.grid}>
            {area.services.map((service, i) => (
              <article key={service.title} className={styles.card}>
                <span className={styles.cardIndex}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardBody}>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related insights / posts */}
      <section className={`section ${styles.posts}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{c.relatedPosts}</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>{area.navLabel}</h2>
            <p>{c.relatedPostsLede}</p>
          </div>
          <div className={styles.postGrid}>
            {[0, 1, 2].map((i) => (
              <article key={i} className={styles.postCard}>
                <PlaceholderImage label={area.navLabel} ratio="16 / 9" />
                <div className={styles.postBody}>
                  <h3 className={styles.postTitle}>
                    <PlaceholderText tag={`${t.pages.placeholderTag} ${i + 1}`}>{c.postTitle}</PlaceholderText>
                  </h3>
                  <p className={styles.postExcerpt}>{c.postExcerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Area team + book */}
      <section className={`section ${styles.areaTeam}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--light">{c.areaTeam}</span>
            <h2 style={{ color: "#fff", fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              {area.navLabel}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.72)" }}>{c.areaTeamLede}</p>
          </div>

          {areaTeam.length > 0 ? (
            <div className={styles.teamRow}>
              {areaTeam.map((m) => (
                <Link key={m.slug} href={`/people/${m.slug}`} className={styles.teamCard}>
                  <div className={styles.teamPhoto}>
                    {m.photo && <Image src={m.photo} alt={m.name} fill sizes="220px" />}
                  </div>
                  <div className={styles.teamInfo}>
                    <h3 className={styles.teamName}>{m.name}</h3>
                    <span className={styles.teamRole}>{lang === "zh" ? m.roleZh : m.role}</span>
                    <span className={styles.teamLink}>
                      {c.viewProfile} <ArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
              <Link href="/contact" className={styles.teamBook}>
                <span className={styles.teamBookIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                    <path d="M4 5h16v11H7l-3 3V5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className={styles.teamBookText}>{t.nav.book}</span>
                <ArrowRight />
              </Link>
            </div>
          ) : (
            <div className={styles.teamEmpty}>
              <p>{c.areaTeamEmpty}</p>
              <Link href="/contact" className="btn btn--primary">
                {t.nav.book} <ArrowRight />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className={styles.closing}>
        <div className="container">
          <div className={styles.closingInner}>
            <span className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              {area.closingKicker}
            </span>
            <h2 className={styles.closingTitle}>{renderAccent(area.closingTitle)}</h2>
            {area.closingBody && <p className={styles.closingBody}>{area.closingBody}</p>}
            <div className={styles.closingActions}>
              <Link href="/contact" className="btn btn--primary">
                {area.closingCta} <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
