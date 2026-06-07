import type { Metadata } from "next";
import { ExpertiseContent } from "./expertise-content";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Lexcord's areas of expertise — property and conveyancing, commercial, wills and estates, intellectual property, criminal, notary, and migration law.",
};

export default function ExpertiseIndexPage() {
  return <ExpertiseContent />;
}
