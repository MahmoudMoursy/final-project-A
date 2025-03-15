import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import wasetLogo from '../assets/waset.png';

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-around px-4">
        <div>
          <a className="navbar-brand" href="#">
            <img src={wasetLogo} alt="Waset Logo" style={{ height: '50px', width: 'auto' }} />
          </a>
        </div>
        <div className="nav collapse navbar-collapse" id="navbarNav" style={{ marginLeft: 350 }}>
          <ul className="navbar-nav d-flex gap-4">
            <li className="nav-item"><NavLink className="nav-link" to="/Home">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Services">Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/tour">Tourist places</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/housing">Housing</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/AboutUs">About Us</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Community">Community</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="">Voluntary</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Donation">Donation</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Profileform">Profile</NavLink></li>
          </ul>
        </div>
        <div className="d-flex align-items-center justify-content-atod">
          <button className="navbar-toggler" style={{ marginRight: '15%' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none ms-2" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="border p-1 me-2 border-success text-black-50" style={{
              borderRadius: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ddf9db',
              width: '30px', height: '30px'
            }}>M</span>
            <strong className="d-none d-xl-block text-white" id="name">Moursy</strong>
          </a>
          <ul className="menu dropdown-menu text-small fw-bold shadow rounded-3 p-2 text-center" style={{
            width: '220px', borderRadius: '50%', position: 'absolute', left: '84%', top: '54px'
          }}>
            <li>
              <div className="d-flex justify-content-around align-items-center">
                <img src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>Moursy</strong>
                <span className="close">X</span>
              </div>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" to="/Profile">Account Setting</NavLink></li>
            <li><a className="dropdown-item bg-danger fw-bold mt-2 px-5 w-25 justify-content-center m-auto d-flex rounded text-white" href="#">Sign out</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;