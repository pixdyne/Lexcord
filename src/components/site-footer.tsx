import Link from "next/link";
import { practiceAreas } from "@/data/practices";
import styles from "./site-footer.module.css";

const FIRM_LINKS = [
  { href: "/about", label: "About Lexcord" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Book a consultation" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.brand}>
              <span className={styles.brandName}>LEXCORD</span>
            </span>
            <p className={styles.blurb}>
              Clear, considered legal counsel across Australia — from property and commercial
              matters to estates, intellectual property, criminal, migration, and notarial services.
            </p>
            <p className={styles.disclaimer}>
              The information on this website is general in nature and does not constitute legal
              advice. Please contact us for advice tailored to your circumstances.
            </p>
          </div>

          <div>
            <p className={styles.colTitle}>Expertise</p>
            <ul className={styles.linkList}>
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/expertise/${area.slug}`}>{area.navLabel}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.colTitle}>Firm</p>
            <ul className={styles.linkList}>
              {FIRM_LINKS.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Lexcord Lawyers. All rights reserved.</span>
          <span>Australia-wide</span>
        </div>
      </div>
    </footer>
  );
}
