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
      <div className="relative">
        <p className="text-alabaster text-lg mb-8">{article.preview}</p>
        <div className="mt-12 text-center">
          <p className="text-xl text-alabaster/60">Full Article Coming Soon</p>
        </div>
        <div className="mt-8 p-6 rounded-lg bg-eerie/40 border border-alabaster/10 relative">
          <div className="absolute inset-0 backdrop-blur-sm z-10" />
          <div className="h-64 bg-gradient-to-b from-alabaster/5 to-transparent" />
        </div>
      </div>
    </article>
  )
}
