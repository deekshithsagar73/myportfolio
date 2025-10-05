import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AIAnalytics = () => {
  const project = {
    title: "AI-Powered Analytics Platform",
    tech: "React, FastAPI, AWS, TypeScript, Serverless, AI Analytics",
    description: "Built and launched an AI-powered analytics platform enabling real-time data exploration and decision-making. Delivered full-stack features 30% faster with React/Next.js and FastAPI. Increased deployment reliability by 40% through CI/CD automation and Dockerized workflows.",
    source: "https://github.com/deekshithsagar73/ai-analytics-platform",
    hasGitHub: true,
    live: "https://analytics-demo.xfact.com",
    video: "https://drive.google.com/file/d/18HbkzdcytsiKmgwBD_ktxt-eAjRgO5Qi/view?usp=drive_link",
    features: [
      "Real-time data exploration and analytics dashboard",
      "AI-powered insights and predictive analytics",
      "React/Next.js frontend with TypeScript",
      "FastAPI backend with serverless architecture",
      "AWS cloud deployment and scaling",
      "CI/CD automation with Docker workflows",
      "Interactive data visualization and reporting",
      "30% faster feature delivery with optimized development"
    ],
    results: [
      { metric: "30% Faster", description: "Feature delivery" },
      { metric: "40% Improved", description: "Deployment reliability" },
      { metric: "Real-time", description: "Data analytics" },
      { metric: "AWS", description: "Cloud deployment" }
    ],
    methodology: "Built using React/Next.js frontend with TypeScript and FastAPI backend. Implements serverless architecture on AWS with CI/CD automation. Features AI-powered analytics with real-time data processing and interactive visualization capabilities."
  };

  return (
    <div className="min-h-screen bg-primary pt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            AI-Powered Analytics Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Full-stack analytics platform with AI-powered insights and real-time data exploration
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-tertiary p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <div className="flex items-center space-x-4">
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg transition-all duration-200"
              >
                View on GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-3 rounded-lg transition-all duration-200"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="bg-tertiary p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-gray-300 mb-4">{project.tech}</p>
            <div className="flex flex-wrap gap-2">
              {["React", "FastAPI", "AWS", "TypeScript", "Serverless", "AI Analytics"].map((tech) => (
                <span key={tech} className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-tertiary p-6 rounded-xl"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{result.metric}</h3>
                <p className="text-gray-200">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Demo Video */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Demo Video</h2>
          <div className="bg-tertiary p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-4">AI Analytics Platform Demo</h3>
            <p className="text-gray-300 mb-6">Watch the comprehensive demo of the AI-powered analytics platform showcasing real-time data exploration and decision-making capabilities.</p>
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors duration-200 text-lg font-semibold"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Demo Video
            </a>
          </div>
        </motion.div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="bg-tertiary p-8 rounded-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Methodology</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.methodology}</p>
        </motion.div>

        {/* Technical Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Technical Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend",
                description: "React/Next.js with TypeScript for modern, responsive user interface"
              },
              {
                title: "Backend",
                description: "FastAPI with serverless architecture for scalable API development"
              },
              {
                title: "Cloud & AI",
                description: "AWS deployment with AI-powered analytics and real-time processing"
              }
            ].map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-tertiary p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-white mb-3">{component.title}</h3>
                <p className="text-gray-300">{component.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAnalytics;
