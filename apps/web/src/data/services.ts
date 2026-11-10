export type ServiceGroup = "Build" | "Design & strategy" | "Growth & support";

export type Service = {
  slug: string;
  title: string;
  description: string;
  group: ServiceGroup;
  icon: string;
  details: string[];
};

export const serviceGroups: ServiceGroup[] = ["Build", "Design & strategy", "Growth & support"];

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    description: "A clear, confident home for your business online.",
    group: "Build",
    icon: "⌘",
    details: ["Responsive page structure", "Maintainable Next.js foundations", "Accessible, performance-minded implementation"],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    description: "Practical applications for everyday business workflows.",
    group: "Build",
    icon: "</>",
    details: ["Focused workflow design", "Typed React interfaces", "Secure API-ready architecture"],
  },
  {
    slug: "android-app-development",
    title: "Android App Development",
    description: "Mobile experiences designed around a focused task.",
    group: "Build",
    icon: "▣",
    details: ["Task-first mobile journeys", "Clear screen structure", "Practical handover planning"],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    description: "Less repetitive work. More connected processes.",
    group: "Build",
    icon: "⚙",
    details: ["Process mapping", "Connected operational steps", "Automation shaped around real needs"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Clear journeys. Thoughtful interfaces.",
    group: "Design & strategy",
    icon: "✧",
    details: ["Information architecture", "Calm, usable interfaces", "Responsive design direction"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    description: "A practical direction for your technology decisions.",
    group: "Design & strategy",
    icon: "◈",
    details: ["Technology options made clear", "Practical technical direction", "A considered path to the next step"],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    description: "Make your website easier to find and understand.",
    group: "Growth & support",
    icon: "◉",
    details: ["Clear content structure", "Search-friendly page foundations", "Useful, understandable information"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "A more consistent presence across your social channels.",
    group: "Growth & support",
    icon: "◌",
    details: ["Content direction", "Consistent social presence", "Communication shaped around your audience"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Campaigns shaped around your audience and goals.",
    group: "Growth & support",
    icon: "◒",
    details: ["Audience-focused planning", "Clear campaign priorities", "A practical route from idea to action"],
  },
  {
    slug: "whatsapp-business-integration",
    title: "WhatsApp Business Integration",
    description: "A simpler path from interest to conversation.",
    group: "Growth & support",
    icon: "◍",
    details: ["Conversation entry points", "Clear customer handoffs", "Provider-aware integration planning"],
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance & Support",
    description: "Keep your website useful after launch.",
    group: "Growth & support",
    icon: "⟳",
    details: ["Content and interface upkeep", "Performance-minded improvements", "Ongoing technical guidance"],
  },
];

