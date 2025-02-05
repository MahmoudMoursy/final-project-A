import React from 'react';
import aswulogo2 from '../assets/aswulogo2.png';
import ColoredLogo from '../assets/ColoredLogo.svg';
import user from '../assets/user.jpg';


function Home() {
  return (
    <div>
      <div className="container-fluid py-5 wow fadeInUp" id="products" data-wow-delay="0.1s" dir="ltr">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            <h1 className="mb-0">Our Main Services</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <div className="ps-4 text-center m-auto">
                  <h4 className="text-prim mb-1 text-center">توفير السكن</h4>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5 text-end">
                نحن نوفر لك افضل اماكن السكن في مختلف المحافظه بسرع مناسب
              </div>
            </div>
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <div className="ps-4 text-center m-auto">
                  <h4 className="text-prim mb-1 text-center">ارشادات</h4>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5 text-end">
                ارشادات لكل الاماكن السياحيه والماكن التي تحتاحها
              </div>
            </div>
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <div className="ps-4 text-center m-auto">
                  <h4 className="text-prim mb-1 text-center">الاسئله</h4>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5 text-end">
                نحن نوفر لك ما تحتاج معرفه عن المحاظه
              </div>
            </div>
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <div className="ps-4 text-center m-auto">
                  <h4 className="text-prim mb-1 text-center">اماكن</h4>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5 text-end">
                نحن نعمل علي توفير جميع المطاعم والكافيهات الموجوده في المحافظه
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 bg-light rounded">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">خدمه توفير السكن</h2>
          <p className="mb-4 text-muted fw-bold fs-2">
            نوفر لك السكن الطلابي المثالي بالقرب من جامعتك، مع بيئة مريحة وآمنة تساعدك على التركيز في دراستك.
            اختر من بين خيارات متعددة تناسب ميزانيتك، سواء كنت تبحث عن غرفة فردية أو سكن مشترك.
            استمتع بخدمات متكاملة تشمل الإنترنت، الصيانة، والأمان على مدار الساعة.
          </p>
          <a href="#contact" className="btn btn-primary py-md-3 px-md-5 ms-3 animated slideInLeft">ابحث</a>
        </div>
      </section>

      <section className="py-5 rounded">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">شركاؤنا</h2>
          <div className="justify-content-around gap-5">
            <img src={ColoredLogo} alt="Colored Logo" className="mx-5" />
            <img src={aswulogo2} alt="ASWU Logo" className="w-25 mx-5" />
          </div>
        </div>
      </section>

      <section id="faq" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="true" aria-controls="collapse">
                  How can I contact customer support?
                </button>
              </h2>
              <div id="collapse" className="accordion-collapse collapse show" aria-labelledby="faq" data-bs-parent="#faqAccordion">
                <div className="accordion-body">You can contact us via email or our hotline available 24/7.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  How can I contact customer support?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                <div className="accordion-body">You can contact us via email or our hotline available 24/7.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                  How can I contact customer support?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                <div className="accordion-body">You can contact us via email or our hotline available 24/7.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                  How can I contact customer support?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse show" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                <div className="accordion-body">You can contact us via email or our hotline available 24/7.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  What payment methods do you accept?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                <div className="accordion-body">We accept credit cards, bank transfers, and mobile payments.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light rounded">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">خدمة معرفة الأماكن القريبة</h2>
          <p className="mb-4 text-muted fw-bold fs-2">
            نوفر لك خدمة متكاملة لمساعدتك في العثور على أقرب الأماكن التي تحتاجها خلال يومك الدراسي.
            سواء كنت تبحث عن سوبر ماركت لشراء مستلزماتك، صيدلية للحصول على الأدوية الضرورية، أو مكتبة لاستعارة الكتب والمراجع،
            يمكنك الآن الوصول إليها بسهولة بضغطة زر. نحن نجعل حياتك أكثر راحة من خلال توفير بيانات دقيقة عن مواقع هذه الأماكن،
            مع تحديث مستمر يضمن لك أفضل تجربة. لا تضيع وقتك في البحث، ودعنا نساعدك في إيجاد كل ما تحتاجه بالقرب منك بسرعة وسهولة.
          </p>
          <a href="#search" className="btn btn-primary py-md-3 px-md-5 ms-3 animated slideInLeft">ابحث الآن</a>
        </div>
      </section>

      <section className="py-5 rounded">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">أراء المستخدمين</h2>
          <div className="card d-flex flex-row p-1 mb-3">
            <div className="flex-grow-1 ps-0">
              <h4 className="card-title mb-1">I have found everything I want here as I am in my country</h4>
              <h5 className="text-muted">John Doe - 3 hours ago</h5>
              <div className="stars text-warning mt-2" style={{ fontSize: '2rem' }}>
                ★★★★★
              </div>
            </div>
            <div className="user-info ms-3">
              <img src={user} alt="User" className="rounded-circle" width="100" height="100" />
            </div>
          </div>
          <div className="card d-flex flex-row p-1 mb-3">
            <div className="flex-grow-1 ps-0">
              <h4 className="card-title mb-1">I have found everything I want here as I am in my country</h4>
              <h5 className="text-muted">John Doe - 3 hours ago</h5>
              <div className="stars text-warning mt-2" style={{ fontSize: '2rem' }}>
                ★★★★★
              </div>
            </div>
            <div className="user-info ms-3">
              <img src={user} alt="User" className="rounded-circle" width="100" height="100" />
            </div>
          </div>
          <div className="card d-flex flex-row p-1 mb-3">
            <div className="flex-grow-1 ps-0">
              <h4 className="card-title mb-1">I have found everything I want here as I am in my country</h4>
              <h5 className="text-muted">John Doe - 3 hours ago</h5>
              <div className="stars text-warning mt-2" style={{ fontSize: '2rem' }}>
                ★★★★★
              </div>
            </div>
            <div className="user-info ms-3">
              <img src={user} alt="User" className="rounded-circle" width="100" height="100" />
            </div>
          </div>
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
    </div>
  );
}

export default Home;