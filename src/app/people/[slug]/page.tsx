import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { team, getMember } from "@/data/people";
import { PersonDetail } from "./person-detail";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = getMember(params.slug);
  if (!member || member.placeholder) return { title: "Our People" };
  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio[0],
  };
}

export default function PersonPage({ params }: { params: { slug: string } }) {
  if (!getMember(params.slug)) notFound();
  return <PersonDetail slug={params.slug} />;
}
