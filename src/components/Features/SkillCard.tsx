import { useState } from 'react'

interface SkillCardProps {
  name: string
  description: string
  category: string
  color: string
  isSelected: boolean
  onClick: () => void
}

export default function SkillCard({ name, description, category, isSelected, onClick }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative p-4 rounded-lg cursor-pointer transition-all duration-300
        ${isSelected || isHovered ? 'bg-[#D2A850] text-[#161616]' : 'bg-[#1E1E1E] text-white'}
        border border-[#D2A850] hover:border-[#D2A850]
        flex flex-col justify-between gap-2
        transform ${isSelected || isHovered ? 'scale-105' : 'scale-100'}
      `}
    >
      <div>
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </div>
      <div className="text-xs mt-2 opacity-80">{category}</div>
    </div>
  )
}

