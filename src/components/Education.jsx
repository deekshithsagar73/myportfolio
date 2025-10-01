import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      university: "University at Buffalo",
      location: "Buffalo, New York, USA",
      duration: "Aug 2023 – Dec 2024",
      gpa: "3.8/4.0",
      logo: "/assets/ub-logo.svg",
      highlights: [
        "Specialized in AI/ML with focus on deep learning and neural networks",
        "Research in AI security and vulnerability detection",
        "Published IEEE paper on GraphCodeBERT for code vulnerability detection",
        "Advanced coursework in machine learning, computer vision, and NLP"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      specialization: "Computer Science",
      university: "Institute of Aeronautical Engineering (JNTUH)",
      location: "Hyderabad, Telangana, India",
      duration: "Aug 2016 – Sep 2020",
      gpa: "8.68/10",
      logo: "/assets/jntuh-logo.svg",
      highlights: [
        "Strong foundation in computer science fundamentals",
        "Specialized in software engineering and system design",
        "Active participation in hackathons and coding competitions",
        "Top 100 participant in Virtusa National Hackathon"
      ]
    }
  ];

  return (
    <section id="education" className="w-full h-auto py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div variants={textVariant()} className="text-center mb-12">
          <p className="text-lg font-semibold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Academic Background
            </span>
          </p>
          <h2 className="text-white text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Strong academic foundation in Computer Science with specialization in AI/ML
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {edu.university.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-gray-300 font-medium mb-1">{edu.specialization}</p>
                  <p className="text-gray-400 text-sm mb-1">{edu.university}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.location}</p>
                  <p className="text-green-400 text-sm font-medium">{edu.duration}</p>
                </div>
                <div className="text-right">
                  <div className="bg-gray-700 px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
