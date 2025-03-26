import React from 'react'
import SideBar from '../../Components/sideBar'
import { Nav } from 'react-bootstrap'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SignUp from './SignUp';
function AdminManagment() {
  return (
    <div className="dashboard-container">

        
      <SideBar/>
      <div className="dashboard-main d-flex justify-content-center align-items-center flex-column  bg-light p-4">
      <ButtonGroup  
              disableElevation
              variant="contained"
              aria-label="Disabled button group"
            >
              <Button>Add New member</Button>
              <Button>All Users</Button>
            </ButtonGroup>

            <SignUp/>
      </div>
      


    </div>
  )
}

export default AdminManagment
