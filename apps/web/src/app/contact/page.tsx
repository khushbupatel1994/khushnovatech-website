import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <div className="page-shell"><div className="container contact-shell"><div className="contact-intro"><p className="eyebrow">Start a project</p><h1>A clear brief.<br /><em>A better start.</em></h1><p>Tell us about your project and we&apos;ll get back to you. Share your goals, define your scope and plan the next step.</p><div className="contact-points"><span>01 &nbsp; Share your goals</span><span>02 &nbsp; Define your scope</span><span>03 &nbsp; Plan the next step</span></div></div><ContactForm /></div></div>;
}

