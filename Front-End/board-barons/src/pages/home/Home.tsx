import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import iconImage from '../../assets/images/icon_board_barons.png';
import imageMain from '../../assets/images/xadrez_cr7_messi.jpg';
import styles from './Home.module.css'
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import  IconButton from '@mui/material/IconButton';
import { VisibilityOff, Visibility } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
import Link from 'react-router-dom';



export default function Home() {
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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid display={'flex'} item xs={false} sm={4} md={7} alignItems={'top'} justifyContent={'center'}>
            <Box paddingTop={3}>
                <Box alignItems={'center'}  sx={{ width: '105%' , height: 'auto'}}>
                    <img alt="logo" src={imageMain} className={styles.imageMain}/>    
                    <Box paddingLeft={15}>
                        <Typography textAlign={'left'} color="#ffffff">
                            A plataforma que une as pessoas e cria mentes assertivas    
                        </Typography>     
                    </Box>                    
                             
                </Box>               
            </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{backgroundColor: "#2D3040"}}>
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
            <Typography component="h1" variant="h5" color="#ffffff">
                A SUA REDE SOCIAL DE BOARD GAMES
            </Typography>
            <Box sx={{textAlign:"left", listStyle: 'none'}} color="#fee973">
                <ul>
                    <li>Adicione amigos em comum.</li>
                    <li>Monte o seu grupo de jogadores por zona.  </li>
                    <li>Marque com eles, e saia jogando por aí.</li>
                </ul>
                      
            </Box>          
                {/* <Link to={"/auth/signup"}> */}
                    <Button
                    type="submit"
                    fullWidth
                    color='primary'
                    variant="contained"
                    sx={{ mt: 3, mb: 2 , color: "#ffffff", backgroundColor: "secondary.main"}}
                    >
                        Bora se cadastrar?
                    </Button>
                {/* </Link> */}
               
                <Grid container justifyContent="flex-end">
                <Grid item>
                    {/* <Link href="#" variant="body2"> */}
                    Já possui uma conta? Entrar
                    {/* </Link> */}
                </Grid>
                </Grid>
            </Box>
        
        </Grid>
      </Grid>
  );
}