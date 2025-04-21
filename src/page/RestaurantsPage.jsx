import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

// Import restaurant images
import esmo1 from '../assets/service_imgs/مطاعم/اسمه ايه/esmo1.jpeg';
import esmo2 from '../assets/service_imgs/مطاعم/اسمه ايه/esmo2.jpeg';
import esmo3 from '../assets/service_imgs/مطاعم/اسمه ايه/esmo3.jpeg';
import esmo4 from '../assets/service_imgs/مطاعم/اسمه ايه/esmo4.jpeg';
import esmo5 from '../assets/service_imgs/مطاعم/اسمه ايه/esmo5.jpeg';

import doka1 from '../assets/service_imgs/مطاعم/الدوكة/doka1.jpeg';
import doka2 from '../assets/service_imgs/مطاعم/الدوكة/doka2.jpeg';
import doka3 from '../assets/service_imgs/مطاعم/الدوكة/doka3.jpeg';
import doka4 from '../assets/service_imgs/مطاعم/الدوكة/doka4.jpeg';
import doka5 from '../assets/service_imgs/مطاعم/الدوكة/doka5.jpeg';

import qsr1 from '../assets/service_imgs/مطاعم/قصر الشام/qsr1.jpeg';
import qsr2 from '../assets/service_imgs/مطاعم/قصر الشام/qsr2.jpeg';
import qsr3 from '../assets/service_imgs/مطاعم/قصر الشام/qsr3.jpeg';
import qsr4 from '../assets/service_imgs/مطاعم/قصر الشام/qsr4.jpeg';
import qsr5 from '../assets/service_imgs/مطاعم/قصر الشام/qsr5.jpeg';

import porto1 from '../assets/service_imgs/مطاعم/بورتو سونو/porto1.jpeg';
import porto2 from '../assets/service_imgs/مطاعم/بورتو سونو/porto2.jpeg';
import porto3 from '../assets/service_imgs/مطاعم/بورتو سونو/porto3.jpeg';
import porto4 from '../assets/service_imgs/مطاعم/بورتو سونو/porto4.jpeg';
import porto5 from '../assets/service_imgs/مطاعم/بورتو سونو/porto5.jpeg';

import makany1 from '../assets/service_imgs/مطاعم/مكانى/makany1.jpeg';
import makany2 from '../assets/service_imgs/مطاعم/مكانى/makany2.jpeg';
import makany3 from '../assets/service_imgs/مطاعم/مكانى/makany3.jpeg';
import makany4 from '../assets/service_imgs/مطاعم/مكانى/makany4.jpeg';
import makany5 from '../assets/service_imgs/مطاعم/مكانى/makany5.jpeg';

import kiwi1 from '../assets/service_imgs/مطاعم/كيوى/kiwi1.jpeg';
import kiwi2 from '../assets/service_imgs/مطاعم/كيوى/kiwi2.jpeg';
import kiwi3 from '../assets/service_imgs/مطاعم/كيوى/kiwi3.jpeg';
import kiwi4 from '../assets/service_imgs/مطاعم/كيوى/kiwi4.jpeg';
import kiwi5 from '../assets/service_imgs/مطاعم/كيوى/kiwi5.jpeg';

import havana1 from '../assets/service_imgs/مطاعم/هافانا/havana1.jpeg';
import havana2 from '../assets/service_imgs/مطاعم/هافانا/havana2.jpeg';
import havana3 from '../assets/service_imgs/مطاعم/هافانا/havana3.jpeg';
import havana4 from '../assets/service_imgs/مطاعم/هافانا/havana4.jpeg';
import havana5 from '../assets/service_imgs/مطاعم/هافانا/havana5.jpeg';

function RestaurantsPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mainImage, setMainImage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const restaurants = [
    {
      id: 1,
      title: "مطعم اسمه ايه",
      description: "مطعم متخصص في المأكولات المصرية والشرقية، يقدم أشهى الأطباق بنكهات أصيلة وأجواء عائلية مميزة",
      rating: 4.5,
      category: "مأكولات مصرية",
      phone: "01234567890",
      whatsapp: "201234567890",
      facebook: "https://www.facebook.com/",
      address: "شارع كورنيش النيل، أسوان",
      mainImage: esmo1,
      additionalImages: [esmo1, esmo2, esmo3, esmo4, esmo5]
    },
    {
      id: 2,
      title: "مطعم الدوكة",
      description: "مطعم متخصص في المأكولات النوبية والأسوانية التقليدية، يقدم تجربة طعام فريدة مع إطلالة رائعة على النيل",
      rating: 4.8,
      category: "مأكولات نوبية",
      phone: "01234567891",
      whatsapp: "201234567891",
      facebook: "https://www.facebook.com/",
      address: "شارع السوق، أسوان",
      mainImage: doka1,
      additionalImages: [doka1, doka2, doka3, doka4, doka5]
    },
    {
      id: 3,
      title: "قصر الشام",
      description: "مطعم متخصص في المأكولات الشامية والسورية الأصيلة، يقدم أطباق شهية في أجواء راقية",
      rating: 4.3,
      category: "مأكولات شامية",
      phone: "01234567892",
      whatsapp: "201234567892",
      facebook: "https://www.facebook.com/",
      address: "شارع أبطال التحرير، أسوان",
      mainImage: qsr1,
      additionalImages: [qsr1, qsr2, qsr3, qsr4, qsr5]
    },
    {
      id: 4,
      title: "بورتو سونو",
      description: "مطعم إيطالي يقدم أشهى أطباق المطبخ الإيطالي من البيتزا والمعكرونة والريزوتو في أجواء عصرية",
      rating: 4.6,
      category: "مأكولات إيطالية",
      phone: "01234567893",
      whatsapp: "201234567893",
      facebook: "https://www.facebook.com/",
      address: "شارع المطار، أسوان",
      mainImage: porto1,
      additionalImages: [porto1, porto2, porto3, porto4, porto5]
    },
    {
      id: 5,
      title: "مكاني",
      description: "كافيه ومطعم عصري يقدم مجموعة متنوعة من المشروبات والوجبات الخفيفة والحلويات في أجواء هادئة",
      rating: 4.2,
      category: "كافيه",
      phone: "01234567894",
      whatsapp: "201234567894",
      facebook: "https://www.facebook.com/",
      address: "شارع الكورنيش، أسوان",
      mainImage: makany1,
      additionalImages: [makany1, makany2, makany3, makany4, makany5]
    },
    {
      id: 6,
      title: "كيوي",
      description: "مطعم وكافيه يقدم مزيجًا من المأكولات العالمية والمشروبات المميزة في أجواء عصرية",
      rating: 4.4,
      category: "مأكولات عالمية",
      phone: "01234567895",
      whatsapp: "201234567895",
      facebook: "https://www.facebook.com/",
      address: "شارع صلاح الدين، أسوان",
      mainImage: kiwi1,
      additionalImages: [kiwi1, kiwi2, kiwi3, kiwi4, kiwi5]
    },
    {
      id: 7,
      title: "هافانا",
      description: "مطعم وكافيه يقدم مأكولات بحرية طازجة ومشروبات متنوعة مع إطلالة خلابة على النيل",
      rating: 4.7,
      category: "مأكولات بحرية",
      phone: "01234567896",
      whatsapp: "201234567896",
      facebook: "https://www.facebook.com/",
      address: "كورنيش النيل، أسوان",
      mainImage: havana1,
      additionalImages: [havana1, havana2, havana3, havana4, havana5]
    }
  ];

  const categories = ["الكل", "مأكولات مصرية", "مأكولات نوبية", "مأكولات شامية", "مأكولات إيطالية", "مأكولات عالمية", "مأكولات بحرية", "كافيه"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMainImage(item.mainImage);
    setShowModal(true);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star-filled" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStar key={i} className="star-half" />);
      } else {
        stars.push(<FaStar key={i} className="star-empty" />);
      }
    }
    return stars;
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesCategory = selectedCategory === "الكل" || restaurant.category === selectedCategory;
    const matchesSearch = restaurant.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          restaurant.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <NavBar />
      <div className="container-fluid" style={{ marginTop: "80px", paddingTop: "20px" }}>
        <div className="container" dir="rtl">
          <h1 className="text-center mb-5">المطاعم والكافيهات في أسوان</h1>
          
          {/* Search and Filter */}
          <div className="row mb-4">
            
      <div className="search-container my-4 d-flex justify-content-center">
        <input
          type="text"
          placeholder="ابحث عن صيدلية أو عنوان..."
          className="form-control w-75 p-3 rounded-pill shadow-sm text-end"
          style={{ maxWidth: '600px', fontSize: '1.1rem', border: '1px solid #ddd' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
            <div className="col-md-4">
              <select 
                className="form-select" 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Restaurants Grid */}
          <div className="row">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img 
                    src={restaurant.mainImage} 
                    className="card-img-top" 
                    alt={restaurant.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-end">
                    <h5 className="card-title">{restaurant.title}</h5>
                    <p className="card-text text-muted">{restaurant.category}</p>
                    <p className="card-text">{restaurant.description.substring(0, 100)}...</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="stars">
                        {renderStars(restaurant.rating)}
                        <span className="ms-2">{restaurant.rating}</span>
                      </div>
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleItemClick(restaurant)}
                      >
                        عرض التفاصيل
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Restaurant Details */}
      {showModal && selectedItem && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ marginRight: "50px" }}>{selectedItem.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  style={{ marginLeft: "20px" }}
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="main-image-container">
                      <img
                        src={mainImage}
                        alt={selectedItem.title}
                        className="main-image"
                      />
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
                        <span className="rating-number">
                          {selectedItem.rating} / 5
                        </span>
                      </div>

                      <div className="contact-info">
                        <div className="contact-item">
                          <FaPhone className="icon" />
                          <span>{selectedItem.phone}</span>
                        </div>
                        <div className="contact-item">
                          <FaWhatsapp className="icon" />
                          <a
                            href={`https://wa.me/${selectedItem.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            واتساب
                          </a>
                        </div>
                        <div className="contact-item">
                          <FaFacebook className="icon" />
                          <a
                            href={selectedItem.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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

      {/* Backdrop */}
      {showModal && (
        <div
          className="modal-backdrop show"
          onClick={() => setShowModal(false)}
        ></div>
      )}

      <Footer />
    </>
  );
}

export default RestaurantsPage;