import type { Metadata } from "next";
import Link from "next/link";
import { ProcessSection } from "@/components/home/ProcessSection";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <div className="page-shell"><div className="container page-hero"><p className="eyebrow">About KhushNovaTech</p><h1>Ideas, design and technology.<br /><em>A connected approach.</em></h1><p>A focused mix of development, design and digital growth working together to turn good ideas into useful experiences.</p></div><section className="section section-tinted"><div className="container about-grid"><div className="about-copy"><p className="eyebrow">A thoughtful starting point</p><h2>Useful should feel clear.</h2><p>KhushNovaTech brings the technical and visual sides of a project into the same conversation. That means clearer decisions, calmer interfaces and foundations that are easier to keep useful after launch.</p><ul className="about-points"><li>Start with your audience, requirements and priorities.</li><li>Shape a responsive experience around a focused task.</li><li>Review usability and performance before handover.</li></ul><Link className="button-primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></div><div className="about-visual" aria-hidden="true"><div className="about-visual-mark">K</div></div></div></section><ProcessSection /></div>;
}

