import React, { useState } from 'react';
import SideBar from '../../Components/sideBar';
import { Container } from 'react-bootstrap';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SignUp from './SignUp';
import AllUsers from './AllUsers';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

// Styled components for optimized full-screen layout
const MainContent = styled('div')(({ theme }) => ({
  marginLeft: '240px',
  padding: theme.spacing(0),
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f0f4f8', // Soft background color
}));

const ContentContainer = styled(Container)({
  height: 'calc(100vh - 60px)',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
});

const TabPanel = styled(Paper)(({ theme }) => ({
  flex: 1,
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  padding: '20px',
  maxWidth: '100%', // Increase max width
}));

const TabContent = styled('div')({
  flex: 1,
  overflowY: 'auto', // Enable vertical scrolling
  padding: '20px',
});

const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  marginBottom: '20px',
  alignSelf: 'center',
  '& .MuiButton-root': {
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    padding: '12px 30px',
    border: 'none',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    '&:first-of-type': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    '&:last-of-type': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
    },
  },
}));

function AdminManagement() {
  const [activeTab, setActiveTab] = useState('users');

  const handleDeleteUser = (userId) => {
    // Your delete logic here
    console.log(`Delete user with id: ${userId}`);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <SideBar />
      <MainContent>
        <ContentContainer maxWidth="xl" fluid>
          <h2 style={{ 
            color: '#1e293b',
            fontWeight: '600',
            fontSize: '1.75rem',
            marginBottom: '20px'
          }}>
            User Management Dashboard
          </h2>

          <CustomButtonGroup>
            <Button 
              onClick={() => setActiveTab('users')}
              variant={activeTab === 'users' ? 'contained' : 'outlined'}
              color="primary"
            >
              <FontAwesomeIcon icon={faUsers} style={{ marginRight: '8px' }} />
              All Users
            </Button>
            <Button 
              onClick={() => setActiveTab('add')}
              variant={activeTab === 'add' ? 'contained' : 'outlined'}
              color="primary"
            >
              <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '8px' }} />
              Add New Member
            </Button>
          </CustomButtonGroup>

          <TabPanel elevation={0}>
            <TabContent>
              {activeTab === 'add' ? (
                <SignUp />
              ) : (
                <AllUsers onDeleteUser={handleDeleteUser} />
              )}
            </TabContent>
          </TabPanel>
        </ContentContainer>
      </MainContent>
    </Box>
  );
}

export default AdminManagement;