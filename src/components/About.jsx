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

        <motion.div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
            I'm a passionate Full Stack Developer and AI/ML Engineer with 5+ years of industry experience, holding a Master's in Computer Science from the University at Buffalo. My journey spans from building enterprise-level applications to pioneering AI-driven security solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 mb-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <p className="text-sm leading-relaxed mb-3">
                <strong>M.S. Computer Science (AI/ML)</strong> - University at Buffalo (3.8/4.0 GPA)
              </p>
              <p className="text-sm leading-relaxed">
                <strong>B.Tech Computer Science</strong> - JNTUH (8.68/10 GPA)
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
              <p className="text-sm leading-relaxed mb-2">
                • Salesforce Certified Administrator, Developer & Architect
              </p>
              <p className="text-sm leading-relaxed">
                • MuleSoft Developer II
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Research & Publications</h3>
              <p className="text-sm leading-relaxed">
                Published IEEE paper on "GraphCodeBERT-Augmented Graph Attention Networks for Code Vulnerability Detection" at IEEE CAI 2025. 
                Developed LLM for vulnerability analysis with 30% accuracy improvement.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Industry Impact</h3>
              <p className="text-sm leading-relaxed">
                I've delivered solutions that saved companies over $400K annually through automation and optimization. 
                My work includes building MuleSoft integrations, developing AI security tools, and creating full-stack applications 
                that serve thousands of users.
              </p>
            </div>
          </div>
        </motion.div>

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
