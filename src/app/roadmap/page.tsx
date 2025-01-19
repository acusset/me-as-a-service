import ExperienceTimeline from "@/components/ExperienceTimeline";
import { timelineEntries } from "./timelineEntries";

export default function RoadmapPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-[#161616]">
      <div className="z-10 w-full max-w-3xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#D2A850]">antoine.dev</h1>
        <p className="text-[#DEDEDE] text-center mb-12">Transforming ideas into elegant, efficient code.</p>
        
        <ExperienceTimeline entries={timelineEntries} />
      </div>
    </main>
  );
}

