import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teams 2 Teams</title>
        <meta
          name="description"
          content="Front-End module of the Teams-2-Teams portal"
        />
      </Head>

      <header className={styles.main_header}>
        <div>
          <a href="index.html" className={styles.main_header__brand}>
            <img src="logo.png" alt="T2T logo"></img>
          </a>
        </div>
        <nav className={styles.main_nav}>
          <ul className={styles.main_nav__items}>
            <li className={`${styles.main_nav__item} ${styles.main_nav__item__cta}`}>
              <a href="">Menu #1</a>
            </li>
            <li className={styles.main_nav__item}>
              <a href="">Menu #2</a>
            </li>
            <li className={styles.main_nav__item}>
              <a href="">Menu #3</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Teams 2 Teams!</h1>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Topic #1 &rarr;</h2>
            <p>
              Adipisicing magna voluptate nisi fugiat adipisicing pariatur
              deserunt aute laborum culpa. Anim eu consectetur enim laboris esse
              sit in. Ad pariatur consequat id mollit. Duis consectetur in nisi
              minim deserunt ipsum laboris.
            </p>
          </a>

          <a href="" className={styles.card}>
            <h2>Topic #2</h2>
            <p>
              Cupidatat anim reprehenderit pariatur exercitation fugiat ea.
              Nostrud amet laboris sint irure. Anim magna labore ipsum sit
              mollit commodo nulla nulla dolor. Dolore exercitation nisi nostrud
              culpa adipisicing veniam nulla veniam fugiat Lorem. Proident sit
              cupidatat cillum consequat deserunt eu officia exercitation sit.
              Culpa commodo nulla dolore nisi voluptate nulla veniam minim et
              eiusmod.
            </p>
          </a>

          <a href="" className={styles.card}>
            <h2>Topic #3 &rarr;</h2>
            <p>
              Mollit aliquip ex reprehenderit veniam qui culpa commodo nostrud
              et proident non. Pariatur amet anim id est aliquip tempor quis
              anim Lorem occaecat sint. Voluptate aliqua tempor et excepteur id
              exercitation exercitation do. Sint enim ad commodo laborum ad
              occaecat aute occaecat ex minim nisi fugiat amet. Deserunt ullamco
              dolor incididunt amet aliqua eiusmod culpa in.
            </p>
          </a>

          <a href="" className={styles.card}>
            <h2>Topic #4</h2>
            <p>
              Ullamco excepteur eiusmod anim occaecat aliquip consequat veniam.
              Sint ex id nisi id dolore enim id sit nisi in et laborum dolor.
              Anim cillum consequat eiusmod officia magna veniam nulla occaecat
              id velit labore exercitation sint aliquip. Sit occaecat amet magna
              tempor esse eu officia deserunt.
            </p>
          </a>
        </div>
      </main>

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
