import { ArrowLeft, Calendar, MapPin, Building2 } from "lucide-react"
import Link from "next/link"
import { experiences } from "../customer-stories"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return experiences.map((exp) => ({ slug: exp.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CustomerStoryDetail({ params }: PageProps) {
  const slug = (await params).slug
  const experience = experiences.find(exp => exp.slug === slug)

  if (!experience) {
    return notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Back button */}
      <Link 
        href="/customer-stories" 
        className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Customer Stories
      </Link>

      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">{experience.title}</h1>
        <p className="text-xl text-gray-300 mb-6">{experience.description}</p>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <Building2 className="w-5 h-5 mr-2 text-gray-400" />
            <span className={`px-3 py-1 rounded-full ${experience.companyBadgeColor} ${experience.companyTextColor}`}>
              {experience.company}
            </span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-gray-400" />
            <span className="text-gray-300">{experience.period}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-gray-400" />
            <span className="text-gray-300">{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {experience?.technologies?.map((tech, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-tekhelet/20 text-gray-200 rounded-full border border-tekhelet/30 hover:bg-tekhelet/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Tags Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-white">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span 
              key={tag.id}
              className="px-4 py-2 bg-xanthous/10 text-xanthous rounded-full border border-xanthous/30 hover:bg-xanthous/20 transition-colors"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
} 