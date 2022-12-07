import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { createTheme } from '@mui/material/styles';
import { cachedDataVersionTag } from 'v8';

const pages = ['EloJob', 'DuoBoost', 'Sobre nós', ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const theme = createTheme({
  palette: {
    primary: {
      main: '#c1c1c1c1'
    },
    secondary: {
      main: '#c65'
    }
    
  }
})




function Header() {
  

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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
    
  //  sx com duas chaves, tipo sx {{}} é usado para colocar os styles dentro de um componente do MUI. Mudei a padrão do seu teclado
    <AppBar position="sticky" id='appbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          > 
            ELOROCK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button variant="text" sx={{color: '#f1f1f1f1'}}>EloJob</Button>
            <Button variant="text" sx={{color: '#f1f1f1f1'}}>Duoboost</Button>
            <Button variant="text" sx={{color: '#f1f1f1f1'}}>Sobre nós</Button>
          </Box>
          
          <Tooltip title='Fazer Login'>
            <Button variant="contained" startIcon={<AssignmentIndIcon/>} id='buttontesteste'>Fazer login</Button>
          </Tooltip>
        
        </Toolbar>
      </Container>
    </AppBar> 
  );
}
export default Header;
