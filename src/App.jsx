import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Signup from './page/Signup'
import Login from './page/Login'
import Donation from './page/Donation';
import Profile from './page/Profile';
import AboutUs from './page/AboutUs';
import Community from './page/Community';
import Services from './page/Services';
import Housing from './page/housing';
import Tour from './page/Tour';
import Profileform from './page/Profileform';
import PostDetails from "./page/PostDetails"
// import { AuthProvider } from './context/Authcontext';



function App() {
  

  return (
    <>
    {/* <AuthProvider> */}
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Signup' index element={<Signup />} />
    <Route path='/home' element={<Home />} />
    <Route path="/Donation" element={<Donation />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path='/AboutUs' element={<AboutUs />} />
    <Route path='/Services' element={<Services />} />
    <Route path='/housing' element={<Housing/>} />
    <Route path='/tour' element={<Tour/>} />
    <Route path='/Community' element={<Community/>} />
    <Route path='/Profileform' element={<Profileform/>} />
    <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
      {/* </AuthProvider> */}
    </>
  )
}

export default App
