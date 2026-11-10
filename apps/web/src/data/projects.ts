export type Project = {
  title: string;
  label: string;
  description: string;
  technologies: string[];
  kind: "hospital" | "banking";
};

export const projects: Project[] = [
  {
    title: "Hospital ERP System",
    label: "Personal project",
    description: "Exploring database management and application logic through a hospital management project.",
    technologies: ["Python", "SQL"],
    kind: "hospital",
  },
  {
    title: "Banking Management System",
    label: "Personal project",
    description: "A Java project focused on understanding banking workflows and practical programming concepts.",
    technologies: ["Java", "Business logic"],
    kind: "banking",
  },
];

