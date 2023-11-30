import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import style from './Contact.module.css';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Contact = () => {


    return(
        <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>                
                <Grid item xs={12} sm={6} md={6} 
                    className={style.card}
                >
                    <Box
                     sx={{ height: '100%', display: "flex", flexDirection: 'column'}}
                    >
                        <Box sx={{ flexGrow: 1, backgroundColor: 'none'}}
                        >
                            <Typography textAlign={"center"}>
                                <LocationOnOutlinedIcon/>                                
                            </Typography>
                            <Typography component="h5" >NOSSO ENDEREÇO</Typography>
                            <Typography>Av. Paulista 1486, Bloco 06, 2º andar, sala 27</Typography>
                        </Box>
                    </Box>
                </Grid>                
                <Grid item xs={12} sm={5} md={3}
                    className={style.card}                
                >
                    <Box
                     sx={{ height: '100%', display: "flex", flexDirection: 'column'}}
                    >
                        <CardContent sx={{ flexGrow: 1, backgroundColor: "inherit"}}>
                            <Typography textAlign={"center"}>
                                <MailOutlineIcon/>                                
                            </Typography>
                            <Typography component="h5" >NOSSO ENDEREÇO</Typography>
                            <Typography>Av. Paulista 1486, Bloco 06, 2º andar, sala 27</Typography>
                        </CardContent>
                    </Box>
                </Grid>                
                <Grid item xs={12} sm={6} md={3}
                 className={style.card}
                >
                    <Box
                     sx={{ height: '100%', display: "flex", flexDirection: 'column'}}
                    >
                        <CardContent sx={{ flexGrow: 1, backgroundColor: "#ffffff"}}>
                            <Typography textAlign={"center"}>
                                <CallOutlinedIcon/>                                
                            </Typography>
                            <Typography component="h5" >NOSSO ENDEREÇO</Typography>
                            <Typography>Av. Paulista 1486, Bloco 06, 2º andar, sala 27</Typography>
                        </CardContent>
                    </Box>
                </Grid>                
            </Grid>
        </Container>
    );
}

export default Contact;