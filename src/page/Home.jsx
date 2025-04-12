import { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Haeder from '../Components/Haeder';
import aswulogo2 from '../assets/aswulogo2.png';
import ColoredLogo from '../assets/ColoredLogo.svg';
import user from '../assets/user.jpg';
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


function Home() {
  const nav = useNavigate()
  const user= JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch()
  dispatch(setCurrentUser(user));
  
  
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
    



    const map = L.map('map').setView([24.0889, 32.8998], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const locations = [
      // { name: 'Aswan High Dam', coords: [23.9702, 32.8800], desc: 'Historic dam on the Nile River' },
      // { name: 'Philae Temple', coords: [24.0134, 32.8832], desc: 'Ancient Egyptian temple complex' },
      // { name: 'Elephantine Island', coords: [24.08q47, 32.8850], desc: 'Archaeological site and museum' },
      // { name: 'Nubian Museum', coords: [24.0741, 32.8877], desc: 'Museum showcasing Nubian culture' }
    ];

    locations.forEach(loc => {
      L.marker(loc.coords)
        .bindPopup(`<b>${loc.name}</b><br>${loc.desc}`)
        .addTo(map);
    });

    return () => map.remove();
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

        <section className="py-5 rounded map-section" data-aos="fade-up">
          <h2 className="text-center mb-4 map-title">Explore Aswan</h2>
          <div id="map" style={{ height: '400px', borderRadius: '10px', marginBottom: '2rem' }}></div>
        </section>

        <section id="contact" className="py-5" data-aos="fade-up" style={{ backgroundColor: "#6F6F6F1F" }}>
          <h2 className="text-center mb-4 text-black contact-title">Contact Us</h2>
          <form className="contact-form">
            <div className="mb-3 form-group">
              <label htmlFor="name" className="form-label text-black">Name</label>
              <input type="text" className="form-control custom-input" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="email" className="form-label text-black">Email</label>
              <input type="email" className="form-control custom-input" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="message" className="form-label text-black">Message</label>
              <textarea className="form-control custom-input" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Send</button>
          </form>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;