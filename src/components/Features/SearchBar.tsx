import { Search } from 'lucide-react'

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search skills..."
        className="w-full px-4 py-3 bg-[#1E1E1E] text-white border border-[#D2A850] rounded-lg 
          placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D2A850] 
          transition-all duration-300"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <Search className="w-5 h-5 text-[#D2A850]" />
      </div>
    </div>
  )
}

