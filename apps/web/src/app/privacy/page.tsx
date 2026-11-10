import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return <div className="page-shell"><div className="container page-hero"><p className="eyebrow">KhushNovaTech · Legal</p><h1>Privacy Policy</h1><p>How this local-development website handles information shared through the contact form.</p></div><section className="section section-tinted"><div className="container legal-copy"><h2>Information we receive</h2><p>The contact form asks for your name, phone number, email address and project details so we can respond to your request. The form sends this information to W3Forms for email delivery. KhushNovaTech does not store contact inquiries in PostgreSQL.</p><h3>Provider processing</h3><p>W3Forms may process submissions according to its own policies and service terms. A public W3Forms access key is visible in browser requests and is not treated as a private secret. Provider domain restrictions and anti-spam controls should be configured before launch.</p><h3>Data minimization</h3><p>Please share only the information needed to describe your project. Do not send passwords, payment details or other sensitive credentials through this form.</p><h3>Questions</h3><p>For questions about this policy, use the <a className="inline-link" href="/contact">contact form</a>.</p></div></section></div>;
}

