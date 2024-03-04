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
import Tooltip from '@mui/material/Tooltip';
import logo from '../../../public/assets/logo/logo.png'
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../utils/firebase.config';
import { logOut } from '../../redux/features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import "./NavBar.css"

function NavBar() {
    const {user} = useContext(AuthContext)
    const dispatch = useDispatch()
    const handleLogout = () =>{
        signOut(auth)
        dispatch(logOut())
    }

    const settings = <>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <button onClick={handleLogout}>Logout</button>
    </>

    const navLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addAccessories"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                Add Accessories
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/ourAccessories"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                Our Accessories
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addService"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                Add Service
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/allServices"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                All Services
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/ourWork"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                Our Work
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/pricing"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                Pricing
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/appointment"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                Appointment Booking
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/faq"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                FAQs
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/terms&conditions"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                Terms & Conditions
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "#009688 font-bold"
                }
            >
                Login
            </NavLink>
        </li>
    </>

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" elevation={0}>
            <Container maxWidth="xl" sx={{ backgroundColor: "white" }} >
                <Toolbar >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        <img className='lg:mr-10 scale-100 cursor-pointer transition-all duration-200 hover:scale-110' src={logo} alt="logo" width={100} height={100} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                horizontal: 'center',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            <ul className='list-none flex gap-4 text-black'>
                                {navLinks}
                            </ul>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src={logo} alt="" width={70} height={70} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                        <ul className='list-none flex gap-4 text-black'>
                            {navLinks}
                        </ul>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User's picture" src={user?.photoURL} />
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
                            <ul className='list-none p-4 space-y-3'>
                                {settings}
                            </ul>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;