import * as React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    Paper,
    Box,
    Grid,
    Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import iconImage from '../../assets/images/icon_board_barons.png';
import imageMain from '../../assets/images/xadrez.jpeg';
import styles from './Home.module.css';
import * as MuiLink from '@mui/material';
import {Link} from 'react-router-dom';



export default function Home() {
   
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Grid container component="main" sx={{ height: '100vh', justifyContent: 'center', }}>
        <CssBaseline />
        {/* <Grid display={'flex'} item xs={false} sm={4} md={7} alignItems={'top'} justifyContent={'center'}>
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
        </Grid> */}
         {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${imageMain})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t:any) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingLeft: 4, 
              paddingRight: 4,
            }}
          >
                <img alt="logo" src={iconImage} className={styles.imageIcon}/>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon />
                </Avatar>
           
                <Box maxWidth="sm" sx={{textAlign:"left", listStyle: 'none', marginTop: 4, paddingLeft: 5, paddingRight: 4}} style={{width: '100%'}}>
                    <Typography component="h1" variant="h5">
                        A SUA REDE SOCIAL DE BOARD GAMES
                    </Typography>
                    <Typography  sx={{ mt: 4, mb: 2, color: '#212121' }} >º Adicione amigos em comum.</Typography>
                    <Typography  sx={{ mt: 2, mb: 2, color: '#212121' }} >º Monte o seu grupo de jogadores por zona.  </Typography>
                    <Typography  sx={{ mt: 2, mb: 2, color: '#212121' }} >º Marque com eles, e saia jogando por aí.</Typography>

                    <Link to={"/auth/signup"} style={{width: '100%'}}>
                        <Button
                        type="submit"
                        fullWidth
                        color='primary'
                        variant="contained"
                        sx={{ mt: 3, mb: 2 , color: "#ffffff", backgroundColor: "secondary.main"}}
                        >
                            Bora se cadastrar?
                        </Button>
                    </Link>

                    <Grid container justifyContent="flex-end">
                        <Grid item  sx={{ mt: 2, mb: 2 }}>
                            <Link to={'/auth/signin'}>
                                <MuiLink.Link>
                                    Já possui uma conta? Entrar
                                </MuiLink.Link>                        
                            </Link>
                        </Grid>
                    </Grid>
                </Box>          
            </Box>
        </Grid>
      </Grid>
  );
}