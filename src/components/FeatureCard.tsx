import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  name: string
  description: string
  Icon: LucideIcon
}

export function FeatureCard({ name, description, Icon }: FeatureCardProps) {
  return (
    <Card className="border-alabaster bg-transparent transition-all duration-300 hover:shadow-lg hover:shadow-tekhelet/20 hover:-translate-y-1">
      <CardHeader>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-tekhelet mx-auto mb-4">
          <Icon className="h-10 w-10 text-alabaster" aria-hidden="true" />
        </div>
        <CardTitle className="text-lg font-semibold leading-7 text-alabaster text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-7 text-alabaster/80 text-center">{description}</p>
      </CardContent>
    </Card>
  )
}

