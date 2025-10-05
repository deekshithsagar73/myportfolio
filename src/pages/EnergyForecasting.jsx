import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EnergyForecasting = () => {
  const project = {
    title: "Energy Consumption Forecasting Platform",
    tech: "Python, LSTM, Time Series, Energy Analytics, TensorFlow, Scikit-learn",
    description: "Developed a comprehensive energy forecasting system using advanced LSTM networks to predict consumption patterns. Helped utility companies optimize resource allocation and reduce costs by 15%. Features interactive dashboards and real-time predictions.",
    source: "https://github.com/deekshithsagar73",
    hasGitHub: false,
    features: [
      "Advanced LSTM neural networks for time series forecasting",
      "Real-time energy consumption prediction",
      "Interactive dashboards with data visualization",
      "Historical data analysis and trend identification",
      "Cost optimization recommendations",
      "Multi-variate time series modeling",
      "Automated model training and validation",
      "Scalable cloud deployment architecture"
    ],
    results: [
      { metric: "15% Cost", description: "Reduction in energy costs" },
      { metric: "92% Accuracy", description: "Forecasting accuracy" },
      { metric: "Real-time", description: "Prediction capabilities" },
      { metric: "Interactive", description: "Dashboard interface" }
    ],
    methodology: "Built using Python with LSTM neural networks for time series forecasting. Implements advanced preprocessing techniques, feature engineering, and model optimization. Features comprehensive data visualization and interactive dashboards for energy consumption analysis."
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
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
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
            Energy Consumption Forecasting Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Advanced LSTM-based energy forecasting system with interactive dashboards and real-time predictions
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
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg transition-all duration-200"
              >
                View GitHub Profile
              </a>
            </div>
          </div>

          <div className="bg-tertiary p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-gray-300 mb-4">{project.tech}</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "LSTM", "TensorFlow", "Time Series", "Analytics", "Scikit-learn"].map((tech) => (
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
                className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 rounded-xl text-center"
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
                title: "Data Processing",
                description: "Advanced preprocessing and feature engineering for time series data with normalization and scaling"
              },
              {
                title: "LSTM Networks",
                description: "Deep learning models with attention mechanisms for accurate energy consumption forecasting"
              },
              {
                title: "Visualization",
                description: "Interactive dashboards with real-time charts and predictive analytics for energy management"
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

        {/* Demo Video */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Demo Video</h2>
          <div className="bg-tertiary p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-4">AI Analytics Platform Demo</h3>
            <p className="text-gray-300 mb-6">Watch the comprehensive demo of the AI-powered analytics platform showcasing real-time data exploration and decision-making capabilities.</p>
            <a
              href="https://drive.google.com/file/d/18HbkzdcytsiKmgwBD_ktxt-eAjRgO5Qi/view?usp=drive_link"
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
      </div>
    </div>
  );
};

export default EnergyForecasting;
