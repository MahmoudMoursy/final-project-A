import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserDashboard } from '../Redux/UserDashboard';
import { 
  FiHome, 
  FiPieChart, 
  FiFileText, 
  FiUsers, 
  FiSettings, 
  FiLogOut,
  FiUser,
  FiShield 
} from 'react-icons/fi';

function SideBar() {
  const UserDashboard = useSelector((state) => state.UserDashboard.value); 
  const dispatch = useDispatch();
  
  function logout() {
    localStorage.clear();
    dispatch(deleteUserDashboard());
    window.location.href = '/SigninDashboard';
  }

  return (
    <>
    <style>
      {`
      :root {
    --sidebar-bg: #2c3e50;
    --sidebar-text: #ecf0f1;
    --sidebar-active: #3498db;
    --sidebar-hover: #34495e;
    --sidebar-border: #3d5166;
    --sidebar-accent: #1abc9c;
    --sidebar-width: 260px;
    --sidebar-collapsed-width: 80px;
    --transition: all 0.3s ease;
  }
  
  .sidebar {
    width: var(--sidebar-width);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--sidebar-bg);
    color: var(--sidebar-text);
    display: flex;
    flex-direction: column;
    transition: var(--transition);
    z-index: 1000;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    border-right: 1px solid var(--sidebar-border);
  }
  
  .sidebar-header {
    padding: 1.5rem 1.5rem 1rem;
    border-bottom: 1px solid var(--sidebar-border);
  }
  
  .logo-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .logo-icon {
    font-size: 1.75rem;
    color: var(--sidebar-accent);
  }
  
  .logo-text {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--sidebar-text);
    transition: var(--transition);
  }
  
  .user-profile {
    padding: 1.5rem;
    display: flex;
    /* align-items: center; */
    /* gap: 1rem; */
    justify-content: space-between;
    border-bottom: 1px solid var(--sidebar-border);
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--sidebar-hover);
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    overflow: hidden;
    margin: 0%;
  }
  
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .default-avatar {
    font-size: 1.25rem;
    color: var(--sidebar-text);
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
  }
  
  .user-name {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--sidebar-text);
  }
  
  .user-role {
    margin: 0.25rem 0 0 0;
    font-size: 0.75rem;
    color: var(--sidebar-accent);
    font-weight: 500;
  }
  
  .sidebar-nav {
    flex: 1;
    padding: 1rem 0;
    overflow-y: auto;
  }
  
  .nav-item {
    list-style: none;
    margin: 0.25rem 0;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    color: var(--sidebar-text);
    text-decoration: none;
    transition: var(--transition);
    position: relative;
  }
  
  .nav-link:hover {
    background-color: var(--sidebar-hover);
  }
  
  .nav-link:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background-color: var(--sidebar-active);
    transform: scaleY(0);
    transition: var(--transition);
  }
  
  .nav-link:hover:before,
  .nav-link.active:before {
    transform: scaleY(1);
  }
  
  .nav-icon {
    font-size: 1.25rem;
    margin-right: 1rem;
    color: var(--sidebar-text);
    transition: var(--transition);
  }
  
  .nav-text {
    font-size: 0.95rem;
    font-weight: 500;
    transition: var(--transition);
  }
  
  .sidebar-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--sidebar-border);
  }
  
  .logout-btn {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75rem;
    background: none;
    border: none;
    color: var(--sidebar-text);
    cursor: pointer;
    transition: var(--transition);
    border-radius: 6px;
  }
  
  .logout-btn:hover {
    background-color: rgba(231, 76, 60, 0.1);
    color: #e74c3c;
  }
  
  .logout-icon {
    font-size: 1.25rem;
    margin-right: 1rem;
  }
  
  .logout-text {
    font-size: 0.95rem;
    font-weight: 500;
  }
  
  /* Active link styling */
  .active-link {
    background-color: var(--sidebar-hover);
  }
  
  .active-link:before {
    transform: scaleY(1);
  }
  
  .active-link .nav-icon {
    color: var(--sidebar-active);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .sidebar {
      width: var(--sidebar-collapsed-width);
      overflow: hidden;
    }
    
    .logo-text,
    .user-info,
    .nav-text,
    .logout-text {
      display: none;
    }
    
    .logo-wrapper,
    .nav-link,
    .logout-btn {
      justify-content: center;
    }
    
    .nav-icon {
      margin-right: 0;
      font-size: 1.5rem;
    }
    
    .logout-icon {
      margin-right: 0;
      font-size: 1.5rem;
    }
    
   
    
    .avatar {
      width: 36px;
      height: 36px;
    }
  }
  
  /* إضافة أنماط خاصة بقسم الإدارة */
  .admin-item {
    margin-top: 1rem;
    border-top: 1px solid var(--sidebar-border);
    padding-top: 1rem;
  }
  
  .admin-item .nav-link {
    padding-left: 1.5rem;
  }
  
  .admin-item .nav-icon {
    color: var(--sidebar-accent);
  }
  
  /* تحسينات عامة للمحاذاة */
  .nav-item {
    margin: 0;
  }
  
  .nav-link {
    padding: 0.85rem 1.5rem;
  }
  
  .sidebar-nav ul {
    padding: 0;
    margin: 0;
  }
      `}
    </style>
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-wrapper">
          <FiPieChart className="logo-icon" />
          <h2 className="logo-text">Admin Panel</h2>
        </div>
      </div>
      
      <div className="user-profile">
        <div className="avatar">
          {UserDashboard?.photoURL ? (
            <img src={UserDashboard.photoURL} alt="User" />
          ) : (
            <FiUser className="default-avatar" />
          )}
        </div>
        <div className="user-info">
          <h3 className="user-name">{UserDashboard?.displayName || "Admin"}</h3>
          <p className="user-role">{UserDashboard?.status || "Administrator"}</p>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <FiHome className="nav-icon" />
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/Posts" className="nav-link">
              <FiFileText className="nav-icon" />
              <span className="nav-text">Posts</span>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <FiSettings className="nav-icon" />
              <span className="nav-text">Settings</span>
            </Link>
          </li>

          {UserDashboard?.status === "admin" && (
            <li className="nav-item admin-item">
              <Link to="/AdminManagment" className="nav-link">
                <FiShield className="nav-icon" />
                <span className="nav-text">Admin Management</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button onClick={logout} className="logout-btn">
          <FiLogOut className="logout-icon" />
          <span className="logout-text">Logout</span>
        </button>
      </div>
    </aside>
    </>
  );
}

export default SideBar;