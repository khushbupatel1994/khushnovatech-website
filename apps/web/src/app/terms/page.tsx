import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return <div className="page-shell"><div className="container page-hero"><p className="eyebrow">KhushNovaTech · Legal</p><h1>Terms &amp; Conditions</h1><p>Simple expectations for using this website and getting in touch about a project.</p></div><section className="section section-tinted"><div className="container legal-copy"><h2>Using this website</h2><p>The information on this website is provided for general information about KhushNovaTech services, projects and approach. Project examples are personal or development projects and do not represent commercial client claims.</p><h3>Project conversations</h3><p>Submitting the contact form starts a conversation; it does not create a contract, estimate or delivery commitment. Scope, timing, responsibilities and fees should be agreed separately in writing.</p><h3>Third-party services</h3><p>The contact form uses W3Forms to deliver submissions. Availability and processing of that provider are subject to its own terms.</p><h3>Updates</h3><p>These terms may be updated as the website and services evolve. The current version will be available on this page.</p></div></section></div>;
}

