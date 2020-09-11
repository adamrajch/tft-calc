import Form from "../components/Form";
import axios from "axios";
import Nav from "../components/Nav";
import page from "../styles/Page.module.css";
import { getUnits } from "../components/getUnits";
import { Image } from "semantic-ui-react";
function Set3({ units }) {
  return (
    <div className={page.container3}>
      <div className={page.content}>
        <Nav />
        <div className={page.head}>
          <Image src="Images/Set3/svglogo.png" size="large" />
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
  const units = getUnits(3);
  return {
    props: {
      units,
    },
    revalidate: 1,
  };
}

export default Set3;
