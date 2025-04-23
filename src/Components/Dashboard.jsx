import React, { useState, useEffect } from 'react';
import SideBar from './sideBar';
import './Dashboard.css';
import { motion } from 'framer-motion';
import { FiSearch, FiBell, FiTrendingUp, FiUsers, FiFileText } from 'react-icons/fi';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseconfig';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [numOfAdmi, setNumOfAdm] = useState(0);
  const [numOfUsers, setNumOfUsers] = useState(0);
  const [posts, setPosts] = useState(0);
  const [loading, setLoading] = useState(true);
  const dataUser = JSON.parse(localStorage.getItem("userDashboard"));
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [adminSnapshot, userSnapshot, postsSnapshot] = await Promise.all([
          getDocs(collection(db, "AdminManagment")),
          getDocs(collection(db, "user")),
          getDocs(collection(db, "housing"))
        ]);
        
        setNumOfAdm(adminSnapshot.docs.length);
        setNumOfUsers(userSnapshot.docs.length);
        setPosts(postsSnapshot.docs.length);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-app-container">
      <SideBar />
      
      <main className="dashboard-main-content">
        <header className="dashboard-navbar">
          <h1>Dashboard Overview</h1>
          <div className="navbar-actions">
            {/* <div className="search-wrapper">
              <FiSearch className="search-icon" />
              <input 
                type="search" 
                placeholder="Search analytics..." 
                className="search-input" 
              />
            </div> */}
           
            <div className="user-profile">
              <img 
                src={dataUser?.image || "/default-avatar.png"} 
                alt="User" 
                className="profile-avatar" 
              />
              <span className="profile-name ">{dataUser?.displayName || "Admin"}</span>
            </div>
          </div>
        </header>
        
        <div className="dashboard-content-wrapper">
          <div className="metrics-grid">
            <Link to="/AdminManagment" className="metric-card users-card">
              <div className="metric-icon">
                <FiUsers />
              </div>
              <div className="metric-info">
                <h3 className='text-dark'>Total Users</h3>
                {loading ? (
                  <div className="metric-loader"></div>
                ) : (
                  <>
                    <p className="metric-value">{numOfAdmi + numOfUsers}</p>
                    <p className="metric-description">
                      <span className="admin-count">{numOfAdmi}</span> administrators
                    </p>
                  </>
                )}
              </div>
            </Link>
            
            <div className="metric-card revenue-card">
              <div className="metric-icon">
                <FiTrendingUp />
              </div>
              <div className="metric-info">
                <h3 className='text-dark'>Revenue</h3>
                <p className="metric-value">$0</p>
                <p className="metric-description">Current balance</p>
              </div>
            </div>
            
            <Link to="/Posts" className="metric-card posts-card">
              <div className="metric-icon">
                <FiFileText />
              </div>
              <div className="metric-info">
                <h3 className='text-dark'>Posts</h3>
                {loading ? (
                  <div className="metric-loader"></div>
                ) : (
                  <p className="metric-value">{posts}</p>
                )}
              </div>
            </Link>
          </div>

          <div className="analytics-section">
            <div className="activity-panel">
              <div className="panel-header">
                <h2>Recent Activity</h2>
                <button className="view-all-button">View All</button>
              </div>
              <div className="activity-list">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="activity-item">
                    <div className="activity-avatar">A</div>
                    <div className="activity-details">
                      <p>Admin updated user settings</p>
                      <span className="activity-time">2 hours ago</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="performance-panel">
              <div className="panel-header">
                <h2>Performance Metrics</h2>
              </div>
              <div className="performance-grid">
                <div className="performance-metric">
                  <div className="metric-value">87%</div>
                  <div className="metric-label">System Uptime</div>
                </div>
                <div className="performance-metric">
                  <div className="metric-value">1.2s</div>
                  <div className="metric-label">Avg. Response</div>
                </div>
                <div className="performance-metric">
                  <div className="metric-value">24</div>
                  <div className="metric-label">Active Sessions</div>
                </div>
                <div className="performance-metric">
                  <div className="metric-value">95%</div>
                  <div className="metric-label">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;