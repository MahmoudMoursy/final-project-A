import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-crimson px-4 fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">Aswan Services</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex gap-4">
            <li className="nav-item"><NavLink className="nav-link" to="/Home">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="">Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="">Tourist places</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="">Housing</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="">About Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="">Voluntary</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Donation">Donation</NavLink></li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-profile" className="profile-container d-flex align-items-center text-decoration-none">
              <span className="profile-icon">M</span>
              <strong className="d-none d-lg-block text-white ms-2">Moursy</strong>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
