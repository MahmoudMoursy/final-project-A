import React from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import { Email, Phone, Facebook, Twitter } from '@mui/icons-material'; 

const Services = () => {
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        borderRadius: 2,
        padding: 3,
        maxWidth: 400,
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        boxShadow: 3,
      }}
    >
      {/* Header Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          Premium Support
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Always here to help you!
        </Typography>
      </Box>

      {/* Features/Benefits Section */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <Typography variant="body1">🚀 Fast Response</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">🛠️ Expert Assistance</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">📞 24/7 Support</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">💼 Professional Service</Typography>
        </Grid>
      </Grid>

      {/* Call to Action (CTA) Section */}
      <Box sx={{ mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ py: 1.5 }}
        >
          Get Started
        </Button>
      </Box>

      {/* Footer Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton color="primary" aria-label="email">
          <Email />
        </IconButton>
        <IconButton color="primary" aria-label="phone">
          <Phone />
        </IconButton>
        <IconButton color="primary" aria-label="facebook">
          <Facebook />
        </IconButton>
        <IconButton color="primary" aria-label="twitter">
          <Twitter />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Services;