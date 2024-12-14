
export interface TimelineItem {
  date: string;
  title: string;
  institution: string;
  description: string;
  type: "experience" | "certification" | "education" | "job";
  link?: string;
}

export const timelineData: TimelineItem[] = [
  // Experiences
  {
    date: "2022 - Present",
    title: "Senior Software Engineer", 
    institution: "Palo IT – Singapore",
    description: "Led development teams across multiple projects including StorHub and Climate Impact X. Implemented features using modern tech stacks (Payload CMS, Next.js). Conducted knowledge sharing sessions and supported sales team through technical consultations.",
    type: "experience" as const
  },
  {
    date: "2018 - 2022",
    title: "Software Engineer",
    institution: "Clever Age – Singapore", 
    description: "Implemented modular monolith B2B2B application with REST API using PHP/Symfony. Automated core API testing using Gherkin and Behat.",
    type: "experience" as const
  },
  {
    date: "2024",
    title: "ICT Assessment Certification",
    institution: "NUS-ISS / GovTech Digital Academy",
    description: "Professional certification in software development and engineering practices.",
    type: "certification" as const,
    link: "https://www.iss.nus.edu.sg"
  },
  {
    date: "2024",
    title: "GitHub Actions Certification", 
    institution: "GitHub",
    description: "Certified in designing and implementing CI/CD pipelines using GitHub Actions",
    type: "certification" as const,
    link: "https://resources.github.com/learn/certifications/"
  },
  {
    date: "2016",
    title: "Master's Degree in Information Technology",
    institution: "Graduate School of Computer Engineering, Paris",
    description: "Specialized in software engineering and development methodologies.",
    type: "education" as const
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
