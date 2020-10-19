import Nav from "../components/ResponsiveNav";
import Math from "../components/Math";
import styles from "../styles/About.module.css";
import Head from "next/head";
export default function About() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Play&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <div className="header">The Math</div>
      <Math />
      <style jsx>{`
        .header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2em 0;
          font-size: 32px;
          color: white;
        }
      `}</style>
    </div>
  );
}
