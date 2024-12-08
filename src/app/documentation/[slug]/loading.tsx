import ArticleCardSkeleton from "@/components/ArticleCard/ArticleCardSkeleton"

export default function Loading() {

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-16">
          <ArticleCardSkeleton />
        </div>
      </div>
    </div>
  )
} 