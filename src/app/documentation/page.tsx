import { use } from "react"
import ArticleCard from "@/components/ArticleCard/ArticleCard"
import { Article } from "@/components/ArticleCard/types"
import { articles } from "./articles";

async function getArticles(): Promise<Article[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return articles;
}

const sortArticles = ((a: Article, b: Article) => a.order - b.order)

export default function Documentation() {
  const articles = use(getArticles())

  return (
    <main className="min-h-screen bg-midnight pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-alabaster mb-6">Documentation</h1>
          <p className="text-lg text-alabaster/80 mb-12">
            Explore our comprehensive guides and technical documentation.
          </p>

          <div className="space-y-8">
            {articles.sort(sortArticles).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

