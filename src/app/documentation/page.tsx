import { use } from "react"
import ArticleCard from "@/components/ArticleCard/ArticleCard"
import { Article } from "@/components/ArticleCard/types"

async function getArticles(): Promise<Article[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // In a real application, you would fetch this data from an API
  return [
    {
      id: '1',
      title: 'Mastering React Hooks',
      preview: 'React Hooks revolutionized how we handle state and side effects in React applications. Learn how to effectively use useState, useEffect, useContext, and custom hooks to build more maintainable and efficient React applications. We\'ll cover common pitfalls, best practices, and advanced patterns.',
      tags: [{ id: '1', name: 'React' }, { id: '2', name: 'JavaScript' }],
    },
    {
      id: '2',
      title: 'Building Scalable APIs with Node.js',
      preview: 'Building APIs that can handle growth and maintain performance is crucial for modern applications. This guide explores essential patterns for creating robust Node.js APIs, including proper error handling, authentication, caching strategies, and database optimization. Learn how to structure your API for maintainability and scale.',
      tags: [{ id: '3', name: 'Node.js' }, { id: '4', name: 'API' }],
    },
    {
      id: '3',
      title: 'Introduction to TypeScript',
      preview: 'TypeScript has become the standard for large-scale JavaScript applications. Discover how TypeScript\'s type system can catch errors early, improve developer experience, and make your codebase more maintainable. We\'ll explore interfaces, generics, utility types, and how to gradually adopt TypeScript in existing projects.',
      tags: [{ id: '5', name: 'TypeScript' }, { id: '2', name: 'JavaScript' }],
    },
  ]
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

