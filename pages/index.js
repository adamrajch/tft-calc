import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Form from "../components/Form";
import { useEffect } from "react";
import axios from "axios";
export default function Home({ units }) {
  // console.log(units);

  return (
    <div className={styles.container}>
      <Head>
        <title>TFT Calc</title>
      </Head>
      <div className={styles.blur}>
        <Header />
        <div className={styles.content}>
          <Form units={units} />
        </div>
      </div>

      {/* <footer className={styles.footer}>
        <span>Rajchwald Bros</span>
      </footer> */}
    </div>
  );
}

Home.getInitialProps = async () => {
  //fetch data on server
  const url = "http://localhost:3000/api/units";
  const response = await axios.get(url);
  //return response data as an object, merged with existing props
  return { units: response.data };
};
