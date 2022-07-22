import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {Box,TextField,IconButton,Typography,Button} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { teal } from '@mui/material/colors';
import { useContext } from "react";
import { SimpleCtx } from "../stateManagement/context";


type UserSubmitForm = {
    username: string;
    phone: string;
    email: string;
    password: string;
    showPassword: boolean;
  };
 
  const phoneRegExp = /^(\+98|0)?9\d{9}$/

function Form() {  

    const validationSchema = Yup.object().shape({
    username: Yup.string().required('username is required'),
    phone: Yup.string()
      .required('phone number is required')
      .matches(phoneRegExp, 'Phone number is not valid iranian number'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const [value,setValue] = React.useState(false)

  const { setValues } = useContext(SimpleCtx);

  const onSubmit = (data:UserSubmitForm) => {
    fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
  })
   .then(res => res.json())
   .then(console.log);
   setValues(data)
   reset();
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {setValue(!value)};
  
    return ( <>
    <div>
     <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ width: "fit-content", margin: "auto" }}>

        <Box sx={{ margin: "20px 0", display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ color: 'black', mr: 1, my: 0.5 }} />
                    <TextField
                        type="text"
                        variant="standard"
                        placeholder="create an account here"
                        {...register("username")}
                        autoComplete="username"
                        error={!!errors.username}
                        helperText={errors.username ? errors.username.message: null}
                        // helperText={errors.username?.message}
                        focused
                    />
                </Box> 



                <Box sx={{ margin: "20px 0", display: 'flex', alignItems: 'flex-end' }}>
                    <PhoneAndroidIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                    <TextField
                        type="tel"
                        variant="standard"
                        placeholder="Phone number"
                        {...register("phone")}
                        autoComplete="phone"
                        error={!!errors.phone}
                        helperText={errors.phone ? errors.phone.message : null}
                        focused
                    />
                </Box>


                <Box sx={{ margin: "20px 0", display: 'flex', alignItems: 'flex-end' }}>
                    <MailIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                    <TextField
                        type="email"
                        variant="standard"
                        placeholder="Email"
                        {...register("email")}
                        autoComplete="email"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : null}
                        focused
                    />
                </Box>
                
                <Box sx={{ margin: "20px 0", display: 'flex', alignItems: 'flex-end' }}>
                  <LockIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
                  <TextField
                    {...register('password')}                     
                        type={value ? 'text' : 'password'}
                        variant="standard"
                        placeholder="Password"
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : null}
                        focused
                    />
                   <IconButton
                     aria-label="toggle password visibility"
                     onClick={handleClickShowPassword}
                     onMouseDown={handleMouseDownPassword}
                     sx={{color:'black',padding:'14px 8px 2px'}}
                 >
                     {value ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
                </Box>
                </Box>
            <Typography sx={{ m: '20px 15px', fontSize: 12 }}>By signing up you agree with our Terms of Use</Typography>
            <Button type="submit" sx={{ backgroundColor: teal[500], color: 'white', borderRadius: '25px', p: '10px 90px', '&:hover':{backgroundColor:teal[900],color:'white'} }}><h3 style={{margin:'0'}}>Sign UP</h3></Button>
      </form>
    </div>
    </> );
}

export default Form;