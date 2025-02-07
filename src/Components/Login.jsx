import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

function Login() {
    const nav = useNavigate();

    function save(event) {
        event.preventDefault(); 
        console.log("Login submitted");
        nav('/Home', { replace: true, state: { data: "hi from login" } });
    }

    return (
        <div className="container">
            <div className="row justify-content-around mt-5">
                <div className="col-md-6 col-lg-4 mt-5">
                    <img src={logo} alt="logo" className="w-50 mb-5 mt-5 mx-auto d-block" />
                    <h2 className="text-center text-black fw-bolder">
                        Expatriate Services: Making your life easier away from home
                    </h2>
                </div>
                <div className="col-md-6 col-lg-4">
                    <form onSubmit={save} className="border border-1 border-black bg-white rounded-5 p-3">
                        <img src={logo} alt="img" className="w-25 mx-auto d-block mb-4" />
                        <p className="text-black text-center mb-4 fw-bold">
                            Welcome back! Please enter your details.
                        </p>
                        <div className="d-flex justify-content-around p-2 rounded-4 mb-3" style={{ backgroundColor: "rgb(216, 220, 220)" }}>
                            <button type="button" className="btn bg-white py-2 px-5 rounded-3 fw-bold" onClick={() => nav('/')}>
                                Login
                            </button>
                            <button type="button" className="btn px-5 py-2 rounded-3 fw-bold" onClick={() => nav('/Signup')}>
                                Sign Up
                            </button>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="text-black fw-bold">Email</label>
                            <input type="email" placeholder="Enter your email" id="email" className="form-control mt-2 border border-light" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="text-black fw-bold">Password</label>
                            <input type="password" placeholder="Enter your password" id="password" className="form-control mt-2 border border-light" />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                                <input type="checkbox" id="rememberMe" className="form-check-input" />
                                <label htmlFor="rememberMe" className="form-check-label text-black">
                                    Remember for 30 days
                                </label>
                            </div>
                            <a href="#" className="text-black fw-bold" onClick={(e) => e.preventDefault()}>
                                Forgot Password
                            </a>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 rounded mt-3">Login</button>
                        <p className="text-black text-center fw-bold mt-4">
                            Don’t have an account? <a href="#" onClick={(e) => { e.preventDefault(); nav('/Signup'); }}>Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
