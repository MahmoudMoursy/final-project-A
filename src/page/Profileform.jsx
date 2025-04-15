import React from 'react'
import db from '../firebaseconfig'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function Profileform() {
    const nav = useNavigate();
    const useId = JSON.parse(localStorage.getItem("currentUser"));
    console.log(useId.UserId)
    const userRef = doc(db, "user", useId.UserId);
    async function save() {
        const userData = {
            username: document.getElementById("name").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,
            phonenumber: document.getElementById("phone").value,
            bio: document.getElementById("bio").value,
            university: document.getElementById("university").value,
            status: document.querySelector('input[name="GFG"]:checked')?.value || "",
            UserId: useId.UserId,
        };
        await setDoc(userRef, userData);
        nav('/');
    }

    return (<>
        <style>{`
    .profile-bg {
  height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #6610f2 100%);
  background-size: cover;
}

.glass-card {
  background-color:#FFFFFFFF;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  color: black;
}

.btn-glow {
  background: #2E366AFF;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  transition: 0.3s ease;
}

.btn-glow:hover {
  background: #20264BFF;
  transform: scale(1.05);
  box-shadow: 0 0 20px #20254BFF;
}

    `}</style>
        <div className="profile-bg d-flex align-items-center justify-content-center">
            <div className="glass-card p-5 w-50">
                <h2 className="text-center mb-4 fw-bold text-black">✨ Complete Your Profile</h2>
                <form>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" id="name" placeholder="Your Name" className="form-control" />
                        </div>
                        <div className="col">
                            <input type="email" id="email" placeholder="Email" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" id="city" placeholder="City" className="form-control" />
                        </div>
                        <div className="col">
                            <input type="text" id="address" placeholder="Address" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" id="phone" placeholder="Phone" className="form-control" />
                        </div>
                        <div className="col">
                            <input type="text" id="university" placeholder="University" className="form-control" />
                        </div>
                    </div>
                    <textarea className="form-control mb-3" id="bio" placeholder="Your bio..." rows="3"></textarea>

                    <div className="mb-3 text-black">
                        <label className="me-3">You are:</label>
                        <input type="radio" name="GFG" value="publisher" /> Publisher
                        <input type="radio" className="ms-3" name="GFG" value="viewer" /> Viewer
                    </div>

                </form>
                    <button className="btn-glow w-100" onClick={save}>Next</button>
            </div>
        </div>

    </>
    )

}

export default Profileform
