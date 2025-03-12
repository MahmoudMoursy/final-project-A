import React from 'react'
import NavBar from './NavBar'
import A222 from '../assets/A222.webp'
import A1111 from '../assets/A1111.webp'
import A333 from '../assets/A333.webp'
import A444 from '../assets/A444.webp'
import AA from '../assets/AA.webp'
import Footer from './Footer'
function Housing() {
  
  return (
    <>
    <NavBar/>
      <div className="w-100 bg-body-secondary d-flex justify-content-center align-items-center">
  <div className="search-box dark w-50">
    
    <input
      type="text"
      className="form-control search-input"
      placeholder="....ابحث هنا"
    />
    <button className="btn btn-dark search-button">بحث</button>
  </div>
  <div className="form-floating ">
    <select className="form-select" id="floatingSelectGrid">
      <option selected="">غرفة</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
    </select>
    <label htmlFor="floatingSelectGrid">
      <span>عدد الغرف </span>
    </label>
  </div>
  <div className="form-floating ">
    <select className="form-select" id="floatingSelectGrid">
      <option selected="">سرير</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
    </select>
    <label htmlFor="floatingSelectGrid ">عدد السُرُر</label>
  </div>
</div>
<>
  <div className="overlay" id="overlay" />
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-4 mb-4 ">
        <div
          className="card text-center hover-overlay hover-zoom hover-shadow ripple"
          style={{ width: "100%" }}
        >
          <img
            src={AA}
            className="card-img-top"
          
          />
          <span className="text-muted">
            2 <i className="bi bi-door-closed" /> 3 <i className="bi bi-hdmi" />
          </span>
          <div className="card-body">
            <p className="card-text">
              إذا كنت تبحث عن شقة مريحة ومناسبة للإقامة وحدك أو مع الأصدقاء،
              فهذه الشقة هي الخيار المثالي لك! تحتوي الشقة على غرفتين نوم
              مجهزتين بكل ما تحتاجه من راحة وخصوصية. تضم الشقة أربع أسرة لتوفير
              أقصى درجات الراحة لكل المقيمين.
            </p>
            <button id="showIframeBtn">اعرف</button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-4">
        <div className="card text-center" style={{ width: "100%" }}>
          <img src={A222} className="card-img-top" alt="..." />
          <span className="text-muted">
            2 <i className="bi bi-door-closed" /> 2 <i className="bi bi-hdmi" />
            <div className="card-body">
              <p className="card-text">
                شقة مريحة ومجهزة بالكامل للإيجار غرفتين نوم كل غرفة تحتوي على
                سرير مزدوج
              </p>
              <button id="showIframeBtn">اعرف</button>
            </div>
          </span>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-4">
        <div className="card text-center" style={{ width: "100%" }}>
          <img src={A333} className="card-img-top" alt="..." />
          <span className="text-muted">
            2 <i className="bi bi-door-closed" /> 2 <i className="bi bi-hdmi" />
            <div className="card-body">
              <p className="card-text">
                غرفتين نوم مجهزتين بكل وسائل الراحة، كل غرفة تحتوي على سرير
                مزدوج حمام نظيف ومجهز بالكامل مطبخ عملي ومجهز بجميع المستلزمات
                الأساسية
              </p>
              <button id="showIframeBtn">اعرف</button>
            </div>
          </span>
        </div>
      </div>
      <div
        className="col-12 col-md-4 mb-4 "
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <div className="card text-center" style={{ width: "100%" }}>
          <img src={A444} className="card-img-top" alt="..." />
          <span className="text-muted">
            2 <i className="bi bi-door-closed" /> 2 <i className="bi bi-hdmi" />
            <div className="card-body">
              <p className="card-text">
                {" "}
                شقة نظيفة وجاهزة للسكن غرفتين نوم صالون مريح ومناسب للاسترخاء
              </p>
              <button id="showIframeBtn">اعرف</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="iframe-container" id="iframeContainer">
    <div className="iframe-content">
      <div className="row">
        <div className="col-md-6">
          <div className="property-image">
            <div
              id="carouselExampleRide"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active  ">
                  <img
                    src="/assets/4164b0cd6f2de21569de3311b1b03072-p_e.webp"
                    className="d-block  w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item ">
                  <img
                    src={A1111}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item ">
                  <img
                    src="/assets/444.webp"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="col-md-6">
          <h2 className="fw-bold">3000EGY</h2>
          <p className="text-muted">1 aswan , St 24</p>
          <div className="d-flex gap-3 details">
            <span> 🏠شقه</span>
            <span>📅 متاحة من 1/5/2025</span>
            <span>📏 150 متر </span>
          </div>
          <div className="mt-3 offer-box">
            <p className="mb-0">
              Estimated market value:{" "}
              <span className="text-success fw-bold">3000EGY</span>
            </p>
            <small>Get a cash offer in 3 minutes</small>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d239.45042349711184!2d32.89462497568838!3d24.088047598696917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1738287066273!5m2!1sar!2seg"
              width={300}
              height={100}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <button className="btn btn-dark mt-3 w-100">قم بالحجز الان</button>
        </div> */}
      </div>
    </div>
  </div>
</>
<Footer />
    </>
  )
}

export default Housing
