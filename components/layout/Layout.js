import Head from "next/head";
import Image from "next/image";

import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Head>
        <title>Teams 2 Teams</title>
        <meta
          name="description"
          content="Front-End module of the Teams-2-Teams portal"
        />
      </Head>
      <MainNavigation />

      <main className={styles.main}>{props.children}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

    </div>
  );
}

export default Layout;