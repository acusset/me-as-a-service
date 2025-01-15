import React from 'react'
import { Experience } from './types'
import { Badge } from '../ui/badge'

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const badgesList = experience.technologies?.map((tech) => (
    <Badge 
      key={tech} 
      className="bg-tekhelet/20 text-alabaster border border-tekhelet"
    >
      {tech}
    </Badge>
  ))

  return (
    <div className="h-full p-6 rounded-lg border border-xanthous bg-eerie hover:bg-eerie/80 transition-all duration-300 hover:shadow-lg hover:shadow-tekhelet/20 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-bold mb-2 text-alabaster group-hover:text-tekhelet transition-colors duration-300">
          {experience.title}
        </h2>
        <p className="text-alabaster/80 mb-4">{experience.company}</p>
        <p className="text-alabaster/60 mb-6 flex-grow">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {badgesList}
        </div>
      </div>
    </div>
  )
} 