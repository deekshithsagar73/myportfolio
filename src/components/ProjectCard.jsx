import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const getProjectColor = (title) => {
    if (title === "Agentic Research Assistant") return "from-blue-500 to-purple-600";
    if (title === "AI-Powered Deepfake Detection System") return "from-red-500 to-pink-600";
    if (title === "Intelligent Anomaly Detection System") return "from-orange-500 to-yellow-600";
    if (title === "Energy Consumption Forecasting Platform") return "from-green-500 to-emerald-600";
    if (title === "Advanced Sentiment Analysis Engine") return "from-purple-500 to-pink-600";
    if (title === "Real-Time Object Detection System") return "from-cyan-500 to-blue-600";
    if (title === "Smart Weather Analytics Platform") return "from-cyan-500 to-blue-600";
    if (title === "Enterprise E-Commerce Solution") return "from-green-500 to-emerald-600";
    if (title === "Real-Time Collaborative Chat Platform") return "from-pink-500 to-purple-600";
    if (title === "IntelliFit Exercise Detection System") return "from-orange-500 to-red-600";
    if (title === "NLP-Based Job Resume Analyzer") return "from-purple-500 to-pink-600";
    if (title === "GraphCodeBERT-Augmented Graph Attention Networks for Code Vulnerability Detection") return "from-blue-500 to-purple-600";
    return "from-gray-500 to-gray-600";
  };

  const getProjectRoute = (title) => {
    // Specific routes for projects with dedicated pages
    if (title === "Agentic Research Assistant") return "/agentic-research";
    if (title === "AI-Powered Deepfake Detection System") return "/deepfake-detection";
    if (title === "Intelligent Anomaly Detection System") return "/anomaly-detection";
    if (title === "Energy Consumption Forecasting Platform") return "/energy-forecasting";
    if (title === "Advanced Sentiment Analysis Engine") return "/sentiment-analysis";
    if (title === "Real-Time Object Detection System") return "/object-detection";
    if (title === "Smart Weather Analytics Platform") return "/weather-analytics";
    if (title === "Enterprise E-Commerce Solution") return "/ecommerce-solution";
    if (title === "Real-Time Collaborative Chat Platform") return "/chat-platform";
    if (title === "IntelliFit Exercise Detection System") return "/intellifit";
    if (title === "NLP-Based Job Resume Analyzer") return "/resume-analyzer";
    if (title === "GraphCodeBERT-Augmented Graph Attention Networks for Code Vulnerability Detection") return "/ieee-publication";
    if (title === "AI-Powered Analytics Platform") return "/ai-analytics";
    
    // Generic route for any other projects
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    return `/project/${slug}`;
  };

  const hasGitLink = project.hasGitHub || false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Link to={getProjectRoute(project.title)} className="block">
        <div className="bg-tertiary p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300 cursor-pointer group">
          {/* Project Icon */}
          <div className="relative w-full h-32 mb-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-6xl">
              {project.title === "Agentic Research Assistant" && (
                <span className="text-blue-500">🤖</span>
              )}
              {project.title === "AI-Powered Deepfake Detection System" && (
                <span className="text-red-500">🔍</span>
              )}
              {project.title === "Intelligent Anomaly Detection System" && (
                <span className="text-orange-500">📊</span>
              )}
              {project.title === "Energy Consumption Forecasting Platform" && (
                <span className="text-green-500">⚡</span>
              )}
              {project.title === "Advanced Sentiment Analysis Engine" && (
                <span className="text-purple-500">💭</span>
              )}
              {project.title === "Real-Time Object Detection System" && (
                <span className="text-cyan-500">🎯</span>
              )}
              {project.title === "Weather Analytics Dashboard" && (
                <span className="text-cyan-500">🌤️</span>
              )}
              {project.title === "E-commerce Recommendation Engine" && (
                <span className="text-purple-500">🛒</span>
              )}
              {project.title === "Chat Platform with Real-time Messaging" && (
                <span className="text-pink-500">💬</span>
              )}
              {project.title === "Smart Weather Analytics Platform" && (
                <span className="text-cyan-500">🌤️</span>
              )}
              {project.title === "Enterprise E-Commerce Solution" && (
                <span className="text-green-500">🛒</span>
              )}
              {project.title === "Real-Time Collaborative Chat Platform" && (
                <span className="text-pink-500">💬</span>
              )}
              {project.title === "IntelliFit Exercise Detection System" && (
                <span className="text-orange-500">🏃‍♂️</span>
              )}
              {project.title === "NLP-Based Job Resume Analyzer" && (
                <span className="text-purple-500">📄</span>
              )}
              {project.title === "AI-Powered Analytics Platform" && (
                <span className="text-blue-500">📊</span>
              )}
              {project.title === "CRM & Customer Portal Development" && (
                <span className="text-green-500">🏢</span>
              )}
              {project.title === "GraphCodeBERT-Augmented Graph Attention Networks for Code Vulnerability Detection" && (
                <span className="text-blue-500">📚</span>
              )}
            </div>
            <div className="absolute bottom-2 right-2">
              <span className="text-gray-400 font-semibold text-xs bg-gray-800 px-2 py-1 rounded-full">
                {project.date}
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{project.tech}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full text-white bg-gradient-to-r from-blue-500 to-cyan-500"
                >
                  {tag.name}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs px-3 py-1 rounded-full text-white bg-gradient-to-r from-blue-500 to-cyan-500">
                  +{project.tags.length - 3} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-2">
              <div className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-center font-semibold group-hover:shadow-lg transition-all duration-200">
                View Project Details →
              </div>
              {project.hasGitHub && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.source, '_blank');
                  }}
                  className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white text-center font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  <span>View Code</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
