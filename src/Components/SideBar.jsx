import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserDashboard } from '../Redux/UserDashboard';

function SideBar() {
  const UserDashboard= useSelector((state) => state.UserDashboard.value); 
  const dispatch = useDispatch();
  function logout() {
    localStorage.clear();
    dispatch(deleteUserDashboard());
    window.location.href = '/SigninDashboard';
  }
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">Dashboard</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item ">
            <Link to="/dashboard">
              <span className="icon">📊</span>
              <span className="nav-text">Analytics</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Posts">
              <span className="icon">📁</span>
              <span className="nav-text">Posts</span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a href="/tasks">
              <span className="icon">✓</span>
              <span className="nav-text">Tasks</span>
            </a>
          </li> */}
        { UserDashboard?.status=="admin" && <li className="nav-item">
            <Link to="/AdminManagment">
              <span className="icon">👨🏻‍💼</span>
              <span className="nav-text">Admin Management</span>
            </Link>
          </li>}
          <li className="nav-item">
            <a href="/settings">
              <span className="icon">⚙️</span>
              <span className="nav-text">Settings</span>
            </a>
          </li>
          <li className="nav-item">
            <button onClick={logout}>
              <span className="icon">📤</span>
              <span className="nav-text">Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
