import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          
          EventFlow
        </a>

        <ul className="nav-links">
          <li><a href="#features" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
          <li><a href="#how-it-works" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a></li>
          <li><a href="#qr-system" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('qr-system'); }}>QR System</a></li>
          <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>

        <div className="nav-buttons">
          <button className="nav-btn nav-btn-login" onClick={() => navigate('/student/login')}>
            Log In
          </button>
          <button className="nav-btn nav-btn-signup" onClick={() => navigate('/student/login')}>
            Get Started
          </button>
        </div>

        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu active">
          <ul className="mobile-nav-links">
            <li><a href="#features" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
            <li><a href="#how-it-works" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a></li>
            <li><a href="#qr-system" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('qr-system'); }}>QR System</a></li>
            <li><a href="#contact" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
          <div className="mobile-nav-buttons">
            <button className="nav-btn nav-btn-login" onClick={() => navigate('/student/login')}>
              Log In
            </button>
            <button className="nav-btn nav-btn-signup" onClick={() => navigate('/student/login')}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
