import { useState} from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import LogoIcon from "../../assets/images/icon_board_barons.png"
import { Avatar, IconButton, ImageListItem, Menu, MenuItem, Stack, Tooltip } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import style from './Header.module.css'


export default function ButtonAppBar() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar> 
          {/* <LogoIcon/> */}
          <Link to='/'>
            <img src={LogoIcon} width="60px" alt=''/>
          </Link>
          <Link to={'/'} className={style.Links}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                ml: 3,
              }}
            >
              Board Barons
            </Typography>      
          </Link>
                       

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
            <Link to="/" className={style.Links}>
              <Button sx={{ my: 2, color: 'white', display: 'block' , mr: 2}}> Home </Button> 
            </Link>

            <Link to="#" className={style.Links}>
            <Button sx={{ my: 2, color: 'white', display: 'block' , mr: 2 }}> Sobre nós </Button>   
            </Link>

            <Link to="#" className={style.Links}>
              <Button sx={{ my: 2, color: 'white', display: 'block' , mr: 2 }}> Blog </Button>  
            </Link>

            <Link to="#" className={style.Links}>
              <Button sx={{ my: 2, color: 'white', display: 'block' , mr: 2 }}> Contato </Button>  
            </Link>
          </Box>

          <Stack spacing={1} direction="row" marginRight={2}>
            <Link to="/auth/signin" className={style.Links}>
              <Button variant="contained" color="success">Entrar</Button>
            </Link>
            <Link to="/auth/signup" className={style.Links}>
              <Button variant="outlined" sx={{ color: '#1de9b6'}} >Criar conta</Button>
            </Link>
          </Stack>

          <Box sx={{ flexGrow: 0 }}>           
            <Tooltip title="Perfil">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: '#ffffff' }}>
                {/* <Avatar alt="perfil" src="/static/images/avatar/2.jpg" /> */}                
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >              
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Perfil</Typography>                
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Configurações</Typography>                
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Segurança</Typography>                
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Grupos</Typography>                
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Sair</Typography>                
              </MenuItem>            
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}