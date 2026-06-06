"use client";

import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "@/data/practices";
import { team } from "@/data/people";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { PlaceholderText } from "@/components/placeholder";
import styles from "./home.module.css";

const HERO_IMG = "/images/office/office-5.jpg";
const CONTACT_IMG = "/images/office/office-3.jpg";
const MAPS = "https://maps.google.com/?q=530+Little+Collins+St+Melbourne+VIC+3000";
const EMAIL = "info@lexcord.com.au";
const PHONE_DISPLAY = "+61 3 7054 5135";
const PHONE_DIAL = "+61370545135";

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" fill="none" aria-hidden="true">
      <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M10 40c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function WhyIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
        <path d="M16 5v22M9 27h14M6 11h20M16 6l-7 5M16 6l7 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 11l-3 7a3 3 0 006 0l-3-7zM26 11l-3 7a3 3 0 006 0l-3-7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.7" />
        <path d="M21 11l-3.5 6.5L11 21l3.5-6.5L21 11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
      <path d="M16 4l10 4v7c0 6.5-4.3 10.7-10 13-5.7-2.3-10-6.5-10-13V8l10-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M11.5 16l3 3 6-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" width="34" height="28" fill="currentColor" aria-hidden="true">
      <path d="M0 32V18C0 8 5 1.6 15 0l2 5C11 6.5 8 10 8 15h6v17H0zm22 0V18C22 8 27 1.6 37 0l2 5c-6 1.5-9 5-9 10h6v17H22z" />
    </svg>
  );
}

export default function HomePage() {
  const { t, areaLabel, lang } = useLang();
  const h = t.pages.home;
  const tag = t.pages.placeholderTag;

  const stats = [
    { num: "7", label: h.statsAreas },
    { num: lang === "zh" ? "全澳" : "All", label: h.statsStates },
    { num: lang === "zh" ? "固定费" : "Fixed-fee", label: h.statsFixed },
    { num: "PEXA", label: h.statsPexa },
  ];

  return (
    <>
      {/* Hero — photography-led */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image src={HERO_IMG} alt="" fill priority sizes="100vw" className={styles.heroImg} />
          <div className={styles.heroScrim} />
        </div>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={`eyebrow eyebrow--light ${styles.heroEyebrow}`}>{h.heroEyebrow}</span>
            <h1 className={styles.heroTitle}>
              <PlaceholderText light tag="Headline">
                {h.heroTitle}
              </PlaceholderText>
            </h1>
            <p className={styles.heroLede}>
              <PlaceholderText light tag={tag}>
                {h.heroLede}
              </PlaceholderText>
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn--primary">
                {t.nav.book} <ArrowRight />
              </Link>
              <Link href="/services" className="btn btn--ghost-light">
                {h.explore}
              </Link>
            </div>
          </div>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statNum}>{stat.num}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className={`section ${styles.introBand}`}>
        <div className="container">
          <Reveal className={styles.introLayout} as="div">
            <p className={styles.introBig}>
              <PlaceholderText tag={tag}>{h.introBig}</PlaceholderText>
            </p>
            <div className={styles.introBody}>
              <p>
                <PlaceholderText tag={tag}>{h.introBody}</PlaceholderText>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise grid */}
      <section id="expertise" className={`section ${styles.expertise}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--light">{h.expertiseEyebrow}</span>
            <h2 style={{ color: "#fff", fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              {h.expertiseHeading}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.72)" }}>{h.expertiseLede}</p>
          </div>
          <div className={styles.expGrid}>
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} as="div" delay={(i % 3) * 70} className={styles.expCell}>
                <Link href={`/expertise/${area.slug}`} className={styles.expCard}>
                  <span className={styles.expIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.expTitle}>{areaLabel(area.slug, area.navLabel)}</h3>
                  <p className={styles.expDesc}>{t.summaries[area.slug]}</p>
                  <span className={styles.expLink}>
                    {t.common.learnMore} <ArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* People preview */}
      <section className={`section ${styles.peopleBand}`}>
        <div className="container">
          <div className={styles.peopleHead}>
            <div>
              <span className="eyebrow">{h.peopleEyebrow}</span>
              <h2 style={{ fontSize: "var(--text-2xl)", margin: "1rem 0 0.8rem" }}>{h.peopleHeading}</h2>
              <p style={{ color: "var(--muted)", maxWidth: "44ch", fontSize: "var(--text-lg)", lineHeight: 1.4 }}>
                {h.peopleLede}
              </p>
            </div>
            <Link href="/people" className="btn btn--ghost">
              {h.peopleCta} <ArrowRight />
            </Link>
          </div>

          <div className={styles.peopleGrid}>
            {team.slice(0, 4).map((m) => {
              const inner = (
                <>
                  <div className={styles.peoplePhoto}>
                    {m.photo ? (
                      <Image src={m.photo} alt={m.name} fill sizes="(max-width: 900px) 50vw, 280px" />
                    ) : (
                      <div className={styles.peopleEmpty}>
                        <PersonIcon />
                      </div>
                    )}
                  </div>
                  <div className={styles.peopleInfo}>
                    <h3 className={styles.peopleName}>
                      {m.placeholder ? (lang === "zh" ? "成员待加入" : "Name pending") : m.name}
                    </h3>
                    <span className={styles.peopleRole}>{lang === "zh" ? m.roleZh : m.role}</span>
                  </div>
                </>
              );
              return m.placeholder ? (
                <div key={m.slug} className={`${styles.peopleCard} ${styles.peopleCardEmpty}`}>{inner}</div>
              ) : (
                <Link key={m.slug} href={`/people/${m.slug}`} className={styles.peopleCard}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Lexcord */}
      <section className={`section ${styles.approach}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{h.whyEyebrow}</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>{h.whyHeading}</h2>
          </div>
          <div className={styles.approachGrid}>
            {h.why.map((item, i) => (
              <Reveal key={item.title} as="article" delay={i * 80} className={styles.approachCard}>
                <span className={styles.approachIcon}>
                  <WhyIcon index={i} />
                </span>
                <h3 className={styles.approachTitle}>{item.title}</h3>
                <p className={styles.approachText}>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights / journal preview */}
      <section className={`section ${styles.journal}`}>
        <div className="container">
          <div className={styles.peopleHead}>
            <div>
              <span className="eyebrow">{h.journalEyebrow}</span>
              <h2 style={{ fontSize: "var(--text-2xl)", margin: "1rem 0 0.8rem" }}>{h.journalHeading}</h2>
              <p style={{ color: "var(--muted)", maxWidth: "46ch", fontSize: "var(--text-lg)", lineHeight: 1.4 }}>
                {h.journalLede}
              </p>
            </div>
            <Link href="/resources" className="btn btn--ghost">
              {h.journalCta} <ArrowRight />
            </Link>
          </div>
          <div className={styles.journalGrid}>
            {practiceAreas.slice(0, 3).map((area, i) => (
              <Link key={area.slug} href="/resources" className={styles.journalCard}>
                <span className={styles.journalCat}>{areaLabel(area.slug, area.navLabel)}</span>
                <h3 className={styles.journalTitle}>
                  <PlaceholderText tag={`${tag} ${i + 1}`}>{t.pages.resources.cardTitle}</PlaceholderText>
                </h3>
                <p className={styles.journalExcerpt}>{t.pages.resources.cardExcerpt}</p>
                <span className={styles.journalMeta}>{t.pages.resources.cardMeta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <div className="section-head" style={{ marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              {h.testimonialEyebrow}
            </span>
            <h2 style={{ color: "#fff", fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              {h.testimonialHeading}
            </h2>
          </div>
          <div className={styles.quoteGrid}>
            {h.testimonials.map((tm, i) => (
              <figure key={i} className={styles.quoteCard}>
                <span className={styles.quoteMark}>
                  <QuoteMark />
                </span>
                <blockquote className={styles.quoteText}>
                  <PlaceholderText light tag={tag}>{tm.quote}</PlaceholderText>
                </blockquote>
                <figcaption className={styles.quoteName}>
                  {tm.name} <span>· {tm.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact band */}
      <section className={styles.contactBand}>
        <div className={styles.contactGrid}>
          <div className={styles.contactMedia}>
            <Image src={CONTACT_IMG} alt="Lexcord office" fill sizes="(max-width: 900px) 100vw, 50vw" className={styles.contactImg} />
          </div>
          <div className={styles.contactInfo}>
            <span className="eyebrow">{h.contactEyebrow}</span>
            <h2 className={styles.contactHeading}>{h.contactHeading}</h2>
            <p className={styles.contactLede}>{h.contactLede}</p>
            <dl className={styles.contactList}>
              <div>
                <dt>{lang === "zh" ? "地址" : "Address"}</dt>
                <dd>
                  <a href={MAPS} target="_blank" rel="noopener noreferrer">{t.footer.address}</a>
                </dd>
              </div>
              <div>
                <dt>{lang === "zh" ? "电话" : "Phone"}</dt>
                <dd><a href={`tel:${PHONE_DIAL}`}>{PHONE_DISPLAY}</a></dd>
              </div>
              <div>
                <dt>{lang === "zh" ? "邮箱" : "Email"}</dt>
                <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
              </div>
            </dl>
            <Link href="/contact" className="btn btn--primary">
              {t.nav.book} <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
