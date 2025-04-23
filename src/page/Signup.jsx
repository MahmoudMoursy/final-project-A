import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../authstorre';
import wasetLogo from '../assets/waset.png';
import icon from '../../public/favicon.svg';
import { LogIn, UserPlus, ArrowRight, Building2, Github } from 'lucide-react';
import './loginStyle.css';


function Signup() {
    const authStore = useAuth();
    const nav = useNavigate();
    const [loading, setLoading] = useState(false);
    const [signupError, setSignupError] = useState("");

    const schema = z.object({
        name: z.string().min(7, "الاسم يجب أن يكون أكثر من 7 أحرف").max(20, 'الاسم يجب أن يكون أقل من 20 حرف'),
        email: z.string().email("عنوان البريد الإلكتروني غير صالح"),
        pass: z.string().min(10, "كلمة المرور يجب أن تكون أكثر من 10 أحرف").max(20, 'كلمة المرور يجب أن تكون أقل من 20 حرف'),
        confirmpass: z.string()
    }).refine((data) => data.pass === data.confirmpass, {
        message: "كلمة المرور وتأكيد كلمة المرور غير متطابقين",
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
            setSignupError("فشل في إنشاء الحساب. يرجى المحاولة مرة أخرى.");
        }

        setLoading(false);
    }

    return (
        <div className="min-vh-100 bg-gradient-custom-dark d-flex align-items-center justify-content-center p-4">
            <div className="card auth-card" style={{ maxWidth: '72rem' }}>
                <div className="row g-0">

{/* Form Side */}
<div className="col-md-6 auth-form-container mt-5 mb-5">
                        <div className="mx-auto" style={{ maxWidth: '28rem' }}>
                            {/* Tab switcher styled like the image */}
                            <div className="tab-container" style={{ direction: 'rtl' }}>
                                <div
                                    className="tab-item tab-item-inactive"
                                    onClick={() => nav('/')}
                                >
                                    <LogIn size={18} />
                                    تسجيل الدخول
                                </div>
                                <div className="tab-item tab-item-active">
                                    <UserPlus size={18} />
                                    إنشاء حساب
                                </div>
                            </div>

                            <h3 className="auth-welcome-text" style={{ direction: 'rtl' }}>إنشاء حسابك</h3>

                            <div className="d-flex flex-column gap-3">
                                <button className="social-btn" style={{ direction: 'rtl' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    المتابعة باستخدام جوجل
                                </button>
                                <button className="social-btn" style={{ direction: 'rtl' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#4285F4">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                    المتابعة باستخدام فيسبوك
                                </button>
                            </div>

                            <div className="divider" style={{ direction: 'rtl' }}>أو المتابعة باستخدام</div>

                            <form onSubmit={handleSubmit(save)}>
                                <div className="form-floating" style={{ direction: 'rtl' }}>
                                    <input
                                        {...register('name')}
                                        type="text"
                                        id="name"
                                        placeholder=" "
                                        className="form-input"
                                        required
                                        style={{ textAlign: 'right' }}
                                    />
                                    <label htmlFor="name" className="form-label" style={{ right: '0', left: 'auto', paddingRight: '0.75rem' }}>الاسم الكامل</label>
                                    {errors.name && <small className="text-danger">{errors.name.message}</small>}
                                </div>
                                <div className="form-floating" style={{ direction: 'rtl' }}>
                                    <input
                                        {...register('email')}
                                        type="email"
                                        id="email"
                                        placeholder=" "
                                        className="form-input"
                                        required
                                        style={{ textAlign: 'right' }}
                                    />
                                    <label htmlFor="email" className="form-label" style={{ right: '0', left: 'auto', paddingRight: '0.75rem' }}>البريد الإلكتروني</label>
                                    {errors.email && <small className="text-danger">{errors.email.message}</small>}
                                </div>
                                <div className="form-floating" style={{ direction: 'rtl' }}>
                                    <input
                                        {...register('pass')}
                                        type="password"
                                        id="pass"
                                        placeholder=" "
                                        className="form-input"
                                        required
                                        style={{ textAlign: 'right' }}
                                    />
                                    <label htmlFor="pass" className="form-label" style={{ right: '0', left: 'auto', paddingRight: '0.75rem' }}>كلمة المرور</label>
                                    {errors.pass && <small className="text-danger">{errors.pass.message}</small>}
                                </div>
                                <div className="form-floating" style={{ direction: 'rtl' }}>
                                    <input
                                        {...register('confirmpass')}
                                        type="password"
                                        id="confirmpass"
                                        placeholder=" "
                                        className="form-input"
                                        required
                                        style={{ textAlign: 'right' }}
                                    />
                                    <label htmlFor="confirmpass" className="form-label" style={{ right: '0', left: 'auto', paddingRight: '0.75rem' }}>تأكيد كلمة المرور</label>
                                    {errors.confirmpass && <small className="text-danger">{errors.confirmpass.message}</small>}
                                </div>

                                {signupError && <div className="alert alert-danger" role="alert" style={{ direction: 'rtl' }}>{signupError}</div>}

                                <button
                                    type="submit"
                                    className="auth-submit-btn btn-hover-effect"
                                    disabled={loading}
                                    style={{ direction: 'rtl' }}
                                >
                                    {loading ? 'جاري التسجيل...' : 'إنشاء حساب'}
                                    <ArrowRight size={16} />
                                </button>
                            </form>

                            <div className="auth-footer" style={{ direction: 'rtl' }}>
                                <p>
                                    لديك حساب بالفعل؟{' '}
                                    <a
                                        className="auth-link"
                                        onClick={() => nav('/')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        تسجيل الدخول
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="col-md-6 bg-gradient-custom text-white p-4 p-md-5 position-relative overflow-hidden" style={{ direction: 'rtl' }}>
                        {/* Animated background circles */}
                        <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden">
                            <div className="bg-circle bg-circle-1 animate-float"></div>
                            <div className="bg-circle bg-circle-2 animate-float-delayed"></div>
                        </div>


                        <div className="h-100 d-flex flex-column justify-content-center gap-4 animate-fade-in position-relative" style={{ zIndex: 10, height: '100%' }}>
                            <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
    <img src={wasetLogo} alt="logo" className="w-25" />
    <h1 className="fs-1 fw-normal text-white" style={{ direction: 'rtl' }}>Waseet</h1>
</div>
<div className="mb-5 mt-4">
    <h2 className="display-5 mb-5 fw-normal lh-sm text-white" style={{ direction: 'rtl' }}>
        إنضم إلي مجتمعنا اليوم
    </h2>
    <div className="d-flex align-items-center gap-4 animate-bounce-subtle mt-4" style={{ direction: 'rtl' }}>
        <img
            src={icon}
            alt="Waset Logo"
            className="rounded-circle object-fit-cover"
            style={{ width: '3rem', height: '3rem', border: '4px solid rgba(255, 255, 255, 0.3)' }}
        />
        <p className="fs-5 " style={{ direction: 'rtl' }}>
            إنشئ حساب جديد واكتشف الفرص!
        </p>
    </div>
    <div className="d-flex flex-column gap-4 mt-4">
        <div className="d-flex align-items-center gap-4 hover-translate custom-transition" style={{ direction: 'rtl' }}>
            <div className="rounded-circle d-flex align-items-center justify-content-center animate-pulse"
                style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <span className="fs-4">🚀</span>
            </div>
            <div>
                <h3 className="fw-normal text-white">خدمات للمغتربين</h3>
                <p className="opacity-75">نجعل حياتك أسهل بعيداً عن بيتك</p>
            </div>
        </div>
        <div className="d-flex align-items-center gap-4 hover-translate custom-transition" style={{ direction: 'rtl' }}>
            <div className="rounded-circle d-flex align-items-center justify-content-center animate-pulse"
                style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <span className="fs-4">🛡️</span>
            </div>
            <div>
                <h3 className="fw-normal text-white">تصميم آمن</h3>
                <p className="opacity-75">بياناتك محمية دائماً</p>
            </div>
        </div>
    </div>
</div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default Signup;
