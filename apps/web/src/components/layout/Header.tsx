"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNavigation, serviceNavigation } from "@/data/navigation";
import type { ServiceGroup } from "@/data/services";

const serviceGroups: ServiceGroup[] = ["Build", "Design & strategy", "Growth & support"];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 16);
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`site-header ${isScrolled ? "site-header-scrolled" : ""}`}>
      <div className="site-header-inner">
        <Link className="brand" href="/" aria-label="KhushNovaTech home">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>KhushNovaTech</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav id="main-navigation" className={`main-navigation ${menuOpen ? "main-navigation-open" : ""}`} aria-label="Main navigation">
          <Link className={isActive("/") ? "nav-link nav-link-active" : "nav-link"} href="/">Home</Link>

          <div className="services-nav">
            <button
              className={`nav-link services-trigger ${pathname === "/services" ? "nav-link-active" : ""}`}
              type="button"
              aria-controls="services-menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              Services <span className="chevron" aria-hidden="true">⌄</span>
            </button>
            <div id="services-menu" className={`services-menu ${servicesOpen ? "services-menu-open" : ""}`}>
              <div className="services-menu-heading">
                <div>
                  <p className="eyebrow">Explore our services</p>
                  <p>Build a useful presence, then keep it moving.</p>
                </div>
                <Link href="/services" className="text-link" onClick={() => setServicesOpen(false)}>View all services <span aria-hidden="true">↗</span></Link>
              </div>
              <div className="services-menu-grid">
                {serviceGroups.map((group) => (
                  <div className="services-menu-group" key={group}>
                    <p>{group}</p>
                    {serviceNavigation[group].map((service) => (
                      <Link href={service.href} key={service.href} onClick={() => setServicesOpen(false)}>{service.label}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {primaryNavigation.slice(1).map((item) => (
            <Link className={isActive(item.href) ? "nav-link nav-link-active" : "nav-link"} href={item.href} key={item.href}>{item.label}</Link>
          ))}
          <Link className="nav-cta" href="/contact">Plan a project <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
      <div className="scroll-progress" aria-hidden="true"><div ref={progressRef} /></div>
    </header>
  );
}

