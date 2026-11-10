import type { ServiceGroup } from "./services";

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceNavigation: Record<ServiceGroup, { label: string; href: string }[]> = {
  Build: [
    { label: "Website Development", href: "/services#website-development" },
    { label: "Web Application Development", href: "/services#web-application-development" },
    { label: "Android App Development", href: "/services#android-app-development" },
    { label: "Business Automation", href: "/services#business-automation" },
  ],
  "Design & strategy": [
    { label: "UI/UX Design", href: "/services#ui-ux-design" },
    { label: "IT Consulting", href: "/services#it-consulting" },
  ],
  "Growth & support": [
    { label: "Search Engine Optimization", href: "/services#seo" },
    { label: "Social Media Marketing", href: "/services#social-media-marketing" },
    { label: "Digital Marketing", href: "/services#digital-marketing" },
    { label: "WhatsApp Business Integration", href: "/services#whatsapp-business-integration" },
    { label: "Website Maintenance & Support", href: "/services#website-maintenance" },
  ],
};

