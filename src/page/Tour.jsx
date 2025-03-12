import React from 'react'
import './Tour.css'
import first from '../assets/tour/first carsoul pic.jpg'
import sec from '../assets/tour/sec carsoul pic.jpg'
import third from '../assets/tour/thir carsoul pic.jpg'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
function Tour() {
  return (
    <>
      <NavBar />
      <div className="carousel-container">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={first} className="d-block w-100" alt="Explore Aswan" />
              <div className="carousel-caption">
                <h2>Explore Aswan</h2>
                <p>Discover the beauty and history of Aswan.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={sec} className="d-block w-100" alt="Explore Aswan" />
              <div className="carousel-caption">
                <h2>Stunning Views</h2>
                <p>Enjoy breathtaking landscapes and Nile views.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={third} className="d-block w-100" alt="Explore Aswan" />
              <div className="carousel-caption">
                <h2>Rich Culture</h2>
                <p>Immerse yourself in Aswan's unique culture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-section">
        <h2>About Us</h2>
        <p>We offer unforgettable experiences in Aswan, ensuring your journey is filled with adventure, comfort, and culture.</p>
      </section>

      <section className="stats">
        <div className="stat-item"><h2>95%</h2><p>Customer Satisfaction</p></div>
        <div className="stat-item"><h2>72+</h2><p>Popular Destinations</p></div>
        <div className="stat-item"><h2>250+</h2><p>Experienced Guides</p></div>
      </section>

      <section className="grid-container">
        <div className="grid-item large">
          <h2>Hotels</h2>
          <p>Your dream destination awaits. Book now!</p>
        </div>
        <div className="card"><img src={first} alt="Hotel" /><h5>Vanbrugh Hotel</h5><p>St. Michael’s Street - $172</p></div>
        <div className="card"><img src={sec} alt="Hotel" /><h5>Malmaison Oxford</h5><p>Oxford Castle - $211</p></div>
        <div className="grid-item large">
          <h2>Bus & Travel</h2>
          <p>Explore with flexible travel options.</p>
        </div>
      </section>

      <section className="travel-memories">
        <h2>Our Travel Memories</h2>
        <div className="memories-grid">
          <div className="memory-card"><img src="https://source.unsplash.com/600x400/?forest" alt="" /><h5>2023 Travel Trends</h5></div>
          <div className="memory-card"><img src="https://source.unsplash.com/600x400/?adventure" alt="" /><h5>Jeep Adventure</h5></div>
        </div>
        <button className="btn-explore">View More</button>
      </section>
      
      <Footer />
    </>
  );
}

export default Tour;