import React from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

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
        <Button variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
          Get Started
        </Button>
      </Box>

      {/* Footer Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton color="primary" aria-label="email">
          <EmailIcon />
        </IconButton>
        <IconButton color="primary" aria-label="phone">
          <PhoneIcon />
        </IconButton>
        <IconButton color="primary" aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary" aria-label="twitter">
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Services;
