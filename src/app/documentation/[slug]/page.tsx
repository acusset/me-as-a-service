import { notFound } from "next/navigation"
import { articles } from "../articles"

export const generateStaticParams = () => articles.map(article => ({ slug: article.slug }));


export default async function ArticlePage({ params }: {
  params: Promise<{ slug: string }>
}) {

  const slug = (await params).slug
  const article = articles.find(article => article.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="prose prose-invert">
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
  )
}
