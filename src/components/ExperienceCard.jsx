import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

// Icon mapping
const iconMapper = {
  0: '/assets/web.png',
  1: '/assets/web.png',
  2: '/assets/creator.png',
  3: '/assets/backend.png',
  4: '/assets/backend.png',
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work timeline-element"
      contentStyle={{
        background: 'linear-gradient(90deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        color: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(34, 197, 94, 0.2)',
      }}
      contentArrowStyle={{ borderRight: '7px solid #203a43' }}
      date={experience.duration}
      iconStyle={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
      icon={<img src={iconMapper[index]} alt="icon" className="w-16 h-16 object-contain" />}
    >
      <div className="mb-3">
        <h3 className="text-white text-xl font-bold">{experience.role}</h3>
        <p className="text-gray-300 font-medium">{experience.company}</p>
        <p className="text-gray-400 text-sm">{experience.location}</p>
      </div>
      
      <ul className="mt-3 list-disc list-inside text-white opacity-90 space-y-1">
        {experience.details.map((detail, i) => (
          <li key={i} className="text-sm">{detail}</li>
        ))}
      </ul>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
