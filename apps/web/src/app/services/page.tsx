import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/home/ServicesSection";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return <div className="page-shell"><ServicesSection pageIntro /><section className="section section-tinted"><div className="container"><div className="roadmap"><div><p className="eyebrow">Your next step</p><h2>One idea. A clear way forward.</h2><p>Choose a service and tell us what you need. We can shape a practical project brief together.</p></div><Link className="button-primary" href="/contact">Plan a project <span aria-hidden="true">↗</span></Link></div></div></section></div>;
}

