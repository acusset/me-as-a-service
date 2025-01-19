export interface TimelineEntry {
  type: 'experience' | 'project' | 'education' | 'certification';
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string[];
}

export const timelineEntries: TimelineEntry[] = [
  {
    type: 'experience',
    title: "Palo IT",
    subtitle: "Senior Software Engineer",
    startDate: "2022-02",
    endDate: "Present",
    duration: "2 years",
    description: [
      "Led internal \"lunch & learn\" sessions on Atomic Design, Mob Programming, and React Server Components",
      "Supported the sales team by leading client meetings and crafting high-level architecture diagrams",
      "Showcased expertise in Domain-Driven Design (DDD) at the SingaDev Meetup"
    ]
  },
  {
    type: 'experience',
    title: "Clever Age",
    subtitle: "Software Engineer",
    startDate: "2018-10",
    endDate: "2022-02",
    duration: "3 years 4 months",
    description: [
      "Implemented a modular monolith B2B2B application with a REST API in PHP and Symfony framework following DDD",
      "Automated core API tests for third-party clients with Gherkin and Behat"
    ]
  },
  {
    type: 'education',
    title: "Graduate School of Computer Engineering, Paris",
    subtitle: "Master's Degree in Information Technology",
    startDate: "2014-09",
    endDate: "2016-06",
    duration: "2 years",
    description: [
      "Specialized in software engineering and distributed systems",
      "Completed a thesis on scalable microservices architecture"
    ]
  },
  {
    type: 'certification',
    title: "GitHub Actions Certification",
    subtitle: "GitHub",
    startDate: "2024-01",
    endDate: "2024-01",
    duration: "Achieved",
    description: [
      "Demonstrated proficiency in creating and managing GitHub Actions workflows",
      "Learned best practices for CI/CD pipelines using GitHub Actions"
    ]
  },
  {
    type: 'project',
    title: "Climate Impact X",
    subtitle: "Carbon Credit Marketplace",
    startDate: "2022-03",
    endDate: "2022-12",
    duration: "10 months",
    description: [
      "Designed and delivered REST APIs and front-end pages using Java Spring Boot-based Microservices and React",
      "Implemented the first Carbon Credit Marketplace and Exchange platform in Singapore"
    ]
  },
];

