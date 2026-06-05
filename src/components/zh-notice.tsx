"use client";

import { useLang } from "@/lib/i18n";
import styles from "./zh-notice.module.css";

/** Shown only in Chinese mode: honest notice that page body is pending translation. */
export function ZhNotice() {
  const { lang, t } = useLang();
  if (lang !== "zh") return null;
  return (
    <div className={styles.banner} role="status">
      <span className={styles.dot} aria-hidden="true" />
      {t.notice}
    </div>
  );
}
