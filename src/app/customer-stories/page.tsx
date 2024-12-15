import Link from "next/link"
import { shortExperiences } from "./customer-stories-short"
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard"

export default function CustomerStories() {

  const experiences = shortExperiences.map((experience) => (
    <Link 
        key={experience.title} 
                href={`/customer-stories/${experience.slug}`}
                className="block hover:no-underline group transition-transform duration-300 hover:scale-[1.02]"
              >
                <ExperienceCard experience={experience} />
              </Link>
            ))

  return (
    <main className="min-h-screen bg-midnight pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-alabaster mb-6">Customer Stories</h1>
          <p className="text-lg text-alabaster/80 mb-12">
            Explore real-world success stories and technical achievements from our client projects.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences}
          </div>
        </div>
      </div>
    </main>
  )
}
