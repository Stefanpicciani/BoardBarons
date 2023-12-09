import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as MuiLink from '@mui/material';
import {Link} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import iconImage from '../../assets/images/icon_board_barons.png';
import backgroundImage from '../../assets/images/background_board_signin.jpg';
import styles from './Signup.module.css'
import { FormControl, FormLabel, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import  AccountCircle  from '@mui/icons-material/AccountCircle';
import  IconButton from '@mui/material/IconButton';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import TemplateDefault from '../../components/templates/TemplateDedault';
import Header from '../../components/header/Header';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to={'/'}>
        <MuiLink.Link color="inherit">
          Board Barons
        </MuiLink.Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Link>     
    </Typography>
  );
}



export default function SignUpSide() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
    
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <Header />    
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid display={'flex'} item xs={false} sm={4} md={7} alignItems={'center'} justifyContent={'center'}>
            <Box padding={15}>
                <Box alignItems={'center'} >                    
                    <img alt="logo" src={iconImage} className={styles.imageMain}/>                   
                </Box>               
            </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{backgroundColor: "#e9e2e2"}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img alt="logo" src={iconImage} className={styles.imageIcon}/>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Criar conta
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nome"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Sobrenome"
                    name="lastName"
                    autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth  variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth  variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirme sua senha</InputLabel>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}                           
                            label="Password"
                        />
                    </FormControl>     
                </Grid>
               
                </Grid>
                <Button
                type="submit"
                fullWidth
                color='primary'
                variant="contained"
                sx={{ mt: 3, mb: 2 , color: "#ffffff", backgroundColor: "secondary.main"}}
                >
                Criar conta
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={'/auth/signin'}>
                    <MuiLink.Link variant="body2">
                      Já possui uma conta? Entrar
                    </MuiLink.Link>
                  </Link>
                    
                </Grid>
                </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}