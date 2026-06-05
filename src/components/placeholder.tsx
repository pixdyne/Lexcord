import type { CSSProperties, ReactNode } from "react";
import styles from "./placeholder.module.css";

interface PlaceholderTextProps {
  children: ReactNode;
  /** Use on dark/navy backgrounds. */
  light?: boolean;
  /** Tag label, defaults to "Placeholder". */
  tag?: string;
}

/** Inline obvious placeholder for copy that is not yet supplied by the firm. */
export function PlaceholderText({ children, light = false, tag = "Placeholder" }: PlaceholderTextProps) {
  return (
    <span className={`${styles.text} ${light ? styles["text--light"] : ""}`}>
      <span className={styles.tag}>{tag}</span>
      {children}
    </span>
  );
}

interface PlaceholderImageProps {
  label: string;
  /** CSS height (e.g. "320px" or "min(60vh, 480px)"). */
  height?: string;
  light?: boolean;
  ratio?: string;
}

/** Block placeholder marking where real photography will go. */
export function PlaceholderImage({ label, height, light = false, ratio }: PlaceholderImageProps) {
  const style: CSSProperties = ratio ? { aspectRatio: ratio } : { height: height ?? "320px" };
  return (
    <div
      className={`${styles.image} ${light ? styles["image--light"] : ""}`}
      style={style}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <svg className={styles.imageIcon} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="9" width="36" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="19" r="3.5" stroke="currentColor" strokeWidth="2" />
        <path d="M10 35l9-9 6 6 7-8 6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={styles.imageLabel}>{label}</span>
      <span className={styles.imageSub}>Photo placeholder</span>
    </div>
  );
}
