export interface Skill {
  name: string;
  description: string;
  category: string;
  examples?: string[];
  projects?: string[];
  icon?: string;
}

export const skills = [
  { name: "React", category: "Frameworks", description: "Building dynamic user interfaces", icon: "⚛️", projects: ["StorHub Website", "Climate Impact X"] },
  { name: "Next.js", category: "Frameworks", description: "Server-side rendering and static generation", icon: "▲", projects: ["antoine.dev", "StorHub Website"] },
  { name: "TypeScript", category: "Languages", description: "Typed superset of JavaScript", icon: "TS", projects: ["Climate Impact X", "StorHub Website"] },
  { name: "Python", category: "Languages", description: "Versatile language for various applications", icon: "🐍", projects: ["Data Analysis Tool", "Automation Scripts"] },
  { name: "Docker", category: "Technologies", description: "Containerization for seamless deployment", icon: "🐳", projects: ["Microservices Architecture", "CI/CD Pipeline"] },
  { name: "Kubernetes", category: "Technologies", description: "Orchestrating container deployments", icon: "☸️", projects: ["Scalable Cloud Infrastructure", "Microservices Deployment"] },
  { name: "AWS", category: "Technologies", description: "Cloud infrastructure and services", icon: "☁️", projects: ["Serverless Applications", "Cloud-native Solutions"] },
  { name: "Microservices", category: "Architecture", description: "Scalable and modular system design", icon: "🧩", projects: ["Climate Impact X", "E-commerce Platform"] },
  { name: "RESTful APIs", category: "Architecture", description: "Designing efficient web services", icon: "🌐", projects: ["Climate Impact X", "StorHub API"] },
  { name: "GraphQL", category: "Technologies", description: "Efficient data querying and manipulation", icon: "◢", projects: ["Content Management System", "Data Aggregation Service"] },
  { name: "Node.js", category: "Technologies", description: "JavaScript runtime for server-side development", icon: "📦", projects: ["Real-time Chat Application", "API Gateway"] },
  { name: "Express", category: "Frameworks", description: "Fast, unopinionated web framework for Node.js", icon: "🚂", projects: ["RESTful API Development", "Middleware Implementation"] },
  { name: "Java", category: "Languages", description: "Object-oriented programming for enterprise", icon: "☕", projects: ["Spring Boot Microservices", "Android App Development"] },
  { name: "Spring Boot", category: "Frameworks", description: "Java-based framework for microservices", icon: "🍃", projects: ["Climate Impact X", "Enterprise Resource Planning System"] },
  { name: "PHP", category: "Languages", description: "Server-side scripting language", icon: "🐘", projects: ["Legacy System Maintenance", "WordPress Plugin Development"] },
  { name: "Laravel", category: "Frameworks", description: "PHP web application framework", icon: "🔷", projects: ["E-commerce Platform", "Content Management System"] },
  { name: "Symfony", category: "Frameworks", description: "PHP web application framework", icon: "🎼", projects: ["B2B2B Application", "API Development"] },
  { name: "SQL", category: "Databases", description: "Relational database query language", icon: "🗃️", projects: ["Data Modeling", "Complex Query Optimization"] },
  { name: "NoSQL", category: "Databases", description: "Non-relational database systems", icon: "📊", projects: ["Real-time Analytics", "Document Storage Solution"] },
  { name: "Redis", category: "Databases", description: "In-memory data structure store", icon: "🔴", projects: ["Caching Layer", "Real-time Leaderboards"] },
  { name: "Elasticsearch", category: "Databases", description: "Distributed search and analytics engine", icon: "🔍", projects: ["Full-text Search Implementation", "Log Analysis"] },
  { name: "GitHub Actions", category: "DevOps", description: "CI/CD automation", icon: "����", projects: ["Automated Testing Pipeline", "Continuous Deployment"] },
  { name: "Jenkins", category: "DevOps", description: "Open-source automation server", icon: "🤖", projects: ["Build Automation", "Deployment Orchestration"] },
  { name: "Azure Pipelines", category: "DevOps", description: "CI/CD service by Microsoft", icon: "🔧", projects: ["Climate Impact X", "Enterprise Application Deployment"] }
]

export const categories = Array.from(new Set(skills.map(skill => skill.category)))
export const categoryColors: Record<string, string> = {
  Frameworks: "#D2A850",
  Languages: "#D2A850",
  Technologies: "#D2A850",
  "Cloud Services": "#D2A850",
  "Development Tools": "#D2A850",
  Databases: "#D2A850"
}
