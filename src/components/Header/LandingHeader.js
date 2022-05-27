import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { shadows } from "@mui/system";
import { StyledLink } from "../../pages/style";
// style
import "./HeaderStyle.scss";
import { useLocation } from "react-router-dom";

export const LandingHeader = () => {
  const location = useLocation();
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
    <div>
      <AppBar
        sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Pro <span> Resume</span>
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
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Create Resume</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Resume Analyzer</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Apply Jobs</Typography>
                </MenuItem>
                {/* <MenuItem onClick={handleCloseNavMenu}>
                  <Button>Sign In</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button>Start Free</Button>
                </MenuItem> */}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Pro Resume
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Typography textAlign="center">Create Resume</Typography>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Typography textAlign="center">Resume Analyzer</Typography>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Typography textAlign="center">Apply Jobs</Typography>
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <StyledLink to="/login">
                <Button>
                  <Typography>Sign In</Typography>
                </Button>
              </StyledLink>
              <StyledLink to="/register">
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "#1ea5fc",
                    m: 2,
                    px: 3,
                    py: 1,
                    boxShadow: 5,
                    "&:hover": { backgroundColor: "#1ea5fc", boxShadow: 1 },
                  }}
                >
                  <Typography>Start Free</Typography>
                </Button>
              </StyledLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
