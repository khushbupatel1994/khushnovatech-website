import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  ["What kind of projects do you take on?", "We focus on purposeful websites, custom applications, design direction and digital support shaped around a clear business need."],
  ["Can we start with a smaller first step?", "Yes. A clear brief, a focused page or an initial technical direction can be a useful way to move forward."],
  ["What happens after I get in touch?", "We review your goals, requirements and priorities, then shape a practical next step together."],
  ["Do you work with existing websites?", "Website maintenance, support and thoughtful improvements are part of the services we can explore."],
];

export function FAQSection() {
  return <section className="section section-tight"><div className="container faq-grid"><div className="faq-intro"><SectionHeading eyebrow="Good to know" title={<>A few useful answers.</>} description="Start with the question that is closest to where you are today." /></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>;
}

