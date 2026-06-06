"use client";

import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/people";
import { practiceBySlug } from "@/data/practices";
import { useLang } from "@/lib/i18n";
import sectionStyles from "@/components/sections.module.css";
import styles from "./people.module.css";

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 48 48" width="44" height="44" fill="none" aria-hidden="true">
      <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M10 40c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PeopleContent() {
  const { t, lang, areaLabel } = useLang();
  const p = t.pages.people;

  const areaNames = (slugs: string[]) =>
    slugs
      .map((slug) => areaLabel(slug, practiceBySlug.get(slug)?.navLabel ?? slug))
      .join(" · ");

  return (
    <>
      <section className={sectionStyles.hero}>
        <div className="container">
          <div className={sectionStyles.heroInner}>
            <span className="eyebrow eyebrow--light">{p.heroEyebrow}</span>
            <h1 className={sectionStyles.heroTitle}>
              {p.heroTitlePre}
              <span className="accent">{p.heroTitleEm}</span>
            </h1>
            <p className={sectionStyles.heroLede}>{p.heroLede}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {team.map((member) => {
              if (member.placeholder) {
                return (
                  <div key={member.slug} className={`${styles.card} ${styles.cardPlaceholder}`}>
                    <div className={styles.photo}>
                      <div className={styles.photoEmpty}>
                        <PersonIcon />
                      </div>
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.name}>{lang === "zh" ? "成员待加入" : "Name pending"}</h3>
                      <span className={styles.role}>{lang === "zh" ? member.roleZh : member.role}</span>
                    </div>
                  </div>
                );
              }
              return (
                <Link key={member.slug} href={`/people/${member.slug}`} className={styles.cardLink}>
                  <article className={styles.card}>
                    <div className={styles.photo}>
                      {member.photo && (
                        <Image src={member.photo} alt={member.name} fill sizes="(max-width: 1000px) 50vw, 400px" />
                      )}
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.name}>{member.name}</h3>
                      <span className={styles.role}>{lang === "zh" ? member.roleZh : member.role}</span>
                      <p className={styles.areas}>{areaNames(member.areas)}</p>
                      <span className={styles.cardCta}>
                        {p.viewProfile} <Arrow />
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
