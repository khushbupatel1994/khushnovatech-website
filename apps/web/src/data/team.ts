export type TeamMember = {
  name: string;
  role: string;
  discipline: string;
  skills?: string[];
  initials: string;
};

export const team: TeamMember[] = [
  { name: "Khushbu Patel", role: "Web Developer", discipline: "Development", skills: ["Networking", "Cloud Development", "Cyber Security"], initials: "KP" },
  { name: "Shaill Ali", role: "UI/UX Designer", discipline: "Design", initials: "SA" },
  { name: "Rajeev Keevat", role: "Application Developer", discipline: "Engineering", initials: "RK" },
  { name: "Sapna", role: "Digital Marketing Specialist", discipline: "Digital growth", initials: "S" },
];

