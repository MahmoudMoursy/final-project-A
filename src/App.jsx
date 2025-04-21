import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './page/Home'
import Signup from './page/Signup'
import Login from './page/Login'
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
import Posts from './page/pagesDashboard/posts'
import PharmaciesPage from './page/PharmaciesPage';
import DoctorsPage from './page/DoctorsPage';
import SupermarketsPage from './page/SupermarketsPage';
import ForgotPassword from './page/ForgotPassword';
import ContactUs from './page/ContactUs';

import Message from './page/message'
import YourMessage from './page/YourMessage'




function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  const dispatch = useDispatch();
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      dispatch(setCurrentUser(JSON.parse(currentUser)));
    }
    
  }, [dispatch]);



  const userDashboard = useSelector((state) => state.UserDashboard.value);

  return (
    <LoadingProvider>
      <LoadingBar isLoading={loading} />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' index element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/housing' element={<Housing />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/Community' element={<Community />} />
        <Route path='/Profileform' element={<Profileform />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} isAuthenticated={userDashboard} />} />
        <Route path="/AdminManagment" element={<PrivateRoute element={<AdminManagment />} isAuthenticated={userDashboard} />} />
        <Route path="/Posts" element={<PrivateRoute element={<Posts />} isAuthenticated={userDashboard} />} />
        <Route path="/SigninDashboard" element={<SigninDashboard />} />
        <Route path="/RestaurantsPage" element={<RestaurantsPage />} />
        <Route path="/PharmaciesPage" element={<PharmaciesPage />} />
        <Route path="/DoctorsPage" element={<DoctorsPage />} />
        <Route path="/SupermarketsPage" element={<SupermarketsPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/YourMessage" element={<YourMessage />} />
      </Routes>
    </LoadingProvider>

  )
}

export default App
