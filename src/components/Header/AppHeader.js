import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { theme } from "../GlobalStyles/ControlStyles";
import "./HeaderStyle.scss";
import { useAuth } from "../../context/AuthContext";

export const AppHeader = () => {
    const {authLoading, signout} = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    // const classes = useStyles();
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
        !authLoading ? 
            <ThemeProvider theme={theme}>
            <AppBar position="static" color="neutral">
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        display=" flex"
                        justifycontent="space-between"
                    >
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                            className="link"
                        >
                            Pro Resume
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            ></Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", justifyContent: "flex-end", md: "none" },
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: "space-between",
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            <Link to="/" className="link">
                                <MenuItem>Home</MenuItem>
                            </Link>

                        </Box>

                        <Box sx={{ flexGrow: 0}}>
                            <Tooltip 
                             sx={{ mt: "45px", display: "flex", flexDirection: "column" }}
                            title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu 
                                sx={{ mt: "45px", display: "flex", flexDirection: "column", padding: "10px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <Link 
                                to="/dashboard">
                                    <MenuItem>Profile</MenuItem>
                                </Link>
                                <Link to="/dashboard">
                                    <MenuItem>Dashboard</MenuItem>
                                </Link>
                                <Link to="/dashboard" onClick={() => {signout()}}>
                                    <MenuItem>Logout</MenuItem>
                                </Link>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
        : null  
    );
};
