import Head from "next/head";
import Image from "next/image";

import AppBar from "@mui/material/AppBar";

import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";
import Link from "@mui/material/Link";

function Layout(props) {
  return (
    <div>
      <Head>
        <title>Teams 2 Teams</title>
        <meta
          name="description"
          content="Teams-2-Teams portal"
        />
      </Head>
      <MainNavigation />

      {props.children}

      <footer className={styles.footer}>
      </footer>

    </div>
  );
}

export default Layout;