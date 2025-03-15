import React from 'react'
import db, { auth } from '../firebaseconfig'
import {collection,addDoc, getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
function Profileform() {
   
    
    const database = db;
    
    function save (){ 
            addDoc(collection(db,"user"),{
                username:document.getElementById("name").value,
                address:document.getElementById("address").value,
                city:document.getElementById("city").value,
                email:document.getElementById("email").value,
                phonenumber:document.getElementById("phone").value,
                bio:document.getElementById("bio").value,
                university:document.getElementById("university").value,
                status:document.querySelector('input[name="GFG"]:checked').value

                // status:
                // userId:userId
            })
   
        }

        
            
            

        return (
            
            
    <div>
        <div>
            <h2 className="text-black text-center  fw-bold p-5"style={{backgroundColor:"#689CA5FF"}}>
                 Please Complete your profile
                </h2>
            <div className='d-flex' style={{justifyContent:"center"}}>
            <form className=" border-black bg-white w-50 p-3 mt-4  rounded " >
                <div className='d-flex gap-5' style={{justifyContent:"space-around"}}>
                <div className="mb-1">
                                        <label htmlFor="name" className="text-black fw-bold">Your Name</label>
                                        <input  type="text" placeholder="Enter your name" id="name" className="form-control mt-2 border border-black" />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="email" className="text-black fw-bold">Email</label>
                                        <input  type="email" placeholder="Enter your email" id="email" className="form-control mt-2 border border-black" />
                                    </div>
                </div>
                                    <div className='d-flex gap-5 mt-5' style={{justifyContent:"space-around"}}>
                                    <div className="mb-1">
                                        <label htmlFor="city" className="text-black fw-bold">City</label>
                                        <input  type="text" id="city" className="form-control mt-2 border border-black" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="text-black fw-bold">Address</label>
                                        <input type="text" id="address" className="form-control mt-2 border border-black" />
                                    </div>
                                    </div>
                                    <div className='d-flex gap-5 mt-5' style={{justifyContent:"space-around"}}>
                                    <div className="mb-1">
                                        <label htmlFor="phone" className="text-black fw-bold">Phone Number</label>
                                        <input  type="text" id="phone" className="form-control mt-2 border border-black" />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="university" className="text-black fw-bold">University </label>
                                        <input  type="text" id="university" className="form-control mt-2 border border-black" />
                                    </div>
                                    </div>
                                    <div className="mb-1 mx-5 mt-3">
                                        <label htmlFor="bio" className="text-black fw-bold">Bio</label>
                                        <textarea  type="text" id="bio" className="form-control mt-2 border border-black" />
                                    </div>
                                    <input type="radio"  name='GFG' value="publisher" />publisher
                                    <input type="radio"  name='GFG' value="veiwer" />veiwer
                                </form>
                                    <button onClick={save} style={{}}   className="btn btn-primary  rounded mt-3 w-75" >
                                       Next
                                    </button>
                                

                    </div>
                </div>
    </div>

  )
}

export default Profileform