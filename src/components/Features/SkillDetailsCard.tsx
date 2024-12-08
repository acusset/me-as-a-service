import { Skill } from '@/app/features/skills'

interface SkillDetailsCardProps extends Skill {
  color: string;
  onClose: () => void;
}

export default function SkillDetailsCard({ name, description, category, examples, projects, icon, color, onClose }: SkillDetailsCardProps) {
  return (
    <div 
      className="rounded-lg shadow-lg p-6 cursor-default relative 
                 bg-gradient-to-br from-gray-900 to-gray-800
                 transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                 hover:shadow-xl ring-1 ring-white/10
                 animate-in slide-in-from-bottom-8 fade-in duration-500"
    >
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 text-gray-300 hover:text-white
                   transition-all duration-200 hover:scale-110
                   transform active:scale-95"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>
      
      <div className="space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-150">
        <div className="flex items-center space-x-3">
          {icon && (
            <span className="text-2xl animate-in zoom-in duration-500 delay-200">
              {icon}
            </span>
          )}
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <span 
            className="px-3 py-1 rounded-full text-sm backdrop-blur-sm
                      animate-in slide-in-from-right-4 fade-in duration-500 delay-300"
            style={{ 
              backgroundColor: `${color}20`, 
              color: color,
              boxShadow: `0 0 12px ${color}30`
            }}
          >
            {category}
          </span>
        </div>
        
        <p className="text-gray-300 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-400">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 pt-4 mt-4 border-t border-gray-700">
          {projects && projects.length > 0 && (
            <div className="animate-in slide-in-from-left-4 fade-in duration-500 delay-500">
              <h4 className="font-medium mb-2 text-gray-200 flex items-center gap-2">
                <span className="text-sm">🚀</span> Projects
              </h4>
              <ul className="space-y-1 text-gray-300">
                {projects.map((project, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-2 animate-in slide-in-from-left-4 fade-in"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {examples && examples.length > 0 && (
            <div className="animate-in slide-in-from-right-4 fade-in duration-500 delay-500">
              <h4 className="font-medium mb-2 text-gray-200 flex items-center gap-2">
                <span className="text-sm">💡</span> Examples
              </h4>
              <ul className="space-y-1 text-gray-300">
                {examples.map((example, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-2 animate-in slide-in-from-right-4 fade-in"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 