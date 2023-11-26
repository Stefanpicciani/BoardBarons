import style from './About.module.css'
import imageAbout from '../../assets/images/about.jpg'
import { Box, Chip, Container, Typography } from '@mui/material';



const About = () => {
  
    return(
       
        <Box  sx={{ backgroundColor: "#f6f9fe", width: "100"}} >
          <Container>
          <Box paddingTop={5}>
            <Chip label='Quem Somos' 
            sx={{
                backgroundColor: '#e7f1fd', color: '#1de9b6',
                fontSize: '15px', fontWeight: 700, padding: '8px 20px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: 'Roboto', 
            }}
            />

            <Typography component='h3' variant='h3' 
                sx={{ fontSize: '31px', fontWeight: 700, lineHeight: 1.2, margin: '15px 0', color: '#444444'}}>
                Saiba mais 
                <Typography component='span' variant='h3' sx={{ fontSize: '31px', fontWeight: 700, color: '#1de9b6'}}> sobre nós</Typography>
            </Typography>

            <Typography component='p' maxWidth={'50%'} 
                sx={{ margin: '15px auto', fontWeight: 600, color: '#444444bd', letterSpacing: 0.5}}
            >
               Somos uma plataforma de encontros presenciais, para jogos de tabuleiro. Desconectando-se do mundo virtual para a interação com os players.
            </Typography>
          </Box>
  
          <Box display='flex' >
            <Box className={style.sibilings}>
              <img src={imageAbout} className={style.img} alt="imagem"/>
            </Box>
            <Box maxWidth={'lg'} sx={{textAlign: 'left', paddingLeft: 3}} className={style.sibilings}>
              <h3>Pessoas criam e participam de grupos na sua região e marcam os encontros para jogarem juntos.</h3>
              <p className="fst-italic">
              Ao entrar em um grupo, poderá participar dos encontros para jogar.
              </p>
              <ul>
                <li>
                  <i className="bx bx-store-alt"></i>
                  <div>
                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                    <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                  </div>
                </li>
                <li>
                  <i className="bx bx-images"></i>
                  <div>
                    <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                    <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                  </div>
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
            </Box>
          </Box>
          </Container>
        </Box>
    
    )
}

export default About;