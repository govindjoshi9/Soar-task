import React from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  //   Typography,
  Avatar,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ProfileImage from 'assets/avatar.jpg';
const index = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 900,
        mx: 'auto',
        p: 3,
        bgcolor: 'white',
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Tabs Section */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{ mb: 3 }}
      >
        <Tab label="Edit Profile" />
        <Tab label="Preferences" />
        <Tab label="Security" />
      </Tabs>

      {/* Form Section */}
      <Grid container spacing={3}>
        {/* Avatar Section */}
        <Grid item xs={12} sm={4} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Avatar
              src={ProfileImage}
              alt="User Avatar"
              sx={{
                width: 100,
                height: 100,
                border: '3px solid',
                borderColor: 'natural.black',
              }}
            />
            <IconButton
              aria-label="Edit Avatar"
              sx={{
                position: 'relative',
                top: '-30px',
                left: '20px',
                bgcolor: 'black',
                color: 'common.white',
                fontSize: 16,
                width: 30,
                height: 30,
                '&:hover': { bgcolor: 'grey.800' },
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Form Fields */}
        <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={3}>
            {/* Left Column */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Name"
                defaultValue="Charlene Reed"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="User Name"
                defaultValue="Charlene Reed"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                defaultValue="charlenereed@gmail.com"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                defaultValue="********"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                defaultValue="25 January 1990"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Present Address"
                defaultValue="San Jose, California, USA"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Permanent Address"
                defaultValue="San Jose, California, USA"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="City" defaultValue="San Jose" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Postal Code" defaultValue="45962" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Country" defaultValue="USA" variant="outlined" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Save Button */}
      <Box
        sx={{
          mt: 4,
          textAlign: 'right',
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'grey.900',
            color: 'common.white',
            '&:hover': { bgcolor: 'grey.800' },
            borderRadius: 2,
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default index;
