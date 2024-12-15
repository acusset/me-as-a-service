import ExperienceCard from "@/components/ExperienceCard/ExperienceCard"
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
  const experience = experiences.find(
    exp => exp.slug === slug
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