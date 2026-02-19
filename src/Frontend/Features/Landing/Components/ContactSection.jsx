import React from 'react';
import '../styles/sections.css';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      info: 'eventflow@college.edu'
    },
    {
      icon: '📞',
      title: 'Call Us',
      info: '+1 (555) 123-4567'
    },
    {
      icon: '🏫',
      title: 'Visit Us',
      info: 'Student Activity Center, Room 204'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            Have questions about EventFlow? Our event committee is here to help. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-cards">
            {contactInfo.map((contact, index) => (
              <div key={index} className="contact-card">
                <div className="contact-card-icon">{contact.icon}</div>
                <h3 className="contact-card-title">{contact.title}</h3>
                <p className="contact-card-info">{contact.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
