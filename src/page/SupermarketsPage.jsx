import React, { useState, useEffect } from 'react';
import { FaStar, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaArrowRight, FaSearch, FaShoppingCart } from 'react-icons/fa';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import './supermarketspage.css';

import raya1 from '../assets/service_imgs/سوبر ماركت/الراية/raya1.jpeg';
import raya2 from '../assets/service_imgs/سوبر ماركت/الراية/raya2.jpeg';
import raya3 from '../assets/service_imgs/سوبر ماركت/الراية/raya3.jpeg';
import raya4 from '../assets/service_imgs/سوبر ماركت/الراية/raya4.jpeg';
import raya5 from '../assets/service_imgs/سوبر ماركت/الراية/raya5.jpeg';

import carfor1 from '../assets/service_imgs/سوبر ماركت/كارفور/carfor1.jpeg';
import carfor2 from '../assets/service_imgs/سوبر ماركت/كارفور/carfor2.jpeg';
import carfor3 from '../assets/service_imgs/سوبر ماركت/كارفور/carfor3.jpeg';
import carfor4 from '../assets/service_imgs/سوبر ماركت/كارفور/carfor4.jpeg';
import carfor5 from '../assets/service_imgs/سوبر ماركت/كارفور/carfor5.jpeg';

import safa1 from '../assets/service_imgs/سوبر ماركت/الصفا ماركت/safa1.jpeg';
import safa2 from '../assets/service_imgs/سوبر ماركت/الصفا ماركت/safa2.jpeg';
import safa3 from '../assets/service_imgs/سوبر ماركت/الصفا ماركت/safa3.jpeg';
import safa4 from '../assets/service_imgs/سوبر ماركت/الصفا ماركت/safa4.jpeg';
import safa5 from '../assets/service_imgs/سوبر ماركت/الصفا ماركت/safa5.jpeg';

import wardny1 from '../assets/service_imgs/سوبر ماركت/الوردانى/wardny1.jpeg';
import wardny2 from '../assets/service_imgs/سوبر ماركت/الوردانى/wardny2.jpeg';

import kher1 from '../assets/service_imgs/سوبر ماركت/خير زمان/kher1.jpeg';
import kher2 from '../assets/service_imgs/سوبر ماركت/خير زمان/kher2.jpeg';
import kher3 from '../assets/service_imgs/سوبر ماركت/خير زمان/kher3.jpeg';
import kher4 from '../assets/service_imgs/سوبر ماركت/خير زمان/kher4.jpeg';

const SupermarketsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const supermarkets = [
    {
      id: 1,
      title: 'سوبر ماركت الراية',
      image: raya1,
      description: 'جميع احتياجاتك اليومية بأفضل الأسعار ',
      rating: 4.7,
      phone: '16508',
      whatsapp: '01003116508',
      facebook: 'https://facebook.com/ahrammarket',
      address: 'الكورنيش ',
      additionalImages: [raya2, raya3, raya4, raya5]
    },
    {
      id: 2,
      title: 'سوبر ماركت كارفور',
      image: carfor1,
      description: 'منتجات طازجة يومياً - عروض وخصومات أسبوعية',
      rating: 4.6,
      phone: '01234567895',
      whatsapp: '01234567895',
      facebook: 'https://www.facebook.com/profile.php?id=61572669683671',
      address: 'شارع الفنادق، أمام فندق أولد كتراكت.',
      additionalImages: [carfor2, carfor3, carfor4, carfor5]
    },
    {
      id: 3,
      title: 'سوبر ماركت الصفا',
      image: safa1,
      description: 'منتجات محلية وعالمية - أسعار منافسة',
      rating: 4.5,
      phone: '01234567896',
      whatsapp: '01234567896',
      facebook: 'https://www.facebook.com/profile.php?id=100063958424261',
      address: 'الرضوان',
      additionalImages: [safa2, safa3, safa4, safa5]
    },
    {
      id: 4,
      title: 'سوبر ماركت الورداني',
      image: wardny1,
      description: 'تشكيلة واسعة من المنتجات - خدمة 24 ساعة',
      rating: 4.4,
      phone: '01222970744',
      whatsapp: '01222970744',
      facebook: 'https://www.facebook.com/profile.php?id=100063954844223',
      address: 'أمام مبني المحافظة',
      additionalImages: [
        wardny2,
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58',
        'https://images.unsplash.com/photo-1542838132-92c53300491e',
        'https://images.unsplash.com/photo-1534723452862-4c874018d66d'
      ]
    },
    {
      id: 5,
      title: 'سوبر ماركت خير زمان',
      image: kher1,
      description: 'تشكيلة واسعة من المنتجات - خدمة 24 ساعة',
      rating: 4.4,
      phone: '01222970744',
      whatsapp: '01222970744',
      facebook: 'https://www.facebook.com/profile.php?id=61569073838882',
      address: 'كسر الحجر ، الاشارة ، مطلع الشهر العقارى امام المخبز البلدي',
      additionalImages: [kher2, kher3, kher4]
    }
  ];

  const filteredSupermarkets = supermarkets.filter((market) =>
    market.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    market.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="section-page-container" dir="rtl">
        <div className="section-header">
          <h1 className="section-main-title">السوبر ماركت</h1>
        </div>

        <div className="search-container my-4 d-flex justify-content-center">
          <input
            type="text"
            placeholder="ابحث عن سوبرماركت أو عنوان..."
            className="form-control w-75 p-3 rounded-pill shadow-sm text-end"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="cards-grid">
          {filteredSupermarkets.length > 0 ? (
            filteredSupermarkets.map(item => (
              <div key={item.id} className="card service-card">
                <div className="position-relative">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-primary rounded-pill">
                      <FaShoppingCart className="me-1" /> سوبر ماركت
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="rating mb-2">
                    {renderStars(item.rating)}
                    <span className="rating-number">{item.rating}</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <FaMapMarkerAlt className="text-muted me-2" />
                    <small className="text-muted">{item.address}</small>
                  </div>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => {
                      setSelectedItem(item);
                      setMainImage(item.image);
                      setShowModal(true);
                    }}
                  >
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results-container text-center py-5">
              <div className="no-results-icon mb-3">
                <FaSearch style={{ fontSize: '3rem', opacity: '0.3' }} />
              </div>
              <h3 className="text-white mb-2">لا توجد نتائج مطابقة</h3>
              <p className="text-white-50">يرجى تغيير معايير البحث</p>
            </div>
          )}
        </div>

        {showModal && selectedItem && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedItem.title}</h5>
                  <button
                    type="button"
                    className="btn-close text-white"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="main-image-container">
                        <img src={mainImage} alt={selectedItem.title} className="main-image" />
                      </div>
                      <div className="thumbnail-container">
                        {selectedItem.additionalImages.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`${selectedItem.title} ${index + 1}`}
                            className="thumbnail-image"
                            onClick={() => setMainImage(img)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="place-details">
                        <h4>{selectedItem.title}</h4>
                        <p className="description">{selectedItem.description}</p>
                        <div className="rating mb-3">
                          <div className="stars">
                            {renderStars(selectedItem.rating)}
                          </div>
                          <span className="rating-number">{selectedItem.rating} / 5</span>
                        </div>
                        <div className="contact-info">
                          <div className="contact-item">
                            <FaPhone className="icon" />
                            <span>{selectedItem.phone}</span>
                          </div>
                          <div className="contact-item">
                            <FaWhatsapp className="icon" />
                            <a href={`https://wa.me/${selectedItem.whatsapp}`} target="_blank" rel="noopener noreferrer">
                              واتساب
                            </a>
                          </div>
                          <div className="contact-item">
                            <FaFacebook className="icon" />
                            <a href={selectedItem.facebook} target="_blank" rel="noopener noreferrer">
                              فيسبوك
                            </a>
                          </div>
                          <div className="contact-item">
                            <FaMapMarkerAlt className="icon" />
                            <span>{selectedItem.address}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showModal && (
          <div className="modal-backdrop show" onClick={() => setShowModal(false)}></div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SupermarketsPage;