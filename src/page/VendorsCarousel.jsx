import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import './VendorsCarousel.css';

const BusinessCard = ({ 
  title,
  subtitle,
  bgColor,
  textColor,
  accentColor,
  logoType = 'text',
  image
}) => {
  return (
    <div 
      className="business-card"
      style={{ 
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {image && (
        <div className="business-card-image">
          <img src={image} alt={title} />
        </div>
      )}
      
      <div className="business-card-content">
        {logoType === 'text' ? (
          <h2 style={{ color: accentColor }}>
            {title}
          </h2>
        ) : (
          <div style={{ color: accentColor }}>
            <span>✦</span>
          </div>
        )}
        
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

const VendorsCarousel = () => {
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  
  const slides = [
    <BusinessCard 
      key="1" 
      title="Sunrise" 
      subtitle="WEDDINGS & EVENTS" 
      bgColor="#000000" 
      textColor="#ffffff" 
      accentColor="#D4AF37" 
    />,
    <BusinessCard 
      key="2" 
      title="Elegance" 
      subtitle="FASHION BOUTIQUE" 
      bgColor="#2C3E50" 
      textColor="#ECF0F1" 
      accentColor="#E74C3C" 
    />,
    <BusinessCard 
      key="3" 
      title="Lumina" 
      subtitle="PHOTOGRAPHY STUDIO" 
      bgColor="#3D5A80" 
      textColor="#E0FBFC" 
      accentColor="#EE6C4D" 
    />,
    <BusinessCard 
      key="4" 
      title="Azure" 
      subtitle="WELLNESS SPA" 
      bgColor="#1A535C" 
      textColor="#F7FFF7" 
      accentColor="#FFE66D" 
    />,
    <BusinessCard 
      key="5" 
      title="Velvet" 
      subtitle="LUXURY INTERIORS" 
      bgColor="#3C1642" 
      textColor="#F2F3AE" 
      accentColor="#DB5461" 
    />,
  ];

  const handleSlideChange = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const handlePrevSlide = useCallback(() => {
    handleSlideChange((activeIndex - 1 + slides.length) % slides.length);
  }, [activeIndex, handleSlideChange, slides.length]);

  const handleNextSlide = useCallback(() => {
    handleSlideChange((activeIndex + 1) % slides.length);
  }, [activeIndex, handleSlideChange, slides.length]);

  const startAutoRotation = useCallback(() => {
    if (!isAutoRotate) return;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      handleNextSlide();
    }, 4000);
  }, [isAutoRotate, handleNextSlide]);

  const pauseAutoRotation = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAutoRotation();
    return () => pauseAutoRotation();
  }, [startAutoRotation, pauseAutoRotation]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') handlePrevSlide();
    else if (e.key === 'ArrowRight') handleNextSlide();
  }, [handlePrevSlide, handleNextSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      distance > 0 ? handleNextSlide() : handlePrevSlide();
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const calculatePosition = (index) => {
    const diff = (index - activeIndex + slides.length) % slides.length;
    return diff > slides.length / 2 ? diff - slides.length : diff;
  };

  const getTransformStyles = (position) => {
    const angle = (360 / slides.length);
    const rotationY = position * angle;
    const radius = 400;
    const theta = (rotationY * Math.PI) / 180;
    const translateX = radius * Math.sin(theta);
    const translateZ = radius * Math.cos(theta) - radius;
    const opacity = Math.cos(theta) * 0.5 + 0.5;
    const scale = Math.cos(theta) * 0.3 + 0.7;
    
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotationY}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: Math.round(opacity * 1000),
    };
  };

  return (
    <div className="vendors-carousel-container">
      <h1>كاروسيل تيست</h1>
      
      <div className="carousel-wrapper">
        <div 
          className="carousel-track"
          onMouseEnter={pauseAutoRotation}
          onMouseLeave={startAutoRotation}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => {
            const position = calculatePosition(index);
            return (
              <div 
                key={index}
                className="carousel-slide"
                style={getTransformStyles(position)}
              >
                {slide}
              </div>
            );
          })}
        </div>
        
        <button className="carousel-nav prev" onClick={handlePrevSlide}>
          <ArrowLeft size={24} />
        </button>
        
        <button className="carousel-nav next" onClick={handleNextSlide}>
          <ArrowRight size={24} />
        </button>
        
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
      
      
      <p className="carousel-description">
        This 3D carousel features smooth transitions, keyboard navigation, 
        auto-rotation, and responsive design.
      </p>
    </div>
  );
};

export default VendorsCarousel;