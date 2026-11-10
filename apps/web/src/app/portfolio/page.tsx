import type { Metadata } from "next";
import { PortfolioSection } from "@/components/home/PortfolioSection";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return <div className="page-shell"><div className="container page-hero"><p className="eyebrow">Selected projects</p><h1>Practical ideas.<br /><em>Working foundations.</em></h1><p>A look at development projects exploring database management, application logic and useful workflows.</p></div><PortfolioSection /></div>;
}

