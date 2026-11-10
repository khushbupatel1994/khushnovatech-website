import { team } from "@/data/team";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeamSection({ preview = false }: { preview?: boolean }) {
  const members = preview ? team.slice(0, 4) : team;
  return <section className="section section-tinted" id="team"><div className="container"><SectionHeading eyebrow="01 / The people" title={<>Meet the team building what&apos;s next.</>} description="A small, thoughtful team bringing development, design and digital growth together." /><div className="team-grid">{members.map((member, index) => <Reveal key={member.name} delay={index * 55}><article className="glass-card team-card"><div className="team-avatar" aria-hidden="true">{member.initials}</div><div className="team-role">{member.discipline}</div><h3>{member.name}</h3><p>{member.role}</p>{member.skills ? <div className="team-skills">{member.skills.map((skill) => <span key={skill}>{skill}</span>)}</div> : null}</article></Reveal>)}</div></div></section>;
}

