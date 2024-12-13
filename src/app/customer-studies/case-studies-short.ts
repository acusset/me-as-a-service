import { Experience } from "@/components/ExperienceCard/types"
import { experiences } from "./case-studies"

export const shortExperiences: Experience[] = experiences.map(exp => ({
  ...exp,
  // Create a URL-friendly slug from the title
  slug: exp.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
  // Simplify projects to bullet points
  projects: [{
    title: "Key Achievements",
    description: exp.projects.map(p => p.description).join(' • '),
    technologies: exp.projects.flatMap(p => p.technologies)
  }]
})) 