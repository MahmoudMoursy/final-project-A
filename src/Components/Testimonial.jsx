import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TestimonialStyle.css';
import underline2 from '.././assets/underline2.png';

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
    name: 'سارة جونسون',
    role: 'مديرة التسويق',
    content: 'لقد غير هذا المنتج طريقة عملنا بشكل كامل. الواجهة البديهية جعلت من السهل على فريقنا بأكمله التكيف، وقد شهدنا زيادة بنسبة 40٪ في الإنتاجية منذ التنفيذ.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'محمد شين',
    role: 'مهندس برمجيات',
    content: 'كمطور، أقدر الاهتمام بالتفاصيل ومجموعة الميزات القوية. وثائق واجهة برمجة التطبيقات واضحة، وكان التكامل سلسًا. هذا الآن جزء أساسي من مجموعة التقنيات لدينا.',
    rating: 4,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'عائشة باتيل',
    role: 'مصممة تجربة المستخدم',
    content: 'نظام التصميم رائع حقًا. من النادر العثور على منتج يوازن بين الجماليات والوظائف بشكل جيد. تمكن فريق التصميم لدينا من إنشاء تجارب متسقة عبر جميع منصاتنا.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'داوود ويلسون',
    role: 'مدير مشاريع',
    content: 'لقد عمل هذا الحل على تبسيط عملية إدارة المشروع لدينا بشكل كبير. توفر لوحة المعلومات رؤى في الوقت الفعلي تساعدنا على اتخاذ قرارات مستنيرة بسرعة.',
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
          <h2 className="sections-title">ماذا يقول مستخدمونا</h2>
          {/*  */}
          <div className="mx-auto mb-5">
            <img src={underline2} alt="" style={{ width: '30rem' }} />
          </div>
          {/*  */}
          {/* <p>
            اكتشف كيف ساعد منتجنا المحترفين في مختلف الصناعات 
            على تحويل سير عملهم وتحقيق أهدافهم.
          </p> */}
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
