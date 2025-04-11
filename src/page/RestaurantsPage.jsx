import React, { useState } from 'react';
import { FaStar, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaArrowRight } from 'react-icons/fa';
import './sections.css';

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

import rkn1 from '../assets/service_imgs/مطاعم/الركن/rkn1.jpeg';
import rkn2 from '../assets/service_imgs/مطاعم/الركن/rkn2.jpeg';
import rkn3 from '../assets/service_imgs/مطاعم/الركن/rkn3.jpeg';

import wensh1 from '../assets/service_imgs/مطاعم/الونش/wensh1.jpeg';
import wensh2 from '../assets/service_imgs/مطاعم/الونش/wensh2.jpeg';
import wensh3 from '../assets/service_imgs/مطاعم/الونش/wensh3.jpeg';
import wensh4 from '../assets/service_imgs/مطاعم/الونش/wensh4.jpeg';
import wensh5 from '../assets/service_imgs/مطاعم/الونش/wensh5.jpeg';
 



const RestaurantsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mainImage, setMainImage] = useState('');

  const restaurants = [

    {
      id: 1,
      title: 'مطعم إسمه إيه',
      image: esmo1,
      description: 'بيتزا وحلواني إسمه إيه',
      rating: 4.5,
      phone: '01115542476',
      whatsapp: '01070027906',
      facebook: 'https://www.facebook.com/profile.php?id=100064650828366',
      address: 'شارع أبطال التحرير أمام مبنى المحافظة',
      additionalImages: [
        esmo2,
        esmo3,
        esmo4,
        esmo5
      ]
    },
    {
      id: 2,
      title: 'مطعم الدوكة',
      image: doka1,
      description: 'مطعم الدوكة لأشهى المأكولات',
      rating: 4.2,
      phone: '01029437886',
      whatsapp: '01029437886',
      facebook: 'https://www.facebook.com/eldokka.egy',
      address: 'Eissa island - in front Telecom Egypt',
      additionalImages: [
        doka2,
        doka3,
        doka4,
        doka5
      ]
    },
    {
      id: 3,
      title: 'مطعم قصر الشام',
      image: qsr1,
      description: 'مطعم قصر الشام للمأكولات السورية ',
      rating: 4.5,
      phone: '01144666399 ',
      whatsapp: '01152695993',
      facebook: 'https://www.facebook.com/QasrElshamRestaurant',
      address: 'شارع المطار ',
      additionalImages: [
        qsr2,
        qsr3,
        qsr4,
        qsr5
      ]
    }, {
      id: 4,
      title: 'مطعم برتو سونو',
      image: porto1,
      description: ' كورنيش النيل - بجوار موقف الأقاليم',
      rating: 4.5,
      phone: ' 01116114406',
      whatsapp: ' 01116114406',
      facebook: 'https://www.facebook.com/Portosono',
      address: 'شارع كورنيش النيل، أسوان',
      additionalImages: [
        porto2,
        porto3,
        porto4,
        porto5
      ]
    }, {
      id: 5,
      title: 'مطعم مكاني',
      image: makany1,
      description: 'HEALTHY AFRICAN FOOD',
      rating: 4.5,
      phone: '01123320133',
      whatsapp: '01123320133',
      facebook: 'https://www.facebook.com/MakaniAswanFb',
      address: 'كورنيش النيل بجوار نادي القضاه',
      additionalImages: [
        makany2,
        makany3,
        makany4,
        makany5
      ]
    },
    {
      id: 6,
      title: 'مطعم كيوي',
      image: kiwi1,
      description: '  محل حلويات',
      rating: 4.5,
      phone: '01114411439',
      whatsapp: '01114411439',
      facebook: 'https://www.facebook.com/Kiwi.Aswan',
      address: 'مول أسوان بلازا الدور الثاني',
      additionalImages: [
        kiwi2,
        kiwi3,
        kiwi4,
        kiwi5
      ]
    },
    {
      id: 7,
      title: 'Havana Café',
      image: havana1,
      description: 'مطعم وكافية هافانا ',
      rating: 4.5,
      phone: '01151160117',
      whatsapp: '01151160117',
      facebook: 'https://www.facebook.com/Aswanhavanacafe',
      address: 'El Kournish, Aswan',
      additionalImages: [
        havana2,
        havana3,
        havana4,
        havana5
      ]
    },
      {
        id: 8,
        title: 'الركن الدمشقي',
        image: rkn1,
        description: 'للأكل الشامى',
        rating: 4.5,
        phone: '01234567890',
        whatsapp: '01234567890',
        facebook: 'https://facebook.com/nilrestaurant',
        address: 'شارع كورنيش النيل، أسوان',
        additionalImages: [
          rkn2,
          rkn3,
          'https://images.unsplash.com/photo-1559339352-11d035aa65de',
          'https://images.unsplash.com/photo-1544025162-d76694265947'
        ]
      },
      {
        id: 9,
        title: 'الونش',
        image: wensh1,
        description: 'للمأكولات السريعة ',
        rating: 4.5,
        phone: '01234567890',
        whatsapp: '01234567890',
        facebook: 'https://facebook.com/nilrestaurant',
        address: 'شارع كورنيش النيل، أسوان',
        additionalImages: [
          wensh2,
          wensh3,
          wensh4,
          wensh5
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
        <h1 className="section-main-title " >المطاعم والكافيهات</h1>
      </div>

      <div className="cards-grid">
        {restaurants.map(item => (
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

export default RestaurantsPage;