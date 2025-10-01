import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../constants';
import { textVariant } from '../utils/motion';

const Certifications = () => {
  return (
    <section id="certifications" className="w-full h-auto py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div variants={textVariant()} className="text-center mb-12">
          <p className="text-lg font-semibold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Professional Credentials
            </span>
          </p>
          <h2 className="text-white text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cloud technologies and enterprise platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105"
            >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {cert.issuer.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{cert.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-green-400 text-sm font-medium">{cert.date}</p>
                  <div className="mt-3 px-3 py-1 bg-gray-700 rounded-full">
                    <span className="text-gray-300 text-xs">{cert.credentialId}</span>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
