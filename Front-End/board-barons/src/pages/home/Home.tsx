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
    Toolbar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import iconImage from '../../assets/images/icon_board_barons.png';
import imageMain from '../../assets/images/xadrez.jpeg';
import styles from './Home.module.css';
import * as MuiLink from '@mui/material';
import {Link} from 'react-router-dom';
import TemplateDefault from '../../components/templates/TemplateDedault';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import StarIcon from '@mui/icons-material/StarBorder';
import GlobalStyles from '@mui/material/GlobalStyles';
import Hero from '../../components/hero/Hero';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';



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
      <About/>
      
      <Contact/>
    </TemplateDefault>
  );
}