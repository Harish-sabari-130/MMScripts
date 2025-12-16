import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="hero-badge">Est. 2025 • MMScripts</span>
        
        <h1 className="hero-title">
          Stories that <br />
          <span className="gradient-text">Defy Gravity.</span>
        </h1>
        
        <p className="hero-subtitle">
          Your premier destination for discovering exceptional books and manuscripts. 
          [cite_start]We curate works that inspire, educate, and transform[cite: 20].
        </p>

        <div className="hero-cta-group" style={{justifyContent: 'center'}}>
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('books').scrollIntoView({ behavior: 'smooth' })}
          >
            Start Reading
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;