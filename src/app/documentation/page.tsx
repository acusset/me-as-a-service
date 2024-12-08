import { use } from "react"
import ArticleCard from "@/components/ArticleCard/ArticleCard"
import { Article } from "@/components/ArticleCard/types"
import { articles } from "./articles";

async function getArticles(): Promise<Article[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // In a real application, you would fetch this data from an API
  return articles;
}


export default function Documentation() {
  const articles = use(getArticles())

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-16">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      </div>
  )
}

