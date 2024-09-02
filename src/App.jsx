import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from "./components/About";
import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
