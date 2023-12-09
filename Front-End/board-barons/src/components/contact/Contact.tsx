import * as React from 'react';
import style from './Contact.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Typography } from '@mui/material';


export default function CenteredElementGrid() {
  return (
    <Box sx={{ flexGrow: 1 , my: 5}}>
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
    </Box>
  );
}
