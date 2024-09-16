import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

// Icon mapping
const iconMapper = {
  0: '/assets/web.png',
  1: '/assets/creator.png',
  2: '/assets/backend.png',
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'linear-gradient(90deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        color: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
      }}
      contentArrowStyle={{ borderRight: '7px solid #203a43' }}
      date={experience.duration}
      iconStyle={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
      icon={<img src={iconMapper[index]} alt="icon" className="w-16 h-16 object-contain" />}
    >
      <h3 className="text-white text-xl font-bold">{experience.role}</h3>
      <p className="text-gray-300">{experience.company}</p>
      <ul className="mt-2 list-disc list-inside text-white opacity-90">
        {experience.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
