import { Badge } from 'lucide-react'
import React from 'react'
import { Experience } from './types'

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="h-full p-6 rounded-lg border border-alabaster bg-dark-gray hover:bg-opacity-75 transition-colors duration-300">
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-bold mb-2 text-alabaster group-hover:text-primary transition-colors duration-300">
          {experience.title}
        </h2>
        <p className="text-gray-300 mb-4">{experience.company}</p>
        <p className="text-gray-400 mb-6 flex-grow">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies?.map((tech) => (
            <Badge 
              key={tech} 
              className="bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
} 