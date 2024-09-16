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
      className="shadow-lg p-4 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700"  // Set card background and shadow
    >
      <motion.div className="relative w-full h-full min-h-[450px]">
        <div className={`flip-card-inner ${isFlipped ? 'flip' : ''}`}>
          {/* Front of the card */}
          <div className="flip-card-front w-full h-full p-4 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-400 mt-2">
              {project.description.slice(0, 70)}...
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
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-4 flex gap-4">
              <button
                onClick={() => window.open(project.source, '_blank')}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
              >
                View Project
              </button>
              <button
                onClick={toggleFlip}
                className="text-blue-500 mt-4 text-sm"
              >
                Show less
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
