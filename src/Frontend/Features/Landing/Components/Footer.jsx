import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#' },
      { name: 'Events', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Student Portal', href: '/student/login' },
      { name: 'Admin Panel', href: '/admin/login' },
      { name: 'Help Center', href: '#' },
      { name: 'FAQs', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Guidelines', href: '#' }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === '#') {
      scrollToTop();
      return;
    }
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">EventFlow</h3>
            <p className="footer-tagline">
              Simplifying college event management with smart technology. 
              From registration to attendance, we've got you covered.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">📘</a>
              <a href="#" className="footer-social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="footer-social-link" aria-label="Instagram">📷</a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="footer-section-title">Resources</h4>
            <ul className="footer-links">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="footer-link"
                    onClick={(e) => {
                      if (link.href.startsWith('/')) {
                        // Let React Router handle navigation
                        return;
                      }
                      e.preventDefault();
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="footer-section-title">Legal</h4>
            <ul className="footer-links">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} EventFlow. All rights reserved. TEAM A4 WEINTERN.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Accessibility</a>
            <a href="#" className="footer-bottom-link">Sitemap</a>
            <a href="#" className="footer-bottom-link">Feedback</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
