import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">Dashboard</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item ">
            <a href="/dashboard">
              <span className="icon">🏠</span>
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/analytics">
              <span className="icon">📊</span>
              <span className="nav-text">Analytics</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/projects">
              <span className="icon">📁</span>
              <span className="nav-text">Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/tasks">
              <span className="icon">✓</span>
              <span className="nav-text">Tasks</span>
            </a>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/signup">
              <span className="icon">👨🏻‍💼</span>
              <span className="nav-text">Admin Management</span>
            </Link>
          </li>
          <li className="nav-item">
            <a href="/settings">
              <span className="icon">⚙️</span>
              <span className="nav-text">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
