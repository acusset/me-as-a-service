import ExperienceCard from "@/components/ExperienceCard"
import { shortExperiences } from "./case-studies-short"
import Link from "next/link"

export default function CustomerStudies() {
  return (
    <main className="min-h-screen bg-midnight pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-alabaster mb-6">Customer Studies</h1>
          <p className="text-lg text-alabaster/80 mb-12">
            Explore detailed case studies of successful projects and collaborations.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {shortExperiences.map((experience) => (
              <Link 
                key={experience.title} 
                href={`/customer-studies/${experience.slug}`}
                className="block hover:no-underline group transition-transform duration-300 hover:scale-[1.02]"
              >
                <ExperienceCard experience={experience} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
