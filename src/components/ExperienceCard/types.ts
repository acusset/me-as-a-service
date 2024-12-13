export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface Tag {
  id: string;
  name: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  period: string;
  company: string;
  role: string;
  location: string;
  projects: Project[];
  tags: Tag[];
  slug?: string;
  technologies?: string[];
  companyBadgeColor: string;
  companyTextColor: string;
}

export interface ExperienceCardProps {
  experience: Experience;
  detailed?: boolean;
} 