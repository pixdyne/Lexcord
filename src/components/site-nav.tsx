"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { practiceAreas, practiceSummaries } from "@/data/practices";
import styles from "./site-nav.module.css";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function BrandMark() {
  return (
    <svg className={styles.brandMark} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="6" stroke="var(--gold-400)" strokeWidth="1.4" />
      <path d="M10 9v14h11" stroke="#fff" strokeWidth="2" strokeLinecap="square" />
      <path d="M19 9l4 0M21 9v8" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [expOpen, setExpOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openExpertise = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setExpOpen(true);
  };

  // Small delay so the cursor can travel from the trigger to the panel.
  const closeExpertise = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setExpOpen(false), 140);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="Lexcord Lawyers home">
          <BrandMark />
          <span className={styles.brandText}>
            <span className={styles.brandName}>LEXCORD</span>
            <span className={styles.brandSub}>Lawyers</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <div
            className={styles.dropdown}
            onMouseEnter={openExpertise}
            onMouseLeave={closeExpertise}
          >
            <button
              className={styles.navLink}
              aria-haspopup="true"
              aria-expanded={expOpen}
              onClick={() => setExpOpen((v) => !v)}
              onFocus={openExpertise}
            >
              Expertise
              <svg className={styles.chevron} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className={`${styles.panel} ${expOpen ? styles.panelOpen : ""}`} role="menu">
              <div className={styles.panelAside}>
                <span className={styles.panelKicker}>Expertise</span>
                <p className={styles.panelHeadline}>Seven areas, one standard of care</p>
                <p className={styles.panelBlurb}>
                  Considered counsel across the matters that shape Australian businesses and
                  families — handled by solicitors, not just process.
                </p>
                <Link href="/about" className={styles.panelAll} role="menuitem">
                  About the firm
                  <svg viewBox="0 0 20 20" width="14" height="14" fill="none" aria-hidden="true">
                    <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className={styles.panelList}>
                {practiceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/expertise/${area.slug}`}
                    className={styles.panelItem}
                    role="menuitem"
                  >
                    <span className={styles.panelItemTitle}>{area.navLabel}</span>
                    <span className={styles.panelItemDesc}>{practiceSummaries[area.slug]}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className={`btn btn--primary ${styles.cta}`}>
            Book a consultation
          </Link>
          <button
            className={styles.toggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`${styles.sheet} ${open ? styles.sheetOpen : ""}`}>
        <div className={styles.sheetInner}>
          <p className={styles.sheetLabel}>Expertise</p>
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/expertise/${area.slug}`}
              className={styles.sheetLink}
              onClick={() => setOpen(false)}
            >
              {area.navLabel}
              <span>{practiceSummaries[area.slug]}</span>
            </Link>
          ))}
          <p className={styles.sheetLabel}>Firm</p>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.sheetLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`btn btn--primary ${styles.sheetCta}`}
            onClick={() => setOpen(false)}
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
