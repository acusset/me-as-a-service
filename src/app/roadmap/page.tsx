import Timeline from "@/components/Timeline/Timeline"
import { timelineData } from "./education"

export default function RoadmapPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-alabaster mb-12">Roadmap</h1>
      <Timeline items={timelineData} />
    </main>
  )
} 