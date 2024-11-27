import {Button} from "@/components/ui/button"
import {ArrowRight, Code} from 'lucide-react'
import Link from "next/link"

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-24 sm:py-32">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-alabaster text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Empower your teams to deliver <span className="block text-xanthous">high-quality results</span>
        </h1>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" variant="default">
            <Link href="/expertise">
              Explore the features <Code className="ml-2"/>
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2"/>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

