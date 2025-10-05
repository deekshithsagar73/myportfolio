import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SentimentAnalysis = () => {
  const project = {
    title: "Advanced Sentiment Analysis Engine",
    tech: "Python, BERT, NLP, Social Media Analytics, Transformers, Hugging Face",
    description: "Created a sophisticated sentiment analysis system using BERT and LSTM architectures. Achieved 91% accuracy in analyzing customer sentiment across multiple social media platforms. Features real-time processing and multilingual support.",
    source: "https://github.com/deekshithsagar73",
    hasGitHub: false,
    features: [
      "BERT-based sentiment classification with 91% accuracy",
      "Real-time social media sentiment analysis",
      "Multilingual support for global applications",
      "Advanced NLP preprocessing and tokenization",
      "Custom model fine-tuning capabilities",
      "API integration for live data processing",
      "Sentiment trend analysis and visualization",
      "Scalable cloud deployment with Docker"
    ],
    results: [
      { metric: "91% Accuracy", description: "Sentiment classification" },
      { metric: "Real-time", description: "Processing capability" },
      { metric: "Multilingual", description: "Language support" },
      { metric: "API Ready", description: "Production deployment" }
    ],
    methodology: "Built using Python with BERT and LSTM architectures for advanced sentiment analysis. Implements state-of-the-art NLP techniques including tokenization, attention mechanisms, and transfer learning. Features comprehensive preprocessing and multilingual support for global sentiment analysis."
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
            Advanced Sentiment Analysis Engine
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            BERT-powered sentiment analysis system with multilingual support and real-time processing
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
              {["Python", "BERT", "NLP", "Transformers", "Hugging Face", "TensorFlow"].map((tech) => (
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
                title: "BERT Model",
                description: "Pre-trained BERT model fine-tuned for sentiment analysis with attention mechanisms"
              },
              {
                title: "NLP Pipeline",
                description: "Advanced text preprocessing, tokenization, and feature extraction for multilingual support"
              },
              {
                title: "API Integration",
                description: "RESTful API with real-time processing capabilities and scalable cloud deployment"
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

export default SentimentAnalysis;
