import { Experience } from "@/components/ExperienceCard/types"
import { experiences } from "./customer-stories"

export const shortExperiences: Experience[] = experiences.map(exp => ({
  ...exp,
  slug: exp.slug,
  projects: [{
    title: "Key Achievements",
    description: exp.projects.map(p => p.description).join(' • '),
    technologies: exp.projects.flatMap(p => p.technologies)
  }]
})) 