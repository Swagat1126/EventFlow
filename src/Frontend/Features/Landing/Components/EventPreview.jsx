import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/sections.css';

const EventPreview = () => {
  const navigate = useNavigate();

  const upcomingEvents = [
    {
      id: 1,
      title: 'Coding Workshop',
      category: 'Workshop',
      date: 'March 20, 2025',
      attendees: 150,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Music Festival',
      category: 'Cultural',
      date: 'March 25, 2025',
      attendees: 500,
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Career Fair',
      category: 'Professional',
      date: 'April 1, 2025',
      attendees: 300,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Art Exhibition',
      category: 'Arts',
      date: 'April 8, 2025',
      attendees: 200,
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="event-preview-section" id="features">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Upcoming Events</p>
          <h2 className="section-title">Don't Miss Out</h2>
          <p className="section-description">
            Explore exciting events happening at your college. Register now to secure your spot!
          </p>
        </div>

        <div className="event-preview-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card" onClick={() => navigate('/student/login')}>
              <img src={event.image} alt={event.title} className="event-card-image" />
              <div className="event-card-content">
                <span className="event-card-category">{event.category}</span>
                <h3 className="event-card-title">{event.title}</h3>
                <div className="event-card-date">
                  <span>📅</span>
                  {event.date}
                </div>
                <div className="event-card-footer">
                  <span className="event-card-attendees">
                    {event.attendees}+ attending
                  </span>
                  <button className="event-card-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPreview;
