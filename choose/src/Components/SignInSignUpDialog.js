import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Box,
  Tabs,
  Tab,
  Typography
} from '@mui/material';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

const SignInSignUpDialog = ({ open, setOpen }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeTab = (event, newValue) => {
    setTabIndex(newValue);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleClose();
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Google Sign In Error', errorCode, errorMessage);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleClose();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Email Sign Up Error', errorCode, errorMessage);
      });
  };

  const handleSignIn = (e) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleClose();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Email Sign In Error', errorCode, errorMessage);
      });
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }

  return (
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Sign In / Sign Up</DialogTitle>
        <Tabs value={tabIndex} onChange={handleChangeTab} centered>
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
        </Tabs>
        <DialogContent>
          <TabPanel value={tabIndex} index={0}>
            <form onSubmit={handleSignIn}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
              />
              <Box mt={2}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Sign In
                </Button>
              </Box>
            </form>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <form onSubmit={handleSignUp}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
              />
              <Box mt={2}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Sign Up
                </Button>
              </Box>
            </form>
          </TabPanel>
          <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
            - OR -
          </Typography>
          <Box mt={2} mb={2} display="flex" justifyContent="center">
            <Button variant="contained" onClick={handleGoogleSignIn} fullWidth>
              Sign in with Google
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    );
  };

export default SignInSignUpDialog;