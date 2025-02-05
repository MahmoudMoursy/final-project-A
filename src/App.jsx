
import Fotter from './Components/Foteer'
import Haeder from './Components/Haeder'
import Home from './Components/Home'
import NavBar from './Components/NavBar'

function App() {
  

  return (
    <>
    <div className="container-fluid position-relative p-0">
      <NavBar/>
      <Haeder />
      </div>
      <Home/>
      <Fotter/>
    </>
  )
}

export default App
