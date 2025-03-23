import React from 'react'
import SideBar from './sideBar'
import './Dashboard.css' // You'll need to create this CSS file

function Dashboard() {
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
              <p className="stat-number">1,234</p>
            </div>
            <div className="stat-card">
              <h3>Revenue</h3>
              <p className="stat-number">$5,678</p>
            </div>
            <div className="stat-card">
              <h3>Active Projects</h3>
              <p className="stat-number">25</p>
            </div>
            <div className="stat-card">
              <h3>Tasks</h3>
              <p className="stat-number">147</p>
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
