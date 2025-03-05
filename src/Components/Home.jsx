
import NavBar from './NavBar';
import Haeder from './Haeder';
import aswulogo2 from '../assets/aswulogo2.png';
import ColoredLogo from '../assets/ColoredLogo.svg';
import user from '../assets/user.jpg';
import CardSlider from './CardSlider';
import Footer from './Footer';

function Home() {
  return (
    <div>
    <NavBar/>
    <Haeder/>
      <div className="container-fluid py-5" id="products">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            <h1 className="mb-0">Our Main Services</h1>
          </div>
        </div>
      <CardSlider/>
      </div>

      <section className="py-5 bg-light rounded text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">خدمة توفير السكن</h2>
          <p className="mb-4 text-muted fw-bold fs-2">
          نوفر لك السكن الطلابي المثالي بالقرب من جامعتك، مع بيئة مريحة وآمنة تساعدك على التركيز في دراستك.
                اختر من بين خيارات متعددة تناسب ميزانيتك، سواء كنت تبحث عن غرفة فردية أو سكن مشترك.
                استمتع بخدمات متكاملة تشمل الإنترنت، الصيانة، والأمان على مدار الساعة.          </p>
          <a href="#contact" className="btn btn-primary py-md-3 px-md-5 ms-3 animated slideInLeft">ابحث</a>
        </div>
      </section>

      <section className="py-5 rounded text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">شركاؤنا</h2>
          <div className="d-flex justify-content-center gap-5">
            <img src={ColoredLogo} alt="Colored Logo" className="mx-5" />
            <img src={aswulogo2} alt="ASWU Logo" className="w-25 mx-5" />
          </div>
        </div>
      </section>

      <section id="faq" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {[
              { id: 'faq1', question: 'How can I contact customer support?', answer: 'You can contact us via email or our hotline available 24/7.' },
              { id: 'faq2', question: 'What services do you provide?', answer: 'We provide student housing, transportation, and location-based assistance.' },
              { id: 'faq3', question: 'How can I book a service?', answer: 'You can book a service through our website or contact our support team.' },
              { id: 'faq4', question: 'What payment methods do you accept?', answer: 'We accept credit cards, bank transfers, and mobile payments.' }
            ].map((item) => (
              <div className="accordion-item" key={item.id}>
                <h2 className="accordion-header" id={item.id}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}-collapse`}>
                    {item.question}
                  </button>
                </h2>
                <div id={`${item.id}-collapse`} className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 rounded text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">أراء المستخدمين</h2>
          {[1, 2, 3].map((index) => (
            <div className="card d-flex flex-row p-1 mb-3" key={index}>
              <div className="flex-grow-1 ps-0">
                <h4 className="card-title mb-1">I have found everything I want here as I am in my country</h4>
                <h5 className="text-muted">John Doe - 3 hours ago</h5>
                <div className="stars text-warning mt-2" style={{ fontSize: '2rem' }}>★★★★★</div>
              </div>
              <div className="user-info ms-3">
                <img src={user} alt="User" className="rounded-circle" width="100" height="100" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </section>


      <Footer/>
      
    </div>
  );
}

export default Home;
