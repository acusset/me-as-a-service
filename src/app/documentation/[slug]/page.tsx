import { use } from "react"
import { Article } from "@/components/ArticleCard/types"
import { notFound } from "next/navigation"
import { articles } from "../articles"

async function getArticle(slug: string): Promise<Article | undefined> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return articles.find(article => article.slug === slug)
}

interface Props {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params: {slug} }: Props) {
  const article = use(getArticle(slug))

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold text-xanthous mb-4">{article.title}</h1>
        <div className="flex gap-2 mb-8">
          {article.tags.map(tag => (
            <span 
              key={tag.id}
              className="px-3 py-1 text-sm rounded-full bg-tekhelet/20 text-tekhelet"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <p className="text-alabaster text-lg">{article.preview}</p>
      </article>
    </div>
  )
}
