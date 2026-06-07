"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import styles from "./home.module.css";

const BANNER_IMG = "/images/office/office-7.jpg";
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

function WhyIcon({ index }: { index: number }) {
  if (index === 0) {
    // clarity — speech / document
    return (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
        <path d="M6 7h20v14H13l-5 4v-4H6V7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M11 12h10M11 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    // personal attention — person + heart
    return (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
        <circle cx="13" cy="11" r="5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 27c0-5 4-8.5 9-8.5 2 0 3.8.6 5.3 1.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M24.5 19.5c1.6-1.5 4.2-.6 4.2 1.6 0 2.2-4.2 4.9-4.2 4.9s-4.2-2.7-4.2-4.9c0-2.2 2.6-3.1 4.2-1.6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }
  // depth — layered / pillars
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
      <path d="M16 4l11 5-11 5L5 9l11-5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M6 14l10 4.5L26 14M6 19l10 4.5L26 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 40 32" width="30" height="24" fill="currentColor" aria-hidden="true">
      <path d="M0 32V18C0 8 5 1.6 15 0l2 5C11 6.5 8 10 8 15h6v17H0zm22 0V18C22 8 27 1.6 37 0l2 5c-6 1.5-9 5-9 10h6v17H22z" />
    </svg>
  );
}

export default function HomePage() {
  const { t } = useLang();
  const h = t.pages.home;

  // Duplicate the testimonials so the marquee scrolls seamlessly.
  const marquee = [...h.testimonials, ...h.testimonials];

  return (
    <>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerMedia}>
          <Image src={BANNER_IMG} alt="" fill priority sizes="100vw" className={styles.bannerImg} />
          <div className={styles.bannerScrim} />
        </div>
        <div className={`container ${styles.bannerInner}`}>
          <div className={styles.glass}>
            <span className={styles.glassKicker}>Lexcord Lawyers</span>
            <h1 className={styles.glassTitle}>{h.bannerTitle}</h1>
            <p className={styles.glassLede}>{h.bannerLede}</p>
            <Link href="/contact" className={`btn btn--primary ${styles.glassCta}`}>
              {t.nav.book} <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose Lexcord */}
      <section className={`section ${styles.why}`}>
        <div className="container">
          <div className={styles.whyHead}>
            <span className="eyebrow">{h.whyEyebrow}</span>
            <h2 className={styles.whyTitle}>{h.whyTitle}</h2>
            <p className={styles.whySub}>{h.whySubtitle}</p>
          </div>
          <div className={styles.whyGrid}>
            {h.why.map((item, i) => (
              <Reveal key={item.title} as="article" delay={i * 90} className={styles.whyCard}>
                <span className={styles.whyIcon}>
                  <WhyIcon index={i} />
                </span>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardText}>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What do they say — scrolling testimonials */}
      <section className={`section ${styles.say}`}>
        <div className="container">
          <div className={styles.sayHead}>
            <span className="eyebrow eyebrow--light">{h.sayEyebrow}</span>
            <h2 className={styles.sayTitle}>{h.sayTitle}</h2>
          </div>
        </div>
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {marquee.map((tm, i) => (
              <figure key={i} className={styles.quoteCard} aria-hidden={i >= h.testimonials.length}>
                <span className={styles.quoteMark}>
                  <QuoteMark />
                </span>
                <blockquote className={styles.quoteText}>{tm.quote}</blockquote>
                <figcaption className={styles.quoteName}>
                  {tm.name} <span>· {tm.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to discuss your matter? */}
      <section className={`section ${styles.ready}`}>
        <div className="container">
          <div className={styles.readyGrid}>
            <div className={styles.readyIntro}>
              <span className="eyebrow">{h.readyEyebrow}</span>
              <h2 className={styles.readyTitle}>{h.readyTitle}</h2>
              <p className={styles.readyLede}>{h.readyLede}</p>
              <Link href="/contact" className="btn btn--primary">
                {t.nav.book} <ArrowRight />
              </Link>
            </div>
            <dl className={styles.readyList}>
              <div>
                <dt>{h.addressLabel}</dt>
                <dd>
                  <a href={MAPS} target="_blank" rel="noopener noreferrer">{t.footer.address}</a>
                </dd>
              </div>
              <div>
                <dt>{h.phoneLabel}</dt>
                <dd><a href={`tel:${PHONE_DIAL}`}>{PHONE_DISPLAY}</a></dd>
              </div>
              <div>
                <dt>{h.emailLabel}</dt>
                <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
