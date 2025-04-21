import React, { useState } from 'react'
import SideBar from '../../Components/sideBar'
import { Nav } from 'react-bootstrap'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SignUp from './SignUp';
import AllUsers from './AllUsers';
function AdminManagment() {
  const butt = useState(false)
  const [show, setShow] = useState(false);
function handleClick() {

}


  return (
    <div className="dashboard-container">

        
      <SideBar/>
      <div className="dashboard-main d-flex justify-content-center align-items-center flex-column  bg-light p-4">
      <ButtonGroup  
              disableElevation
              variant="contained"
              aria-label="Disabled button group"
            >
              <Button onClick={()=>setShow(false)}>All Users</Button>
             <Button onClick={()=>setShow(true)}>Add New member</Button>
            </ButtonGroup>

            {show && <SignUp/> }
            {!show && <AllUsers/>}
      </div>
      


    </div>
  )
}

export default AdminManagment
