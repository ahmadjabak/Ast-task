import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';

import './header.css'




export default function HomePage() {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <div className='header'>
        <Toolbar>
         
         <div className='flex_header'>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
           
          >
           <h1 style={{marginBottom:"5rem"}}> Home Page</h1>
          </Typography>
          
          
          </div>
          
        
        </Toolbar>
        </div>
      </AppBar>
      
    </Box>
  );
}
