import Form from "../components/Set4Form";
import axios from "axios";
import Nav from "../components/Nav";
import page from "../styles/Page.module.css";
import { Image } from "semantic-ui-react";
import styles from "../styles/Page.module.css";
import { getUnits } from "../components/getUnits";
export default function Set4({ units }) {
  return (
    <div className={page.container4}>
      <div className={page.content}>
        <Nav />
        <div className={styles.center}>
          <Image src="Images/Set4/set-4-logo.png" size="large" wrapped />
        </div>
        <Form units={units} />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  //fetch data on server
  // const url = "http://localhost:3000/api/units";
  // const response = await axios.get(url);
  const units = getUnits(4);
  return {
    props: {
      units,
    },
  };
}
