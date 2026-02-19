import React from 'react';
import '../styles/sections.css';

const AboutEventFlow = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Centralized Management',
      description: 'One platform for all college events. No more scattered information or missed announcements.'
    },
    {
      icon: '📲',
      title: 'QR Attendance',
      description: 'Automated attendance tracking with unique QR codes. Fast, accurate, and paperless.'
    },
    {
      icon: '👥',
      title: 'Easy Participation',
      description: 'Students can discover and register for events with just a few clicks. Simple and intuitive.'
    },
    {
      icon: '⚙️',
      title: 'Admin Dashboard',
      description: 'Powerful tools for event organizers to create, manage, and track events effortlessly.'
    }
  ];

  return (
    <section className="about-section" id="qr-system">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">About EventFlow</p>
          <h2 className="section-title">Your Complete Event Solution</h2>
          <p className="section-description">
            EventFlow revolutionizes how your college manages events. From planning to execution, 
            we provide everything you need in one streamlined platform.
          </p>
        </div>

        <div className="about-features">
          {features.map((feature, index) => (
            <div key={index} className="about-feature">
              <div className="about-feature-icon">{feature.icon}</div>
              <h3 className="about-feature-title">{feature.title}</h3>
              <p className="about-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutEventFlow;
