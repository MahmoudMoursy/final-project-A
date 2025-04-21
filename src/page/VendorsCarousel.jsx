import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import './VendorsCarousel.css';
import underline2 from '../assets/underline2.png';

const BusinessCard = ({
  title,
  subtitle,
  bgColor,
  bgImg,
  textColor,
  accentColor,
  logoType = 'text',
  image
}) => {
  return (
    <div
      className="business-card"
      style={{
        backgroundColor: bgImg ? 'transparent' : bgColor,
        backgroundImage: bgImg ? `url(${bgImg})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: textColor,
        position: 'relative',
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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const intervalRef = useRef(null);
  const carouselTrackRef = useRef(null);

  const slides = [
    <BusinessCard
      key="1"
      title="Sunrise"
      subtitle="WEDDINGS & EVENTS"
      bgImg="https://marasim.bsite.net//81855265-a80c-4d47-9258-fd09b3271c23/ProfilePicture/638378048056128663.jpg"
      textColor="#ffffff"
      accentColor="#D4AF37"
    />,
    <BusinessCard
      key="2"
      title="Elegance"
      subtitle="FASHION BOUTIQUE"
      bgImg="https://marasim.bsite.net//68c87e83-0ee0-4f45-8028-56a90aa13c14/ProfilePicture/638378046640415174.webp"
      textColor="#ECF0F1"
      accentColor="#E74C3C"
    />,
    <BusinessCard
      key="3"
      title="Lumina"
      subtitle="PHOTOGRAPHY STUDIO"
      bgImg="https://marasim.bsite.net//fb05ba5e-84af-48b8-9c84-e4164d875873/ProfilePicture/638378047550450315.jpg"
      textColor="#E0FBFC"
      accentColor="#EE6C4D"
    />,
    <BusinessCard
      key="4"
      title="Azure"
      subtitle="WELLNESS SPA"
      bgImg="https://marasim.bsite.net//5332ba1f-4376-4726-ba86-713a96039c4f/ProfilePicture/638378037904313295.jpg"
      textColor="#F7FFF7"
      accentColor="#FFE66D"
    />,
    <BusinessCard
      key="5"
      title="Velvet"
      subtitle="LUXURY INTERIORS"
      bgImg="https://marasim.bsite.net//968499e6-b2e2-42ba-9c0c-4995066eba23/ProfilePicture/638378059560209246.jpg"
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
    pauseAutoRotation();
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
    startAutoRotation();
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDistance(0);
    pauseAutoRotation();

    // Change cursor style
    if (carouselTrackRef.current) {
      carouselTrackRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const distance = dragStartX - currentX;
    setDragDistance(distance);

    // Optional: Add visual feedback during dragging
    // This could be a slight rotation or movement of the carousel
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    if (Math.abs(dragDistance) > 50) {
      dragDistance > 0 ? handleNextSlide() : handlePrevSlide();
    }

    setIsDragging(false);
    startAutoRotation();

    // Reset cursor style
    if (carouselTrackRef.current) {
      carouselTrackRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
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
      <h2 className="sections-title ms-3 mb-2 text-center">مقدمو الخدمة الأكثر طلباً</h2>
      <div className="mx-auto text-center">
        <img src={underline2} alt="" style={{ width: '30rem' }} />
      </div>

      <div className="carousel-wrapper">
        <div
          ref={carouselTrackRef}
          className="carousel-track"
          onMouseEnter={pauseAutoRotation}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
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


      <p className="carousel-description text-white">
        This 3D carousel features smooth transitions, keyboard navigation,
        auto-rotation, and responsive design.
      </p>
    </div>
  );
};

export default VendorsCarousel;