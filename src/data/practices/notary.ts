import type { PracticeArea } from "../types";

export const notary: PracticeArea = {
  slug: "notary-public",
  navLabel: "Notary Public",
  heroEyebrow: "Notary Public",
  heroTitle: "Notarial services for {accent}documents used overseas{/accent}",
  heroLede:
    "When Australian documents are intended for use in a foreign country, they often require certification by a Notary Public. Our qualified Notary Public is available by appointment.",

  servicesEyebrow: "What We Certify",
  servicesHeading: "Notarial services we provide",
  servicesIntro:
    "A Notary Public can authenticate, certify, and witness a wide range of documents for international use. The following covers the most common services we are engaged to provide.",
  services: [
    {
      title: "Certification of Documents",
      body: "Certifying that a copy of an original document is a true and accurate copy. Commonly required for passports, birth certificates, academic qualifications, company records, and licences for use abroad.",
    },
    {
      title: "Authentication of Signatures",
      body: "Witnessing and certifying the execution of documents, including powers of attorney, statutory declarations, deeds, and contracts, where a foreign authority requires notarial verification of the signatory's identity.",
    },
    {
      title: "Legal Documents for Foreign Use",
      body: "Notarisation of legal instruments — including affidavits, agreements, and court documents required by foreign courts, tribunals, or government authorities in connection with legal proceedings or regulatory matters overseas.",
    },
    {
      title: "Corporate & Commercial Documents",
      body: "Notarisation of corporate documents for overseas use, including company constitutions, resolutions, powers of attorney granted by companies, and documents required for foreign business registration or transactions.",
    },
    {
      title: "Apostille & DFAT Authentication",
      body: "For documents destined for countries party to the Hague Apostille Convention, an apostille issued by the Department of Foreign Affairs and Trade (DFAT) may be required following notarisation. We advise on and assist with this process.",
    },
    {
      title: "Personal & Identity Documents",
      body: "Certification of personal documents for immigration, overseas property purchase, marriage, study, or employment abroad, including statutory declarations, identity documents, and personal powers of attorney.",
    },
  ],

  processHeading: "",

  faqEyebrow: "Common Questions",
  faqHeading: "Questions we hear often",
  faqIntro:
    "Notarial services are straightforward once you know what is required. These are the questions we are most frequently asked.",
  faqs: [
    {
      q: "What is the difference between a Notary Public and a Justice of the Peace?",
      a: "A Notary Public is a qualified lawyer who holds a specific commission to authenticate documents for international use — their certification is recognised by foreign governments, courts, and institutions worldwide. A Justice of the Peace (JP) can witness certain documents for use within Australia, but their certification is generally not accepted by foreign authorities. If your document is destined for use overseas, a Notary Public is almost always required.",
    },
    {
      q: "Do I need a Notary Public or an Apostille — or both?",
      a: "This depends on the country the document is destined for. For countries that are party to the Hague Apostille Convention, notarisation by a Notary Public is usually followed by an apostille — a certificate issued by DFAT that authenticates the notary's signature for international acceptance. For countries that are not party to the Convention, additional legalisation steps through the relevant embassy or consulate may be required. We advise on the specific requirements for your destination country when you contact us.",
    },
    {
      q: "Can documents be notarised remotely or electronically?",
      a: "In most cases, notarisation requires the physical presence of the signatory before the Notary Public — this is a fundamental requirement of the notarial process, as the Notary must verify your identity in person and witness your signature directly. Remote or electronic notarisation is not widely accepted by foreign authorities for international documents. Please contact us if you have specific circumstances that make attendance difficult and we will advise on your options.",
    },
    {
      q: "How long does notarisation take?",
      a: "For standard documents, the notarisation itself is typically completed within the appointment — which usually takes 15 to 30 minutes depending on the number and complexity of documents. If an apostille from DFAT is also required, that is a separate process managed through the Department of Foreign Affairs and Trade, with its own processing timeframe. We recommend contacting us in advance if you have a deadline, so we can advise on timing and, where possible, accommodate urgent requests.",
    },
  ],

  closingKicker: "Book an appointment",
  closingTitle: "Ready to have your {accent}documents notarised?{/accent}",
  closingBody:
    "Contact us to arrange an appointment with our Notary Public. Please describe the documents you need certified and the country they are intended for, and we will confirm requirements and schedule a time.",
  closingCta: "Book a consultation",
};
