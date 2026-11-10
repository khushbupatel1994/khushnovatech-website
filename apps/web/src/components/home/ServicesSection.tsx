import Link from "next/link";
import { services, type ServiceGroup } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServicesSectionProps = { limit?: number; pageIntro?: boolean };

export function ServicesSection({ limit, pageIntro = false }: ServicesSectionProps) {
  const shownServices = limit ? services.slice(0, limit) : services;
  const groups: ServiceGroup[] = ["Build", "Design & strategy", "Growth & support"];

  return (
    <section className="section" id="services">
      <div className="container">
        {pageIntro ? <div className="page-hero page-hero-wide"><p className="eyebrow">What we do</p><h1>Ideas, design and technology.<br /><em>A connected approach.</em></h1><p>Explore services for building your online presence, simplifying operations and supporting digital growth.</p></div> : <SectionHeading eyebrow="What we do" title={<>Ideas, design and technology.<br />A connected approach.</>} description="Explore services for building your online presence, simplifying operations and supporting digital growth." />}
        {groups.map((group) => {
          const groupServices = shownServices.filter((service) => service.group === group);
          if (!groupServices.length) return null;
          return <div key={group} className="service-group"><div className="service-group-heading"><p className="eyebrow">{group}</p></div><div className="card-grid">{groupServices.map((service, index) => <Reveal key={service.slug} delay={index * 45}><article className="glass-card service-card" id={service.slug}><div className="service-card-top"><span className="service-icon" aria-hidden="true">{service.icon}</span><span className="service-tag">{service.group}</span></div><h3>{service.title}</h3><p>{service.description}</p><Link className="card-link" href={`/services#${service.slug}`}>Explore service <span aria-hidden="true">↗</span></Link></article></Reveal>)}</div></div>;
        })}
      </div>
    </section>
  );
}

