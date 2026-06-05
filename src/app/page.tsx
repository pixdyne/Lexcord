import Link from "next/link";
import { practiceAreas, practiceSummaries } from "@/data/practices";
import { Reveal } from "@/components/reveal";
import styles from "./home.module.css";

// Grounded in the source document: 7 practice areas, all states & territories,
// fixed-fee standard matters, PEXA-registered settlements.
const STATS = [
  { num: "7", label: "Practice areas under one roof" },
  { num: "All", label: "Australian states & territories" },
  { num: "Fixed-fee", label: "Standard conveyancing matters" },
  { num: "PEXA", label: "Registered electronic settlements" },
];

const APPROACH = [
  {
    num: "01",
    title: "Solicitors, not just process",
    text: "Admitted solicitors who can advise on the legal dimensions of a matter — disputes, injunctions, and complex issues — not only the paperwork.",
  },
  {
    num: "02",
    title: "Commercially-minded counsel",
    text: "Every piece of advice is calibrated to your real-world outcome. We will tell you when settling, or walking away, is the right call.",
  },
  {
    num: "03",
    title: "Honest, upfront, transparent",
    text: "A frank assessment of your position and clear fee estimates before we spend your money. No surprises at month end.",
  },
];

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroGrain}`}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className="eyebrow eyebrow--light">Lexcord Lawyers — Australia-wide</span>
            <div className={styles.heroGrid}>
              <h1 className={styles.heroTitle}>
                Clear, considered counsel for <em>life&apos;s</em> significant decisions.
              </h1>
              <div className={styles.heroAside}>
                <p className={styles.heroLede}>
                  From property and commercial matters to estates, intellectual property, criminal,
                  and migration law — one firm, advising with precision and plain language across
                  every Australian state and territory.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/contact" className="btn btn--primary">
                    Book a consultation <ArrowRight />
                  </Link>
                  <a href="#expertise" className="btn btn--ghost-light">
                    Explore our expertise
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.stats}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statNum}>{stat.num}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className={`section ${styles.introBand}`}>
        <div className="container">
          <Reveal className={styles.introLayout} as="div">
            <p className={styles.introBig}>
              Legal problems rarely arrive on a convenient schedule.
            </p>
            <div className={styles.introBody}>
              <p>
                Whether you are buying your first home, protecting what your business has created,
                planning for the people you love, or navigating a charge that puts everything at
                stake — what you need first is a clear-eyed view of where you stand.
              </p>
              <p>
                Lexcord brings the full breadth of a general practice together with the depth of
                specialist counsel. We tell you what the law requires, what your options are, and
                what it will cost — before you commit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expertise grid */}
      <section id="expertise" className={`section ${styles.expertise}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow--light">Our Expertise</span>
            <h2 style={{ color: "#fff", fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              Seven practice areas, one standard of care
            </h2>
            <p style={{ color: "rgba(255,255,255,0.72)" }}>
              Deep capability across the matters that shape Australian businesses and families —
              handled by solicitors who treat your matter as their own.
            </p>
          </div>

          <div className={styles.expGrid}>
            {practiceAreas.map((area, i) => (
              <Link key={area.slug} href={`/expertise/${area.slug}`} className={styles.expCard}>
                <span className={styles.expIndex}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.expTitle}>{area.navLabel}</h3>
                <p className={styles.expDesc}>{practiceSummaries[area.slug]}</p>
                <span className={styles.expLink}>
                  Learn more <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className={`section ${styles.approach}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Lexcord</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              The way we work is the difference
            </h2>
          </div>
          <div className={styles.approachGrid}>
            {APPROACH.map((item) => (
              <article key={item.num} className={styles.approachCard}>
                <span className={styles.approachNum}>{item.num}</span>
                <h3 className={styles.approachTitle}>{item.title}</h3>
                <p className={styles.approachText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className={styles.closing}>
        <div className="container">
          <div className={styles.closingInner}>
            <span className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              Speak with us
            </span>
            <h2 className={styles.closingTitle}>
              The right advice, <em>at the right time</em>, changes everything.
            </h2>
            <p className={styles.closingBody}>
              Book a confidential consultation. We will assess your situation honestly and map out
              your options — with no obligation to proceed.
            </p>
            <div className={styles.closingActions}>
              <Link href="/contact" className="btn btn--primary">
                Book a consultation <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
