import React from 'react';
import { motion } from 'framer-motion';
import { TimelineEntry } from '@/app/roadmap/timelineEntries';

interface ExperienceTimelineProps {
  entries: TimelineEntry[];
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'experience': return '#3333CC';
    case 'project': return '#D2A850';
    case 'education': return '#4CAF50';
    case 'certification': return '#FF5722';
    default: return '#3333CC';
  }
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ entries }) => {
  return (
    <div className="w-full p-4 bg-[#161616] text-[#DEDEDE] rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-[#D2A850]">Professional Timeline</h2>
      <div className="relative pl-8 border-l-2 border-[#3333CC]">
        {entries.map((entry, index) => (
          <motion.div
            key={index}
            className="mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div 
              className="absolute w-4 h-4 rounded-full -left-10 top-1"
              style={{ backgroundColor: getTypeColor(entry.type) }}
            ></div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-[#D2A850]">{entry.title}</h3>
              <p className="text-lg">{entry.subtitle}</p>
              <p className="text-sm text-[#DEDEDE] opacity-75">{entry.startDate} - {entry.endDate} ({entry.duration})</p>
              <p className="text-sm text-[#D2A850] mt-1">{entry.type}</p>
              <motion.ul 
                className="list-disc pl-5 mt-2 space-y-1"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {entry.description.map((item, i) => (
                  <li key={i} className="text-sm">{item}</li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;

