import React from 'react';
import '../styles/sections.css';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: '🔍',
      title: 'Browse Events',
      description: 'Explore all upcoming college events in one centralized platform. Filter by category, date, or venue.'
    },
    {
      number: 2,
      icon: '📝',
      title: 'Register',
      description: 'Click to register for any event instantly. Fill in basic details and confirm your attendance.'
    },
    {
      number: 3,
      icon: '📱',
      title: 'Get QR Code',
      description: 'Receive a unique QR code for the event. This is your digital ticket for entry and attendance.'
    },
    {
      number: 4,
      icon: '🎉',
      title: 'Attend Event',
      description: 'Show your QR code at the venue. Attendance is marked automatically and instantly recorded.'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Simple Process</p>
          <h2 className="section-title">How EventFlow Works</h2>
          <p className="section-description">
            From discovering events to marking attendance, everything happens seamlessly in four simple steps.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <span className="step-arrow">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
