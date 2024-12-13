import ExperienceCardSkeleton from "@/components/ExperienceCard/ExperienceCardSkeleton"

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <ExperienceCardSkeleton />
          </div>
        ))}
      </div>
    </main>
  )
} 