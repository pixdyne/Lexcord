export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  roleZh: string;
  /** Photo path under /public, or null for an unfilled placeholder slot. */
  photo: string | null;
  /** Practice-area slugs this person works across. */
  areas: string[];
  email: string;
  phone: string;
  qualifications: string[];
  qualificationsZh: string[];
  bio: string[];
  bioZh: string[];
  /** True for not-yet-supplied team slots. */
  placeholder?: boolean;
}

const FIRM_EMAIL = "info@lexcord.com.au";
const FIRM_PHONE = "+61 3 7054 5135";

export const team: TeamMember[] = [
  {
    slug: "elijah-feng",
    name: "Elijah Feng",
    role: "Solicitor",
    roleZh: "律师",
    photo: "/images/team/elijah-feng.png",
    areas: ["migration-law", "criminal-law"],
    email: FIRM_EMAIL,
    phone: FIRM_PHONE,
    qualifications: [
      "Juris Doctor — University of Melbourne",
      "Graduate Diploma in Migration Law — Victoria University",
      "Bachelor of Computer Science — Monash University",
      "Solicitor of the Supreme Court of Victoria",
      "Solicitor of the High Court of Australia",
      "Registered Migration Agent (Department of Home Affairs, Australia)",
      "Member of the Law Institute of Victoria",
      "Member of the Migration Institute of Australia",
    ],
    qualificationsZh: [
      "法学博士(Juris Doctor)— 墨尔本大学",
      "移民法研究生文凭 — 维多利亚大学",
      "计算机科学学士 — 莫纳什大学",
      "维多利亚州最高法院律师",
      "澳大利亚高等法院律师",
      "注册移民代理(澳大利亚内政部)",
      "维多利亚州法学会会员",
      "澳大利亚移民协会会员",
    ],
    bio: [
      "Mr Feng specialises in Australian immigration law, possessing extensive practical experience and exceptional professional expertise. Whether handling routine visa applications or complex immigration legal matters, he provides precise and efficient legal solutions, ensuring that every case is managed with the highest level of professionalism.",
      "He has in-depth knowledge of various Australian visa categories. With a thorough understanding of visa application processes, assessment criteria, and policy changes, he assists clients in strategic planning to enhance their chances of visa approval. He is also highly skilled in handling visa refusals, cancellations, and complex legal challenges, including Administrative Appeals Tribunal (AAT) appeals, Federal Court appeals, visa cancellation reviews, and Section 57 natural justice responses.",
    ],
    bioZh: [
      "Feng 律师专注于澳大利亚移民法,拥有丰富的实务经验与卓越的专业能力。无论是常规签证申请还是复杂的移民法律事务,他都能提供精准、高效的法律解决方案,确保每一宗案件都以最高的专业水准处理。",
      "他对澳大利亚各类签证类别有深入了解,透彻掌握签证申请流程、评审标准与政策变化,协助客户进行策略规划,以提高签证获批的机会。他同样擅长处理签证拒签、取消及复杂法律挑战,包括行政上诉仲裁庭(AAT)上诉、联邦法院上诉、签证取消复审,以及 Section 57 自然公正回应。",
    ],
  },
  ...buildPlaceholders(3, FIRM_EMAIL, FIRM_PHONE),
];

/** Placeholder team slots — real profiles to be supplied by the firm. */
function buildPlaceholders(count: number, email: string, phone: string): TeamMember[] {
  return Array.from({ length: count }, (_, i) => ({
    slug: `member-${i + 2}`,
    name: "Name pending",
    role: "Title pending",
    roleZh: "职衔待定",
    photo: null,
    areas: [],
    email,
    phone,
    qualifications: [],
    qualificationsZh: [],
    bio: ["Profile pending. This team member's biography and credentials will be supplied by the firm."],
    bioZh: ["简介待定。该团队成员的介绍与资历将由律所提供。"],
    placeholder: true,
  }));
}

export const teamBySlug = new Map(team.map((m) => [m.slug, m]));

export function getMember(slug: string): TeamMember | undefined {
  return teamBySlug.get(slug);
}
