import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Grid,
  Typography,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import ApiClient from "../../src/api/src/ApiClient";
import AuthApi from "../../src/api/src/api/AuthenticationApi";
import RegistrationData from "../../src/api/src/model/RegistrationData";

import { authActions } from "../../stores/auth";

// A generált REST API client SDK elérhetőségéhez
var restApiClient = ApiClient.instance;
var authApi = new AuthApi(restApiClient);

function SignUpForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  function submitHandler(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // TODO: password ellenőrzés
    const passwordValidation =
      data.get("password") === data.get("password_verify");

    setIsPasswordValid(passwordValidation);

    if (passwordValidation) {
      dispatch(authActions.signUpStarted(data.get("email")));

      const registrationData = new RegistrationData(
        data.get("email"),
        data.get("password")
      );

      const callback = function (error, payload, response) {
        if (error) {
          console.error(error);
          authActions.signUpFinished({
            isSuccessfull: false,
          });
        } else {
          console.log("Registration REST API was called successfully.");
          dispatch(
            authActions.signUpFinished({
              isSuccessfull: true,
            })
          );

          // A böngésző átirányítása a főoldalra.
          router.replace("/");
        }
      };
      authApi.registrate(registrationData, callback);
    }
  }

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="text"
          autoComplete="username email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label= "Password"
          type="password"
          autoComplete="new-password"
          id="password"
        />
        <TextField
          error={ !isPasswordValid }
          margin="normal"
          required
          fullWidth
          name="password_verify"
          label={isPasswordValid ? 'Password (again)' : 'Error' }
          helperText={isPasswordValid ? '' : 'Pasword does not match' }
          type="password"
          autoComplete="new-password"
          id="password_verify"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default SignUpForm;
