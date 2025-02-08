import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import logo from '../assets/Logo.png';

function Signup() {
    const nav = useNavigate();

    const schema = z.object({
        name: z.string().min(7, "Name must be more than 7 characters").max(15, 'Name must be less than 15 characters'),
        email: z.string().email(),
        pass: z.string().min(10, "password must be more than 10 number & characters").max(20, 'password must be less than 20 number & characters'),
        confirmpass:z.string()
    })
    .refine((dataa) => dataa.pass === dataa.confirmpass, {
        message: "Password and confirm password don't match",
        path: ["confirmpass"],
    });

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(schema)
    });

    function save(data) {
        console.log(data);
        nav('/Login', { replace: true, state: { data: "hi from signup" } });
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-around mt-md-0 m-lg-5">
                    <div className="col-md-6 col-lg-4 mt-md-0 m-lg-5 ">
                        <img
                            src={logo} alt="logo" className="w-50 mb-5 mt-5 mx-auto d-block" />
                        <h2 className="text-center text-black fw-bolder">
                            Expatriate Services: Making your life easier away from home
                        </h2>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <form onSubmit={handleSubmit(save)} className="border border-1 border-black bg-white rounded-5 p-3">
                            <img src={logo} alt="img" className="w-25 mx-auto d-block mb-4" />
                            <p className="text-black text-center mb-4 fw-bold">
                                Please Sign Up To Continue To App
                            </p>
                            <div className="d-flex justify-content-around p-2 rounded-4 mb-3" style={{ backgroundColor: "rgb(216, 220, 220)" }}>
                                <button type="button" className="btn py-2 px-5 rounded-3 fw-bold" onClick={() => nav('/')}>
                                    Login
                                </button>
                                <button type="button" className="btn px-5 bg-white py-2 rounded-3 fw-bold" onClick={() => nav('/Signup')}>
                                    Sign Up
                                </button>
                            </div>
                            <div className="mb-1">
                                <label htmlFor="name" className="text-black fw-bold">Your Name</label>
                                <input {...register('name')} type="text" placeholder="Enter your name" id="name" className="form-control mt-2 border border-light" />
                            </div>
                            <small style={{ color: 'red' }} >{errors.name?.message}</small>
                            <div className="mb-1">
                                <label htmlFor="name" className="text-black fw-bold">Email</label>
                                <input {...register('email')} type="email" placeholder="Enter your email" id="email" className="form-control mt-2 border border-light" />
                            </div>
                            <small style={{ color: 'red' }} >{errors.email?.message}</small>
                            <div className="mb-1">
                                <label htmlFor="password" className="text-black fw-bold">Password</label>
                                <input {...register('pass')}  type="password" id="password" className="form-control mt-2 border border-light" />
                            </div>
                            <small style={{ color: 'red' }} >{errors.pass?.message}</small>
                            <div className="mb-3">
                                <label  htmlFor="Confirm" className="text-black fw-bold">Confirm Password</label>
                                <input {...register('confirmpass')} type="password" id="Confirm" className="form-control mt-2 border border-light" />
                            </div>
                            <small style={{ color: 'red' }} >{errors.confirmpass?.message}</small>
                            <button type="submit" className="btn btn-primary w-100 rounded mt-3">Sign Up</button>
                            <p className="text-black text-center fw-bold mt-4">
                                I have an account <a className='text-blue' style={{textDecoration:'none'}}  onClick={(e) => { e.preventDefault(); nav('/'); }}>Login</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
