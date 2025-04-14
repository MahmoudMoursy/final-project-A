import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../authstorre';
import wasetLogo from '../assets/waset.png';
import { LogIn, UserPlus, ArrowRight, Building2, Github } from 'lucide-react';
import './loginStyle.css';


function Signup() {
    const authStore = useAuth();
    const nav = useNavigate();
    const [loading, setLoading] = useState(false);
    const [signupError, setSignupError] = useState(""); 

    const schema = z.object({
        name: z.string().min(7, "Name must be more than 7 characters").max(20, 'Name must be less than 15 characters'),
        email: z.string().email("Invalid email address"),
        pass: z.string().min(10, "Password must be more than 10 characters").max(20, 'Password must be less than 20 characters'),
        confirmpass: z.string()
    }).refine((data) => data.pass === data.confirmpass, {
        message: "Password and confirm password don't match",
        path: ["confirmpass"],
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    async function save(data) {
        setLoading(true);
        setSignupError(""); 

        try {
            await authStore.signUp({
                name: data.name,
                email: data.email,
                password: data.pass
            });
            console.log(authStore);
            console.log("sssss");
            nav('/', { replace: true, state: { data: "hi from signup" } });
        } catch (error) {
            console.error("Signup error:", error);
            setSignupError("Failed to sign up. Please try again.");
        }

        setLoading(false);
    }

    return (
        <div className="min-vh-100 bg-gradient-custom-dark d-flex align-items-center justify-content-center p-4">
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
                                <h1 className="fs-4 fw-normal text-white">Waset</h1>
                                <img src={wasetLogo} alt="logo" className="w-25" />
                            </div>
                            <div className="mb-4">
                                <h2 className="display-5 fw-normal lh-sm text-white">
                                    Join our community today
                                </h2>
                                <div className="d-flex align-items-center gap-4 animate-bounce-subtle mt-4">
                                    <img
                                        src={wasetLogo}
                                        alt="Waset Logo"
                                        className="rounded-circle object-fit-cover"
                                        style={{ width: '5rem', height: '5rem', border: '4px solid rgba(255, 255, 255, 0.3)' }}
                                    />
                                    <p className="fs-5 opacity-75">
                                        Create an account and discover the possibilities!
                                    </p>
                                </div>
                                <div className="d-flex flex-column gap-4 mt-4">
                                    <div className="d-flex align-items-center gap-4 hover-translate custom-transition">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center animate-pulse" 
                                            style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                            <span className="fs-4">🚀</span>
                                        </div>
                                        <div>
                                            <h3 className="fw-normal text-white">Expatriate Services</h3>
                                            <p className="opacity-75">Making your life easier away from home</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-4 hover-translate custom-transition">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center animate-pulse" 
                                            style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                            <span className="fs-4">🛡️</span>
                                        </div>
                                        <div>
                                            <h3 className="fw-normal text-white">Secure by Design</h3>
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
                                <div 
                                    className="tab-item tab-item-inactive"
                                    onClick={() => nav('/')}
                                >
                                    <LogIn size={18} />
                                    Login
                                </div>
                                <div className="tab-item tab-item-active">
                                    <UserPlus size={18} />
                                    Sign Up
                                </div>
                            </div>

                            <h3 className="auth-welcome-text">Create your account</h3>

                            <div className="d-flex flex-column gap-3">
                                <button className="social-btn">
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

                            <form onSubmit={handleSubmit(save)}>
                                <div className="form-floating">
                                    <input
                                        {...register('name')}
                                        type="text"
                                        id="name"
                                        placeholder=" "
                                        className="form-input"
                                        required
                                    />
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    {errors.name && <small className="text-danger">{errors.name.message}</small>}
                                </div>
                                <div className="form-floating">
                                    <input
                                        {...register('email')}
                                        type="email"
                                        id="email"
                                        placeholder=" "
                                        className="form-input"
                                        required
                                    />
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    {errors.email && <small className="text-danger">{errors.email.message}</small>}
                                </div>
                                <div className="form-floating">
                                    <input
                                        {...register('pass')}
                                        type="password"
                                        id="pass"
                                        placeholder=" "
                                        className="form-input"
                                        required
                                    />
                                    <label htmlFor="pass" className="form-label">Password</label>
                                    {errors.pass && <small className="text-danger">{errors.pass.message}</small>}
                                </div>
                                <div className="form-floating">
                                    <input
                                        {...register('confirmpass')}
                                        type="password"
                                        id="confirmpass"
                                        placeholder=" "
                                        className="form-input"
                                        required
                                    />
                                    <label htmlFor="confirmpass" className="form-label">Confirm Password</label>
                                    {errors.confirmpass && <small className="text-danger">{errors.confirmpass.message}</small>}
                                </div>
                                
                                {signupError && <div className="alert alert-danger" role="alert">{signupError}</div>}
                                
                                <button
                                    type="submit"
                                    className="auth-submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? 'Creating Account...' : 'Create Account'}
                                    <ArrowRight size={16} />
                                </button>
                            </form>

                            <div className="auth-footer">
                                <p>
                                    Already have an account?{' '}
                                    <a 
                                        className="auth-link"
                                        onClick={() => nav('/')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Sign in
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

export default Signup;
