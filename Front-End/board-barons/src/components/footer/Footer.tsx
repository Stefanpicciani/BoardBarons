import { Box, Container, Typography } from "@mui/material";
import style from  './Footer.module.css'


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        {/* <Link to={'/'}> */}
          {/* <MuiLink.Link> */}
            Board Barons
          {/* </MuiLink.Link> */}
          {' '}
          {new Date().getFullYear()}
          {'.'}
        {/* </Link> */}
        
      </Typography>
    );
  }

const Footer = () => {

    return(
        <Box
        className={style.footer}
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>    
    )
}

export default Footer;