import React from 'react'
import imag2 from '../assets/img2.jpeg';
import img6 from '../assets/img6.jpeg';
function Haeder() {
  return (
    <div>
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img6} alt="React logo" className="w-100" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-center">
                <div style={{ maxWidth: '900px'}} >
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown fw-bold fs-2">Welcome to Aswan Services</h5>
                  <h5 className="display-1 text-white mb-md-4 animated zoomIn">We help you know everything about Aswan</h5>
                  <a href="#contact" className="btn btn-primary py-md-3 px-md-5 ms-3 animated slideInLeft">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={imag2} alt="React logo" className="w-100" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-center">
                <div style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown fw-bold fs-2">Trust us</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">We will help you find all possible solutions.</h1>
                  <a href="#contact" className="btn btn-primary py-md-3 px-md-5 ms-3 animated slideInLeft">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
}

export default Haeder