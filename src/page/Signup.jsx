import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../authstorre';
import { useState } from 'react';
import wasetLogo from '../assets/waset.png';

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

            nav('/', { replace: true, state: { data: "hi from signup" } });

        } catch (error) {
            console.error("Signup error:", error);
            setSignupError("Failed to sign up. Please try again.");
        }

        setLoading(false);
    }

    return (
        <div  style={{ background: "linear-gradient(97deg, rgba(9,30,61,1) 70%, rgba(255,255,255,1) 95%)" }}>
            <div >
                <div className="row justify-content-around pt-4 pb-5">
                    <div className="col-md-6 col-lg-4 mt-md-0 mt-lg-5">
                        <img src={wasetLogo} alt="logo" className="w-50 mb-5 mt-5 mx-auto d-block" />
                        <h2 className="text-center text-white fw-bolder">
                            Expatriate Services: Making your life easier away from home
                        </h2>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <form onSubmit={handleSubmit(save)}style={{width:390, background: "linear-gradient(97deg, rgba(9,30,61,1) 49%, rgba(255,255,255,1) 99%)"}} className=" rounded-5 p-3">
                            <img src={wasetLogo} alt="img" className="w-25 mx-auto d-block mb-4" />
                            <p className="text-white text-center mb-4 fw-bold">
                                Please Sign Up To Continue To App
                            </p>
                            <div className="d-flex justify-content-around p-2 rounded-4 mb-3" style={{ backgroundColor: "rgb(216, 220, 220)" }}>
                                <button type="button" className="btn py-2 px-5 rounded-3 fw-bold" onClick={() => nav('/')}>
                                    Login
                                </button>
                                <button type="button" style={{backgroundColor:"rgba(9,30,61,1)"}} className="btn px-5  text-white py-2 rounded-3 fw-bold"  onClick={() => nav('/Signup')}>
                                    Sign Up
                                </button>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="name" className="text-white fw-bold">Your Name</label>
                                <input {...register('name')} type="text" placeholder="Enter your name" id="name" className="form-control mt-2 border border-light" />
                                <small style={{ color: 'red' }}>{errors.name?.message}</small>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="email" className="text-white fw-bold">Email</label>
                                <input {...register('email')} type="email" placeholder="Enter your email" id="email" className="form-control mt-2 border border-light" />
                                <small style={{ color: 'red' }}>{errors.email?.message}</small>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="password" className="text-white fw-bold">Password</label>
                                <input {...register('pass')} type="password" id="password" className="form-control mt-2 border border-light" />
                                <small style={{ color: 'red' }}>{errors.pass?.message}</small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Confirm" className="text-white fw-bold">Confirm Password</label>
                                <input {...register('confirmpass')} type="password" id="Confirm" className="form-control mt-2 border border-light" />
                                <small style={{ color: 'red' }}>{errors.confirmpass?.message}</small>
                            </div>

                            {signupError && <p className="text-danger text-center fw-bold">{signupError}</p>}

                            <button type="submit" className="btn btn-primary w-100 rounded mt-3" disabled={loading}>
                                {loading ? "Signing Up..." : "Sign Up"}
                            </button>

                            <p className="text-white text-center fw-bold mt-4">
                                I have an account <a className='text-blue' style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); nav('/'); }}>Login</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
