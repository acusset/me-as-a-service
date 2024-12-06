import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket } from 'lucide-react'

export default function NavHeader() {
  return (
    <nav className="mx-auto px-4 border-blue bg-eerie">
      <div className="flex h-16 items-center space-between">
        <div className="flex-1 items-center flex space-x-4">
          <Rocket className="h-6 w-6 text-xanthous border-alabaster"/>
          <Link href="#" className="text-2xl font-bold text-xanthous">
            antoine.dev
          </Link>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1 flex items-center  justify-evenly">
          <Button size="lg" asChild variant="ghost">
            <Link href="#features">
              Services
            </Link>
            </Button>
          <Button size="lg" variant="ghost">Case Studies</Button>
          <Button size="lg" variant="ghost">Resources</Button>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1 flex items-center justify-evenly">
          <Button size="lg" variant="ghost">Pricing</Button>
          <Button size="lg" variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

