import React, { useState, useEffect } from 'react';
import { FaStar, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaSearch, FaMedkit } from 'react-icons/fa';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import './supermarketspage.css';

import abdin1 from '../assets/service_imgs/صيدليات/عابدين/abdin1.jpeg';
import abdin2 from '../assets/service_imgs/صيدليات/عابدين/abdin2.jpeg';
import abdin3 from '../assets/service_imgs/صيدليات/عابدين/abdin3.jpeg';
import abdin4 from '../assets/service_imgs/صيدليات/عابدين/abdin4.jpeg';

import ibtsam1 from '../assets/service_imgs/صيدليات/ibtsam1.jpeg';
import qlel from '../assets/service_imgs/صيدليات/qlel.jpeg';
import saber1 from '../assets/service_imgs/صيدليات/saber1.jpeg';

import ezaby1 from '../assets/service_imgs/صيدليات/العزبي/ezaby1.jpeg';
import ezaby2 from '../assets/service_imgs/صيدليات/العزبي/ezaby2.jpeg';
import ezaby3 from '../assets/service_imgs/صيدليات/العزبي/ezaby3.jpeg';
import ezaby4 from '../assets/service_imgs/صيدليات/العزبي/ezaby4.jpeg';

const PharmaciesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const pharmacies = [
    {
      id: 1,
      title: 'صيدلية عابدين',
      image: abdin1,
      description: 'خدمة 24 ساعة - توصيل مجاني',
      rating: 4.8,
      phone: '19036',
      whatsapp: '19036',
      facebook: 'https://www.facebook.com/AbdinPharmaciesOfficial?locale=ar_AR',
      address: ' الكورنيش اسوان',
      additionalImages: [abdin2, abdin3, abdin4],
    },
    {
      id: 2,
      title: 'صيدلية سيد صابر ',
      image: saber1,
      description: 'خدمة 24 ساعة - توصيل مجاني',
      rating: 4.8,
      phone: '01050767676',
      whatsapp: '01050767676',
      facebook: 'https://www.facebook.com/profile.php?id=100082585836170&locale=ar_AR',
      address: 'شارع عباس فريد',
      additionalImages: [saber1],
    },
    {
      id: 3,
      title: 'صيدلية إبتسام بخيت',
      image: ibtsam1,
      description: 'خدمة 24 ساعة - توصيل مجاني',
      rating: 4.8,
      phone: '01281255552',
      whatsapp: '01281255552',
      facebook: 'https://www.facebook.com/dr.ebtesam.pharmcy?locale=ar_AR',
      address: 'السيل برج الحج',
      additionalImages: [ibtsam1],
    },
    {
      id: 4,
      title: 'صيدلية أبو قليل  ',
      image: qlel,
      description: 'خدمة 24 ساعة - توصيل مجاني',
      rating: 4.8,
      phone: '01151428645',
      whatsapp: '01151428645',
      facebook: 'https://www.facebook.com/profile.php?id=100051283927225&locale=ar_AR',
      address: 'طريق الكرور، حي الزهور، امام فرع البنك الاهلي الجديد',
      additionalImages: [qlel],
    },
    {
      id: 5,
      title: 'صيدلية العزبي   ',
      image: ezaby1,
      description: 'خدمة 24 ساعة - توصيل مجاني',
      rating: 4.8,
      phone: '01151428645',
      whatsapp: '01151428645',
      facebook: 'https://www.facebook.com/profile.php?id=100051283927225&locale=ar_AR',
      address: 'طريق الكرور، حي الزهور، امام فرع البنك الاهلي الجديد',
      additionalImages: [ezaby2, ezaby3, ezaby4],
    },
  ];

  const filteredPharmacies = pharmacies.filter((pharmacy) =>
    pharmacy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pharmacy.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar key={index} className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'} />
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
          <h1 className="section-main-title">الصيدليات</h1>
          <p className="text-center text-white-50 mb-3">خدمات صيدلانية متكاملة على مدار الساعة</p>
        </div>

        <div className="search-container my-4 d-flex justify-content-center">
          <input
            type="text"
            placeholder="ابحث عن صيدلية أو عنوان..."
            className="form-control w-75 p-3 rounded-pill shadow-sm text-end"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="cards-grid">
          {filteredPharmacies.length > 0 ? (
            filteredPharmacies.map((item) => (
              <div key={item.id} className="card service-card">
                <div className="position-relative">
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-success rounded-pill">
                      <FaMedkit className="me-1" /> صيدلية
                    </span>
                  </div>
                  {item.description.includes("24") && (
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-danger rounded-pill">
                        24 ساعة
                      </span>
                    </div>
                  )}
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
                  <h5 className="modal-title">
                    {selectedItem.title}
                  </h5>
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
                          <div className="stars">{renderStars(selectedItem.rating)}</div>
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

        {showModal && <div className="modal-backdrop show" onClick={() => setShowModal(false)}></div>}
      </div>
      <Footer />
    </>
  );
};

export default PharmaciesPage;