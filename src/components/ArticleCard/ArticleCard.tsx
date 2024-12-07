import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Article } from "./types"

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/documentation/${article.id}`}>
      <article className="group relative p-6 -ml-6 hover:ml-0 transition-all duration-300 hover:bg-alabaster/5 rounded-lg">
        <ArrowRight className="absolute right-6 top-8 h-6 w-6 text-alabaster opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-alabaster group-hover:text-xanthous transition-colors">
            {article.title}
          </h2>
          <p className="text-lg leading-relaxed text-alabaster/80">
            {article.preview}
          </p>
          <div className="flex items-center pt-4">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag.id} variant="secondary" className="bg-tekhelet/20 text-alabaster">
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

