import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material';

const LandingPage = ({ setOpenSignInUp }) => {
  const handleSignUp = () => {
    setOpenSignInUp(true);
  };

  const backgroundImage = "https://i.imgur.com/o9DQnVl.jpeg"; 

  return (
    <Box>

      <Grid container sx={{ height: '100vh' }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '100%',
              width: '100%'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ textAlign: 'right', mr: 2 }}>
            <Typography variant="h2" sx={{ mb: 4 }}>
            The easy way to make hard decisions
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
            Choose offers a process through difficult decisions by letting you assign weighted values to different categories and rank your options. 
            </Typography>
            <Button variant="contained" onClick={handleSignUp} sx={{ mr: 2 }}>
              Sign Up
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;

        