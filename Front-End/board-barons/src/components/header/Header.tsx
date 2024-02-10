import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Stack,
  Tooltip,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import LogoIcon from '../../assets/images/logo1.png';

export default function ButtonAppBar() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isScreenSmallerThan500px = useMediaQuery('(max-width: 500px)')


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const scrollToAbout = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img src={LogoIcon} width={!isScreenSmallerThan500px ? "300px" : "232px"} alt="" />
          </Link>
          {/* <Link to={'/'} className={style.Links}>
          {!isMobile ||  !isScreenSmallerThan412px ? (
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
            ) : null}
          </Link> */}

          {isMobile ? (
            <>
              <IconButton
                onClick={handleOpenNavMenu}
                color="inherit"
                edge="end"
                sx={{ ml: 'auto', display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar-mobile"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                PaperProps={{ sx: { backgroundColor: 'black' } }} // Aqui aplicamos o estilo de fundo preto
              >
                <MenuItem>
                  <Link to="/" className={style.Links}>
                    <Button color="inherit" sx={{ width: '100%', color: "#ffffff" }}>
                      Home
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="#" className={style.Links}>
                    <Button color="inherit" sx={{ width: '100%', color: "#ffffff" }}>
                      Sobre nós
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="#" className={style.Links}>
                    <Button color="inherit" sx={{ width: '100%', color: "#ffffff" }}>
                      Blog
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem onClick={() => scrollToAbout()}>
                  <Link to="#" className={style.Links}>
                    <Button color="inherit" sx={{ width: '100%', color: "#ffffff" }}>
                      Contato
                    </Button>
                  </Link>
                </MenuItem>
                {!isAuth && (
                  <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Link to="/auth/signin" className={style.Links}>
                    <Button variant="outlined"  sx={{ color: '#00ff68'}}>
                      Entrar
                    </Button>
                    </Link>
                    <Link to="/auth/signup" className={style.Links}>
                    <Button variant="outlined" sx={{ color: '#1de9b6'}}>
                      Criar conta
                    </Button>
                    </Link>
                  </Box>
                )}
              </Menu>
            </>
          ) : (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Link to="/" className={style.Links}>
                <Button sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}> Home </Button>
              </Link>

              <Link to="#" className={style.Links}>
                <Button sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}> Sobre nós </Button>
              </Link>

              <Link to="#" className={style.Links}>
                <Button sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}> Blog </Button>
              </Link>

              <Link to="#" className={style.Links} onClick={() => scrollToAbout()}>
                <Button sx={{ my: 2, color: 'white', display: 'block', mr: 2 }}> Contato </Button>
              </Link>
              
            {!isAuth && (
              <Stack spacing={1} direction="row" marginRight={2}>
              <Link to="/auth/signin" className={style.Links}>
                <Button variant="contained" color="success" sx={{ display: 'block',  my: 2}}>
                  Entrar
                </Button>
              </Link>
              <Link to="/auth/signup" className={style.Links}>
                <Button variant="outlined" sx={{ color: '#1de9b6', display: 'block',  my: 2}}>
                  Criar conta
                </Button>
              </Link>
            </Stack>
            )} 
            
     

            </Box>
          )}

          {isAuth && (
            <Box sx={{ flexGrow: 0, ml:2 }}>
              <Tooltip title="Perfil">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: '#ffffff' }}>
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
                  <Typography textAlign="center">Meu Perfil</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Clubes</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Torneios</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Lojas Parceiras</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Configurações</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Segurança</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Sair</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
