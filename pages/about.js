import Nav from "../components/ResponsiveNav";
import Math from "../components/Math";
import styles from "../styles/About.module.css";
export default function About() {
  return (
    <div className={styles.wrapper}>
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
          color: black;
        }
      `}</style>
    </div>
  );
}
