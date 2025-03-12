import React from 'react'
import './Tour.css'
import first from '../assets/tour/first carsoul pic.jpg'
import sec from '../assets/tour/sec carsoul pic.jpg'
import third from '../assets/tour/thir carsoul pic.jpg'
import NavBar from './NavBar'
import Footer from './Footer'
function Tour() {
  return (
      <>
      <NavBar/>
  <div className="carsoul">
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={first}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Explore Aswan</h2>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={sec}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Explore Aswan</h2>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={third}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Explore Aswan </h2>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div className="about-section">
    <p className="text-uppercase text-muted small">[About Us]</p>
    <h2>
      It all began with a single journey—a trip to the land of fire and ice that
      sparked a profound love for Iceland.
    </h2>
    <p>
      Enchanted by its rugged beauty and rich culture, we knew we had found
      something truly special.
    </p>
  </div>
  <div className="stats">
    <div className="stat-item">
      <h2>95%</h2>
      <p>Customer Satisfaction</p>
    </div>
    <div className="stat-item">
      <h2>72+</h2>
      <p>Popular Destinations</p>
    </div>
    <div className="stat-item">
      <h2>250+</h2>
      <p>Experienced Guide</p>
    </div>
  </div>

  <div className="containe background-color=white">
  <div className="grid-container">
    <div className="grid-item large">
      <h2>Hotels</h2>
      <p>Your dream destination awaits, book moments, make memories</p>
    </div>
    <div className="card">
      <img src={first} alt="Hotel" />
      <div className="card-body">
        <h5 className="card-title">Vanbrugh Hotel</h5>
        <p className="text-muted">St. Michael’s Street</p>
        <p className="price">$172</p>
      </div>
    </div>
    <div className="card">
      <img src={sec} alt="Hotel" />
      <div className="card-body">
        <h5 className="card-title">Malmaison Oxford</h5>
        <p className="text-muted">Oxford Castle</p>
        <p className="price">$211</p>
      </div>
    </div>
    <div className="card">
      <img src={sec} alt="Transport" />
      <div className="card-body">
        <h5 className="card-title">Palace Shuttle</h5>
        <p className="text-muted">Woodstock</p>
        <p className="price">$10</p>
      </div>
    </div>
    <div className="card">
      <img src={sec} alt="Transport" />
      <div className="card-body">
        <h5 className="card-title">Sightseeing Bus</h5>
        <p className="text-muted">City Center</p>
        <p className="price">$20</p>
      </div>
    </div>
    <div className="grid-item large">
      <h2>Bus &amp; Travel</h2>
      <p>Travel more with flexible bus options</p>
    </div>
  </div>
</div>

<div className="container py-5">
  <h2 className="text-center">Our Travel Memories</h2>
  <div className="row mt-4">
    <div className="col-md-6">
      <div className="card">
        <img src="https://source.unsplash.com/600x400/?forest" alt="" />
        <div className="card-body">
          <h5>2023 Travel Trends – what you need to know</h5>
          <p>Explore the latest travel insights for 2023.</p>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <img src="https://source.unsplash.com/600x400/?adventure" alt="" />
        <div className="card-body">
          <h5>Jeep Adventure – A new attraction for tourists</h5>
          <p>Experience off-road thrill in exotic locations</p>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center mt-4">
    <button className="btn btn-dark">View More</button>
  </div>
</div>

<Footer/>
</>

  )
}

export default Tour
