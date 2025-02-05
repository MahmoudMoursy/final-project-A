
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Signup from './Components/Signup'

function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' index element={<Signup />} />
    <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
