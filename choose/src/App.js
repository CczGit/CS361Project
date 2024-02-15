import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import LandingPage from './Components/LandingPage'; 
import DashboardPage from './Components/DashboardPage'; 
import SignInSignUpDialog from './Components/SignInSignUpDialog'; 
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './utils/firebase-config';
initializeApp(firebaseConfig);

function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openSignInUp, setOpenSignInUp] = useState(false);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Help Center</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
        </Box>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
            Choose
        </Typography>
            <Button color="inherit" onClick={() => user ? auth.signOut() : setOpenSignInUp(true)}>
              {user ? `${user.displayName} - Logout` : 'Login / Sign Up'}
            </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LandingPage setOpenSignInUp={setOpenSignInUp} />} />
        <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/" />} />
      </Routes>
      <SignInSignUpDialog open={openSignInUp} setOpen={setOpenSignInUp} />
    </Router>
  );
}

export default App;
