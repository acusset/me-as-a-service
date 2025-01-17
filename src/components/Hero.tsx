import {Button} from "@/components/ui/button"
import { ArrowRight, Presentation} from 'lucide-react'
import Link from "next/link"

export default function Hero() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-alabaster text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Empower your teams to deliver <span className="block text-xanthous">high-quality results.</span>
        </h1>
        <p className="text-alabaster text-xl">
          Empowering teams to deliver excellence, <span className="text-xanthous">Antoine</span> combines technical expertise, mentorship, and strategic vision to build scalable systems and drive innovation, aligning technology with business success.
        </p>
        <div className="flex flex-col sm:flex-row gap-8">
          <Button asChild size="xl" variant="default">
            <Link href="#features">
              Explore the features <ArrowRight className="ml-2"/>
            </Link>
          </Button>
          <Button asChild size="xl" variant="secondary">
            <Link href="#contact">
              Book a demo <Presentation className="ml-2"/>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

