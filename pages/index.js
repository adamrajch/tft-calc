import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Test from '../components/testing'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TFT Calc</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <Test />
      </main>

      <footer className={styles.footer}>
        <span>Rajchwald Bros</span>
      </footer>
    </div>
  );
}
