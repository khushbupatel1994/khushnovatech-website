import type { Metadata } from "next";
import { TeamSection } from "@/components/home/TeamSection";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return <div className="page-shell"><div className="container page-hero"><p className="eyebrow">The people</p><h1>Meet the team building what&apos;s next.</h1><p>A focused mix of development, design and digital growth working together to make useful experiences.</p></div><TeamSection /></div>;
}

