import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authstorre';
import wasetLogo from '../assets/waset.png';
import google from '../assets/google.png';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../Redux/CurrentUser';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseconfig';

function Login() {    
    


    const nav = useNavigate();
    const AuthStore = useAuth();
    const [user, setUser] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    let flag = false;
    //نتأكد ان اليوزر اللي بيسجل الدخول انه متسجل ف الUSERS
   
    
    async function save(event) {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const useree =  await AuthStore.login(user);
            // dispatch(setCurrentUser(useree.uid));
            localStorage.setItem("currentUser", JSON.stringify(useree.uid));
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
                localStorage.setItem("currentUser", JSON.stringify(doc.data()));
                dispatch(setCurrentUser(doc.data()));
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
    })

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
        <div style={{ 
            background: "linear-gradient(97deg, rgba(9,30,61,1) 70%, rgba(255,255,255,1) 95%)",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center"
        }}>
            <div className="row justify-content-around w-100">
                <div className="col-md-6 col-lg-4 mt-5">
                    <img src={wasetLogo} alt="logo" className="w-75 mb-5 mt-5 mx-auto d-block" />
                    <h2 className="text-center text-white fw-bolder">
                        Expatriate Services: Making your life easier away from home
                    </h2>
                </div>
                <div className="col-md-6 col-lg-4">
                    <form onSubmit={save} style={{ width: 390, background: "linear-gradient(97deg, rgba(9,30,61,1) 49%, rgba(255,255,255,1) 99%)" }} className=" rounded-5 p-3">
                        <img src={wasetLogo} alt="img" className="w-50 mx-auto d-block mb-4" />
                        <p className="text-white text-center mb-4 fw-bold">
                            Welcome back! Please enter your details.
                        </p>
                        <div className="d-flex justify-content-around p-2 rounded-4 mb-3" style={{ backgroundColor: "rgb(216, 220, 220)" }}>
                            <button type="button" style={{ backgroundColor: "rgba(9,30,61,1)" }} className="btn text-white  py-2 px-5 rounded-3 fw-bold" onClick={() => nav('/')}>
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
                        <button className='btn btn-primary px-5 py-1 w-100 rounded mt-2' onClick={handleGoogleLogin}>
                            <img src={google} alt="gmail" style={{ width: 40 }} />
                            <span className='text-white ms-3'>Continue With Google</span>
                        </button>
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
