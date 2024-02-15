import React from 'react';
import { Typography, Button, Grid, Card, CardContent, TextField, Box } from '@mui/material';

const DashboardPage = () => {
  const completedDecisionsBg = "/Images/Completed decisions background no text.jpg";
  const pendingDecisionsBg = "/Images/pending decisions.png";

  return (
    <>

      <Grid container spacing={2} style={{ padding: '20px' }}>
        {/* Completed Decisions */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundImage: `url(${completedDecisionsBg})`, height: '300px' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Completed Decisions
              </Typography>
              {/* TODO: Content for completed decisions */}
            </CardContent>
          </Card>
        </Grid>

        {/* Pending Decisions */}
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundImage: `url(${pendingDecisionsBg})`, height: '300px' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pending Decisions (Drafts)
              </Typography>
              <Box>
                <TextField label="Choice name" variant="outlined" fullWidth margin="normal" />
                <TextField label="Option Count" variant="outlined" fullWidth margin="normal" />
                <Button variant="contained" color="primary" fullWidth>
                  CHOOSE
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
