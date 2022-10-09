import React from "react";

import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";

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

import ApiClient from "../../rest-api/src/ApiClient";
import AuthApi from "../../rest-api/src/api/AuthenticationApi";
import HCApi from "../../rest-api/src/api/HealthcheckApi";
import Pong from "../../rest-api/src/model/Pong";

import styles from "./MainNavigation.module.css";

import { authActions } from "../../stores/auth";
import { Box } from "@mui/system";

var restApiClient = ApiClient.instance;
var authApi = new AuthApi(restApiClient);

function MainNavigation() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);
  const sessionId = useSelector((state) => state.auth.sessionId);

  var restApiClient = ApiClient.instance;
  var healthcheckApi = new HCApi(restApiClient);

  const [anchorElProfileButton, setAnchorElProfileButton] =
    React.useState(null);

  const handlePingBE = (event) => {
    const callback = function (error, payload, response) {
      if (error) {
        console.error(error);
        alert("Ping request: " + JSON.stringify(error));
      } else {
        alert("Ping response: " + payload.pong);
      }
    };
    healthcheckApi.ping(callback);
  };

  const handleOpenProfileMenu = (event) => {
    setAnchorElProfileButton(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setAnchorElProfileButton(null);
  };

  const signOutHandler = () => {
    setAnchorElProfileButton(null);

    const callback = function (error, payload, response) {
      if (error) {
        console.error(error);
      } else {
        console.log("Logout REST API was called successfully.");
        dispatch(authActions.signOut());
      }
    };

    authApi.logout(sessionId, callback);
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
          {!isAuth && (
            <Button href="/sign_up" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Sign up
            </Button>
          )}
          {isAuth && (
            <IconButton onClick={handleOpenProfileMenu} sx={{ p: 0 }}>
              <Avatar alt={`${userId}`} src="" />
            </IconButton>
          )}
          <Button
            onClick={handlePingBE}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Ping BE
          </Button>
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
            <Typography align="center" fontWeight="bold" paragraph>
              {" "}
              {`${userId}`}
            </Typography>
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
