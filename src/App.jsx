import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './page/Home'
import Signup from './page/Signup'
import Login from './page/Login'
import Donation from './page/Donation';
import Profile from './page/Profile';
import AboutUs from './page/AboutUs';
import Community from './page/Community';
import Services from './page/Services';
import Housing from './page/Housing';
import Tour from './page/Tour';
import Profileform from './page/Profileform';
import PostDetails from "./page/PostDetails"
import Dashboard from './Components/Dashboard';
import AdminManagment from './page/pagesDashboard/AdminManagment';
import { LoadingProvider } from './context/LoadingContext';
import LoadingBar from './Components/LoadingBar';
import RestaurantsPage from './page/RestaurantsPage';
import SigninDashboard from './Components/SigninDashboard';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateDashboard';
import { setCurrentUser } from './Redux/CurrentUser';
import { useEffect } from 'react';

// import { AuthProvider } from './context/Authcontext';



function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  
  // Show loading bar on route changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Simulate loading time
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  const dispatch = useDispatch();
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      dispatch(setCurrentUser(JSON.parse(currentUser)));
    }
  }, []);



  const userDashboard = useSelector((state) => state.UserDashboard.value);

  return (
    <LoadingProvider>
      <LoadingBar isLoading={loading} />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' index element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/housing' element={<Housing />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/Community' element={<Community />} />
        <Route path='/Profileform' element={<Profileform />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AdminManagment" element={<AdminManagment />} />
        <Route path="/RestaurantsPage" element={<RestaurantsPage />} />
      </Routes>
    </LoadingProvider>
    
  )
}

export default App
