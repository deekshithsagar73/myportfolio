// import React from "react";
// import { VerticalTimelineElement } from "react-vertical-timeline-component";

// const ExperienceCard = ({ experience }) => (
//   <VerticalTimelineElement
//     contentStyle={{
//       background: 'linear-gradient(90deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
//       color: '#ffffff',
//       borderRadius: '10px',
//       padding: '1.5rem',
//     }}
//     contentArrowStyle={{ borderRight: '7px solid #203a43' }}
//     date={experience.duration}
//     iconStyle={{ background: '#00bcd4', color: '#ffffff' }}
//   >
//     <h3 className="vertical-timeline-element-title text-2xl font-bold">
//       {experience.role}
//     </h3>
//     <ul className="mt-2 list-disc list-inside">
//       {experience.details.map((detail, idx) => (
//         <li key={idx} className="text-white opacity-90">
//           {detail}
//         </li>
//       ))}
//     </ul>
//   </VerticalTimelineElement>
// );

// export default ExperienceCard;
// ExperienceCard.jsx
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";




const iconMapper = {
  0: 'ai.png',
  1: 'mule.svg', 
  2: 'microservice.png'
};

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'linear-gradient(90deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
      color: '#ffffff',
      borderRadius: '10px',
      padding: '1.5rem',
    }}
    contentArrowStyle={{ borderRight: '7px solid #203a43' }}
    date={experience.duration}
    iconStyle={{ background: 'transparent', boxShadow: 'none', padding: 0 }}
    icon={<img src={iconMapper[index]} alt="experience-icon" className="w-full h-full object-cover rounded-full" />}
  >
    <h3 className="vertical-timeline-element-title text-2xl font-bold">
      {experience.role}
    </h3>
    <ul className="mt-2 list-disc list-inside">
      {experience.details.map((detail, idx) => (
        <li key={idx} className="text-white opacity-90">
          {detail}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export default ExperienceCard;

