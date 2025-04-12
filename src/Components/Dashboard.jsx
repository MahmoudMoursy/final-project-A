import React, { useState } from 'react'
import SideBar from './sideBar'
import './Dashboard.css' // You'll need to create this CSS file
import { Login } from '@mui/icons-material';
import SigninDashboard from './SigninDashboard';
import { useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseconfig';

function Dashboard() {
  const [numOfAdmi, setNumOfAdm ] = useState(0);
  const [numOfUsers, setNumOfUsers ] = useState(0);
  const [posts, setPosts ] = useState(0);
  const dataUser =JSON.parse(localStorage.getItem("userDashboard"));   
  console.log(dataUser);
  
      const fetchAdmin = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "AdminManagment"));
            setNumOfAdm(querySnapshot.docs.length);
          } catch (error) {
            console.error("Error fetching admins: ", error);
          }
        };
      const fetchUsers = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "user"));
            setNumOfUsers(querySnapshot.docs.length);
          } catch (error) {
            console.error("Error fetching users: ", error);
          }
        };
      const fetchPosts = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "post"));
            setPosts(querySnapshot.docs.length);
          } catch (error) {
            console.error("Error fetching posts: ", error);
          }
        };

        fetchAdmin();
        fetchUsers();
        fetchPosts();
      

    return (
     <div className="dashboard-container">
     <SideBar/>
     <main className="dashboard-main">
       <header className="dashboard-header">
         <h1>Dashboard</h1>
         <div className="header-actions">
           <input type="search" placeholder="Search..." className="search-input" />
           <button className="notification-btn">🔔</button>
           <div className="user-profile">
             <img src="/default-avatar.png" alt="User" className="avatar" />
           </div>
         </div>
       </header>
       
       <div className="dashboard-content">
         <div className="stats-grid">
           <div className="stat-card">
             <h3>Total Users</h3>
             <p className="stat-number">{numOfAdmi+numOfUsers}</p>
             <p className="stat-number">{numOfAdmi} of admin & supervisor</p>
           </div>
           <div className="stat-card">
             <h3>Revenue</h3>
             <p className="stat-number">$0</p>
           </div>
           <div className="stat-card">
             <h3>Posts</h3>
             <p className="stat-number">{posts}</p>
           </div>
           <div className="stat-card">
             <h3>Tasks</h3>
             <p className="stat-number">0</p>
           </div>
         </div>

         <div className="dashboard-widgets">
           <section className="widget recent-activity">
             <h2>Recent Activity</h2>
             {/* Add your activity content here */}
           </section>
           
           <section className="widget performance">
             <h2>Performance</h2>
             {/* Add your performance metrics here */}
           </section>
         </div>
       </div>
     </main>
   </div>
      
   
    
  )

}

export default Dashboard
