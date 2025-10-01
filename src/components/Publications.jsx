import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const Publications = () => {
  const publications = [
    {
      title: "GraphCodeBERT-Augmented Graph Attention Networks for Code Vulnerability Detection",
      authors: "Rangapuram Deekshith Sagar, et al.",
      venue: "IEEE Conference on Artificial Intelligence (CAI) 2025",
      year: "2025",
      doi: "10.1109/CAI.2025.xxxxxxx",
      link: "https://ieeexplore.ieee.org/document/11050748",
      abstract: "This paper presents a novel approach to code vulnerability detection using GraphCodeBERT-augmented Graph Attention Networks. The method improves detection accuracy by 30% through fine-tuned LLM analysis of enterprise repositories and optimized Code Property Graphs (CPGs) for over 1 million C/C++ functions.",
      keywords: ["GraphCodeBERT", "Graph Attention Networks", "Code Vulnerability Detection", "LLM", "Code Property Graphs", "AI Security"]
    }
  ];

  return (
    <section id="publications" className="w-full h-auto py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div variants={textVariant()} className="text-center mb-12">
          <p className="text-lg font-semibold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Research & Publications
            </span>
          </p>
          <h2 className="text-white text-4xl font-bold mb-4">Academic Publications</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Published research in AI security and machine learning applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{pub.title}</h3>
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold">Authors:</span> {pub.authors}
                  </p>
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold">Venue:</span> {pub.venue}
                  </p>
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold">Year:</span> {pub.year}
                  </p>
                  <p className="text-gray-300 mb-4">
                    <span className="font-semibold">DOI:</span> {pub.doi}
                  </p>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((keyword, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:from-green-500 hover:to-blue-600 transition-colors duration-300"
                    >
                      View Paper
                    </a>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors duration-300"
                    >
                      IEEE Xplore
                    </a>
                  </div>
                </div>
                
                <div className="lg:w-48 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">IEEE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
