import { FeatureCard } from './FeatureCard'
import { Code, Cpu, Globe, Layers } from 'lucide-react'

const features = [
  {
    name: 'Full-Stack Expertise',
    description: 'Proficient in both front-end and back-end technologies, creating seamless, end-to-end solutions.',
    icon: Layers,
  },
  {
    name: 'Cloud & DevOps Mastery',
    description: 'Experienced with Docker, Kubernetes, and major cloud platforms for robust, scalable deployments.',
    icon: Globe,
  },
  {
    name: 'Advanced Architecture Design',
    description: 'Skilled in microservices, event-driven architecture, and domain-driven design for complex systems.',
    icon: Cpu,
  },
  {
    name: 'Agile Methodologies',
    description: 'Practiced in Scrum, Kanban, and Extreme Programming for efficient, iterative development.',
    icon: Code,
  },
]

export default function Features() {
  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-alabaster sm:text-4xl">
            Everything you need <span className="block text-xanthous">in one place.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-alabaster/80">
            With over 8 years of experience, Antoine comes with comprehensive features to tackle your most challenging projects.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard
                key={feature.name}
                name={feature.name}
                description={feature.description}
                Icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

