import style from './About.module.css'
import imageAbout from '../../assets/images/about.jpg'
import { Box, Chip, Container, Icon, Typography } from '@mui/material';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';


const About = () => {
  
    return(
       
        <Box id="about"  sx={{ backgroundColor: "#f6f9fe", width: "100", fontFamily: 'Roboto'}} >
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
                sx={{ fontSize: '31px', 
                fontWeight: 700, 
                lineHeight: 1.2, 
                margin: '15px 0', 
                color: '#444444'}}
                >
                 Saiba mais 
                <Typography component='span' variant='h3' 
                    sx={{ fontSize: '31px', 
                    fontWeight: 700, 
                    color: '#1de9b6'}}
                    >
                      &nbsp;  sobre nós
                    </Typography>
            </Typography>

            <Typography component='p' className={style.p}
                sx={{ margin: '15px auto 0 auto', 
                fontWeight: 600, 
                color: '#444444bd', 
                letterSpacing: 0.5, 
                width: '50%'}}
            >
               Somos uma plataforma de encontros presenciais, para jogos de tabuleiro. Desconectando-se do mundo virtual e interagindo com os players.
            </Typography>
          </Box>
  
          <Box display='flex' sx={{ margin: '30px 0'}}>
            <Box className={style.sibilings}>
              <img src={imageAbout} className={style.img} alt="imagem"/>
            </Box>
            <Box maxWidth={'lg'} 
                className={style.sibilings}
                sx={{textAlign: 'left', 
                paddingLeft: 3, 
                paddingTop: 1}} 
            >
              <Typography component="h3" variant='h3' className={style.siblingTitle} 
              sx={{fontSize: '26px',
              fontFamily: "Roboto" ,
              fontWeight: 600, 
              color: '#444441', 
              lineHeight: 1.2,
              }}
              >
                Pessoas criam e participam de grupos na sua região e marcam os encontros para jogarem juntos.
              </Typography>
              <Typography component='p'
                sx={{
                    fontStyle: 'italic',
                    fontFamily: 'Open Sans',
                    fontWeight: '300',
                    color: '#444444',
                    fontSize: 18,
                    paddingTop:1
                }}
              >
              Ao entrar em um grupo, poderá participar dos encontros para jogar.
              </Typography>
              <Box component={'ul'}>
                <Box component={'li'} className={style.liList} sx={{ margin: '45px auto 40px auto'}}>
                  <Box sx={{paddingRight: 2}}>
                    <ExtensionOutlinedIcon sx={{color: '#1de9b6', backgroundColor: '#fff', fontSize: '24px', padding: '20px', borderRadius: '50px', boxShadow: '0px 6px 15px #106eea1f' }}/>
                  </Box>
                  <Box>
                    <Typography component='h5' sx={{ color: '#555555', fontSize: '18px', fontWeight: 500}}>Participar de grupos por região</Typography>
                    <Typography component='p' sx={{ fontWeight: 300, fontSize: '15px'}}>Poderá interagir com outros usuários, e participar dos eventos realizados por cada grupo.</Typography>
                  </Box>
                </Box>
                <Box component={'li'} sx={{ margin: '40px auto 40px auto'}}>
                  <Box sx={{paddingRight: 2}}>
                    <CasinoOutlinedIcon sx={{color: '#1de9b6', backgroundColor: '#fff', fontSize: '24px', padding: '20px', borderRadius: '50px', boxShadow: '0px 6px 15px #106eea1f' }}/>
                  </Box>
                  <Box>
                    <Typography component='h5' sx={{ color: '#555555', fontSize: '18px', fontWeight: 500}}>Crie seu próprio grupo, com seu jogo!</Typography>
                    <Typography component='p' sx={{ fontWeight: 300, fontSize: '15px'}}>Imagine criar seu grupo personalizado para o seu jogo, e convidar seus amigos para o grupo.</Typography>
                  </Box>
                </Box>
              </Box>
              <Typography component={'p'}  sx={{ color: '#555555'   , fontWeight: 400}}>
                Os grupos são divididos e organizados por região onde cada jogador reside, e naquela região poderá haver grupos para aquele determinado tipo de jogo. 
                Cada grupo poderá publicar seu próprio evento, com data, local , hora e informações adicionais para que os outros players possam ir ao evento, e descontrair-se 
                da rotina e fazer novos amigos.
              </Typography>
            </Box>
          </Box>
          </Container>
        </Box>
    
    )
}

export default About;