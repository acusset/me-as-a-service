import ExperienceCard from "@/components/ExperienceCard"
import { experiences } from "../case-studies"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return experiences.map((exp) => ({
    slug: exp.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: PageProps) {
   const slug = (await params).slug
  const experience = experiences.find(
    exp => exp.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
  )

  if (!experience) {
    return notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <ExperienceCard experience={experience} />
    </main>
  )
} 