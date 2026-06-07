"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "zh";

interface Dictionary {
  nav: {
    expertise: string;
    services: string;
    resources: string;
    about: string;
    contact: string;
    book: string;
    firm: string;
    panelHeadline: string;
    panelBlurb: string;
    panelAbout: string;
  };
  footer: {
    blurb: string;
    disclaimer: string;
    expertise: string;
    firm: string;
    aboutLexcord: string;
    contact: string;
    book: string;
    rights: string;
    australiaWide: string;
    contactTitle: string;
    address: string;
    lift: string;
    legal: string;
  };
  common: {
    ourServices: string;
    whyChoose: string;
    bookConsultation: string;
    learnMore: string;
    relatedPosts: string;
    relatedPostsLede: string;
    postTitle: string;
    postExcerpt: string;
    areaTeam: string;
    areaTeamLede: string;
    areaTeamEmpty: string;
    viewProfile: string;
  };
  /** Standard Chinese names for the practice areas (display only). */
  areaZh: Record<string, string>;
  /** One-line summaries per practice-area slug. */
  summaries: Record<string, string>;
  pages: {
    home: {
      bannerTitle: string;
      bannerLede: string;
      whyEyebrow: string;
      whyTitle: string;
      whySubtitle: string;
      why: { title: string; text: string }[];
      sayEyebrow: string;
      sayTitle: string;
      testimonials: { quote: string; name: string; detail: string }[];
      readyEyebrow: string;
      readyTitle: string;
      readyLede: string;
      addressLabel: string;
      phoneLabel: string;
      emailLabel: string;
    };
    services: {
      heroEyebrow: string;
      heroTitlePre: string;
      heroTitleEm: string;
      heroLede: string;
    };
    resources: {
      heroEyebrow: string;
      heroTitlePre: string;
      heroTitleEm: string;
      heroLede: string;
      latest: string;
      heading: string;
      sub: string;
      cardTitle: string;
      cardExcerpt: string;
      cardMeta: string;
      cta: string;
    };
    about: {
      heroEyebrow: string;
      heroTitle: string;
      heroLede: string;
      storyEyebrow: string;
      storyHeading: string;
      storyBody: string;
      teamEyebrow: string;
      teamHeading: string;
      teamSub: string;
      teamRole: string;
      whatEyebrow: string;
      whatHeading: string;
      whatLede: string;
    };
    contact: {
      heroEyebrow: string;
      heroTitle: string;
      heroLede: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      area: string;
      areaSelect: string;
      areaOther: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      consent: string;
      thanksTitle: string;
      thanksBody: string;
      asideEmail: string;
      asidePhone: string;
      asideOffices: string;
      asideHours: string;
      pendingConfirm: string;
      emailValue: string;
      officesValue: string;
      hoursValue: string;
    };
    people: {
      heroEyebrow: string;
      heroTitlePre: string;
      heroTitleEm: string;
      heroLede: string;
      viewProfile: string;
      qualifications: string;
      expertise: string;
      backToPeople: string;
      contactLabel: string;
      bookWith: string;
    };
    legalPending: string;
    placeholderTag: string;
  };
}

const DICT: Record<Lang, Dictionary> = {
  en: {
    nav: {
      expertise: "Expertise",
      services: "Services",
      resources: "Resources",
      about: "About",
      contact: "Contact",
      book: "Book a consultation",
      firm: "Firm",
      panelHeadline: "Seven areas, one standard of care",
      panelBlurb:
        "Considered counsel across the matters that shape Australian businesses and families — handled by solicitors, not just process.",
      panelAbout: "About the firm",
    },
    footer: {
      blurb:
        "Clear, considered legal counsel across Australia — from property and commercial matters to estates, intellectual property, criminal, migration, and notarial services.",
      disclaimer:
        "The information on this website is general in nature and does not constitute legal advice. Please contact us for advice tailored to your circumstances.",
      expertise: "Expertise",
      firm: "Firm",
      aboutLexcord: "About Lexcord",
      contact: "Contact",
      book: "Book a consultation",
      rights: "All rights reserved.",
      australiaWide: "Australia-wide",
      contactTitle: "Contact",
      address: "1508/530 Little Collins St, Melbourne VIC 3000",
      lift: "Take the lift to Level 14, then the opposite lift up to Level 15. Turn right as you exit and continue straight ahead.",
      legal: "Legal",
    },
    common: {
      ourServices: "Our services",
      whyChoose: "Why Choose Lexcord",
      bookConsultation: "Book a consultation",
      learnMore: "Learn more",
      relatedPosts: "Related insights",
      relatedPostsLede: "Plain-language guidance on this area — articles pending the firm's real publications.",
      postTitle: "Article title goes here",
      postExcerpt: "A short standfirst summarising the article will appear here once content is supplied.",
      areaTeam: "Your legal team",
      areaTeamLede: "The solicitors who handle these matters. Book a consultation to get started.",
      areaTeamEmpty: "Team profiles for this area are being added. Contact us and we will connect you with the right solicitor.",
      viewProfile: "View profile",
    },
    areaZh: {},
    summaries: {
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
    },
    pages: {
      home: {
        bannerTitle: "Legal advice with clarity, care and commercial sense.",
        bannerLede:
          "Lexcord Lawyers is a Melbourne-based law firm assisting individuals, families and businesses with property, commercial, migration, wills and estates, intellectual property, criminal law and other legal matters.",
        whyEyebrow: "Why Lexcord",
        whyTitle: "Why choose Lexcord?",
        whySubtitle: "Sharp legal thinking, delivered with care.",
        why: [
          {
            title: "Clear and practical advice",
            text: "We explain your legal position, options and risks in a way that is clear, direct and easy to understand.",
          },
          {
            title: "Personal attention",
            text: "We take the time to understand your circumstances, priorities and concerns before recommending the next steps.",
          },
          {
            title: "Depth across key practice areas",
            text: "Our partners and lawyers each bring focused experience in their respective practice areas, allowing clients to receive tailored advice from the right person for the right matter.",
          },
        ],
        sayEyebrow: "Client feedback",
        sayTitle: "What do they say",
        testimonials: [
          { quote: "From our first conversation, Lexcord explained my options clearly and made a stressful process feel manageable.", name: "J. Williams", detail: "Conveyancing" },
          { quote: "Responsive, practical and genuinely on my side. I always knew exactly where my matter stood.", name: "A. Chen", detail: "Commercial" },
          { quote: "They handled my visa application with real care and kept me informed at every single step.", name: "R. Kumar", detail: "Migration" },
          { quote: "Clear advice, fair fees and no surprises. Exactly what you want from a law firm.", name: "M. Rossi", detail: "Wills & Estates" },
          { quote: "Professional, calm and thorough. I felt supported throughout a genuinely difficult time.", name: "S. Nguyen", detail: "Criminal" },
          { quote: "Sharp on the detail and easy to deal with. I would recommend them without hesitation.", name: "D. Brown", detail: "Intellectual Property" },
        ],
        readyEyebrow: "Get in touch",
        readyTitle: "Ready to discuss your matter?",
        readyLede:
          "Speak with us about your situation. Book a confidential consultation, or reach us by phone or email.",
        addressLabel: "Address",
        phoneLabel: "Phone",
        emailLabel: "Email",
      },
      services: {
        heroEyebrow: "Our Services",
        heroTitlePre: "Seven practice areas, ",
        heroTitleEm: "one standard of care",
        heroLede:
          "Lexcord brings the breadth of a general practice together with the depth of specialist counsel — advising individuals, families, and businesses across every Australian state and territory.",
      },
      resources: {
        heroEyebrow: "Resources & Insights",
        heroTitlePre: "Plain-language guidance on ",
        heroTitleEm: "the law that affects you",
        heroLede:
          "Article and insight content is not part of the supplied document and is pending the firm's real publications. The layout below shows how it will be presented.",
        latest: "Latest insights",
        heading: "Articles & guides",
        sub: "Placeholder cards — replace each with a real article when content is ready.",
        cardTitle: "Article title goes here",
        cardExcerpt:
          "A short standfirst summarising the article will appear here once real content is supplied.",
        cardMeta: "Author · Date · 5 min read",
        cta: "Have a question now? Book a consultation",
      },
      about: {
        heroEyebrow: "About the firm",
        heroTitle: "Firm headline pending — e.g. a general practice with specialist depth.",
        heroLede:
          "Firm overview pending. This copy is not part of the supplied document. Replace with the firm's real story, values, and positioning.",
        storyEyebrow: "Our story",
        storyHeading: "Firm history headline",
        storyBody:
          "Firm history, founding story, values, and approach to be supplied. This section is a placeholder, not part of the source document.",
        teamEyebrow: "The team",
        teamHeading: "Our people",
        teamSub: "Lawyer profiles, photos, admissions, and credentials are pending your content.",
        teamRole: "Title · Admissions",
        whatEyebrow: "What we do",
        whatHeading: "Counsel across seven areas of law",
        whatLede: "Explore any practice area to see how we work.",
      },
      contact: {
        heroEyebrow: "Book a consultation",
        heroTitle: "Contact headline pending — e.g. let's talk about your matter.",
        heroLede:
          "Intro copy pending firm content. The enquiry form below is functional and routes to the firm once connected.",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phone: "Phone",
        area: "Area of law",
        areaSelect: "Select the area that best fits…",
        areaOther: "Something else",
        message: "How can we help?",
        messagePlaceholder:
          "Tell us a little about your matter. There is no obligation, and your enquiry is confidential.",
        submit: "Request a consultation",
        consent:
          "By submitting this form you agree to be contacted about your enquiry. The information you provide is general and does not create a lawyer–client relationship.",
        thanksTitle: "Thank you — we have your enquiry.",
        thanksBody:
          "A member of our team will be in touch within one business day to arrange your consultation. For urgent criminal or bail matters, please call us directly.",
        asideEmail: "Email",
        asidePhone: "Phone",
        asideOffices: "Offices",
        asideHours: "Hours",
        pendingConfirm: "To be confirmed",
        emailValue: "hello@lexcord.com.au",
        officesValue:
          "Servicing all Australian states & territories. Office address to be confirmed.",
        hoursValue:
          "Monday – Friday, by appointment. Urgent criminal & bail matters: contact us any time.",
      },
      people: {
        heroEyebrow: "Our People",
        heroTitlePre: "The people behind ",
        heroTitleEm: "your matter",
        heroLede:
          "Lexcord is led by admitted solicitors who treat your matter as their own. Meet the team — more profiles are being added.",
        viewProfile: "View profile",
        qualifications: "Qualifications",
        expertise: "Areas of expertise",
        backToPeople: "All people",
        contactLabel: "Contact",
        bookWith: "Book a consultation",
      },
      legalPending:
        "This page is a placeholder. The firm's final wording is pending and should be reviewed by a qualified practitioner before publication.",
      placeholderTag: "Placeholder",
    },
  },
  zh: {
    nav: {
      expertise: "执业领域",
      services: "服务",
      resources: "资讯",
      about: "关于我们",
      contact: "联系我们",
      book: "预约咨询",
      firm: "律所",
      panelHeadline: "七大领域,同一份用心",
      panelBlurb: "为塑造澳大利亚企业与家庭的重要事务提供深思熟虑的法律意见——由律师亲自处理,而非流于流程。",
      panelAbout: "了解律所",
    },
    footer: {
      blurb:
        "覆盖全澳的清晰、审慎法律意见——从房产与商业事务,到遗产、知识产权、刑事、移民及公证服务。",
      disclaimer: "本网站信息仅为一般性内容,不构成法律意见。请联系我们获取针对您具体情况的建议。",
      expertise: "执业领域",
      firm: "律所",
      aboutLexcord: "关于 Lexcord",
      contact: "联系我们",
      book: "预约咨询",
      rights: "版权所有。",
      australiaWide: "服务全澳",
      contactTitle: "联系方式",
      address: "维多利亚州墨尔本市 Little Collins St 530 号 1508 室,邮编 3000",
      lift: "电梯坐到 14 楼,对面电梯再上 15 楼,出电梯后右转直走。",
      legal: "法律",
    },
    common: {
      ourServices: "我们的服务",
      whyChoose: "为何选择 Lexcord",
      bookConsultation: "预约咨询",
      learnMore: "了解更多",
      relatedPosts: "相关资讯",
      relatedPostsLede: "关于本领域的通俗解读——文章内容有待律所提供真实出版物。",
      postTitle: "文章标题占位",
      postExcerpt: "提供内容后,此处将显示概括文章的简短导语。",
      areaTeam: "您的法律团队",
      areaTeamLede: "处理此类事务的律师。预约咨询即可开始。",
      areaTeamEmpty: "该领域的团队简介正在陆续加入。请联系我们,我们会为您对接合适的律师。",
      viewProfile: "查看简介",
    },
    areaZh: {
      "property-conveyancing": "房产与产权过户",
      commercial: "商业法",
      "wills-estates": "遗嘱与遗产",
      "intellectual-property": "知识产权",
      "criminal-law": "刑事法",
      "notary-public": "公证服务",
      "migration-law": "移民法",
    },
    summaries: {
      "property-conveyancing":
        "全流程产权过户、楼花购买、地产开发与产权纠纷,服务全澳各州与领地。",
      commercial:
        "就合同、雇佣、纠纷与租赁,为初创企业、中小企业及大型企业提供直接、务实的商业法律意见。",
      "wills-estates": "用心处理遗嘱、遗嘱信托、授权书、遗嘱认证与遗产管理。",
      "intellectual-property":
        "商标、专利、版权与外观设计——从首次注册到国际申请与维权。",
      "criminal-law": "就交通、伤害、毒品、家庭暴力与保释事务,提供清晰、诚实的代理。",
      "notary-public":
        "为境外使用的文件提供具资质的公证服务,包括海牙认证(Apostille)与 DFAT 认证。",
      "migration-law": "就技术、家庭、学生、商业、人道及复议途径提供注册移民意见。",
    },
    pages: {
      home: {
        bannerTitle: "清晰、用心、兼具商业判断的法律意见。",
        bannerLede:
          "Lexcord Lawyers 是一家位于墨尔本的律师事务所,为个人、家庭与企业处理房产、商业、移民、遗嘱与遗产、知识产权、刑事等各类法律事务。",
        whyEyebrow: "为何选择 Lexcord",
        whyTitle: "为何选择 Lexcord?",
        whySubtitle: "敏锐的法律思考,以用心的方式交付。",
        why: [
          {
            title: "清晰而务实的建议",
            text: "我们以清晰、直接、易于理解的方式,向您说明法律处境、可选方案与风险。",
          },
          {
            title: "贴身的个性化关注",
            text: "在提出下一步建议之前,我们会用心了解您的处境、优先事项与顾虑。",
          },
          {
            title: "在核心领域的深厚专长",
            text: "我们的合伙人与律师各自在其执业领域拥有专注的经验,让客户能就合适的事务,从合适的人那里获得量身定制的建议。",
          },
        ],
        sayEyebrow: "客户评价",
        sayTitle: "客户怎么说",
        testimonials: [
          { quote: "从第一次沟通起,Lexcord 就把我的选择讲得清清楚楚,让原本压力很大的过程变得从容可控。", name: "J. Williams", detail: "产权过户" },
          { quote: "回应及时、做法务实,真心站在我这一边。我始终清楚自己的事务进展到哪一步。", name: "A. Chen", detail: "商业法" },
          { quote: "他们非常用心地处理了我的签证申请,每一步都让我了解进展。", name: "R. Kumar", detail: "移民法" },
          { quote: "建议清晰、收费合理、毫无意外。这正是你对一家律所的期待。", name: "M. Rossi", detail: "遗嘱与遗产" },
          { quote: "专业、沉稳、细致。在一段艰难的时期里,我始终感到被支持。", name: "S. Nguyen", detail: "刑事法" },
          { quote: "对细节把握精准,沟通也很轻松。我会毫不犹豫地推荐他们。", name: "D. Brown", detail: "知识产权" },
        ],
        readyEyebrow: "与我们联系",
        readyTitle: "准备好谈谈您的事务了吗?",
        readyLede:
          "与我们聊聊您的处境。预约一次保密咨询,或通过电话、邮件联系我们。",
        addressLabel: "地址",
        phoneLabel: "电话",
        emailLabel: "邮箱",
      },
      services: {
        heroEyebrow: "我们的服务",
        heroTitlePre: "七大执业领域,",
        heroTitleEm: "同一份用心",
        heroLede:
          "Lexcord 兼具综合性事务所的广度与专业律师的深度——为个人、家庭与企业提供服务,覆盖全澳各州与领地。",
      },
      resources: {
        heroEyebrow: "资讯与洞见",
        heroTitlePre: "用通俗语言解读",
        heroTitleEm: "与你相关的法律",
        heroLede:
          "文章与洞见内容非源文档的一部分,有待本所提供真实出版内容。下方版式展示其呈现方式。",
        latest: "最新洞见",
        heading: "文章与指南",
        sub: "占位卡片——内容就绪后逐一替换为真实文章。",
        cardTitle: "文章标题占位",
        cardExcerpt: "提供真实内容后,此处将显示概括文章的简短导语。",
        cardMeta: "作者 · 日期 · 5 分钟阅读",
        cta: "现在就有疑问?预约咨询",
      },
      about: {
        heroEyebrow: "关于本所",
        heroTitle: "事务所主标题待定 — 例如:兼具综合广度与专业深度的事务所。",
        heroLede:
          "事务所概览待定。此段非源文档内容。请替换为本所真实的故事、价值观与定位。",
        storyEyebrow: "我们的故事",
        storyHeading: "事务所历史标题",
        storyBody:
          "事务所历史、创立故事、价值观与执业理念有待提供。本区为占位内容,非源文档内容。",
        teamEyebrow: "团队",
        teamHeading: "我们的成员",
        teamSub: "律师简介、照片、执业资格与资历有待您提供内容。",
        teamRole: "职衔 · 执业资格",
        whatEyebrow: "我们的业务",
        whatHeading: "横跨七大法律领域的专业意见",
        whatLede: "浏览任一执业领域,了解我们的工作方式。",
      },
      contact: {
        heroEyebrow: "预约咨询",
        heroTitle: "联系页主标题待定 — 例如:聊聊您的事务。",
        heroLede: "引言文案待事务所提供。下方的咨询表单已可使用,接通后将直达本所。",
        firstName: "名",
        lastName: "姓",
        email: "电子邮箱",
        phone: "电话",
        area: "法律领域",
        areaSelect: "请选择最相符的领域……",
        areaOther: "其他事务",
        message: "我们能为您做些什么?",
        messagePlaceholder: "请简单描述您的事务。无需任何义务,且您的咨询将予以保密。",
        submit: "申请咨询",
        consent:
          "提交此表单即表示您同意我们就您的咨询与您联系。您提供的信息为一般性内容,不构成律师—委托人关系。",
        thanksTitle: "感谢您——我们已收到您的咨询。",
        thanksBody:
          "我们的团队成员将在一个工作日内与您联系,安排咨询。如遇紧急刑事或保释事务,请直接致电我们。",
        asideEmail: "电子邮箱",
        asidePhone: "电话",
        asideOffices: "办公地点",
        asideHours: "工作时间",
        pendingConfirm: "待确认",
        emailValue: "hello@lexcord.com.au",
        officesValue: "服务全澳各州与领地。办公地址待确认。",
        hoursValue: "周一至周五,需预约。紧急刑事与保释事务:可随时联系我们。",
      },
      people: {
        heroEyebrow: "我们的团队",
        heroTitlePre: "为您的事务",
        heroTitleEm: "保驾护航的团队",
        heroLede:
          "Lexcord 由正式执业的律师领衔,把您的事务当作自己的事务。认识我们的团队——更多成员简介正在陆续加入。",
        viewProfile: "查看简介",
        qualifications: "资历与执业资格",
        expertise: "专长领域",
        backToPeople: "返回团队",
        contactLabel: "联系方式",
        bookWith: "预约咨询",
      },
      legalPending:
        "本页为占位内容。本所的最终措辞有待确定,发布前应由具资质的执业者审核。",
      placeholderTag: "占位",
    },
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dictionary;
  /** Localised practice-area label for display. */
  areaLabel: (slug: string, enLabel: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lexcord-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore persisted preference after hydration.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh") {
      setLangState(stored);
      document.documentElement.lang = stored === "zh" ? "zh-CN" : "en-AU";
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en-AU";
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "zh" : "en");
  }, [lang, setLang]);

  const value = useMemo<LanguageContextValue>(() => {
    const t = DICT[lang];
    return {
      lang,
      setLang,
      toggle,
      t,
      areaLabel: (slug, enLabel) => (lang === "zh" ? t.areaZh[slug] ?? enLabel : enLabel),
    };
  }, [lang, setLang, toggle]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
