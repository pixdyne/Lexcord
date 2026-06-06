import type { Metadata } from "next";
import { PeopleContent } from "./people-content";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet the Lexcord team — admitted solicitors advising on migration, property, commercial, estates, intellectual property, criminal, and notarial matters.",
};

export default function PeoplePage() {
  return <PeopleContent />;
}
