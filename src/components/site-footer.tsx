"use client";

import Link from "next/link";
import { practiceAreas } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import { LanguageToggle } from "./language-toggle";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  const { t, areaLabel, lang } = useLang();
  const year = new Date().getFullYear();

  const firmLinks = [
    { href: "/about", label: t.footer.aboutLexcord },
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
            <span className={styles.brand}>
              <span className={styles.brandName}>LEXCORD</span>
            </span>
            <p className={styles.blurb}>{t.footer.blurb}</p>
            <p className={styles.disclaimer}>{t.footer.disclaimer}</p>
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
              {lang === "zh" ? "法律" : "Legal"}
            </p>
            <ul className={styles.linkList}>
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
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
