import { Provider } from "react-redux";

import { Grid, Paper } from "@mui/material";

import store from "../stores/index";

import SignInForm from "../components/sign-in/SignInForm";

function SignIn() {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <SignInForm />
      </Grid>
    </Grid>
  );
}

SignIn.getLayout = function getLayout(page) {
  return <Provider store={store}>{page}</Provider>;
};

export default SignIn;
