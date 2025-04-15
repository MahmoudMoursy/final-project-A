import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaStar, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import './Services.css';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { NavLink } from 'react-router-dom';
import AddServiceForm from './AddServiceForm';

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

import abdin1 from '../assets/service_imgs/صيدليات/عابدين/abdin1.jpeg';
import abdin2 from '../assets/service_imgs/صيدليات/عابدين/abdin2.jpeg';
import abdin3 from '../assets/service_imgs/صيدليات/عابدين/abdin3.jpeg';
import abdin4 from '../assets/service_imgs/صيدليات/عابدين/abdin4.jpeg';

import ibtsam1 from '../assets/service_imgs/صيدليات/ibtsam1.jpeg';
import qlel from '../assets/service_imgs/صيدليات/qlel.jpeg';
import saber1 from '../assets/service_imgs/صيدليات/saber1.jpeg';

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







const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const services = {
    restaurants: [
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
        description: 'Café',
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
    ],
    pharmacies: [
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
    ],
    doctors: [
      {
        id: 1,
        title: 'د. وائل طه',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
        description: 'جراحة العظام والمفاصل ',
        rating: 4.9,
        phone: '01234567893',
        whatsapp: '01234567893',
        facebook: 'https://facebook.com/dr.ahmed',
        address: 'السيل أمام المستشفى العام',
        additionalImages: [
          'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
          'https://images.unsplash.com/photo-1516549655169-df83a0774514'
        ]
      },
      {
        id: 2,
        title: 'د. فاطمة فوزي محمد',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        description: 'د. أخصائية طب الاطفال ',
        rating: 4.9,
        phone: '01234567893',
        whatsapp: '01234567893',
        facebook: 'https://facebook.com/dr.ahmed',
        address: 'شارع  الشواربي',
        additionalImages: [
          'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
          'https://images.unsplash.com/photo-1516549655169-df83a0774514'
        ]
      },
      {
        id: 3,
        title: 'د. أحمد محمد قناوي',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
        description: 'أخصائي نساء وتوليد',
        rating: 4.9,
        phone: '01234567893',
        whatsapp: '01234567893',
        facebook: 'https://facebook.com/dr.ahmed',
        address: 'ميدان الصالحين أمام الضراب. مواعيد العمل: من الساعة 2:30 مساءً. الإجازة: الجمعة. سعر الكشف: 250 جنيهًا.',
        additionalImages: [
          'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
          'https://images.unsplash.com/photo-1516549655169-df83a0774514'
        ]
      },
      {
        id: 4,
        title: 'د. إلهام صلاح',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
        description: 'أخصائية أمراض الجهاز الهضمي وعسر الهضم .',
        rating: 4.9,
        phone: '01234567893',
        whatsapp: '01234567893',
        facebook: 'https://facebook.com/dr.ahmed',
        address: 'عيادة القدس للجراحة والمناظير',
        additionalImages: [
          'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
          'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
          'https://images.unsplash.com/photo-1516549655169-df83a0774514'
        ]
      },

    ],
    supermarkets: [
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
        additionalImages: [
          raya2,
          raya3,
          raya4,
          raya5
        ]
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
        additionalImages: [
          carfor2,
          carfor3,
          carfor4,
          carfor5
        ]
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
        additionalImages: [
          safa2,
          safa3,
          safa4,
          safa5
        ]
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
          'https://images.unsplash.com/photo-1542838132-92c874018d66e',
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
        additionalImages: [
          kher2,
          kher3,
          kher4,
        ]
      }
    ]


  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMainImage(item.image);
    setShowModal(true);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  const renderServiceCard = (item) => (
    <div key={item.id} className="card service-card">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => handleItemClick(item)}
        >
          عرض التفاصيل
        </button>
      </div>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="services-container" dir="rtl">
        <section className="service-section mb-5">
          <button 
            className="btn btn-primary" 
            onClick={() => setShowAddServiceModal(true)}
          >
            إضافة خدمة جديدة
          </button>
          <h2 className="section-title"><NavLink to="/RestaurantsPage" style={{ textDecoration: 'none', color: 'inherit' }}>المطاعم والكافيهات</NavLink></h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {services.restaurants.map(item => renderServiceCard(item))}
          </Carousel>
        </section>

        <section className="service-section mb-5">
          <h2 className="section-title"><NavLink to="/PharmaciesPage" style={{ textDecoration: 'none', color: 'inherit' }}>الصيدليات</NavLink></h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {services.pharmacies.map(item => renderServiceCard(item))}
          </Carousel>
        </section>

        <section className="service-section mb-5">
          <h2 className="section-title"><NavLink to="/DoctorsPage" style={{ textDecoration: 'none', color: 'inherit' }}>الأطباء</NavLink></h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {services.doctors.map(item => renderServiceCard(item))}
          </Carousel>
        </section>


        <section className="service-section mb-5">
          <h2 className="section-title"><NavLink to="/SupermarketsPage" style={{ textDecoration: 'none', color: 'inherit' }}>السوبر ماركت</NavLink></h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            partialVisible={true}
          >
            {services.supermarkets.map(item => renderServiceCard(item))}
          </Carousel>
        </section>

        {/* Modal */}
        {showModal && selectedItem && (
          <div className="modal show d-block" tabIndex="-1">
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

        {/* Add Service Modal */}
        {showAddServiceModal && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" style={{ marginRight: "50px" }}>إضافة خدمة جديدة</h5>
                  <button
                    type="button"
                    className="btn-close"
                    style={{ marginLeft: "20px" }}
                    onClick={() => setShowAddServiceModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <AddServiceForm />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Service Modal Backdrop */}
        {showAddServiceModal && (
          <div
            className="modal-backdrop show"
            onClick={() => setShowAddServiceModal(false)}
          ></div>
        )}

      </div>
      <Footer />

    </>
  );
};

export default Services;
