import React from 'react';
import './SideBar.css';
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
  );
}

export default SideBar;