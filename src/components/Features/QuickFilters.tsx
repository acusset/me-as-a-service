interface QuickFiltersProps {
  categories: string[]
  activeFilters: string[]
  setActiveFilters: (filters: string[]) => void
}

export default function QuickFilters({ categories, activeFilters, setActiveFilters }: QuickFiltersProps) {
  const toggleFilter = (category: string) => {
    setActiveFilters(
      activeFilters.includes(category)
        ? activeFilters.filter(f => f !== category)
        : [...activeFilters, category]
    )
  }

  const resetFilters = () => {
    setActiveFilters([])
  }

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => toggleFilter(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
            ${activeFilters.includes(category)
              ? 'bg-[#D2A850] text-[#161616]'
              : 'bg-[#1E1E1E] text-white hover:bg-opacity-80'
            }`}
        >
          {category}
        </button>
      ))}
      {activeFilters.length > 0 && (
        <button
          onClick={resetFilters}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-[#1E1E1E] text-[#D2A850] border border-[#D2A850] 
            hover:bg-[#D2A850] hover:text-[#161616] transition-all duration-300"
        >
          Reset Filters
        </button>
      )}
    </div>
  )
}

