"use client";

import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import { LanguageToggle } from "./language-toggle";
import styles from "./site-footer.module.css";

const EMAIL = "info@lexcord.com.au";
const PHONE_DISPLAY = "+61 3 7054 5135";
const PHONE_DIAL = "+61370545135";
const MAPS = "https://maps.google.com/?q=530+Little+Collins+St+Melbourne+VIC+3000";

export function SiteFooter() {
  const { t, areaLabel, lang } = useLang();
  const year = new Date().getFullYear();

  const firmLinks = [
    { href: "/about", label: t.footer.aboutLexcord },
    { href: "/people", label: lang === "zh" ? "团队" : "Our People" },
    { href: "/services", label: t.nav.services },
    { href: "/resources", label: t.nav.resources },
    { href: "/contact", label: t.footer.contact },
  ];

  const legalLinks = [
    { href: "/legal/privacy", label: lang === "zh" ? "隐私政策" : "Privacy Policy" },
    { href: "/legal/terms", label: lang === "zh" ? "条款" : "Terms of Use" },
    { href: "/legal/disclaimer", label: lang === "zh" ? "免责声明" : "Disclaimer" },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Image
              src="/images/brand/lexcord-white.png"
              alt="Lexcord Lawyers"
              width={150}
              height={53}
              className={styles.logo}
            />
            <p className={styles.blurb}>{t.footer.blurb}</p>
            <div className={styles.footToggle}>
              <LanguageToggle light />
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>{t.footer.expertise}</p>
            <ul className={styles.linkList}>
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/expertise/${area.slug}`}>{areaLabel(area.slug, area.navLabel)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>{t.footer.firm}</p>
            <ul className={styles.linkList}>
              {firmLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <p className={styles.colTitle} style={{ marginTop: "1.6rem" }}>
              {t.footer.legal}
            </p>
            <ul className={styles.linkList}>
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>{t.footer.contactTitle}</p>
            <address className={styles.contact}>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className={styles.contactAddr}>
                {t.footer.address}
              </a>
              <p className={styles.lift}>{t.footer.lift}</p>
              <a href={`tel:${PHONE_DIAL}`} className={styles.contactLine}>
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className={styles.contactLine}>
                {EMAIL}
              </a>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Lexcord Lawyers. {t.footer.rights}</span>
          <span>{t.footer.australiaWide}</span>
        </div>
      </div>
    </footer>
  );
}
