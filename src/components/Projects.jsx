import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../constants';
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

const Projects = () => {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(Math.floor(projects.length / 2));

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
      if (centerIndex > 0) {
        setCenterIndex(centerIndex - 1);
      }
    } else {
      current.scrollLeft += 300;
      if (centerIndex < projects.length - 1) {
        setCenterIndex(centerIndex + 1);
      }
    }
  };

  return (
    <section id="projects" className="w-full h-auto bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-full mx-auto px-0 relative">
        <motion.div className="text-center mb-16">
          <p className="text-cyan-500 text-lg">My work</p>
          <h2 className="text-white text-4xl font-bold">Projects</h2>
        </motion.div>

        <div className="relative flex items-center">
          <button
            className="absolute left-0 z-10 p-2 bg-gradient-to-r from-gray-800 via-gray-900 to-transparent text-white rounded-full shadow-md hover:bg-cyan-500"
            onClick={() => scroll("left")}
          >
            &#8592;
          </button>

          <div
            ref={scrollRef}
            className="flex justify-center items-center gap-4 overflow-x-auto py-8 px-4 scroll-smooth scrollbar-hide"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <ProjectCard
                  image={project.image}
                  live={project.live}
                  source={project.source}
                  title={project.title}
                  tags={project.tags}
                  description={project.description}
                  date={project.date}
                  isCenter={index === centerIndex}
                />
              </motion.div>
            ))}
          </div>

          <button
            className="absolute right-0 z-10 p-2 bg-gradient-to-l from-gray-800 via-gray-900 to-transparent text-white rounded-full shadow-md hover:bg-cyan-500"
            onClick={() => scroll("right")}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
