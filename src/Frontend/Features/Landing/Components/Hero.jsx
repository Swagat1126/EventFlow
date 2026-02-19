import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          🎓 Your College Event Management System
        </div>
        
        <h1 className="hero-title">
          Manage Events <span className="highlight">Smarter. Faster.</span>
        </h1>
        
        <p className="hero-subtitle">
          Streamline your college events from creation to QR-based attendance. 
          One centralized platform for students and administrators.
        </p>
        
        <div className="hero-buttons">
          <button className="hero-btn hero-btn-primary" onClick={() => navigate('/student/login')}>
            Student Portal →
          </button>
          <button className="hero-btn hero-btn-secondary" onClick={() => navigate('/admin/login')}>
            Admin Panel
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">500+</span>
            <span className="hero-stat-label">Events Managed</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">10K+</span>
            <span className="hero-stat-label">Students Active</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">100%</span>
            <span className="hero-stat-label">Digital Process</span>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-indicator-icon">↓</span>
      </div>
    </section>
  );
};

export default Hero;
