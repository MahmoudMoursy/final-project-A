import React, { useEffect, useRef } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactUs.css';
// import contactImg from '../assets/contact.svg';

function ContactUs() {
  const formRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just reset the form
    formRef.current.reset();
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
  };


  return (
    <div className="contact-page">
      <NavBar />

      <div className="container py-5 mt-5" dir="rtl">
        <div className="row mb-5">
          <div className="col-12 text-center text-dark" data-aos="fade-up">
            <h1 className="fw-bold mb-4 mt-4">تواصل معنا</h1>
            <p className="lead mb-5">نحن هنا للإجابة على استفساراتك ومساعدتك في كل ما تحتاجه</p>
          </div>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-5" data-aos="fade-right">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="mb-4 fw-bold text-center">أرسل رسالة</h3>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">الاسم الكامل</label>
                    <input type="text" className="form-control" id="name" placeholder="أدخل اسمك الكامل" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">البريد الإلكتروني</label>
                    <input type="email" className="form-control" id="email" placeholder="أدخل بريدك الإلكتروني" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-bold">رقم الهاتف</label>
                    <input type="tel" className="form-control" id="phone" placeholder="أدخل رقم هاتفك" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-bold">الموضوع</label>
                    <input type="text" className="form-control" id="subject" placeholder="موضوع الرسالة" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-bold">الرسالة</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="اكتب رسالتك هنا..." required></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary py-3 fw-bold">إرسال الرسالة</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h3 className="mb-4 fw-bold text-center">معلومات التواصل</h3>
                <div className="d-flex align-items-center gap-4 mb-3">
  <div className="rounded-circle p-2 d-flex justify-content-center align-items-center text-white" style={{ background: 'linear-gradient(135deg, #a259ec 0%, #7c3aed 100%)', minWidth: 44, minHeight: 44 }}>
    <i className="fas fa-map-marker-alt" style={{ fontSize: 22 }}></i>
  </div>
  <div>
    <h5 className="mb-0 fw-bold">العنوان</h5>
    <p className="mb-0">جامعة أسوان، صحاري، أسوان، مصر</p>
  </div>
</div>
                <div className="d-flex align-items-center gap-4 mb-3">
  <div className="rounded-circle p-2 d-flex justify-content-center align-items-center text-white" style={{ background: 'linear-gradient(135deg, #a259ec 0%, #7c3aed 100%)', minWidth: 44, minHeight: 44 }}>
    <i className="fas fa-phone" style={{ fontSize: 22 }}></i>
  </div>
  <div>
    <h5 className="mb-0 fw-bold">الهاتف</h5>
    <p className="mb-0">+20 97 3480446</p>
  </div>
</div>
                <div className="d-flex align-items-center gap-4 mb-3">
  <div className="rounded-circle p-2 d-flex justify-content-center align-items-center text-white" style={{ background: 'linear-gradient(135deg, #a259ec 0%, #7c3aed 100%)', minWidth: 44, minHeight: 44 }}>
    <i className="fas fa-envelope" style={{ fontSize: 22 }}></i>
  </div>
  <div>
    <h5 className="mb-0 fw-bold">البريد الإلكتروني</h5>
    <p className="mb-0">info@aswu.edu.eg</p>
  </div>
</div>
                <div className="d-flex align-items-center gap-4">
  <div className="rounded-circle p-2 d-flex justify-content-center align-items-center text-white" style={{ background: 'linear-gradient(135deg, #a259ec 0%, #7c3aed 100%)', minWidth: 44, minHeight: 44 }}>
    <i className="fas fa-clock" style={{ fontSize: 22 }}></i>
  </div>
  <div>
    <h5 className="mb-0 fw-bold">ساعات العمل</h5>
    <p className="mb-0">الأحد - الخميس: 9:00 صباحاً - 3:00 مساءً</p>
  </div>
</div>
              </div>
            </div>

            {/* Map */}
            <div className="card shadow-sm border-0" style={{ height: '390px', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.7677952844594!2d32.89729467538857!3d24.088900277770146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x143664d18a8453f9%3A0x3f8c50a2c5b4eeab!2sAswan%20University!5e0!3m2!1sen!2seg!4v1714147447914!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aswan University Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Image */}
        {/* <div className="row mt-5 justify-content-center" data-aos="fade-up">
          <div className="col-md-6 text-center">
            <img src={contactImg} alt="Contact Us" className="img-fluid" style={{ maxWidth: '300px' }} />
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
