import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IEEEPublication = () => {
  const project = {
    title: "GraphCodeBERT-Augmented Graph Attention Networks for Code Vulnerability Detection",
    tech: "Python, PyTorch, BERT, Graph Neural Networks, Code Analysis, IEEE Publication",
    description: "IEEE Conference Publication on advanced code vulnerability detection using GraphCodeBERT and Graph Attention Networks. Developed novel approach combining transformer-based code understanding with graph neural networks for enhanced security analysis.",
    source: "https://github.com/deekshithsagar73/graphcodebert-vulnerability-detection",
    hasGitHub: true,
    publication: "IEEE Conference Publication",
    features: [
      "Novel GraphCodeBERT integration with Graph Attention Networks",
      "Advanced code vulnerability detection using transformer models",
      "Graph neural network architecture for code structure analysis",
      "IEEE Conference Publication with peer-reviewed research",
      "State-of-the-art performance in vulnerability detection",
      "Combined transformer and graph-based approaches",
      "Comprehensive evaluation on benchmark datasets",
      "Open-source implementation with detailed documentation"
    ],
    results: [
      { metric: "IEEE", description: "Conference Publication" },
      { metric: "State-of-Art", description: "Performance" },
      { metric: "Graph Neural", description: "Networks" },
      { metric: "Code Analysis", description: "Vulnerability Detection" }
    ],
    methodology: "Developed using Python with PyTorch framework, implementing GraphCodeBERT for code understanding and Graph Attention Networks for structural analysis. Combines transformer-based language models with graph neural networks for enhanced code vulnerability detection."
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
            GraphCodeBERT-Augmented Graph Attention Networks for Code Vulnerability Detection
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            IEEE Conference Publication on advanced code vulnerability detection using GraphCodeBERT and Graph Attention Networks
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
            <h2 className="text-2xl font-bold text-white mb-4">Research Overview</h2>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-500 text-white px-6 py-3 rounded-lg">
                <span>IEEE Publication</span>
              </div>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="bg-tertiary p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-gray-300 mb-4">{project.tech}</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "PyTorch", "BERT", "Graph Neural Networks", "Code Analysis", "IEEE Publication"].map((tech) => (
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
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Research Contributions</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Research Impact</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Research Methodology</h2>
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
                title: "GraphCodeBERT",
                description: "Transformer-based model for code understanding and semantic analysis"
              },
              {
                title: "Graph Attention Networks",
                description: "Graph neural networks for structural code analysis and vulnerability detection"
              },
              {
                title: "IEEE Publication",
                description: "Peer-reviewed research publication with comprehensive evaluation and results"
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

export default IEEEPublication;
