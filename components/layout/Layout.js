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
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
      </footer>

    </div>
  );
}

export default Layout;