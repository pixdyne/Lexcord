"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import styles from "./floating-cta.module.css";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 680);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Redundant on the contact page itself.
  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className={`${styles.fab} ${visible ? styles.visible : ""}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
        <path d="M4 5h16v11H7l-3 3V5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
      <span className={styles.label}>{t.nav.book}</span>
    </Link>
  );
}
