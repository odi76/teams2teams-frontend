import { Provider } from "react-redux";

import store from "../stores/index";

import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return (
        <Provider store={store}>
          <Layout>{page}</Layout>
        </Provider>
      );
    });

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
