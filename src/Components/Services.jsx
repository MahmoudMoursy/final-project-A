import React from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"
import './Services.css'

function Services() {
  return (
    <div>
    <NavBar/>
    <section
      className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
      style={{
        backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")'
      }}
    >
      <div className="container">
        <h1 className="fw-bold">Fast Delivery for Food, Groceries, and More</h1>
        <div className="input-group mt-3 w-50 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a restaurant, street, or favorite store"
          />
          <button className="btn btn-dark">Choose Location</button>
        </div>
      </div>
    </section>
    <section className="categories py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-center p-3 bg-dark text-white">
              <img src="https://mdbcdn.b-cdn.net/img/new/slides/003.webp" />
              <h2>Order Food</h2>
              <button className="btn btn-light">Order now</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-3 bg-dark text-white">
              <img src="https://mdbcdn.b-cdn.net/img/new/slides/003.webp" />
              <h2>Order Groceries</h2>
              <button className="btn btn-light">Shop now</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-3 bg-dark text-white">
              <img src="https://mdbcdn.b-cdn.net/img/new/slides/003.webp" />
              <h2>Order Flowers</h2>
              <button className="btn btn-light">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="categories py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-center p-3 bg-dark text-white">
              <img src="https://mdbcdn.b-cdn.net/img/new/slides/003.webp" />
              <h2>Order Food</h2>
              <button className="btn btn-light">Order now</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-3 bg-dark text-white">
              <img src="https://mdbcdn.b-cdn.net/img/new/slides/003.webp" />
              <h2>Order Groceries</h2>
              <button className="btn btn-light">Shop now</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-3 bg-dark text-white">
              <img src="https://mdbcdn.b-cdn.net/img/new/slides/003.webp" />
              <h2>Order Flowers</h2>
              <button className="btn btn-light">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="download-app text-center py-5 bg-light">
      <div className="container">
        <h2>Download Dear App</h2>
        <p>Get what you need, when you need it.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="btn btn-dark">
            AppGallery
          </a>
          <a href="#" className="btn btn-dark">
            App Store
          </a>
          <a href="#" className="btn btn-dark">
            Google Play
          </a>
        </div>
      </div>
    </section>
    <section className="career py-5">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md-6">
            <div className="p-4 bg-light">
              <h3>Develop your Trip</h3>
              <p>Be one of us</p>
              <button className="btn btn-dark">Order Now</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-light">
              <h3>Join to us like Owner</h3>
              <p>Give your Feedback</p>
              <button className="btn btn-dark">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
  )
}

export default Services;