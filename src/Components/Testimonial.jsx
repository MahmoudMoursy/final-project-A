import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialStyle.css';

// Testimonial Card Component
const TestimonialCard = ({ name, role, content, rating, image, isActive }) => {
  return (
    <div className={`testimonial-card ${isActive ? 'active' : 'inactive'}`}>
      <div className="testimonial-content">
        <div className="testimonial-profile">
          <img 
            src={image} 
            alt={`${name}'s profile`} 
            className="testimonial-avatar"
          />
          <div className="testimonial-info">
            <h3>{name}</h3>
            <p>{role}</p>
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < rating ? 'star active' : 'star'}>★</span>
              ))}
            </div>
          </div>
        </div>
        <blockquote>
          <p>"{content}"</p>
        </blockquote>
      </div>
    </div>
  );
};

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    content: 'This product completely transformed our workflow. The intuitive interface made it easy for our entire team to adapt, and we\'ve seen a 40% increase in productivity since implementation.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Engineer',
    content: 'As a developer, I appreciate the attention to detail and robust feature set. The API documentation is clear, and integration was seamless. This is now an essential part of our tech stack.',
    rating: 4,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'UX Designer',
    content: 'The design system is truly exceptional. It\'s rare to find a product that balances aesthetics and functionality so well. Our design team has been able to create consistent experiences across all our platforms.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Project Manager',
    content: 'This solution has streamlined our project management process considerably. The dashboard gives us real-time insights that help us make informed decisions quickly.',
    rating: 4,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

// Main Testimonial Component
const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);
  
  const goToPrev = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [goToNext, isAutoPlaying]);
  
  // Pause auto-play when user interacts with controls
  const handleManualNavigation = (callback) => {
    setIsAutoPlaying(false);
    callback();
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>What Our Users Say</h2>
          <div className="blue-underline"></div>
          <p>
            Discover how our product has helped professionals across various industries 
            transform their workflow and achieve their goals.
          </p>
        </div>
        
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              rating={testimonial.rating}
              image={testimonial.image}
              isActive={index === activeIndex}
            />
          ))}
          
          {/* Navigation controls */}
          <button 
            onClick={() => handleManualNavigation(goToPrev)}
            className="nav-button prev"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => handleManualNavigation(goToNext)}
            className="nav-button next"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicator dots */}
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(() => setActiveIndex(index))}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
