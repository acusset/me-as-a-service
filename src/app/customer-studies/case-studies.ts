import { Experience } from "@/components/ExperienceCard/types"

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Wealth Management Platform",
    description: "A comprehensive wealth management platform for a major financial institution in Singapore, featuring portfolio management, client relationship tools, and automated reporting.",
    period: "2023",
    company: "Palo IT",
    role: "Senior Software Engineer",
    location: "Singapore",
    projects: [
      {
        title: "Portfolio Management System",
        description: "Core system for managing client portfolios",
        technologies: ["React", "TypeScript", "Node.js"]
      }
    ],
    tags: [
      { id: "1", name: "Frontend" },
      { id: "2", name: "Backend" }
    ],
    companyBadgeColor: "bg-emerald-500/10",
    companyTextColor: "text-emerald-500",
    technologies: ["React", "TypeScript", "Node.js"]
  }
] 