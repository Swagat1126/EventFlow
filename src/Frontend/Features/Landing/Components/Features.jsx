import React, { useState, useEffect, useRef } from 'react';
import '../styles/Features.css';

const studentFeatures = [
  { icon: '🗓️', title: 'Browse Upcoming Events', desc: 'Discover all events happening on campus in one place. Filter by category, date, or organizing club.' },
  { icon: '🔍', title: 'Search & Filter', desc: 'Powerful search across event names, clubs, and categories. Find the right event in seconds.' },
  { icon: '📝', title: 'One-Click Registration', desc: 'Register for any event instantly. No forms, no queues — just click and confirm your spot.' },
  { icon: '📲', title: 'Get Your QR Code', desc: 'Receive a unique QR code for each registration. Your digital pass to every event.' },
  { icon: '📋', title: 'My Registered Events', desc: 'View all your upcoming and past registrations in a clean personal dashboard.' },
  { icon: '✅', title: 'Attendance Status', desc: 'Track your attendance records in real time. Know instantly when your presence is logged.' },
];

const adminFeatures = [
  { icon: '➕', title: 'Create & Publish Events', desc: 'Build detailed event listings with banners, schedules, and capacity limits. Publish instantly.' },
  { icon: '👥', title: 'Manage Registrations', desc: 'View the full list of registrants for any event. Export data, manage capacity.' },
  { icon: '📷', title: 'QR Code Scanner', desc: 'Open the scanner, scan a student\'s QR, and attendance is marked automatically in real time.' },
  { icon: '📊', title: 'Event Reports', desc: 'Get detailed analytics on attendance rates, registration trends, and event performance.' },
  { icon: '🔔', title: 'Send Notifications', desc: 'Send announcements, reminders, and event updates to all registered students with one click.' },
  { icon: '🛡️', title: 'Role-Based Access', desc: 'Manage admin accounts with different permission levels for faculty and coordinators.' },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState('student');
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const features = activeTab === 'student' ? studentFeatures : adminFeatures;

  return (
    <section id="features" className="section-wrapper features-section" ref={ref}>
      <div className="features-header">
        <div className="section-tag reveal">Features</div>
        <h2 className="section-title reveal d1">
          Everything Your Campus<br />
          <span className="accent">Event Needs</span>
        </h2>
        <p className="section-subtitle reveal d2">
          Two powerful portals — one for students to discover and register,
          one for admins to manage and track. Built for your college's event workflow.
        </p>
      </div>

      {/* Portal Tabs */}
      <div className="portal-tabs reveal d3">
        <button
          className={`portal-tab ${activeTab === 'student' ? 'active' : ''}`}
          onClick={() => setActiveTab('student')}
        >
          👨‍🎓 Student Portal
        </button>
        <button
          className={`portal-tab ${activeTab === 'admin' ? 'active' : ''}`}
          onClick={() => setActiveTab('admin')}
        >
          👨‍💼 Admin Panel
        </button>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={f.title} className={`feature-card reveal d${(i % 3) + 1}`}>
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
