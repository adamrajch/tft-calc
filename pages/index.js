import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Form from "../components/Form";
import Set4Form from "../components/Set4Form";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
export default function Home({ units }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>TFT Calc</title>
      </Head>

      <div className={styles.blur}>
        <Nav />
        <div className={styles.content}></div>
      </div>
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
