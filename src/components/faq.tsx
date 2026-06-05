"use client";

import { useState } from "react";
import type { Faq } from "@/data/types";
import styles from "./faq.module.css";

interface FaqSectionProps {
  eyebrow: string;
  heading: string;
  intro: string;
  faqs: Faq[];
}

export function FaqSection({ eyebrow, heading, intro, faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`section ${styles.wrap}`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{heading}</h2>
            <p>{intro}</p>
          </div>

          <div className={styles.list}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                  <button
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className={styles.question}>{faq.q}</span>
                    <span className={styles.icon} aria-hidden="true">
                      <svg viewBox="0 0 16 16" width="14" height="14" fill="none">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div className={styles.answer}>
                    <div className={styles.answerInner}>
                      <p className={styles.answerText}>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
