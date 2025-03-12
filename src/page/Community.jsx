import React from 'react'
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import './Community.css'
import communityimage from '../assets/communityimage.png'

function Community() {
  return (
    <>
    <NavBar/>
<div className="container mt-4">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h3>User Discussions</h3>
      <button className="btn btn-success">New Topic</button>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="topic-card d-flex">
          <div className="topic-content">
            <h6>How to improve my freelance business?</h6>
            <small className="text-muted">John Doe - 3 hours ago</small>
          </div>
          <div className="user-info">
            <img src={communityimage} alt="User Image" />
          </div>
        </div>
        <div className="topic-card d-flex">
          <div className="topic-content">
            <h6>Best tools for web development</h6>
            <small className="text-muted">Jane Smith - 1 day ago</small>
          </div>
          <div className="user-info">
            <img src={communityimage} alt="User Image" />
          </div>
        </div>
        <div className="topic-card d-flex">
          <div className="topic-content">
            <h6>Best tools for web development</h6>
            <small className="text-muted">Jane Smith - 1 day ago</small>
          </div>
          <div className="user-info">
            <img src={communityimage} alt="User Image" />
          </div>
        </div>
        <div className="topic-card d-flex">
          <div className="topic-content">
            <h6>Best tools for web development</h6>
            <small className="text-muted">Jane Smith - 1 day ago</small>
          </div>
          <div className="user-info">
            <img src={communityimage} alt="User Image" />
          </div>
        </div>
        <div className="topic-card d-flex">
          <div className="topic-content">
            <h6>Best tools for web development</h6>
            <small className="text-muted">Jane Smith - 1 day ago</small>
          </div>
          <div className="user-info">
            <img src={communityimage} alt="User Image" />
          </div>
        </div>
        <div className="topic-card d-flex">
          <div className="topic-content">
            <h6>Best tools for web development</h6>
            <small className="text-muted">Jane Smith - 1 day ago</small>
          </div>
          <div className="user-info">
            <img src={communityimage} alt="User Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
   <Footer/>
   </>
  )
}

export default Community