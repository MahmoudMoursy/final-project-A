import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wasetLogo from '../assets/waset.png';
import { ArrowRight, ArrowLeft, Mail } from 'lucide-react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import './loginStyle.css';

function ForgotPassword() {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });

    async function handleResetPassword(event) {
        event.preventDefault();
        setLoading(true);
        setMessage({ text: "", type: "" });

        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, email);
            setMessage({ 
                text: "Password reset email sent! Please check your inbox.", 
                type: "success" 
            });
        } catch (error) {
            console.error("Error sending reset email:", error);
            setMessage({ 
                text: "Failed to send reset email. Please check your email address and try again.", 
                type: "error" 
            });
        }

        setLoading(false);
    }

    function handleInputChange(event) {
        setEmail(event.target.value);
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
                                    Reset your password
                                </h2>
                                <div className="d-flex align-items-center gap-4 animate-bounce-subtle mt-4">
                                    <Mail size={48} className="text-white opacity-75" />
                                    <p className="fs-5 opacity-75">
                                        Enter your email address and we'll send you a link to reset your password.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="col-md-6 bg-white p-4 p-md-5">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <div className="auth-welcome-text mb-4">
                                <h3>Forgot your password?</h3>
                                <p className="text-muted">Don't worry, we'll help you reset it.</p>
                            </div>

                            <form onSubmit={handleResetPassword}>
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder=" "
                                        className="form-input"
                                        onChange={handleInputChange}
                                        value={email}
                                        required
                                    />
                                    <label htmlFor="email">Email Address</label>
                                </div>
                                
                                {message.text && (
                                    <div 
                                        className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`} 
                                        role="alert"
                                    >
                                        {message.text}
                                    </div>
                                )}
                                
                                <button
                                    type="submit"
                                    className="auth-submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Send Reset Link'}
                                    <ArrowRight size={16} />
                                </button>
                            </form>

                            <div className="auth-footer">
                                <button 
                                    onClick={() => nav('/')}
                                    className="btn btn-link d-flex align-items-center justify-content-center gap-2 text-decoration-none"
                                    style={{ color: '#4e6af8' }}
                                >
                                    <ArrowLeft size={16} />
                                    Back to Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
