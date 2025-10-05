import React from 'react';
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
import House from "../canvas/House";
import resume from "/assets/deekshith_sagar_cv.pdf";

const Home = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 top-20 max-w-6xl mx-auto flex flex-row items-center justify-between px-8 z-10">
        <div className="flex flex-col justify-center items-start space-y-5">
          <h1 className="heroHeadText text-white transition-transform duration-300 hover:transform hover:translate-y-[-5px] hover:scale-105">
            Rangapuram Deekshith Sagar
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-blue-500 my-3"></div>

          <p className="heroSubText text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 transition-transform duration-300 hover:transform hover:translate-y-[-5px] hover:scale-105">
            Fullstack Developer & AI/ML Engineer with 5+ years of industry experience.
          </p>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">
            Passionate about building intelligent solutions that bridge the gap between cutting-edge AI research and real-world applications. 
            Specialized in full-stack development, machine learning, and cloud technologies.
          </p>
          <a
            href={resume}
            download="Rangapuram_Resume.pdf"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-md hover:from-green-500 hover:to-blue-600 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
        <div style={{ width: '100%', height: '800px', margin: '100px auto 0 auto' }}>
          <House />
        </div>
      </div>
    </section>
  );
};

export default Home;
