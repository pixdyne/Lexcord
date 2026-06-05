export interface ServiceItem {
  title: string;
  body: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface WhyPoint {
  title: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

/** A small labelled card used for "who we serve" / "visa pathway" style grids. */
export interface TagCard {
  title: string;
  body: string;
}

/** Life-stage / timeline block (used by Wills & Estates). */
export interface StageItem {
  marker: string;
  kicker: string;
  title: string;
  body: string;
}

export interface ExtraSection {
  variant: "tags" | "stages";
  eyebrow: string;
  heading: string;
  intro?: string;
  tags?: TagCard[];
  stages?: StageItem[];
}

export interface PracticeArea {
  slug: string;
  /** Short label for navigation. */
  navLabel: string;
  /** Eyebrow above hero headline. */
  heroEyebrow: string;
  /** Hero headline. Use {accent} markers around the gold-highlighted words. */
  heroTitle: string;
  heroLede: string;

  servicesEyebrow: string;
  servicesHeading: string;
  servicesIntro: string;
  services: ServiceItem[];

  processEyebrow?: string;
  processHeading: string;
  processIntro?: string;
  process?: ProcessStep[];

  /** Optional special section rendered between process and why/faq. */
  extra?: ExtraSection;

  whyHeading?: string;
  whyIntro?: string;
  why?: WhyPoint[];

  faqEyebrow: string;
  faqHeading: string;
  faqIntro: string;
  faqs: Faq[];

  closingKicker: string;
  closingTitle: string;
  closingBody?: string;
  closingCta: string;
}
