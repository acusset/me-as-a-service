interface SkillDetailsProps {
  skill: {
    name: string
    category: string
    description: string
    icon: string
    projects: string[]
  } | null
  onClose: () => void
}

export default function SkillDetails({ skill, onClose }: SkillDetailsProps) {
  if (!skill) return null

  return (
    <div className="fixed inset-y-0 right-0 w-80 bg-[#161616] text-[#DEDEDE] p-6 shadow-lg overflow-y-auto">
      <button onClick={onClose} className="absolute top-4 right-4 text-2xl">&times;</button>
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <span className="mr-2">{skill.icon}</span>
        {skill.name}
      </h2>
      <p className="text-sm mb-2">{skill.category}</p>
      <p className="mb-4">{skill.description}</p>
      <h3 className="text-lg font-semibold mb-2">Projects & Experience:</h3>
      <ul className="list-disc list-inside">
        {skill.projects.map((project, index) => (
          <li key={index} className="mb-1">{project}</li>
        ))}
      </ul>
    </div>
  )
}

