import type { PracticeArea } from "../types";

export const estate: PracticeArea = {
  slug: "wills-estates",
  navLabel: "Wills & Estates",
  heroEyebrow: "Will & Estate",
  heroTitle: "Planning for the {accent}people you love{/accent}",
  heroLede:
    "A Will is not just a document — it is a declaration of how you want to care for the people who matter to you, even when you are no longer here. We help individuals, couples, and families create clear, legally sound estate plans with sensitivity and without jargon.",

  servicesEyebrow: "Our Services",
  servicesHeading: "Everything your estate plan needs",
  servicesIntro:
    "From a simple Will for a young family to a complex multi-generational estate plan with testamentary trusts — we handle every dimension of estate law across all Australian states and territories.",
  services: [
    {
      title: "Will Drafting & Review",
      body: "A carefully drafted Will ensures your assets go where you intend. We draft new Wills and review existing ones — particularly after major life events like marriage, divorce, or the birth of children.",
    },
    {
      title: "Testamentary Trusts",
      body: "A testamentary trust is established by your Will and can provide significant tax advantages for beneficiaries, as well as protecting assets from creditors or relationship breakdown. Particularly valuable for larger estates.",
    },
    {
      title: "Estate Planning",
      body: "Comprehensive planning that looks beyond the Will, including superannuation nominations, life insurance, jointly held assets, and strategies to minimise the tax burden on your estate and beneficiaries.",
    },
    {
      title: "Power of Attorney",
      body: "A Power of Attorney allows someone you trust to manage your financial and legal affairs if you lose capacity. We prepare general and enduring Powers of Attorney tailored to your circumstances and jurisdiction.",
    },
    {
      title: "Probate & Estate Administration",
      body: "We assist executors in obtaining probate, notifying beneficiaries, collecting and valuing assets, paying debts, and distributing the estate, guiding families through a process that can feel overwhelming at an already difficult time.",
    },
    {
      title: "Contesting a Will",
      body: "Family provision claims allow eligible people who were inadequately provided for in a Will to apply to the court for a greater share. We advise both claimants and estates, with sensitivity and with an eye to resolution.",
    },
    {
      title: "Executor Advice & Support",
      body: "Being named an executor is an honour — but also a significant legal responsibility. We guide executors through their duties, help them avoid personal liability, and manage the administration process step by step.",
    },
    {
      title: "Guardianship & Administration",
      body: "Where a person loses capacity without appropriate documents in place, guardianship and administration orders may be required. We advise families and apply to the relevant state tribunal on behalf of those who need support.",
    },
  ],

  processHeading: "",

  extra: {
    variant: "stages",
    eyebrow: "Estate Planning Through Life",
    heading: "The right plan for every stage of life",
    intro:
      "Your estate planning needs change as your life does. Here is what we typically recommend at each stage.",
    stages: [
      {
        marker: "20s",
        kicker: "Young Adults — Build the Foundation",
        title: "Build the Foundation",
        body: "Most young adults have no estate plan. But if something happened to you, who would receive your assets? Who would speak for you if you lost capacity?",
      },
      {
        marker: "30s",
        kicker: "Growing Families — Protect What Matters",
        title: "Protect What Matters",
        body: "Marriage, children, property, and growing assets mean your estate plan needs updating. Who looks after your children if both parents are gone? Who manages assets for minor children?",
      },
      {
        marker: "50s",
        kicker: "Peak Wealth — Plan for Complexity",
        title: "Plan for Complexity",
        body: "Business interests, investment properties, blended families, and significant superannuation balances require a more sophisticated estate plan to minimise tax and avoid disputes.",
      },
      {
        marker: "70s",
        kicker: "Later Life — Protect & Preserve",
        title: "Protect & Preserve",
        body: "Planning for incapacity, aged care costs, and ensuring your wishes are honoured in full. Getting all documents in order while you have capacity to do so.",
      },
    ],
  },

  faqEyebrow: "Common Questions",
  faqHeading: "Questions we hear often",
  faqIntro:
    "Estate planning raises questions that many people feel uncomfortable asking. There are no foolish questions here — only ones worth asking sooner rather than later.",
  faqs: [
    {
      q: "What makes a Will legally valid in Australia?",
      a: "For a Will to be legally valid in Australia, the person making it (the testator) must be 18 years or older (with limited exceptions), must be of sound mind and understand the nature and effect of the Will, and the Will must be in writing, signed by the testator in the presence of two independent witnesses who are also present at the same time and who both sign the Will in the testator's presence. Beneficiaries and their spouses should not act as witnesses, as this can invalidate gifts to them. The rules vary slightly between states, but these are the core requirements across Australia. A Will that does not meet these requirements may be invalid, which is why professional drafting is strongly recommended.",
    },
    {
      q: "Does getting married or divorced affect my Will?",
      a: "Yes — significantly. In most Australian states, marriage automatically revokes any existing Will, meaning you will have no valid Will after getting married unless you make a new one or your existing Will was made in contemplation of that specific marriage. Divorce, on the other hand, does not revoke the whole Will — but it typically revokes any gifts to the former spouse and removes them as executor. This means a divorced person's Will may pass assets in unintended ways. These rules vary between states, so we strongly recommend reviewing your Will after any major relationship change.",
    },
    {
      q: "What is a testamentary trust and do I need one?",
      a: "A testamentary trust is a trust established by your Will that comes into existence upon your death. Unlike a direct inheritance, assets held in a testamentary trust are managed by a trustee for the benefit of beneficiaries — which can provide significant advantages. These include: tax benefits for beneficiaries with high income, as income distributed to minor children from a testamentary trust can be taxed at adult marginal rates (rather than the penalty rate that normally applies); protection from creditors if a beneficiary faces bankruptcy or legal claims; and protection from relationship breakdown if you are concerned about a beneficiary's marriage or de facto relationship. Testamentary trusts are particularly valuable for larger estates, estates with minor beneficiaries, or where there are concerns about a beneficiary's financial management.",
    },
    {
      q: "What does an executor actually have to do?",
      a: "An executor's role is substantial and can be demanding. Responsibilities include: locating the original Will; applying for a grant of probate from the Supreme Court of the relevant state; notifying government agencies (Centrelink, the ATO, banks); locating, collecting and valuing all assets; paying the deceased's debts, taxes, and funeral expenses; managing the estate during administration (which can take 6–18 months); and distributing the estate to beneficiaries in accordance with the Will. Executors are personally liable if they distribute the estate incorrectly or fail to meet their legal obligations. We offer executor support and can manage as much or as little of the process as you need — from advice through to full administration.",
    },
  ],

  closingKicker: "Take the first step",
  closingTitle: "It begins with {accent}a single conversation{/accent}",
  closingBody:
    "You do not need to have all the answers before you speak with us. Many clients come to us unsure of what they need — and leave with a clear plan and real peace of mind. There is no pressure and no obligation.",
  closingCta: "Book a consultation",
};
