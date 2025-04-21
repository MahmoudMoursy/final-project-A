import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaStar} from 'react-icons/fa';
import './Services.css';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { NavLink } from 'react-router-dom';
import AddServiceForm from './AddServiceForm';
import '@fortawesome/fontawesome-free/css/all.min.css';


import esmo1 from '../assets/service_imgs/مطاعم/اسمه ايه/esmo1.jpeg';
import doka1 from '../assets/service_imgs/مطاعم/الدوكة/doka1.jpeg';
import qsr1 from '../assets/service_imgs/مطاعم/قصر الشام/qsr1.jpeg';
import porto1 from '../assets/service_imgs/مطاعم/بورتو سونو/porto1.jpeg';
import makany1 from '../assets/service_imgs/مطاعم/مكانى/makany1.jpeg';
import kiwi1 from '../assets/service_imgs/مطاعم/كيوى/kiwi1.jpeg';
import havana1 from '../assets/service_imgs/مطاعم/هافانا/havana1.jpeg';
import abdin1 from '../assets/service_imgs/صيدليات/عابدين/abdin1.jpeg';
import ibtsam1 from '../assets/service_imgs/صيدليات/ibtsam1.jpeg';
import qlel from '../assets/service_imgs/صيدليات/qlel.jpeg';
import saber1 from '../assets/service_imgs/صيدليات/saber1.jpeg';
import raya1 from '../assets/service_imgs/سوبر ماركت/الراية/raya1.jpeg';
import carfor1 from '../assets/service_imgs/سوبر ماركت/كارفور/carfor1.jpeg';
import safa1 from '../assets/service_imgs/سوبر ماركت/الصفا ماركت/safa1.jpeg';
import wardny1 from '../assets/service_imgs/سوبر ماركت/الوردانى/wardny1.jpeg';
import kher1 from '../assets/service_imgs/سوبر ماركت/خير زمان/kher1.jpeg';



const Services = () => {
  
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
        image: esmo1,
        
      },
      {
        id: 2,
        image: doka1,
       
      },
      {
        id: 3,
        image: qsr1,
       
      }, {
        id: 4,
        image: porto1,
       
      }, {
        id: 5,
        image: makany1,
       
      },
      {
        id: 6,
        image: kiwi1,
       
      },
      {
        id: 7,
        image: havana1,
        
      },
    ],
    pharmacies: [
      {
        id: 1,
        image: abdin1,
        
      },
      {
        id: 2,
        image: saber1,
       
      },
      {
        id: 3,
        image: ibtsam1,
       
      },
      {
        id: 4,
        image: qlel,
       
      },
    ],
    doctors: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7',
       
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
       
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
       
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
       
      },

    ],
    supermarkets: [
      {
        id: 1,
       
        image: raya1,
       
      },
      {
        id: 2,
       
        image: carfor1,
       
      },
      {
        id: 3,
       
        image: safa1,
        
      },
      {
        id: 4,
      
        image: wardny1,
        
      },
      {
        id: 5,
        image: kher1,
      }
    ]


  };

  

  

  const renderServiceCard = (item) => (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px', 
        justifyContent: 'center', 
    }}>
        <img 
            src={item.image} 
            alt={item.title} 
            style={{
                width: '360px',
                height: '350px',
                objectFit: 'cover', 
                borderRadius: '10px', 
            }} 
        />
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
          <h2 style={{textAlign:"center" ,fontWeight:"bolder"}}><NavLink to="/RestaurantsPage" style={{ textDecoration: 'none', color: 'white'  }}>المطاعم والكافيهات</NavLink></h2>
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
          <div className="d-flex justify-content-end">
            <NavLink
              to="/RestaurantsPage"
              className="btn custom-gradient-button d-inline-flex align-items-center gap-2 px-5 py-3 shadow-lg text-decoration-none"
              style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: '35px',
                borderBottomRightRadius: '35px'
              }}
            >
              <i className="fas fa-plus fa-lg"></i>
              <span className="fw-semibold">اعرف اكثر</span>
            </NavLink>
          </div>



        </section>

        <section className="service-section mb-5">
          <h2 style={{textAlign:"center" ,fontWeight:"bolder"}}><NavLink to="/PharmaciesPage" style={{ textDecoration: 'none', color: 'white' }}>الصيدليات</NavLink></h2>
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
          <div className="d-flex justify-content-end">
            <NavLink
              to="/PharmaciesPage"
              className="btn custom-gradient-button d-inline-flex align-items-center gap-2 px-5 py-3 shadow-lg text-decoration-none"
              style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: '35px',
                borderBottomRightRadius: '35px'
              }}
            >
              <i className="fas fa-plus fa-lg"></i>
              <span className="fw-semibold">اعرف اكثر</span>
            </NavLink>
          </div>



        </section>

        <section className="service-section mb-5">
          <h1 style={{textAlign:"center" ,fontWeight:"bolder"}}><NavLink to="/DoctorsPage" style={{ textDecoration: 'none', color: 'white'  }}>الأطباء</NavLink></h1>
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

          <div className="d-flex justify-content-end">
            <NavLink
              to="/DoctorsPage"
              className="btn custom-gradient-button d-inline-flex align-items-center gap-2 px-5 py-3 shadow-lg text-decoration-none"
              style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: '35px',
                borderBottomRightRadius: '35px'
              }}
            >
              <i className="fas fa-plus fa-lg"></i>
              <span className="fw-semibold">اعرف اكثر</span>
            </NavLink>
          </div>



        </section>


        <section className="service-section mb-5">
          <h2 style={{textAlign:"center" ,fontWeight:"bolder"}}><NavLink to="/SupermarketsPage" style={{ textDecoration: 'none', color: 'white' }}>السوبر ماركت</NavLink></h2>
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
          <div className="d-flex justify-content-end">
            <NavLink
              to="/SupermarketsPage"
              className="btn custom-gradient-button d-inline-flex align-items-center gap-2 px-5 py-3 shadow-lg text-decoration-none"
              style={{
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: '35px',
                borderBottomRightRadius: '35px'
              }}
            >
              <i className="fas fa-plus fa-lg"></i>
              <span className="fw-semibold">اعرف اكثر</span>
            </NavLink>
          </div>



        </section>

      
     

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
