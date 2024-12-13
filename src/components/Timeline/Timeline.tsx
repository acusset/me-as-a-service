"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { TimelineItem } from "@/app/roadmap/education"

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-alabaster/10" />
      
      <div className="space-y-16">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-xanthous ring-4 ring-eerie" />
            
            {/* Content */}
            <div className={`grid grid-cols-2 gap-8`}>
              {/* Left side - Experiences */}
              <div className={cn(
                "transition-opacity duration-300",
                item.type === 'experience' ? 'pr-8 text-right opacity-100' : 'opacity-0'
              )}>
                {item.type === 'experience' && (
                  <div className="bg-eerie/50 p-8 rounded-lg border border-alabaster/10 hover:border-alabaster/20 transition-colors">
                    <div className="text-sm text-alabaster/60 mb-2">{item.date}</div>
                    <h3 className="text-2xl font-semibold text-xanthous mb-3">{item.title}</h3>
                    <div className="text-xl text-alabaster/80 mb-3">{item.institution}</div>
                    <p className="text-lg text-alabaster/60 leading-relaxed">{item.description}</p>
                  </div>
                )}
              </div>
              
              {/* Right side - Certifications & Education */}
              <div className={cn(
                "transition-opacity duration-300",
                item.type !== 'experience' ? 'pl-8 opacity-100' : 'opacity-0'
              )}>
                {item.type !== 'experience' && (
                  <div className="bg-eerie/50 p-8 rounded-lg border border-alabaster/10 hover:border-alabaster/20 transition-colors">
                    <div className="text-sm text-alabaster/60 mb-2">{item.date}</div>
                    <h3 className="text-2xl font-semibold text-xanthous mb-3">
                      {item.link ? (
                        <Link 
                          href={item.link} 
                          target="_blank" 
                          className="hover:text-alabaster transition-colors"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <div className="text-xl text-alabaster/80 mb-3">{item.institution}</div>
                    <p className="text-lg text-alabaster/60 leading-relaxed">{item.description}</p>
                    {item.link && (
                      <div className="mt-6">
                        <Link 
                          href={item.link}
                          target="_blank"
                          className="inline-flex items-center text-xanthous hover:underline group text-lg"
                        >
                          View Certificate
                          <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 