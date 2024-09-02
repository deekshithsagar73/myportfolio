import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { services } from '../constants';
import SkillsScroller from './SkillsScroller';

const About = () => {
  return (
    <section id="about" className="w-full h-auto py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div></div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-12 mt-12">
          <p className="text-xl font-semibold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Introduction
            </span>
          </p>
          <h2 className="text-white text-4xl font-bold">Overview</h2>
        </motion.div>

        <motion.p 
          className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-16 text-justify"
        >
          Full Stack Software Engineer (SDE) with 4 years of experience, currently pursuing a Master’s in Computer Science at the University at Buffalo. I specialize in building scalable, user-centric applications and have deep expertise in AI/ML technologies, including working with LLMs. My technical skills span Python, Java, React, and AWS, with significant work in optimizing business processes and developing advanced AI-driven security solutions. I thrive in collaborative, global environments and am driven by a passion for solving complex challenges in technology.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        <SkillsScroller />
      </div>
    </section>
  );
};

export default About;
