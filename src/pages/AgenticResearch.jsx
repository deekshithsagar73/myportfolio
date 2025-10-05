import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AgenticResearch = () => {
  const project = {
    title: "Agentic Research Assistant",
    tech: "PyTorch, LangChain, MCP Protocol, FastAPI, ChromaDB, Redis",
    description: "An autonomous AI-powered research platform that conducts comprehensive research, synthesizes knowledge, and generates insights using cutting-edge agentic AI technologies.",
    image: "/assets/project1.png",
    source: "https://github.com/deekshithsagar73",
    features: [
      "5 specialized AI agents working in coordination",
      "Autonomous research orchestration with LangChain",
      "MCP Protocol for seamless AI model communication",
      "Real-time knowledge synthesis and insight generation",
      "Quality control and validation systems",
      "FastAPI backend with async database operations",
      "Vector database integration with ChromaDB",
      "Redis caching for performance optimization"
    ],
    results: [
      { metric: "10-15x Faster", description: "Research speed improvement" },
      { metric: "92% Accuracy", description: "Quality control validation" },
      { metric: "67+ Sources", description: "Per research task" },
      { metric: "70-80% Cost", description: "Reduction in research costs" }
    ],
    methodology: "Built using PyTorch-based agentic AI architecture with LangChain orchestration. Features autonomous research agents that coordinate through MCP protocol, enabling seamless AI model communication. Demonstrates cutting-edge 2025 research topics including Quantum AI, Neuromorphic Computing, and Climate AI solutions."
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
            Agentic Research Assistant
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Autonomous AI-powered research platform leveraging PyTorch, LangChain, and MCP protocol for comprehensive research automation
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
            </div>
          </div>

          <div className="bg-tertiary p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-gray-300 mb-4">{project.tech}</p>
            <div className="flex flex-wrap gap-2">
              {["PyTorch", "LangChain", "MCP Protocol", "FastAPI", "ChromaDB", "Redis"].map((tech) => (
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
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
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

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-tertiary p-8 rounded-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Methodology</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{project.methodology}</p>
        </motion.div>

        {/* Research Topics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Research Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quantum AI",
                description: "How quantum computing and AI are merging in 2025, with breakthrough performance in optimization problems"
              },
              {
                title: "Neuromorphic Computing",
                description: "Brain-inspired AI architectures enabling brain-scale AI with 1000x lower power consumption"
              },
              {
                title: "Climate AI",
                description: "AI solutions for climate change challenges, particularly in carbon capture and renewable energy optimization"
              }
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-tertiary p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-white mb-3">{topic.title}</h3>
                <p className="text-gray-300">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgenticResearch;
