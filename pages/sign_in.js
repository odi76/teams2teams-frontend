import { Provider } from "react-redux";

import store from "../stores/index";

import SignInForm from "../components/sign-in/SignInForm";

function SignIn() {
  return <SignInForm />;
}

SignIn.getLayout = function getLayout(page) {
  return <Provider store={store}>{page}</Provider>;
};

export default SignIn;
