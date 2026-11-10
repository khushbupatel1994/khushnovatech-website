import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">Independent web development studio</p>
          <h1>Your business.<br />Your ambition.<br /><em>Built for the web.</em></h1>
          <p>Purposeful websites and custom applications that connect your business with the people who matter. From the first conversation to the final handover.</p>
          <div className="hero-actions">
            <Link className="button-primary" href="/contact">Plan your project <span aria-hidden="true">↗</span></Link>
            <Link className="button-secondary" href="#work">View selected work <span aria-hidden="true">↓</span></Link>
          </div>
          <div className="hero-proof" aria-label="Project principles">
            <span>✓ Responsive by design</span>
            <span>✓ Clear project scope</span>
            <span>✓ Direct collaboration</span>
          </div>
        </Reveal>

        <Reveal className="hero-art-wrap" delay={120}>
          <div className="hero-art-grid" aria-hidden="true" />
          <div className="hero-art" aria-label="Illustrative website design workspace">
            <div className="art-top"><div className="traffic"><i /><i /><i /></div><span>IDEA · DESIGN · DEVELOPMENT</span></div>
            <div className="art-body">
              <aside className="art-aside">
                <div className="art-brand">✦ KNT</div>
                <span>▣ &nbsp; Overview</span>
                <span>□ &nbsp; Pages</span>
                <span>⌘ &nbsp; Components</span>
                <span>⚙ &nbsp; Settings</span>
                <div className="art-aside-note">YOUR NEXT<strong>BIG THING.</strong></div>
              </aside>
              <div className="art-board">
                <div className="art-board-top"><span>YOUR BUSINESS, ONLINE</span><span>●</span></div>
                <h3>A better digital<br />first impression<span>.</span></h3>
                <p>Thoughtful design. Useful technology.</p>
                <span className="art-mini-cta">Explore the possibilities →</span>
                <div className="art-board-cards"><div><span>01</span><strong>Connect.</strong><i /><i /></div><div><span>02</span><strong>Simplify.</strong><i /><i /></div></div>
                <div className="art-footer">DESIGNED WITH PURPOSE</div>
              </div>
            </div>
          </div>
          <div className="art-badge"><span className="art-badge-icon">&lt;/&gt;</span><div><strong>From idea to interface.</strong><small>A considered approach to every detail.</small></div></div>
          <div className="art-caption">ILLUSTRATIVE DESIGN CONCEPT / KHUSHNOVATECH</div>
        </Reveal>
      </div>
    </section>
  );
}

