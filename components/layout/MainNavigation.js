import React from "react";

import { useDispatch, useSelector } from "react-redux";

import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Image from "next/image";
import styles from "./MainNavigation.module.css";

import { authActions } from "../../stores/auth";
import { Box } from "@mui/system";

function MainNavigation() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);

  const [anchorElProfileButton, setAnchorElProfileButton] =
    React.useState(null);

  const handleOpenProfileMenu = (event) => {
    setAnchorElProfileButton(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setAnchorElProfileButton(null);
  };

  const signOutHandler = () => {
    setAnchorElProfileButton(null);
    dispatch(authActions.signOut());
  };

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={5}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <img src="logo.png" alt="T2T logo" height="40"></img>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Teams-2-Teams
          </Typography>
          <Button>Menu #1</Button>
          <Button>Menu #2</Button>
          <Button>Menu #3</Button>
          {!isAuth && (
            <Button href="/sign_in" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Sign in
            </Button>
          )}
          {isAuth && (
            <IconButton onClick={handleOpenProfileMenu} sx={{ p: 0 }}>
              <Avatar alt={`${userId}`} src="" />
            </IconButton>
          )}
          <Menu
            sx={{ mt: "45px" }}
            id="profile-menu"
            anchorEl={anchorElProfileButton}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElProfileButton)}
            onClose={handleCloseProfileMenu}
          >
              <Typography align="center" fontWeight='bold' paragraph> {`${userId}`}</Typography>
            <MenuItem onClick={signOutHandler}>
              <Typography>Sign out</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default MainNavigation;
