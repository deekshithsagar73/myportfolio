import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AgenticResearch from './pages/AgenticResearch';
import DeepfakeDetection from './pages/DeepfakeDetection';
import AnomalyDetection from './pages/AnomalyDetection';
import EnergyForecasting from './pages/EnergyForecasting';
import SentimentAnalysis from './pages/SentimentAnalysis';
import ObjectDetection from './pages/ObjectDetection';
import WeatherAnalytics from './pages/WeatherAnalytics';
import EcommerceSolution from './pages/EcommerceSolution';
import ChatPlatform from './pages/ChatPlatform';
import IntelliFit from './pages/IntelliFit';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import IEEEPublication from './pages/IEEEPublication';
import AIAnalytics from './pages/AIAnalytics';
import ProjectWrapper from './components/ProjectWrapper';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Publications />
            <Contact />
          </>
        } />
        <Route path="/agentic-research" element={<AgenticResearch />} />
        <Route path="/deepfake-detection" element={<DeepfakeDetection />} />
        <Route path="/anomaly-detection" element={<AnomalyDetection />} />
        <Route path="/energy-forecasting" element={<EnergyForecasting />} />
        <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
        <Route path="/object-detection" element={<ObjectDetection />} />
        <Route path="/weather-analytics" element={<WeatherAnalytics />} />
        <Route path="/ecommerce-solution" element={<EcommerceSolution />} />
        <Route path="/chat-platform" element={<ChatPlatform />} />
        <Route path="/intellifit" element={<IntelliFit />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/ieee-publication" element={<IEEEPublication />} />
        <Route path="/ai-analytics" element={<AIAnalytics />} />
        <Route path="/project/:projectId" element={<ProjectWrapper />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
