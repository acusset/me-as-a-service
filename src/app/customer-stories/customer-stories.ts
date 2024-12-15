import { Experience } from "@/components/ExperienceCard/types"

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Wealth Management Platform",
    slug: "wealth-management-platform",
    description: "A comprehensive wealth management platform featuring dynamic UI generation, content management, and robust testing infrastructure.",
    period: "2023",
    company: "Palo IT",
    role: "Associate Tech Lead",
    location: "Singapore",
    projects: [
      {
        title: "Dynamic UI System",
        description: "Built a React library for generating UIs from JSON configurations",
        technologies: ["React", "TypeScript", "Payload CMS", "Next.js"]
      },
      {
        title: "Testing Framework",
        description: "Established comprehensive testing with 100% unit test coverage",
        technologies: ["Vitest", "GitHub Actions"]
      }
    ],
    tags: [
      { id: "1", name: "Frontend" },
      { id: "2", name: "Testing" }
    ],
    companyBadgeColor: "bg-emerald-500/10",
    companyTextColor: "text-emerald-500",
    technologies: ["React", "TypeScript", "Next.js", "Payload CMS", "Vitest"]
  },
  {
    id: "2",
    title: "StorHub Website Builder",
    slug: "storhub-website-builder",
    description: "End-to-end development of a website builder system with reusable components and content management capabilities.",
    period: "2022",
    company: "Palo IT",
    role: "Senior Software Engineer",
    location: "Singapore",
    projects: [
      {
        title: "Component Library",
        description: "Developed 20 reusable React components with Storybook documentation",
        technologies: ["React", "Storybook", "TypeScript"]
      },
      {
        title: "CMS Integration",
        description: "Implemented website builder using Strapi for content management",
        technologies: ["Strapi", "React", "Node.js"]
      }
    ],
    tags: [
      { id: "3", name: "Frontend" },
      { id: "4", name: "CMS" }
    ],
    companyBadgeColor: "bg-blue-500/10",
    companyTextColor: "text-blue-500",
    technologies: ["React", "TypeScript", "Strapi", "Storybook"]
  },
  {
    id: "3",
    title: "Carbon Credit Marketplace",
    slug: "carbon-credit-marketplace",
    description: "Development of Singapore's first Carbon Credit Marketplace for Climate Impact X, featuring microservices architecture and complex approval workflows.",
    period: "2022",
    company: "Palo IT",
    role: "Senior Software Engineer",
    location: "Singapore",
    projects: [
      {
        title: "Marketplace Platform",
        description: "Built REST APIs and frontend pages for carbon credit trading",
        technologies: ["Spring Boot", "React", "Azure"]
      },
      {
        title: "Approval System",
        description: "Refactored approval service to reduce coupling and improve scalability",
        technologies: ["Java", "Spring Boot", "Microservices"]
      }
    ],
    tags: [
      { id: "5", name: "Backend" },
      { id: "6", name: "Microservices" }
    ],
    companyBadgeColor: "bg-purple-500/10",
    companyTextColor: "text-purple-500",
    technologies: ["Java", "Spring Boot", "React", "Azure", "Microservices"]
  }
] 