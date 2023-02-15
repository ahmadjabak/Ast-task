import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useGetloginMutation} from '../../features/Login/login-api-slice'
import { useState } from 'react';
import "./Login.css"
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  
  const [Login,{data:users,error,isSuccess}]=useGetloginMutation()
  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    

     formData.append("email",email)
    formData.append("password",password)


    await Login({body:formData}).then((info)=>{
   
      localStorage.setItem('token',info.data.token)
        
       

      navigate('/home')
    });

    
    
   

}
  return (
  
      <div className='login_container'>
        <h1 style={{fontFamily:"serif"}}>Welcome To Our Website</h1>
    <Container component="main" maxWidth="xs">
      
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color={"black"}>
          Login in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
         
          sx={{ input: { color: 'black' } }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={()=>handleSubmit()}
          >
            Sign In
          </Button>
         
        </Box>
      </Box>
     
    </Container>
    </div>
   
  )
}
