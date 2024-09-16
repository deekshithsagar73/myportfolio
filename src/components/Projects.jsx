import React, { useState } from 'react';
import ProjectCard from './ProjectCard'; // Import the individual card component
import { projects } from '../constants'; // Your project data
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion'; // Assuming you have a utility for text animations

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All'); // State for filtering projects

  // Filtered projects based on selected tag
  const filteredProjects = activeTag === 'All'
    ? projects
    : projects.filter((project) =>
        project.tags.some((tag) => tag.name === activeTag)
      );

  return (
    <section 
      className="w-full h-auto pt-28 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 scroll-margin-top" // Adjusted top padding to push it down
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <motion.div variants={textVariant()} className="text-center mb-10">
          <p className="text-lg font-semibold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              What I have built so far
            </span>
          </p>
          <h2 className="text-white text-4xl font-bold mb-10">Projects Portfolio</h2>
        </motion.div>

        {/* Filter by Tags */}
        <div className="flex justify-center mb-10">
          {['All', 'React', 'Python', 'AI', 'Fullstack'].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)} // Set the active tag for filtering
              className={`text-sm font-medium text-white px-4 py-2 rounded-lg m-1 transition-colors 
                          ${activeTag === tag ? 'bg-blue-500' : 'bg-gray-800 hover:bg-blue-600'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid layout with 3 cards per row on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
