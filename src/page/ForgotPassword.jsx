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
                text: "تم إرسال رابط إعادة تعيين كلمة المرور! يرجى التحقق من بريدك الإلكتروني.",
                type: "success"
            });
        } catch (error) {
            console.error("Error sending reset email:", error);
            setMessage({
                text: "فشل في إرسال بريد إعادة التعيين. يرجى التحقق من عنوان بريدك الإلكتروني والمحاولة مرة أخرى.",
                type: "error"
            });
        }

        setLoading(false);
    }

    function handleInputChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div className="min-vh-100 bg-gradient-custom-dark d-flex align-items-center justify-content-center p-4">
            <div className="card auth-card" style={{ maxWidth: '72rem' }}>
                <div className="row g-0">
{/* Form Side */}
<div className="col-md-6 auth-form-container">
                        <div className="mx-auto" style={{ maxWidth: '28rem' }} dir='rtl'>
                            <div className="auth-welcome-text mb-4 mt-5" style={{ direction: 'rtl' }}>
                                <h3>نسيت كلمة المرور؟</h3>
                                <p className="text-muted">لا تقلق، سنساعدك على إعادة تعيينها.</p>
                            </div>

                            <form onSubmit={handleResetPassword}>
                                <div className="form-floating" style={{ direction: 'rtl' }}>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder=" "
                                        className="form-input"
                                        onChange={handleInputChange}
                                        value={email}
                                        required
                                        style={{ textAlign: 'right' }}
                                    />
                                    <label htmlFor="email" className="form-label" style={{ right: '0', left: 'auto', paddingRight: '0.75rem' }}>البريد الإلكتروني</label>
                                </div>

                                {message.text && (
                                    <div
                                        className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}
                                        role="alert"
                                        style={{ direction: 'rtl' }}
                                    >
                                        {message.text}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="auth-submit-btn btn-hover-effect"
                                    disabled={loading}
                                    style={{ direction: 'rtl' }}
                                >
                                    <ArrowRight size={16} />
                                    {loading ? 'جاري الإرسال...' : 'إرسال رابط إعادة التعيين'}
                                </button>
                            </form>

                            <div className="auth-footer" style={{ direction: 'rtl' }}>
                                <button
                                    onClick={() => nav('/')}
                                    className="btn btn-link d-flex align-items-center justify-content-center gap-2 text-decoration-none"
                                    style={{ color: '#6b40c7' }}
                                >
                                    العودة إلى تسجيل الدخول
                                    <ArrowLeft size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 bg-gradient-custom text-white p-4 p-md-5 position-relative overflow-hidden">

                        <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden">
                            <div className="bg-circle bg-circle-1 animate-float"></div>
                            <div className="bg-circle bg-circle-2 animate-float-delayed"></div>
                        </div>
{/* 
Form Side */}
                        <div className="h-100 d-flex flex-column justify-content-center gap-4 animate-fade-in position-relative" style={{ zIndex: 10 }}>
                            <div className="d-flex align-items-center gap-3 justify-content-center">
                                <h1 className="fs-1 fw-normal text-white ">Waseet</h1>
                                <img src={wasetLogo} alt="logo" className="w-25" />
                            </div>
                            <div className="mb-4 text-end">
                                <h2 className="display-6 fw-normal lh-sm text-white text-end mt-5 mb-5">
                                    إعادة تعيين كلمة المرور
                                </h2>
                                <div className="d-flex align-items-center gap-4 animate-bounce-subtle mt-4">
                                    <p className="fs-5 opacity-75" dir='rtl'>
                                        أدخل عنوان بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور.
                                    </p>
                                    <Mail size={48} className="text-white opacity-75" />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
