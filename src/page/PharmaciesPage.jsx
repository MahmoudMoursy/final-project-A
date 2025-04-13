import React, { useState } from 'react';
import { FaStar, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaArrowRight } from 'react-icons/fa';
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
      additionalImages: [
        abdin2,
        abdin3,
        abdin4
      ]
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
      additionalImages: [
        saber1
      ]
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
      additionalImages: [
        ibtsam1
      ]
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
      additionalImages: [
        qlel
      ]
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
      additionalImages: [
        ezaby2,
        ezaby3,
        ezaby4,
      ]
    },
    ];
      
       const renderStars = (rating) => {
          return [...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'}
            />
          ));
        };
         

  return (
    <div className="section-page-container" dir="rtl">
      <div className="section-header ">
        <h1 className="section-main-title " >الصيدليات</h1>
      </div>

      <div className="cards-grid">
        {pharmacies.map(item => (
          <div key={item.id} className="card service-card">
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <div className="rating mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < Math.floor(item.rating) ? 'star-filled' : 'star-empty'}
                  />
                ))}
                <span className="rating-number">{item.rating}</span>
              </div>
              <button 
                className="btn btn-primary"
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
        ))}
      </div>

     {showModal && selectedItem && (
             <div className="modal show d-block" tabIndex="-1">
               <div className="modal-dialog modal-lg">
                 <div className="modal-content">
                   <div className="modal-header">
                     <h5 className="modal-title"  style={{marginRight:"50px"}}>{selectedItem.title}</h5>
                     <button 
                       type="button" 
                       className="btn-close" 
                       style={{marginLeft:"20px"}}
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
            {showModal && (
        <div 
          className="modal-backdrop show" 
          onClick={() => setShowModal(false)}
        ></div>
      )}
    </div>
  );
};

export default PharmaciesPage ;