import type { PracticeArea } from "../types";
import { property } from "./property";
import { commercial } from "./commercial";
import { estate } from "./estate";
import { ip } from "./ip";
import { criminal } from "./criminal";
import { notary } from "./notary";
import { migration } from "./migration";

/** Ordered list of practice areas — drives navigation, home grid, and routing. */
export const practiceAreas: PracticeArea[] = [
  property,
  commercial,
  estate,
  ip,
  criminal,
  notary,
  migration,
];

export const practiceBySlug = new Map(
  practiceAreas.map((area) => [area.slug, area]),
);

export function getPractice(slug: string): PracticeArea | undefined {
  return practiceBySlug.get(slug);
}

/** Short one-line summary per area for the home-page service grid. */
export const practiceSummaries: Record<string, string> = {
  "property-conveyancing":
    "End-to-end conveyancing, off-the-plan, development, and title disputes across every Australian state and territory.",
  commercial:
    "Direct, commercially-minded counsel on contracts, employment, disputes, and leasing for startups, SMEs, and corporates.",
  "wills-estates":
    "Wills, testamentary trusts, powers of attorney, probate, and estate administration handled with care.",
  "intellectual-property":
    "Trade marks, patents, copyright, and designs — from first registration to international filing and enforcement.",
  "criminal-law":
    "Clear, honest representation across traffic, assault, drug, domestic violence, and bail matters.",
  "notary-public":
    "Qualified notarial services for documents destined for use overseas, including apostille and DFAT authentication.",
  "migration-law":
    "Registered advice across skilled, family, student, business, humanitarian, and tribunal review pathways.",
};
