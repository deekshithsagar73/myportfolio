import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div variants={textVariant()} className="text-center">
          <p className="text-lg font-semibold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              My Journey
            </span>
          </p>
          <h2 className="text-white text-4xl font-bold mb-10">Experience</h2>
        </motion.div>

        <VerticalTimeline className="custom-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;




