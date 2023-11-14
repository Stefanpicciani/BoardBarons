import { Box,Button, Fade, Typography,  Container, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import backgroundImage from '../../assets/images/board-game-friends-playing-table-sofa.jpeg';
import style from './Hero.module.css';
import Zoom from '@mui/material/Zoom';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const [mounted, setMounted] = useState(false)
    const ref = useRef(null)


    useEffect(() => {
        setMounted(true);
    }, [])

    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <>
        <Box component="section" id="hero" className={`${style.hero} ${style.section}`}>

            <img src={backgroundImage} alt="" data-aos="fade-in"/>

            <Box className={`container ${style.container} ${style.fullWidth}`}>
                <Box className={`row ${style.container}`}>
                    <Box maxWidth="sm" className={`row`}>
                        <Fade in={mounted} style={{ transitionDelay: mounted ? '900ms' : '0ms' }}>
                            <Typography component='h2' className={`${style.h2}`} data-aos="fade-up" data-aos-delay="100">Bem vindo, ao Board Barons!</Typography>
                        </Fade>
                        <Fade in={mounted} style={{ transitionDelay: mounted ? '1300ms' : '0ms' }}>
                            <Typography component='p' className={`${style.p}`} data-aos="fade-up" data-aos-delay="200">A plataforma onde pode se reunir com amigos e pessoas para jogar jogos de tabuleiros!</Typography>
                        </Fade>    
                    </Box>
                    <Box maxWidth="sm">                       
                            <Button
                                // className={style.hoverMouse}
                                sx={{
                                    color: '#ffffff',
                                    backgroundColor: '#1de9b6',
                                }}
                                startIcon={<ExpandMoreIcon />}
                                size="large"   
                                onClick={scrollToAbout}                            
                            > Saiba mais </Button> 
                       
                        
                    </Box>
                </Box>
            </Box>


        </Box>

           
        </>
        
       
    )
}

export default Hero;