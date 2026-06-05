import type { PracticeArea } from "../types";

export const commercial: PracticeArea = {
  slug: "commercial",
  navLabel: "Commercial",
  heroEyebrow: "Commercial",
  heroTitle: "Business problems need {accent}business-minded lawyers{/accent}",
  heroLede:
    "Business moves fast. Legal problems move faster. We provide direct, commercially-minded legal advice on contracts, employment, disputes, and commercial leases — for startups, SMEs, and corporates across Australia.",

  servicesEyebrow: "Practice Area",
  servicesHeading: "Commercial services",
  servicesIntro:
    "We advise businesses and individuals across the full spectrum of commercial law, from everyday contracts and employment matters through to complex disputes and multi-site lease portfolios. Below are the areas we are most frequently engaged on.",
  services: [
    {
      title: "Business Contracts & Agreements",
      body: "A poorly drafted contract is a liability waiting to trigger. We draft, review, and negotiate commercial contracts that protect your position — from simple supply agreements to complex multi-party arrangements with liquidated damages and IP assignment clauses.",
    },
    {
      title: "Dispute Resolution & Litigation",
      body: "Commercial disputes are costly and distracting. Our first objective is always resolution without litigation, through negotiation, mediation, or arbitration. Where court proceedings are unavoidable, we represent clients in state and federal courts and tribunals with a strategy built around your commercial outcome, not billable hours.",
    },
    {
      title: "Employment Law",
      body: "Employment law in Australia is complex, and the Fair Work Act creates significant obligations for employers of all sizes. We advise businesses on compliant contracts, workplace policies, enterprise agreements, and managing underperformance, and represent both employers and employees when disputes arise.",
    },
    {
      title: "Commercial Leasing",
      body: "Commercial, retail, and industrial leases contain clauses that can cost businesses significantly if not properly reviewed — make-good obligations, rent review mechanisms, demolition clauses, and assignment restrictions. We act for landlords and tenants on lease negotiations, renewals, disputes, and early exits.",
    },
  ],

  processEyebrow: "How We Work",
  processHeading: "A no-nonsense process",
  processIntro:
    "We do not run up fees with unnecessary meetings and lengthy internal reviews.",
  process: [
    {
      step: "01",
      title: "Initial Brief",
      body: "A direct conversation with our commercial lawyers. We understand your situation and commercial objectives from the outset.",
    },
    {
      step: "02",
      title: "Risk Assessment",
      body: "We identify legal exposures, likely costs and timelines, and give you an honest assessment of your position, including where you may be wrong.",
    },
    {
      step: "03",
      title: "Strategy",
      body: "A written action plan with options, your recommended path, and fee estimates. No surprises. We take instruction before spending your money.",
    },
    {
      step: "04",
      title: "Execution",
      body: "We move — drafting, negotiating, filing, or representing. Progress updates as milestones are reached. You are never left wondering what is happening.",
    },
    {
      step: "05",
      title: "Resolution",
      body: "Agreement, settlement, judgment, or commercial outcome. We close out the matter cleanly and identify any preventative steps to avoid recurrence.",
    },
  ],

  extra: {
    variant: "tags",
    eyebrow: "Clients",
    heading: "Who we serve",
    intro:
      "Our commercial law practice serves businesses and individuals at every stage — from first-hire employment contracts to enterprise-scale dispute resolution.",
    tags: [
      {
        title: "SMEs",
        body: "Practical, cost-effective legal support for small and medium businesses — from contract templates and employment compliance to dispute resolution. We speak plain language, not legalese.",
      },
      {
        title: "Corporates",
        body: "Sophisticated commercial counsel for larger organisations — complex contract negotiations, employment law frameworks, multi-party disputes, and commercial lease portfolios across multiple sites.",
      },
      {
        title: "Startups",
        body: "Legal foundations for early-stage businesses — founder agreements, employment contracts for first hires, commercial terms and conditions, and NDA and IP protection frameworks tailored to lean teams.",
      },
      {
        title: "Individuals",
        body: "Executives, contractors, and employees facing employment disputes, unfair dismissal claims, restraint of trade issues, or contractual disputes with commercial counterparties.",
      },
    ],
  },

  whyHeading: "Built for your business",
  whyIntro:
    "We are commercial lawyers who think like business people. Every piece of advice is calibrated to your commercial context, not just what is legally correct in isolation.",
  why: [
    {
      title: "Commercially-minded advice",
      body: "The best legal advice considers the business outcome, not just the legal position. We understand that sometimes the commercially right decision is to settle, and we tell you that — even when it means less revenue for us.",
    },
    {
      title: "Transparent, predictable costs",
      body: "We offer fixed fees for defined-scope work and cost estimates before committing to any significant expenditure. No open-ended hourly billing surprises at month end.",
    },
  ],

  faqEyebrow: "Common Questions",
  faqHeading: "Questions we hear often",
  faqIntro: "Commercial matters raise a lot of questions. Here are the most common ones.",
  faqs: [
    {
      q: "Do I need a lawyer to review a commercial contract before I sign?",
      a: "There is no legal requirement to have a lawyer review a commercial contract before signing. But failing to do so is one of the most common and costly mistakes businesses make. Commercial contracts routinely contain automatic renewal clauses, limitation of liability caps, liquidated damages provisions, and intellectual property assignment terms that can bind your business for years. A contract review is typically one of the lowest-cost legal services we offer, and almost always worth the investment relative to the risk of signing blind.",
    },
    {
      q: "What are my obligations as an employer under the Fair Work Act?",
      a: "The Fair Work Act 2009 (Cth) establishes minimum employment conditions for most Australian workers through the National Employment Standards (NES) — including minimum notice periods, annual leave, personal/carer's leave, parental leave, and redundancy entitlements. Most employees are also covered by a Modern Award, which imposes minimum pay rates and additional conditions. Employers are required to provide written employment contracts for permanent employees and must not misclassify employees as independent contractors. Breaches can result in Fair Work Commission proceedings, financial penalties, and back-payment orders. We offer employment law audits to identify and rectify compliance gaps before they become claims.",
    },
    {
      q: "What should I look out for in a commercial lease?",
      a: "The most significant lease provisions to scrutinise are: rent review mechanisms (CPI vs fixed percentage vs market review — the difference can be substantial over a 5-year term); make-good obligations (which can cost tens of thousands in fit-out removal or restoration at lease end); demolition or redevelopment clauses (which can allow a landlord to terminate the lease with limited notice); personal guarantees; and assignment and subletting restrictions (which affect your exit options). We review and negotiate commercial leases for tenants and landlords across all states and territories, and regularly achieve material improvements to the initial draft terms.",
    },
    {
      q: "Do I have to go to court to resolve a commercial dispute?",
      a: "No — the majority of commercial disputes are resolved without court proceedings. Negotiation, mediation, and arbitration are all effective alternatives that are faster, less expensive, and generally less damaging to commercial relationships than litigation. Many commercial contracts also contain dispute resolution clauses that require the parties to attempt mediation before commencing court proceedings. Where a dispute does proceed to litigation, courts increasingly expect parties to have genuinely attempted alternative resolution first. We advise on the most appropriate dispute resolution pathway for your situation and your commercial objectives.",
    },
  ],

  closingKicker: "Start here",
  closingTitle: "Book a commercial law {accent}consultation{/accent}",
  closingBody:
    "We will assess your matter, give you an honest view and tell you what it will cost to fix.",
  closingCta: "Book a consultation",
};
