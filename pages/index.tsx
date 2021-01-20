import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>gauting.live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="logo.svg" width="340" />

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Idee &rarr;</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices suscipit nibh, ut tempus neque tincidunt eget.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Crowdfunding &rarr;</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices suscipit nibh, ut tempus neque tincidunt eget.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h3>KünstlerInnen &rarr;</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices suscipit nibh, ut tempus neque tincidunt eget.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Termine &rarr;</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices suscipit nibh, ut tempus neque tincidunt eget.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://kulturspektakel.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img
            src="/kult.svg"
            alt="Kulturspektakel Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
