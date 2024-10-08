import * as React from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    Paper,
    Box,
    Grid,
    Typography,
    Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import iconImage from '../../assets/images/icon_board_barons.png';
import imageMain from '../../assets/images/xadrez.jpeg';
import styles from './Home.module.css';
import * as MuiLink from '@mui/material';
import {Link} from 'react-router-dom';
import TemplateDefault from '../../components/templates/TemplateDedault';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import GlobalStyles from '@mui/material/GlobalStyles';
import Hero from '../../components/hero/Hero';



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
    <TemplateDefault>
      <Hero/>
       
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color=""
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      
    </TemplateDefault>
  );
}