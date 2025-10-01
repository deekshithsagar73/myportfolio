import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
