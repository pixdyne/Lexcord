"use client";

import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/people";
import { useLang } from "@/lib/i18n";
import styles from "./people.module.css";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

export function PeopleContent() {
  const { t, lang } = useLang();
  const p = t.pages.people;

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <span className="eyebrow">{p.heroEyebrow}</span>
          <h1 className={styles.introTitle}>
            {p.heroTitlePre}
            <span className="accent">{p.heroTitleEm}</span>
          </h1>
          <p className={styles.introLede}>{p.heroLede}</p>
        </div>
      </section>

      <section className={`section ${styles.listSection}`}>
        <div className="container">
          <div className={styles.grid}>
            {team.map((member) => {
              const role = lang === "zh" ? member.roleZh : member.role;
              const specialty = lang === "zh" ? member.specialtyZh : member.specialty;
              return (
                <Link key={member.slug} href={`/people/${member.slug}`} className={styles.card}>
                  <span className={styles.avatar}>
                    {member.photo ? (
                      <Image src={member.photo} alt={member.name} fill sizes="200px" />
                    ) : (
                      <span className={styles.avatarInitials}>{initials(member.name)}</span>
                    )}
                  </span>
                  <h3 className={styles.name}>{member.name}</h3>
                  <span className={styles.role}>{role}</span>
                  {specialty && <span className={styles.specialty}>{specialty}</span>}
                  <span className={styles.cardCta}>{p.viewProfile}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
