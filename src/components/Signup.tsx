import React from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from '@mui/material/IconButton';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Box, Paper, Typography, Divider,Avatar,Button } from '@mui/material';
import { teal, blueGrey } from '@mui/material/colors';
import { Link } from "react-router-dom";
import Form from "./Form";


function Signup() {

    return (<Box sx={{ backgroundColor: teal[50], height: "100vh" ,p:'20px 0',position:'relative'}}>
        <Link to='/'>
        <IconButton sx={{position:'absolute',left:'10px',top:'10px' }}>
            <ArrowCircleLeftIcon sx={{ color: teal[800], fontSize: 50}} />
        </IconButton>
        </Link>
        <Paper sx={{ width: '70%',height:'700px', m: "50px auto" ,borderRadius:'15px', p:'10px'}} elevation={5}>
            <Typography variant='h5' sx={{ width: "fit-content", p: 1 }}>sign up</Typography>
            <Typography sx={{ width: "fit-content", pl: 1, color: blueGrey[300] }}>Create your account</Typography>
            <Form/>
            <Divider sx={{
                margin:'30px',
                "&::before, &::after": {
                    borderColor: teal[500],
                    borderWidth: '3px'
                  }
            }}><Avatar sx={{ bgcolor:teal[500] }}>OR</Avatar></Divider>
            <Button sx={{width:'50vw', margin:'20px auto',display:'flex',justifyContent:'space-evenly',alignItems:'center',borderRadius:'25px' ,p:'5px 0',boxShadow: 3}}><GoogleIcon sx={{color:'red',fontSize:'35px'}}/><Typography sx={{fontSize:'15px'}}>Loging with google</Typography></Button>
            <Button sx={{width:'50vw', margin:'20px auto',display:'flex',justifyContent:'space-evenly',alignItems:'center',borderRadius:'25px' ,p:'5px 0',boxShadow: 3}}><FacebookRoundedIcon sx={{color:'#1E90FF',fontSize:'35px'}} /><Typography sx={{fontSize:'14px'}}>Loging with facebook</Typography></Button>
            <Typography >Already have an account? <a href='#'>log in</a></Typography>
    </Paper>
    </Box >);
}

export default Signup;