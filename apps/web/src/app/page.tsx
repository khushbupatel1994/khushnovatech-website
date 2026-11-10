import type { Metadata } from "next";
import { FAQSection } from "@/components/home/FAQSection";
import { Hero } from "@/components/home/Hero";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TeamSection } from "@/components/home/TeamSection";
import { Toolkit } from "@/components/home/Toolkit";

export const metadata: Metadata = { title: "Web Development & Digital Solutions" };

export default function HomePage() {
  return <div className="page-shell"><Hero /><Toolkit /><ServicesSection /><TeamSection preview /><PortfolioSection /><ProcessSection /><FAQSection /><RoadmapSection /></div>;
}

