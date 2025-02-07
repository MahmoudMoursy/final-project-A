import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import img2 from '../assets/img2.jpeg';
import img6 from '../assets/img6.jpeg';

function CardSlider() {
  const cards = [
    { id: 1, img: img6, title: 'Welcome to Aswan Services', text: 'We help you know everything about Aswan.' },
    { id: 2, img: img2, title: 'Trust Us', text: 'We will help you find all possible solutions.' },
    { id: 3, img: img6, title: 'Explore Aswan', text: 'Discover the best places to visit in Aswan.' },
    { id: 4, img: img2, title: 'Easy Booking', text: 'Book services easily with our platform.' },
    { id: 5, img: img6, title: '24/7 Support', text: 'We are available anytime to assist you.' },
    { id: 6, img: img2, title: 'Affordable Prices', text: 'Find the best deals at the lowest prices.' },
    { id: 7, img: img6, title: 'places to live', text: 'We provide you with the best places to live in various governorates as soon as possible' },
    { id: 8, img: img2, title: 'restaurants and cafes ', text: 'We are working to provide all restaurants and cafes in the province' }
  ];

  return (
    <Swiper 
      navigation={true} 
      modules={[Navigation, Autoplay]}
      slidesPerView="auto"
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      spaceBetween={20} 
      className="mySwiper"
      style={{ padding: '10px' }} 
    >
      {cards.map(card => (
        <SwiperSlide key={card.id} style={{ width: '500px' }} className='me-5'> 
          <div className="card text-center shadow-lg border-0" style={{ maxWidth: '500px', margin: 'auto' }}>
            <img src={card.img} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h5 className="card-title fw-bold">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href="#contact" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardSlider;
