import React from 'react'

export default function ExperienceCardSkeleton() {
  return (
    <article className="relative p-6 rounded-lg border border-alabaster/10 animate-pulse">
      <div className="space-y-4">
        {/* Company Badge */}
        <div className="w-20 h-5 bg-alabaster/10 rounded-full" />

        {/* Title and Description */}
        <div className="space-y-2">
          <div className="h-7 bg-alabaster/10 rounded w-3/4" />
          <div className="space-y-2">
            <div className="h-4 bg-alabaster/10 rounded w-full" />
            <div className="h-4 bg-alabaster/10 rounded w-5/6" />
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-6 bg-alabaster/10 rounded-full w-16" />
          ))}
        </div>
      </div>
    </article>
  )
} 