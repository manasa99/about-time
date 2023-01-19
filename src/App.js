import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import {BrowserRouter as Router,
        Routes, Route,} from "react-router-dom";

import Home from './components/home';
import Timer from './components/timer';
import Clockin from './components/clock-in';

const pages = ['timer', 'clock-in'];
const colors = ['primary','green']
function App() {
  let navigate = useNavigate();
  
  const [changeCol, setChangeCol] = useState(colors[0])

  
  return (
    <>
      

    <AppBar sx={{width: "100vw",height:"10vh",
    backgroundColor:`${changeCol}`}}
    position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AvTimerIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AboutTime
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick= 
                {()=>{navigate(page); }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.toUpperCase()}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div class = "base" 
   // onClick = {handleClick}
    sx={{width: "100vw",height:"90vh"}}>
   <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/timer" element={<Timer/>}></Route>
      <Route path="/clock-in" element={<Clockin colors = {colors} handleColor={setChangeCol}/>}></Route>
    </Routes>
    </div>
    
    </>
    
  );
}

export default App;
