import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import EventCarousel from './EventCarousel';
import EventPreview from './EventPreview';
import HowItWorks from './HowItWorks';
import AboutEventFlow from './AboutEventFlow';
import ContactSection from './ContactSection';
import Footer from './Footer';
import '../styles/landing.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <Hero />
      <EventCarousel />
      <EventPreview />
      <HowItWorks />
      <AboutEventFlow />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
