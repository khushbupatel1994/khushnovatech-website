import Link from "next/link";
import { serviceGroups, services } from "@/data/services";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-intro">
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">K</span>
            <span>KhushNovaTech</span>
          </Link>
          <p>Ideas, design and technology working together to turn good ideas into useful experiences.</p>
          <Link className="footer-contact-link" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          {serviceGroups.map((group) => <Link href={`/services#${services.find((service) => service.group === group)?.slug ?? "services"}`} key={group}>{group}</Link>)}
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/about">About</Link>
          <Link href="/team">Team</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Legal</h2>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 KhushNovaTech. All rights reserved.</p>
        <p>Ideas into impact.</p>
      </div>
    </footer>
  );
}

