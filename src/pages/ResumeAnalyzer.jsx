import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ResumeAnalyzer = () => {
  const project = {
    title: "NLP-Based Job Resume Analyzer",
    tech: "Python, NLP, Machine Learning, CI/CD, Text Processing, AI Analytics",
    description: "Engineered an AI resume analysis tool employing NLP techniques for automated resume screening. Features keyword extraction, skill matching, and candidate ranking. Integrated into CI/CD pipelines for efficient deployment.",
    source: "https://github.com/deekshithsagar73",
    hasGitHub: false,
    features: [
      "Advanced NLP techniques for resume parsing and analysis",
      "Keyword extraction and skill matching algorithms",
      "Automated candidate ranking and scoring system",
      "CI/CD pipeline integration for efficient deployment",
      "Text processing and natural language understanding",
      "Machine learning-based candidate evaluation",
      "Automated resume screening and filtering",
      "Scalable architecture for enterprise use"
    ],
    results: [
      { metric: "NLP-Powered", description: "Resume analysis" },
      { metric: "Automated", description: "Screening process" },
      { metric: "CI/CD", description: "Deployment pipeline" },
      { metric: "ML-Based", description: "Candidate ranking" }
    ],
    methodology: "Built using Python with advanced NLP libraries for resume parsing and analysis. Implements machine learning algorithms for candidate evaluation and ranking. Features CI/CD integration for automated deployment and scalable processing."
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
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
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
            NLP-Based Job Resume Analyzer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            AI-powered resume analysis tool with automated screening and candidate ranking
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
                href="https://github.com/deekshithsagar73"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                View GitHub Profile
              </a>
            </div>
          </div>

          <div className="bg-tertiary p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-gray-300 mb-4">{project.tech}</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "NLP", "Machine Learning", "CI/CD", "Text Processing", "AI Analytics"].map((tech) => (
                <span key={tech} className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
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
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
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
                className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-xl text-center"
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

        {/* Technical Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Technical Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "NLP Processing",
                description: "Advanced natural language processing for resume parsing and text analysis"
              },
              {
                title: "Machine Learning",
                description: "ML algorithms for candidate evaluation and automated ranking systems"
              },
              {
                title: "CI/CD Integration",
                description: "Automated deployment pipelines for efficient and reliable deployment"
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

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-tertiary p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Source Code</h3>
            <p className="text-gray-300 mb-6">View more projects and source code on my GitHub profile</p>
            <a
              href="https://github.com/deekshithsagar73"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
