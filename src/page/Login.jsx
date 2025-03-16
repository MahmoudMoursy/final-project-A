import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authstorre';
import wasetLogo from '../assets/waset.png';

function Login() {
    const nav = useNavigate();
    const AuthStore = useAuth();
    const [user, setUser] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState("");

    async function save(event) {
        event.preventDefault();
        setLoading(true);
        setError(""); 
    
        try {
            await AuthStore.login(user);
            nav('/Home', { state: { data: "hi from login" } });
        } catch (err) {
            setError("Invalid    email or password. Please try again.");
        }
    
        setLoading(false);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    return (
<div  style={{ background: "linear-gradient(97deg, rgba(9,30,61,1) 70%, rgba(255,255,255,1) 95%)" }}>
            <div className="row justify-content-around pt-5" style={{paddingBottom:67}}>
                <div className="col-md-6 col-lg-4 mt-5">
                    <img src={wasetLogo} alt="logo" className="w-75 mb-5 mt-5 mx-auto d-block" />
                    <h2 className="text-center text-white fw-bolder">
                        Expatriate Services: Making your life easier away from home
                    </h2>
                </div>
                <div className="col-md-6 col-lg-4">
                    <form onSubmit={save} style={{width:390, background: "linear-gradient(97deg, rgba(9,30,61,1) 49%, rgba(255,255,255,1) 99%)"}} className=" rounded-5 p-3">
                        <img src={wasetLogo} alt="img" className="w-50 mx-auto d-block mb-4" />
                        <p className="text-white text-center mb-4 fw-bold">
                            Welcome back! Please enter your details.
                        </p>
                        <div className="d-flex justify-content-around p-2 rounded-4 mb-3" style={{ backgroundColor: "rgb(216, 220, 220)" }}>
                            <button type="button" style={{backgroundColor:"rgba(9,30,61,1)"}} className="btn text-white  py-2 px-5 rounded-3 fw-bold" onClick={() => nav('/')}>
                                Login
                            </button>
                            <button type="button" className="btn px-5 py-2 rounded-3 fw-bold" onClick={() => nav('/Signup')}>
                                Sign Up
                            </button>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="text-white fw-bold">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                id="email"
                                className="form-control mt-2 border border-light"
                                onChange={handleInputChange}
                                value={user.email}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="text-white fw-bold">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                id="password"
                                className="form-control mt-2 border border-light"
                                onChange={handleInputChange}
                                value={user.password}
                            />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check">
                                <input type="checkbox" id="rememberMe" className="form-check-input" />
                                <label htmlFor="rememberMe" className="form-check-label text-white">
                                    Remember for 30 days
                                </label>
                            </div>
                            <a href="#" className="text-white fw-bold" onClick={(e) => e.preventDefault()}>
                                Forgot Password
                            </a>
                        </div>

         
                        {error && <p className="text-danger text-center fw-bold mt-2">{error}</p>}

                        <button type="submit" className="btn btn-primary w-100 rounded mt-3" disabled={loading}>
                            {loading ? "Logging in..." : "Login"}
                        </button>

                        <p className="text-white text-center fw-bold mt-4">
                            Don’t have an account? <a className='text-blue' style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); nav('/Signup'); }}>Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
