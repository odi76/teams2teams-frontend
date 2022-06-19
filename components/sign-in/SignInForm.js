import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useRef } from "react";

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

import ApiClient from '../../src/api/src/ApiClient';
import AuthApi from '../../src/api/src/api/AuthenticationApi';
import LoginInput from '../../src/api/src/model/LoginInput';
import LoginOutput from '../../src/api/src/model/LoginOutput';

import { authActions } from "../../stores/auth";

// A generált REST API client SDK elérhetőségéhez
var restApiClient = ApiClient.instance;
var authApi = new AuthApi( restApiClient );

function SignInForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userNameRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    //A várakozási állapot beállítása.
    dispatch(authActions.signInStarted(data.get("email")));

    const callback = function(error, payload, response) {
      if (error) {
        console.error(error);
        authActions.signInFinished({
          isSuccessfull: false,
          token: null
        })
      } else {
        console.log('API called successfully.');

        dispatch(
          authActions.signInFinished({
            isSuccessfull: true,
            token: payload.sessionId
          }));
  
        // A böngésző átirányítása a főoldalra.
        router.replace("/");
 
      }
    };
    const loginInput = new LoginInput( data.get("email"), data.get("password") );
    console.log('Login API is being invoked.');
    authApi.login(loginInput, callback);
    console.log('Login API has been invoked.');
  
/*     fetch()
      .then( async (res) => {

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
               errorMessage = data.error.message;
             }

            throw new Error(errorMessage);
          });
        }
      })
      .then( (data) => {
        // A várakozási állapot feloldása és a token eltárolása állapotváltozóként.
        dispatch(
          authActions.signInFinished({
            isSuccessfull: true,
            token: null
          })
        );
        
        // A böngésző átirányítása a főoldalra.
        router.replace("/");
      })
      .catch((err) => {
        //REST API hívás hibaesetének kezelése
        dispatch(
          authActions.signInFinished({
            isSuccessfull: false,
            token: null
          })
        );
      }); */

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
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignInForm;
