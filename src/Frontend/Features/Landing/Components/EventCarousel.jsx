import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/carousel.css';

const EventCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder event data
  const events = [
    {
      id: 1,
      title: 'TechFest 2025',
      category: 'Technology',
      date: 'March 15, 2025',
      venue: 'Main Auditorium',
      description: 'Annual technology festival featuring coding competitions, hackathons, and tech talks from industry experts.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop'
    },
    {
      id: 2,
      title: 'Cultural Night',
      category: 'Cultural',
      date: 'March 22, 2025',
      venue: 'Open Grounds',
      description: 'Celebrate diversity with music, dance, and performances from various cultures around the world.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=800&fit=crop'
    },
    {
      id: 3,
      title: 'Sports Championship',
      category: 'Sports',
      date: 'April 5, 2025',
      venue: 'Sports Complex',
      description: 'Inter-college sports championship with basketball, football, cricket, and athletics events.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=800&fit=crop'
    },
    {
      id: 4,
      title: 'Entrepreneurship Summit',
      category: 'Business',
      date: 'April 12, 2025',
      venue: 'Conference Hall',
      description: 'Learn from successful entrepreneurs and participate in startup pitch competitions.',
image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87'    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="event-carousel" id="featured">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {events.map((event) => (
              <div key={event.id} className="carousel-slide">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="carousel-image" 
                />
                <div className="event-details-overlay">
                  <span className="event-overlay-category">{event.category}</span>
                  <h3 className="event-overlay-title">{event.title}</h3>
                  <div className="event-overlay-info">
                    <div className="event-info-item">
                      <span className="event-info-icon">📅</span>
                      {event.date}
                    </div>
                    <div className="event-info-item">
                      <span className="event-info-icon">📍</span>
                      {event.venue}
                    </div>
                  </div>
                  <p className="event-overlay-description">{event.description}</p>
                  <button 
                    className="event-register-btn"
                    onClick={() => navigate('/student/login')}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-nav carousel-nav-prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="carousel-nav carousel-nav-next" onClick={nextSlide}>
            ›
          </button>
        </div>
        
        <div className="carousel-dots">
          {events.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;
