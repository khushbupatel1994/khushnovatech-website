import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { number: "01 / DISCOVER", title: "Understand the goal", copy: "We discuss your audience, requirements, priorities and what success should look like." },
  { number: "02 / DESIGN & BUILD", title: "Shape the experience", copy: "We plan the structure, refine the interface and build responsive, maintainable solutions." },
  { number: "03 / TEST & LAUNCH", title: "Make it ready", copy: "We review key flows, mobile usability and performance before preparing for deployment." },
];

export function ProcessSection() {
  return <section className="section process-section" id="our-process"><div className="container"><p className="eyebrow">How we work · KhushNovaTech</p><h2>From first idea to a confident launch.</h2><p className="process-lead">A clear, collaborative process that keeps your goals, your users and the finished experience in focus.</p><div className="process-grid">{steps.map((step, index) => <Reveal key={step.title} delay={index * 75}><article className="process-step"><span className="process-number">{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></article></Reveal>)}</div><Link className="button-primary process-cta" href="/contact">Discuss your project <span aria-hidden="true">↗</span></Link></div></section>;
}

