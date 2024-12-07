export default function ArticleCardSkeleton() {
  return (
    <article className="group relative p-6 -ml-6 hover:ml-0 transition-all duration-300 hover:bg-alabaster/5 rounded-lg animate-pulse">
      <div className="absolute right-6 top-8 h-6 w-6 bg-alabaster/10 rounded opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <div className="space-y-6">
        {/* Title skeleton - matches text-3xl font-semibold */}
        <div className="h-9 bg-alabaster/10 rounded-lg w-3/4" />
        
        {/* Preview text skeleton - matches text-lg leading-relaxed */}
        <div className="space-y-3">
          <div className="h-7 bg-alabaster/10 rounded-lg" />
          <div className="h-7 bg-alabaster/10 rounded-lg" />
          <div className="h-7 bg-alabaster/10 rounded-lg w-2/3" />
        </div>
        
        {/* Tags skeleton */}
        <div className="flex items-center pt-4">
          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-16 bg-tekhelet/20 rounded-full" />
            <div className="h-6 w-20 bg-tekhelet/20 rounded-full" />
            <div className="h-6 w-24 bg-tekhelet/20 rounded-full" />
          </div>
        </div>
      </div>
    </article>
  )
} 