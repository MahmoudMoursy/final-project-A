import { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Haeder from '../Components/Haeder';
import aswulogo2 from '../assets/aswulogo2.png';
import ColoredLogo from '../assets/ColoredLogo.svg';
import user from '../assets/user.jpg';
import contactImg from '../assets/contact.svg';
import CardSlider from '../Components/CardSlider';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import { useStore } from '../store';
import { useStore } from 'zustand';
//abdalla 
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentUser } from '../Redux/CurrentUser';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// SwiperJS imports for vendor carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './VendorCarousel.css';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

// Vendor data for the carousel
const vendors = [
  {
    img: "https://marasim.bsite.net//81855265-a80c-4d47-9258-fd09b3271c23/ProfilePicture/638378048056128663.jpg",
    title: "Meko Safwat Photography",
    desc: "Meko Safwat Photogra..."
  },
  {
    img: "https://marasim.bsite.net//68c87e83-0ee0-4f45-8028-56a90aa13c14/ProfilePicture/638378046640415174.webp",
    title: "قاعة السرايا",
    desc: "ارقي القاعات الاسلام..."
  },
  {
    img: "https://marasim.bsite.net//fb05ba5e-84af-48b8-9c84-e4164d875873/ProfilePicture/638378047550450315.jpg",
    title: "جراند صالون",
    desc: "جراند صالون للرجال..."
  },
  {
    img: "https://marasim.bsite.net//5332ba1f-4376-4726-ba86-713a96039c4f/ProfilePicture/638378037904313295.jpg",
    title: "قاعة صن رايز اسوان",
    desc: "SunRise widding hall"
  },
  {
    img: "https://marasim.bsite.net//968499e6-b2e2-42ba-9c0c-4995066eba23/ProfilePicture/638378059560209246.jpg",
    title: "Makeup by Donia Mamdouh",
    desc: "All my brides are so..."
  }
];

function Home() {
  const nav = useNavigate()
  const user= JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch()
  // dispatch(setCurrentUser(user));
  
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    // const { count, inc } = useStore()
    
      //abdalla 
    if(!user){
      nav("/Profileform")
    }
    
  }, []);
//  const cUser = useSelector(state => state.currentUser.value) 
//  console.log(cUser);  



  return (
    <div className="home-page">
      <NavBar />
      <Haeder />
      
      {/* Main Content Container - 80% width */}
      <div className="main-content-wrapper">
        <div className="main-content-container" id="products" data-aos="fade-up">
          <div className="py-5">
            <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
              <h1 className="mb-0 main-title">Our Main Services</h1>
            </div>
          </div>
          <CardSlider />
        </div>

        <section className="py-5 bg-light rounded text-center service-section" data-aos="fade-up">
          <h2 className="fw-bold mb-3 service-title">خدمة توفير السكن</h2>
          <p className="mb-4 text-muted fw-bold fs-2 service-description">
            نوفر لك السكن الطلابي المثالي بالقرب من جامعتك، مع بيئة مريحة وآمنة تساعدك على التركيز في دراستك.
            اختر من بين خيارات متعددة تناسب ميزانيتك، سواء كنت تبحث عن غرفة فردية أو سكن مشترك.
            استمتع بخدمات متكاملة تشمل الإنترنت، الصيانة، والأمان على مدار الساعة.
          </p>
          <a href="#contact" className="btn btn-primary py-md-3 px-md-5 ms-3 custom-btn">ابحث</a>
        </section>

        <section className="py-5 rounded text-center partners-section" data-aos="fade-up">
          <h2 className="fw-bold mb-3 partners-title">شركاؤنا</h2>
          <div className="d-flex justify-content-center gap-5">
            <img src={ColoredLogo} alt="Colored Logo" className="mx-5 partner-logo" />
            <img src={aswulogo2} alt="ASWU Logo" className="w-25 mx-5 partner-logo" />
          </div>
        </section>

        <section id="faq" className="py-5 faq-section" data-aos="fade-up">
          <h2 className="text-center mb-4 faq-title">Frequently Asked Questions</h2>
          <div className="accordion custom-accordion" id="faqAccordion">
            {[
              { id: 'faq1', question: 'How can I contact customer support?', answer: 'You can contact us via email or our hotline available 24/7.' },
              { id: 'faq2', question: 'What services do you provide?', answer: 'We provide student housing, transportation, and location-based assistance.' },
              { id: 'faq3', question: 'How can I book a service?', answer: 'You can book a service through our website or contact our support team.' },
              { id: 'faq4', question: 'What payment methods do you accept?', answer: 'We accept credit cards, bank transfers, and mobile payments.' }
            ].map((item) => (
              <div className="accordion-item" key={item.id} data-aos="fade-up">
                <h2 className="accordion-header" id={item.id}>
                  <button className="accordion-button custom-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}-collapse`}>
                    {item.question}
                  </button>
                </h2>
                <div id={`${item.id}-collapse`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-5 rounded text-center testimonials-section" data-aos="fade-up">
          <h2 className="fw-bold mb-3 testimonials-title">أراء المستخدمين</h2>
          <div className="testimonial-carousel">
            {[1, 2, 3].map((index) => (
              <div className="card testimonial-card d-flex flex-row p-1 mb-3" key={index} data-aos="fade-up">
                <div className="flex-grow-1 ps-0">
                  <h4 className="card-title mb-1">I have found everything I want here as I am in my country</h4>
                  <h5 className="text-muted">John Doe - 3 hours ago</h5>
                  <div className="stars text-warning mt-2" style={{ fontSize: '2rem' }}>★★★★★</div>
                </div>
                <div className="user-info ms-3">
                  <img src={user} alt="User" className="rounded-circle user-avatar" width="100" height="100" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="py-5 container">
          <h2 className="text-primary ms-3 mb-2 h-100" style={{textAlign: "right"}}>مقدمو الخدمة الأكثر طلباً</h2>
          <img src="/assets/svg/underline.png" alt="" style={{width: "23rem"}} />
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            className="custom-swiper"
            dir="rtl"
            style={{padding: "40px 0"}}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }}
          >
            {vendors.map((vendor, idx) => (
              <SwiperSlide key={idx}>
                <div className="slide-content-wrapper">
                  <img src={vendor.img} alt={vendor.title} className="slide-img" />
                  <div className="slide-content text-white text-center">
                    <h2>{vendor.title}</h2>
                    <p>{vendor.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Contact Section with Image */}
        <div className="container" dir="rtl">
          <div className="row align-items-center mt-5" style={{ marginBottom: '2rem' }}>
            <div className="col-md-6 mb-4">
              <h1 className="text-end text-primary">تحتاج إلى مساعدة</h1>
              <h4 className="text-muted mt-3 text-end">تواصل مع فريق العمل في حالة وجود أي استفسار</h4>
              <div className="text-end mt-5">
                <button className="btn btn-outline-primary pt-3 pb-3 ps-5 pe-5 contact-btn">
                  تواصل معنا
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src={contactImg} alt="Contact Us" className="img-fluid" style={{ maxWidth: '400px', height: 'auto' }} />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;