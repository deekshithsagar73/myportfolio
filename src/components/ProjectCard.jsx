import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt'; // Optional tilt effect for hover

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Tilt
      options={{
        max: 25,
        scale: 1,
        speed: 400,
      }}
      className="project-card shadow-lg p-4 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700"  // Set card background and shadow
    >
      <motion.div className="relative w-full h-full min-h-[450px]">
        <div className={`flip-card-inner ${isFlipped ? 'flip' : ''}`}>
          {/* Front of the card */}
          <div className="flip-card-front w-full h-full p-4 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700">
            <div className="w-full h-32 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xl">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <p className="text-gray-300 text-sm font-medium">Project Preview</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-300 text-sm mt-2 font-medium">{project.tech}</p>
            <p className="text-gray-400 mt-2 text-sm">
              {project.description.slice(0, 100)}...
            </p>
            <button
              onClick={toggleFlip}
              className="mt-4 text-sm bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
            >
              Show more
            </button>
          </div>

          {/* Back of the card */}
          <div className="flip-card-back w-full h-full p-4 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-300 text-sm mt-2 font-medium">{project.tech}</p>
            <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className={`skill-tag text-xs px-2 py-1 rounded-full ${tag.color} bg-gray-800`}>
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => window.open(project.live, '_blank')}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md text-sm"
              >
                Live Demo
              </button>
              <button
                onClick={() => window.open(project.source, '_blank')}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md text-sm hover:bg-gray-600"
              >
                View Profile
              </button>
            </div>
            <button
              onClick={toggleFlip}
              className="text-blue-400 mt-2 text-sm hover:text-blue-300"
            >
              Show less
            </button>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
