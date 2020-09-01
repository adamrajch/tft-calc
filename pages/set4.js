import Form from "../components/Set4Form";
import axios from "axios";
import Nav from "../components/Nav";
import page from "../styles/Page.module.css";

export default function Set4({ units }) {
  return (
    <div className={page.container4}>
      <div className={page.content}>
        <Nav />
        <Form units={units} />
      </div>
    </div>
  );
}
Set4.getInitialProps = async () => {
  //fetch data on server
  const url = "http://localhost:3000/api/units";
  const response = await axios.get(url);
  //return response data as an object, merged with existing props
  return { units: response.data };
};
