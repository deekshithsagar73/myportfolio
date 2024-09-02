import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-[250px]">
    <motion.div 
      className="w-full bg-gray-800 p-4 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }} 
      transition={{ duration: 0.3 }} 
    >
      <div className="flex justify-center items-center flex-col text-center">
        <img src={icon} alt={`${title}-icon`} className="w-16 h-16 mb-4" />
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;

