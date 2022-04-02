import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
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
            Nostrud amet laboris sint irure. Anim magna labore ipsum sit mollit
            commodo nulla nulla dolor. Dolore exercitation nisi nostrud culpa
            adipisicing veniam nulla veniam fugiat Lorem. Proident sit cupidatat
            cillum consequat deserunt eu officia exercitation sit. Culpa commodo
            nulla dolore nisi voluptate nulla veniam minim et eiusmod.
          </p>
        </a>

        <a href="" className={styles.card}>
          <h2>Topic #3 &rarr;</h2>
          <p>
            Mollit aliquip ex reprehenderit veniam qui culpa commodo nostrud et
            proident non. Pariatur amet anim id est aliquip tempor quis anim
            Lorem occaecat sint. Voluptate aliqua tempor et excepteur id
            exercitation exercitation do. Sint enim ad commodo laborum ad
            occaecat aute occaecat ex minim nisi fugiat amet. Deserunt ullamco
            dolor incididunt amet aliqua eiusmod culpa in.
          </p>
        </a>

        <a href="" className={styles.card}>
          <h2>Topic #4</h2>
          <p>
            Ullamco excepteur eiusmod anim occaecat aliquip consequat veniam.
            Sint ex id nisi id dolore enim id sit nisi in et laborum dolor. Anim
            cillum consequat eiusmod officia magna veniam nulla occaecat id
            velit labore exercitation sint aliquip. Sit occaecat amet magna
            tempor esse eu officia deserunt.
          </p>
        </a>
      </div>
    </div>
  );
}
