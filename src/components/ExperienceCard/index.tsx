import { Badge } from "@/components/ui/badge"
import { Experience } from "./types"

interface Props {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  const { title, company, companyBadgeColor, companyTextColor, technologies = [] } = experience

  return (
    <article className="relative p-6 rounded-lg border border-alabaster/10 hover:border-alabaster/20 transition-all duration-300 group">
      <div className="space-y-4">
        {/* Company Badge */}
        <div className={`inline-flex px-2 py-1 rounded-full text-xs ${companyBadgeColor} ${companyTextColor}`}>
          {company}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-alabaster">
          {title}
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {technologies?.filter((value: string, index: number, self: string[]) => self.indexOf(value) === index)
            .slice(0, 6)
            .map((tech: string, index: number) => (
              <Badge 
                key={`${tech}-${index}`}
                variant="outline"
                className="bg-alabaster/5 border-alabaster/10 text-xs"
              >
                {tech}
              </Badge>
            ))}
        </div>
      </div>
    </article>
  )
} 