import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Donation from './Components/Donation';


function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Signup' index element={<Signup />} />
    <Route path='/home' element={<Home />} />
    <Route path="/Donation" element={<Donation />} />

      </Routes>
    </>
  )
}

export default App
