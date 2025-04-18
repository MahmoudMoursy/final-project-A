import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box, Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseconfig';
import { useDispatch } from 'react-redux';
import { setUserDashboard } from '../Redux/UserDashboard';

function SigninDashboard() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  const check = async (e) => {
    e.preventDefault();
    const emailInput = e.target.email.value;
    const passwordInput = e.target.password.value;

    try {
      const querySnapshot = await getDocs(collection(db, "AdminManagment"));
      let isValid = false;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.email === emailInput && data.password === passwordInput) {
          isValid = true;
          localStorage.setItem("userDashboard", JSON.stringify(data));
          dispatch(setUserDashboard(data));
        }
      });

      if (isValid) {
        nav('/dashboard', { state: { data: "hi from login" } });
        console.log("Login successful!");
      } else {
        console.error("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error checking credentials: ", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #6610f2 100%)',
        padding: 2,
      }}
    >
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Paper elevation={10} sx={{ padding: 4, borderRadius: 4, maxWidth: 400, width: '100%' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Dashboard Sign In
          </Typography>
          <Box component="form" onSubmit={check} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Email" type="email" name="email" fullWidth required />
            <TextField label="Password" type="password" name="password" fullWidth required />
            <Button variant="contained" color="primary" type="submit" size="large">
              Login
            </Button>
          </Box>
        </Paper>
      </Slide>
    </Box>
  );
}

export default SigninDashboard;
