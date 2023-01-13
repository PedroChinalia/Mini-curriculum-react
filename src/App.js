import React from 'react';
import './App.css'
import { Box, Typography, Avatar } from '@mui/material';
import Habilities from './components/Habilities';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Box className="bg-color" sx={{ display:"flex", p: 3 }}>
          <Avatar
            alt="Pedro Chinalia"
            src={require("./assets/imgs/perfil.jpg")}
            sx={{ width: 100, height: 100, marginRight: 4, marginLeft: 2 }}
          />
          <Box>
            <Typography variant="h4" sx={{ marginTop: 2 }}>Pedro Chinalia</Typography>
            <Typography variant="h6">Front-end Developer</Typography>
          </Box>
        </Box>
        <Habilities />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
