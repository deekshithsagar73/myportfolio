import React from 'react';

const ProjectCard = ({ image, live, source, title, description, tags, date, isCenter }) => {
  return (
    <div
      className={`w-72 sm:w-80 flex flex-col gap-4 p-5 rounded-2xl shadow-lg transform transition-transform duration-300 ${
        isCenter ? 'scale-105' : 'scale-90 filter blur-sm'
      } ${isCenter ? 'bg-gradient-to-r from-darker via-dark to-darkest' : 'bg-gray-800 opacity-70'}`}
    >
      <div className="w-full">
        <img
          src={image}
          alt="project"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="w-full flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-3">{title}</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span key={index} className={`text-sm ${tag.color} font-medium`}>
                #{tag.name}
              </span>
            ))}
          </div>
          <p className="text-gray-300 mb-3">{description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            <button
              onClick={() => window.open(source, '_blank')}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-colors duration-300"
            >
              View More Details
            </button>
          </div>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
