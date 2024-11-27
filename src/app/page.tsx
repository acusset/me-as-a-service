import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[hsl(0,0%,8.6%)]">
      <Hero/>
      <Features />
    </main>
  )
}

