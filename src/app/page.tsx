import Link from "next/link";
import { practiceAreas, practiceSummaries } from "@/data/practices";
import { Reveal } from "@/components/reveal";
import { PlaceholderText, PlaceholderImage } from "@/components/placeholder";
import styles from "./home.module.css";

// Grounded in the source document: 7 practice areas, all states & territories,
// fixed-fee standard matters, PEXA-registered settlements.
const STATS = [
  { num: "7", label: "Practice areas under one roof" },
  { num: "All", label: "Australian states & territories" },
  { num: "Fixed-fee", label: "Standard conveyancing matters" },
  { num: "PEXA", label: "Registered electronic settlements" },
];

// Why-Lexcord points drawn from the source document's "why choose" sections
// (property: solicitors not just conveyancers; commercial: commercially-minded,
// transparent costs; criminal: honest assessment).
const WHY = [
  {
    icon: "scale",
    title: "Solicitors, not just process",
    text: "Admitted solicitors who can advise on the legal dimensions of a matter — disputes, injunctions, and complex issues — not only the paperwork.",
  },
  {
    icon: "compass",
    title: "Commercially-minded counsel",
    text: "Every piece of advice is calibrated to your real-world outcome. We will tell you when settling, or walking away, is the right call.",
  },
  {
    icon: "shield",
    title: "Honest, upfront, transparent",
    text: "A frank assessment of your position and clear fee estimates before we spend your money. No open-ended billing surprises.",
  },
];

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhyIcon({ name }: { name: string }) {
  if (name === "scale") {
    return (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true">
        <path d="M16 5v22M9 27h14M6 11h20M16 6l-7 5M16 6l7 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 11l-3 7a3 3 0 006 0l-3-7zM26 11l-3 7a3 3 0 006 0l-3-7z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "compass") {
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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroGrain}`}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroGrid}>
              <div className={styles.heroLeft}>
                <span className={`eyebrow eyebrow--light ${styles.heroEyebrow}`}>
                  Lexcord Lawyers — Australia-wide
                </span>
                <h1 className={`${styles.heroTitle} ${styles.heroFade}`}>
                  <PlaceholderText light tag="Headline">
                    Firm headline pending — e.g. clear, considered counsel for life&apos;s
                    significant decisions.
                  </PlaceholderText>
                </h1>
                <p className={`${styles.heroLede} ${styles.heroFade} ${styles.heroFade2}`}>
                  <PlaceholderText light>
                    Homepage introduction pending. This connective copy is not part of the supplied
                    document. The firm advises across seven practice areas Australia-wide.
                  </PlaceholderText>
                </p>
                <div className={`${styles.heroActions} ${styles.heroFade} ${styles.heroFade3}`}>
                  <Link href="/contact" className="btn btn--primary">
                    Book a consultation <ArrowRight />
                  </Link>
                  <a href="#expertise" className="btn btn--ghost-light">
                    Explore our expertise
                  </a>
                </div>
              </div>
              <div className={`${styles.heroMedia} ${styles.heroFade} ${styles.heroFade2}`}>
                <PlaceholderImage label="Firm / office photography" light ratio="4 / 5" />
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
              <PlaceholderText tag="Intro">Opening statement pending firm copy.</PlaceholderText>
            </p>
            <div className={styles.introBody}>
              <p>
                <PlaceholderText>
                  This introductory section is connective copy, not part of the supplied document.
                  Replace with the firm&apos;s positioning statement.
                </PlaceholderText>
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
              Deep capability across the matters that shape Australian businesses and families.
            </p>
          </div>

          <div className={styles.expGrid}>
            {practiceAreas.map((area, i) => (
              <Reveal
                key={area.slug}
                as="div"
                delay={(i % 3) * 70}
                className={styles.expCell}
              >
                <Link href={`/expertise/${area.slug}`} className={styles.expCard}>
                  <span className={styles.expIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.expTitle}>{area.navLabel}</h3>
                  <p className={styles.expDesc}>{practiceSummaries[area.slug]}</p>
                  <span className={styles.expLink}>
                    Learn more <ArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lexcord — icon cards */}
      <section className={`section ${styles.approach}`}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Lexcord</span>
            <h2 style={{ fontSize: "var(--text-2xl)", marginTop: "1rem" }}>
              The way we work is the difference
            </h2>
          </div>
          <div className={styles.approachGrid}>
            {WHY.map((item, i) => (
              <Reveal key={item.title} as="article" delay={i * 80} className={styles.approachCard}>
                <span className={styles.approachIcon}>
                  <WhyIcon name={item.icon} />
                </span>
                <h3 className={styles.approachTitle}>{item.title}</h3>
                <p className={styles.approachText}>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media band */}
      <section className={`section ${styles.mediaBand}`}>
        <div className="container">
          <Reveal className={styles.mediaGrid} as="div">
            <div>
              <span className="eyebrow">The firm</span>
              <h2 style={{ fontSize: "var(--text-2xl)", margin: "1rem 0 1rem" }}>
                People you will actually speak to
              </h2>
              <p style={{ color: "var(--ink-700)", fontSize: "var(--text-lg)", lineHeight: 1.5 }}>
                <PlaceholderText>
                  Firm story and team introduction pending. Replace with real copy and photography.
                </PlaceholderText>
              </p>
              <div style={{ marginTop: "1.8rem" }}>
                <Link href="/about" className="btn btn--ghost">
                  About Lexcord <ArrowRight />
                </Link>
              </div>
            </div>
            <PlaceholderImage label="Team / portrait photography" ratio="3 / 2" />
          </Reveal>
        </div>
      </section>

      {/* Closing — wording from the source document (migration closing) */}
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
