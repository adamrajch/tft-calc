import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Form from "../components/Form";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TFT Calc</title>
      </Head>
      <Header />
      <div className={styles.content}>
        <Form />
      </div>

      <footer className={styles.footer}>
        <span>Rajchwald Bros</span>
      </footer>
    </div>
  );
}
