import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authstorre';
import wasetLogo from '../assets/waset.png';
import { LogIn, UserPlus, ArrowRight, Building2, Github } from 'lucide-react';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../Redux/CurrentUser';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseconfig';
import './loginStyle.css';
import Nav from 'react-bootstrap/Nav';




function Login() {
    const nav = useNavigate();
    const AuthStore = useAuth();
    const [user, setUser] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    let flag = false;
    
    async function save(event) {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const useree = await AuthStore.login(user);
            fetchUsers(useree.uid);
        } catch (err) {
            setError("Invalid email or password. Please try again.");
            setLoading(false);
        }
    }

    const fetchUsers = async (useree) => {
        try {
          const querySnapshot = await getDocs(collection(db, "user"));
          querySnapshot.forEach((doc) => {
            if(doc.id==useree){
                flag = true;     
                dispatch(setCurrentUser(doc.data()));
                localStorage.setItem("currentUser", JSON.stringify(doc.data()));
                console.log("wait");
                console.log(doc);
                setLoading(false);
            }
          });

        } catch (error) {
          console.error("Error fetching users: ", error);
        }
        if(flag){
            nav('/home');
        }
        else{
            nav('/Profileform');
        }
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userId = user.uid;
        } else {
            console.log("user is not signed in")
        }
    });

    async function handleGoogleLogin() {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            await signInWithPopup(auth, provider);
            nav('/Home');
        } catch (error) {
            setError("Google login failed. Please try again.");
        }
    }

    return (
        <div className="min-vh-100 bg-gradient-custom d-flex align-items-center justify-content-center p-4">
            <div className="card auth-card" style={{ maxWidth: '72rem' }}>
                <div className="row g-0">
                    {/* Content Side */}
                    <div className="col-md-6 bg-gradient-custom text-white p-4 p-md-5 position-relative overflow-hidden">
                        {/* Animated background circles */}
                        <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden">
                            <div className="bg-circle bg-circle-1 animate-float"></div>
                            <div className="bg-circle bg-circle-2 animate-float-delayed"></div>
                        </div>
                        
                        <div className="h-100 d-flex flex-column justify-content-center gap-4 animate-fade-in position-relative" style={{ zIndex: 10 }}>
                            <div className="d-flex align-items-center gap-3">
                                <img src={wasetLogo} alt="logo" className="w-25" />
                                <h1 className="fs-4 fw-bold">Waset</h1>
                            </div>
                            <div className="mb-4">
                                <h2 className="display-5 fw-bold lh-sm">
                                    Welcome back to our platform
                                </h2>
                                <div className="d-flex align-items-center gap-4 animate-bounce-subtle mt-4">
                                    <img
                                        src={wasetLogo}
                                        alt="Waset Logo"
                                        className="rounded-circle object-fit-cover"
                                        style={{ width: '5rem', height: '5rem', border: '4px solid rgba(255, 255, 255, 0.3)' }}
                                    />
                                    <p className="fs-5 opacity-75">
                                        Access your account and continue your journey with us!
                                    </p>
                                </div>
                                <div className="d-flex flex-column gap-4 mt-4">
                                    <div className="d-flex align-items-center gap-4 hover-translate custom-transition">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center animate-pulse" 
                                            style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                            <span className="fs-4">🚀</span>
                                        </div>
                                        <div>
                                            <h3 className="fw-semibold">Expatriate Services</h3>
                                            <p className="opacity-75">Making your life easier away from home</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-4 hover-translate custom-transition">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center animate-pulse" 
                                            style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                            <span className="fs-4">🛡️</span>
                                        </div>
                                        <div>
                                            <h3 className="fw-semibold">Secure by Design</h3>
                                            <p className="opacity-75">Your data is always protected</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="col-md-6 auth-form-container">
                        <div className="mx-auto" style={{ maxWidth: '28rem' }}>
                            {/* Tab switcher styled like the image */}
                            <div className="tab-container">
                                <div className="tab-item tab-item-active">
                                    <LogIn size={18} />
                                    Login
                                </div>
                                <div 
                                    className="tab-item tab-item-inactive"
                                    onClick={() => nav('/Signup')}
                                >
                                    <UserPlus size={18} />
                                    Sign Up
                                </div>
                            </div>

                            <h3 className="auth-welcome-text">Welcome back!</h3>

                            <div className="d-flex flex-column gap-3">
                                <button 
                                    className="social-btn"
                                    onClick={handleGoogleLogin}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    Continue with Google
                                </button>
                                <button className="social-btn">
                                    <Github size={20} />
                                    Continue with GitHub
                                </button>
                            </div>

                            <div className="divider">Or continue with</div>

                            <form onSubmit={save}>
                                <div>
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="form-input"
                                        onChange={handleInputChange}
                                        value={user.email}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className="form-input"
                                        onChange={handleInputChange}
                                        value={user.password}
                                        required
                                    />
                                </div>
                                <div className="remember-me">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="form-check-input"
                                        />
                                        Remember me
                                    </label>
                                    <a href="#" className="forgot-password">
                                        Forgot password?
                                    </a>
                                </div>
                                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                <button
                                    type="submit"
                                    className="auth-submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? 'Signing In...' : 'Sign In'}
                                    <ArrowRight size={16} />
                                </button>
                            </form>

                            <div className="auth-footer">
                                <p>
                                    Don't have an account?{' '}
                                    <a 
                                        className="auth-link"
                                        onClick={() => nav('/Signup')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
