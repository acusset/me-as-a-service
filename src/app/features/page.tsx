'use client'

import { useState, useEffect, useMemo } from 'react'
import SkillCard from "@/components/Features/SkillCard"
import SearchBar from "@/components/Features/SearchBar"
import QuickFilters from "@/components/Features/QuickFilters"
import NoResults from "@/components/Features/NoResults"
import { skills, categories, categoryColors } from "./skills"
import SkillDetailsCard from "@/components/Features/SkillDetailsCard"

export default function CapabilitiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearchTerm(searchTerm), 300)
    return () => clearTimeout(timer)
  }, [searchTerm])

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                            skill.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      const matchesFilter = activeFilters.length === 0 || activeFilters.includes(skill.category)
      return matchesSearch && matchesFilter
    })
  }, [debouncedSearchTerm, activeFilters])

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(prevSkill => prevSkill === skillName ? null : skillName)
  }

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <QuickFilters 
            categories={categories} 
            activeFilters={activeFilters} 
            setActiveFilters={setActiveFilters} 
          />
        </div>

        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 relative">
            {selectedSkill && (
              <div 
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10
                           animate-in fade-in duration-200" 
                onClick={() => setSelectedSkill(null)} 
              />
            )}
            {filteredSkills.map((skill) => {
              if (selectedSkill === skill.name) {
                return (
                  <div 
                    key={skill.name}
                    className="col-span-3 row-span-2 z-20"
                  >
                    <SkillDetailsCard
                      {...skill}
                      color={categoryColors[skill.category]}
                      onClose={() => setSelectedSkill(null)}
                    />
                  </div>
                );
              }
              return (
                <SkillCard
                  key={skill.name}
                  {...skill}
                  color={categoryColors[skill.category]}
                  isSelected={selectedSkill === skill.name}
                  onClick={() => handleSkillClick(skill.name)}
                />
              );
            })}
          </div>
        ) : (
          <NoResults />
        )}
      </main>
    </div>
  )
}

