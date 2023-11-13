import { Box } from "@mui/material";
import backgroundImage from '../../assets/images/hero-bg.jpg'
import style from './Hero.module.css'

const Hero = () => {

    return(
        <Box component="section" id="hero" className={`${style.hero}`}>

            <img src={backgroundImage} alt="" data-aos="fade-in"/>

            <Box className={`container ${style.container} ${style.fullWidth}`}>
                <Box className={`row ${style.container}`}>
                    <Box maxWidth="sm" className={`row`}>
                        <h2 className={`${style.h2}`} data-aos="fade-up" data-aos-delay="100">Bem vindo a Comunidade Board Barons!</h2>
                        <p className={`${style.p}`} data-aos="fade-up" data-aos-delay="200">A plataforma onde pode se reunir com amigos e pessoas para jogar jogos de tabuleiros!</p>
                    </Box>
                    <Box maxWidth="sm">
                        <form action="#" className={`${style.sign_up_form} d-flex`} data-aos="fade-up" data-aos-delay="300">
                            <input type="text" className={`${style.sign_up_form} ${style.form_control} ${style.input}`} placeholder="Enter email address" />
                            <input type="submit" className="btn btn-primary" value="Sign up" />
                        </form>
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}

export default Hero;