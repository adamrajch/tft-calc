import Form from "../components/Form";
import axios from "axios";
import Nav from "../components/Nav";
import page from "../styles/Page.module.css";
export default function Set3({ units }) {
  return (
    <div className={page.container3}>
      <div className={page.content}>
        <Nav />
        <div className={page.head}>SET 3 : GALAXIES</div>
        <Form units={units} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  //fetch data on server
  const url = "http://localhost:3000/api/units";
  const response = await axios.get(url);

  return {
    props: {
      units: response.data,
    },
    revalidate: 1,
  };
}
