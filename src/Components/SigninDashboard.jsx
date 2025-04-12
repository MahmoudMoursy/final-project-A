import React from 'react';
import './SigninDashboard.css'; // Import the CSS file for styling
import {collection, addDoc, getFirestore, getDoc, doc, getDocs} from 'firebase/firestore';
import db from '../firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDashboard } from '../Redux/UserDashboard';

function SigninDashboard() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const check = async (e) => {
        e.preventDefault();
        const emailInput = e.target.email.value;
        const passwordInput = e.target.password.value;

        try {
            const querySnapshot = await getDocs(collection(db, "AdminManagment"));
            let isValid = false;

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.email === emailInput && data.password === passwordInput) {
                    isValid = true;
                    localStorage.setItem("userDashboard", JSON.stringify(data));
                    dispatch(setUserDashboard(data));    
                  
                    
                }
            });

            if (isValid) {
                nav('/dashboard', { state: { data: "hi from login" } });
                console.log("Login successful!");

            } else {
                console.error("Invalid email or password.");
                // Add further actions for failed login
            }
        } catch (error) {
            console.error("Error checking credentials: ", error);
        }
    };
    
    // const fetchDocuments = async () => {
    //     try {
    //         const querySnapshot = await getDocs(collection(db, "AdminManagment"));
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.id, "=>", doc.data());
    //         });
    //     } catch (error) {
    //         console.error("Error fetching documents: ", error);
    //     }
    // };

    // fetchDocuments();

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Dashboard Sign In</h2>
        <form className="signin-form" onSubmit={check}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signin-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default SigninDashboard;