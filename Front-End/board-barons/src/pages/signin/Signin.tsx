import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as  MuiLink from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import iconImage from '../../assets/images/icon_board_barons.png';
import backgroundImage from '../../assets/images/background_board_signin.jpg';
import styles from './Signin.module.css'
import { FormControl, FormLabel, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import  AccountCircle  from '@mui/icons-material/AccountCircle';
import  IconButton from '@mui/material/IconButton';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import TemplateDefault from '../../components/templates/TemplateDedault';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to={'/'}> 
        <MuiLink.Link>
          Board Barons
        </MuiLink.Link>{' '}       
      </Link>     
      {new Date().getFullYear()}
        {'.'}
    </Typography>
  );
}



export default function SignInSide() {
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
    <TemplateDefault>
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
              Entrar
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, mb: 2}}>
            <FormControl fullWidth sx={{ mt: 1, mb: 2}}> 
                <TextField
                required
                id="outlined-required"
                label="Email"
                />
            </FormControl>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color='secondary'
              >
                Entrar
              </Button>
              <Grid container>
                <Grid item xs  justifyContent={'left'} textAlign={'left'}>
                  {/* <Link to={'/forgotpassword'}> */}
                    <MuiLink.Link variant="body2" >
                      Esqueceu sua senha?
                    </MuiLink.Link>
                  {/* </Link> */}                  
                </Grid>
                <Grid item>
                  <Link to={'/auth/signup'}>
                    <MuiLink.Link variant="body2">
                      {"Cadastrar-se"}
                    </MuiLink.Link>
                  </Link>                 
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 15 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </TemplateDefault>
  );
}