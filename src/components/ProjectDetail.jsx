import { motion } from "framer-motion";
import { useState } from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ProjectDetail = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(project.source, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="/assets/icon-git.png"
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-[14px] text-gray-400">{project.date}</p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            {isExpanded ? "Show Less" : "View Details"}
          </button>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-4"
          >
            <div className="border-t border-gray-600 pt-4">
              <h4 className="text-white font-semibold text-lg mb-2">Technology Stack</h4>
              <p className="text-gray-300 text-sm">{project.tech}</p>
            </div>

            <div className="border-t border-gray-600 pt-4">
              <h4 className="text-white font-semibold text-lg mb-2">Key Features</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-600 pt-4">
              <h4 className="text-white font-semibold text-lg mb-2">Results & Impact</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {project.results?.map((result, index) => (
                  <div key={index} className="bg-gray-800 p-3 rounded-lg">
                    <p className="text-green-400 font-semibold">{result.metric}</p>
                    <p className="text-gray-300">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-600 pt-4">
              <h4 className="text-white font-semibold text-lg mb-2">Methodology</h4>
              <p className="text-gray-300 text-sm">{project.methodology}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(ProjectDetail, "project-detail");

