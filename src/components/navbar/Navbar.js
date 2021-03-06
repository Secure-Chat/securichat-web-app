// Imports
import * as React from 'react';
import { Link } from 'react-router-dom';

// Styling
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../img/logo.png';
import logodark from '../../img/logo-darkmode.png';
import './Navbar.scss';

const pages = ['Contacts', 'Add Friend'];
const links = {
  Contacts: '/',
  'Add Friend': '/addfriend',
};

const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const setLogo = props.darkMode ? logodark : logo;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="navbar nav-bg" position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters id="header-toolbarw">
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/">
              <img src={setLogo} alt="SecuriChat" className="logo" />
            </Link>
          </Typography>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Link to="/">
              <img src={setLogo} alt="SecuriChat" className="logo" />
            </Link>
          </Typography>
          {props.isLoggedIn ? (
            <>
              <Box id="menu-box" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <Link to={links[page]} className="nav-link-dropdown">
                          {page}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to={links[page]} className="nav-link">
                      {page}
                    </Link>
                  </Button>
                ))}
              </Box>
            </>
          ) : (
            <></>
          )}
          <IconButton id="color-selector" color="inherit" onClick={() => props.setDarkMode(!props.darkMode)}>
            {props.chooseIconMode}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
