import * as React from 'react';
import style from './Contact.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Button, TextField, Typography } from '@mui/material';


export default function CenteredElementGrid() {
  return (
    <Box id="contact" sx={{ flexGrow: 1 , my: 5}}>
      <Grid container spacing={2} minHeight={160} columns={12} justifyContent="center">
        <Grid xs={12} sm={12} md={3} lg={3} xl={3} display="flex" 
          justifyContent="center" alignItems="center" 
          sx={{mx: 2, my:2, py: 5}}
          className={style.card}
        >
          <Box>
          <LocationOnIcon className={style.icon}/>
            <Typography variant='h6'>
              Localização
            </Typography>
            <Typography variant="subtitle1">
              Av. Paulista 7500, São Paulo, SP.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3} xl={3} display="flex" 
          justifyContent="center" alignItems="center"
          sx={{mx: 2, my:2, py: 5}}
          className={style.card}
          >
          <Box>
            <EmailIcon className={style.icon} />
            <Typography variant='h6'>
              Email
            </Typography>
            <Typography variant="subtitle1">
              dev.teste@outlook.com
            </Typography>
          </Box>
          
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3} xl={3} display="flex" 
          justifyContent="center" alignItems="center"
          sx={{mx: 2, my:2, py: 5}}
          className={style.card}
          >
          <Box>
          <PhoneIcon className={style.icon}/>
            <Typography variant='h6'>
              Telefone
            </Typography>
            <Typography variant="subtitle1">
              (11) 99999-9999
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} minHeight={160} columns={12} justifyContent="center" flexWrap={'wrap'}>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6} display="block" 
          justifyContent="center" alignItems="center" 
          sx={{mx: 2, my:2, py: 5}}
          className={`${style.cardContact} ${style.card}`}
        >
          <Box>
          <LocationOnIcon className={style.icon}/>
            <Typography variant='h6'>
              Localização
            </Typography>
            <Typography variant="subtitle1">
              Av. Paulista 7500, São Paulo, SP.
            </Typography>
            <iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11638.063910468158!2d-46.6644273130095!3d-23.563665842159168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce593a4f0edffd%3A0x4ebb7674bd3bc1c7!2sEscrit%C3%B3rio%20Virtual%20-%20Company%20Hero!5e1!3m2!1spt-PT!2spt!4v1702174090797!5m2!1spt-PT!2spt" width="500" height="600" ></iframe>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6} display="block" 
          justifyContent="center" alignItems="center"
          sx={{mx: 2, my:2, py: 5}}
          className={`${style.cardContact} ${style.card}`}
          >
          {/* <Box>
            <EmailIcon className={style.icon} />
            <Typography variant='h6'>
              Email
            </Typography>
            <Typography variant="subtitle1">
              dev.teste@outlook.com
            </Typography>
          </Box> */}

      < Box 
        sx = {{ 
          display: " flex ",
           flexDirection: " coluna ",
           alignItems: " center ",
           maxWidth:  400 ,
           mx: " auto ",
           p:  2 ,
           border: " 2px  solid   # 000000 ",
           borderRadius: " 12px ",
           caixaShadow:  1 ,
        }}
      >      
        <form onSubmit={() => {}}>
          <EmailIcon className={style.icon} />
          <Typography variant='h5'>
            Contate-nos
          </Typography>
          <Typography variant="subtitle1">
            Envie sua mensagem, que logo retornaremos o contato!  
          </Typography>

          <TextField
            fullWidth
            label="Nome"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Mensagem"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#1de9b6", 
              color: "#fff",
              "&:hover": {
                backgroundColor: "#3f55cd",
              
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
          
        </Grid>
      </Grid>
    </Box>
  );
}
