import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
export default function Home() {
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

// Home.getInitialProps = async () => {
//   //fetch data on server
//   const url = "http://localhost:3000/api/units";
//   const response = await axios.get(url);
//   //return response data as an object, merged with existing props
//   return { units: response.data };
// };
