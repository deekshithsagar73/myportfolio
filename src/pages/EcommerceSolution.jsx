import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EcommerceSolution = () => {
  const project = {
    title: "Enterprise E-Commerce Solution",
    tech: "React, Node.js, MongoDB, Payment Integration, AI Recommendations, Admin Dashboard",
    description: "Developed a full-stack e-commerce platform with advanced features including AI-powered product recommendations, real-time inventory management, and secure payment processing. Supports multiple payment gateways and features comprehensive admin dashboard.",
    source: "https://github.com/deekshithsagar73",
    hasGitHub: false,
    features: [
      "AI-powered product recommendation engine",
      "Real-time inventory management system",
      "Secure payment processing with multiple gateways",
      "Comprehensive admin dashboard with analytics",
      "User authentication and authorization",
      "Shopping cart and checkout functionality",
      "Order tracking and management",
      "Responsive design for all devices"
    ],
    results: [
      { metric: "Full-Stack", description: "Complete solution" },
      { metric: "AI-Powered", description: "Recommendations" },
      { metric: "Secure", description: "Payment processing" },
      { metric: "Scalable", description: "Enterprise ready" }
    ],
    methodology: "Built using React frontend with Node.js backend and MongoDB database. Implements AI recommendation algorithms, secure payment processing, and comprehensive admin functionality for enterprise-level e-commerce operations."
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
            Enterprise E-Commerce Solution
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Full-stack e-commerce platform with AI recommendations and secure payment processing
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
              {["React", "Node.js", "MongoDB", "Payment Integration", "AI Recommendations", "Admin Dashboard"].map((tech) => (
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
                title: "Frontend",
                description: "React-based responsive interface with modern UI/UX design and mobile optimization"
              },
              {
                title: "Backend",
                description: "Node.js/Express server with MongoDB database and RESTful API architecture"
              },
              {
                title: "Payment & AI",
                description: "Secure payment processing with AI-powered recommendation engine integration"
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

        {/* Live Website */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Live Website</h2>
          <div className="bg-tertiary p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-4">The Integrity Company</h3>
            <p className="text-gray-300 mb-6">Visit the live website showcasing the CRM and customer portal development with comprehensive healthcare services integration.</p>
            <a
              href="https://theintegritycompanyinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-colors duration-200 text-lg font-semibold"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
              Visit Live Website
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcommerceSolution;
