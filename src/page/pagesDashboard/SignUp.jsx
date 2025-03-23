import React from 'react'
import db from '../../firebaseconfig';
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SideBar from '../../Components/sideBar';
import {collection,addDoc } from 'firebase/firestore'


function SignUp() {
    function save (){ 
        console.log(db);

        addDoc(collection(db,"AdminManagment"),{
            userName:document.getElementById("userName").value,
            password:document.getElementById("password").value,
            role:document.querySelector('input[name="GFG"]:checked').value
        })

    }
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const [submitted, setSubmitted] = useState(false);
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      };
  return (
    <div className="dashboard-container">
    <SideBar/>
       <div className="dashboard-main d-flex justify-content-center align-items-center min-vh-100 bg-light p-4">
      <div className="card shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <div className="card-header text-center bg-dark  text-white">
          <h5 className="card-title">Add Member</h5>
        </div>
        <div className="card-body">
          {submitted && (
            <div className="alert alert-success text-center" role="alert">
              Form submitted successfully!
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
              <label htmlFor="userName" className="form-label">User Name</label>
              <input id="userName" type="text" className="form-control" placeholder="Enter userName" {...register("userName", { required: "userName is required" })} />
              {errors.userName && <div className="text-danger small">{errors.userName.message}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input id="password" type="password" className="form-control" placeholder="Enter Password" {...register("password", { required: "Password is required" })} />
              {errors.password && <div className="text-danger small">{errors.password.message}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Select Role</label>
                
                <div>
                    <input name='GFG' type="radio"value="admin"/>
                    <label htmlFor="admin" className="ms-2">Admin</label>
                </div>
                
                <div>
                    <input name='GFG' type="radio" value="supervisor"/>
                    <label htmlFor="supervisor" className="ms-2">Supervisor</label>
                </div>
                
                {errors.role && <div className="text-danger small">{errors.role.message}</div>}
                </div>


            <button onClick={save} className="btn btn-dark w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
                                


    </div>
  )
}

export default SignUp
