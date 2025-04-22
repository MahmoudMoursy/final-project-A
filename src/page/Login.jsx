import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authstorre';
import wasetLogo from '../assets/waset.png';
import icon from '../../public/favicon.svg';
import { LogIn, UserPlus, ArrowRight, Building2, Github } from 'lucide-react';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { deleteCurrentUser, setCurrentUser } from '../Redux/CurrentUser';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseconfig';
import './loginStyle.css';



function Login() {
    const nav = useNavigate();
    const AuthStore = useAuth();
    const [user, setUser] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    let flag = false;

    useEffect(() => {
        localStorage.removeItem("currentUser");
        dispatch(deleteCurrentUser());
        console.log("1");

    }, []);

    async function save(event) {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const useree = await AuthStore.login(user);
            localStorage.setItem("currentUser", JSON.stringify(useree.uid));
            dispatch(setCurrentUser(useree.uid));
            fetchUsers(useree.uid);
            console.log("2");

        } catch (err) {
            setError("البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى.");
            setLoading(false);
        }
    }

    const fetchUsers = async (useree) => {
        try {
            const querySnapshot = await getDocs(collection(db, "user"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id);
                console.log(useree);
                if (doc.id == useree) {
                    flag = true;
                    localStorage.setItem("currentUser", JSON.stringify(doc.data()));
                    dispatch(setCurrentUser(doc.data()));
                    nav('/home');
                    setLoading(false);
                }
            });

        } catch (error) {
            console.error("Error fetching users: ", error);
        }
        if (!flag) {
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
            setError("فشل تسجيل الدخول باستخدام جوجل. يرجى المحاولة مرة أخرى.");
        }

    }

    return (
        <div className="min-vh-100 bg-gradient-custom-dark d-flex align-items-center justify-content-center p-4">
            <div className="card auth-card" style={{ maxWidth: '72rem' }}>
                <div className="row g-0">
                    {/* Content Side */}
                    <div className="col-md-6 auth-form-container">
                        <div className="mx-auto" style={{ maxWidth: '28rem' }}>
                            {/* Tab switcher styled like the image */}
                            <div className="tab-container" style={{ direction: 'rtl' }}>
                                <div className="tab-item tab-item-active">
                                    <LogIn size={18} />
                                    تسجيل الدخول
                                </div>
                                <div
                                    className="tab-item tab-item-inactive"
                                    onClick={() => nav('/Signup')}
                                >
                                    <UserPlus size={18} />
                                    إنشاء حساب
                                </div>
                            </div>

                            <h3 className="auth-welcome-text" style={{ direction: 'rtl' }}>مرحباً بعودتك!</h3>

                            <div className="d-flex flex-column gap-3">
                                <button
                                    className="social-btn"
                                    onClick={handleGoogleLogin}
                                    style={{ direction: 'rtl' }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    المتابعة باستخدام جوجل
                                </button>
                                <button
                                    className="social-btn"
                                    // onClick={handleFacebookLogin}
                                    style={{ direction: 'rtl' }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#4285F4">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                    </svg>
                                    المتابعة باستخدام فيسبوك
                                </button>
                            </div>

                            <div className="divider" style={{ direction: 'rtl' }}>أو المتابعة باستخدام</div>

                            <form onSubmit={save}>
                                <div className="form-floating" style={{ direction: 'rtl' }}>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder=" "
                                        className="form-input"
                                        onChange={handleInputChange}
                                        value={user.email}
                                        required
                                        style={{ textAlign: 'right' }}
                                    />
                                    <label htmlFor="email" className="form-label" style={{ right: '0', left: 'auto', paddingRight: '0.75rem' }}>البريد الإلكتروني</label>
                                </div>
                                <div className="form-floating" style={{ direction: 'rtl' }}>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder=" "
                                        className="form-input"
                                        onChange={handleInputChange}
                                        value={user.password}
                                        required
                                        style={{ textAlign: 'right' }}
                                    />
                                    <label htmlFor="password" className="form-label" style={{ right: '0', left: 'auto', paddingRight: '0.75rem' }}>كلمة المرور</label>
                                </div>
                                <div className="remember-me" style={{ direction: 'rtl' }}>
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="form-check-input"
                                        />
                                        تذكرني
                                    </label>
                                    <a
                                        onClick={() => nav('/ForgotPassword')}
                                        className="forgot-password"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        نسيت كلمة المرور؟
                                    </a>
                                </div>
                                {error && <div className="alert alert-danger" role="alert" style={{ direction: 'rtl' }}>{error === "Invalid email or password. Please try again." ? "البريد الإلكتروني أو كلمة المرور غير صحيحة. يرجى المحاولة مرة أخرى." : error === "Google login failed. Please try again." ? "فشل تسجيل الدخول باستخدام جوجل. يرجى المحاولة مرة أخرى." : error}</div>}
                                <button
                                    type="submit"
                                    className="auth-submit-btn"
                                    disabled={loading}
                                    style={{ direction: 'rtl' }}
                                >
                                    {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                                    <ArrowRight size={16} />
                                </button>
                            </form>

                            <div className="auth-footer" style={{ direction: 'rtl' }}>
                                <p>
                                    ليس لديك حساب؟{' '}
                                    <a
                                        className="auth-link"
                                        onClick={() => nav('/Signup')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        إنشاء حساب
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="col-md-6 bg-gradient-custom text-white p-4 p-md-5 position-relative overflow-hidden">
                        {/* Animated background circles */}
                        <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden">
                            <div className="bg-circle bg-circle-1 animate-float"></div>
                            <div className="bg-circle bg-circle-2 animate-float-delayed"></div>
                        </div>

                        <div className="h-100 d-flex flex-column justify-content-center gap-4 animate-fade-in position-relative" style={{ zIndex: 10 }}>
                            <div className="d-flex align-items-center justify-content-center gap-3">
                                <h1 className="fs-1 fw-normal text-white">Waseet</h1>
                                <img src={wasetLogo} alt="logo" className="w-25" />
                            </div>
                            <div className="mb-4">
                                <h2 className="display-5 mb-5 mt-4 fw-normal lh-sm text-white" style={{ direction: 'rtl' }}>
                                    مرحباً بعودتك إلى منصتنا
                                </h2>
                                <div className="d-flex align-items-center gap-4 animate-bounce-subtle mt-4" style={{ direction: 'rtl' }}>
                                    <img
                                        src={icon}
                                        alt="شعار وسيط"
                                        className="rounded-circle object-fit-cover"
                                        style={{ width: '3rem', height: '3rem', border: '4px solid rgba(255, 255, 255, 0.3)' }}
                                    />
                                    <p className="fs-5 ">
                                        قم بالوصول إلى حسابك ومواصلة رحلتك معنا!
                                    </p>
                                </div>
                                <div className="d-flex flex-column gap-4 mt-4">
                                    <div className="d-flex align-items-center gap-4 hover-translate custom-transition" style={{ direction: 'rtl' }}>
                                        <div className="rounded-circle d-flex align-items-center justify-content-center animate-pulse"
                                            style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                            <span className="fs-4">🚀</span>
                                        </div>
                                        <div>
                                            <h3 className="fw-normal text-white">خدمات المغتربين</h3>
                                            <p className="opacity-75">نجعل حياتك أسهل بعيداً عن الوطن</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-4 hover-translate custom-transition" style={{ direction: 'rtl' }}>
                                        <div className="rounded-circle d-flex align-items-center justify-content-center animate-pulse"
                                            style={{ width: '3rem', height: '3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                            <span className="fs-4">🛡️</span>
                                        </div>
                                        <div>
                                            <h3 className="fw-normal text-white">آمن بالتصميم</h3>
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

export default Login;
