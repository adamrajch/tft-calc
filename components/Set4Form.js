import {
  Grid,
  Form,
  Input,
  Icon,
  Button,
  Header,
  Label,
  Dropdown,
  Item,
  Image,
  Popup,
  Statistic,
  Message,
} from "semantic-ui-react";

import { useState, useEffect } from "react";
export default function Set3Form() {
  const [level, setLevel] = useState("1");
  function handleChange(e) {
    if (isNaN(parseInt(e.target.value))) {
      console.log("value ", e.target.value);
    } else {
      const daba = parseInt(e.target.value, 10);
      if (daba % 10 === 0) {
        return;
      }
      setVal(daba % 10);
    }
  }
  return (
    <Grid textAlign="center" columns={2} container stackable inverted>
      <Grid.Row>
        <Message>
          <Message.Header>Coming soon</Message.Header>
        </Message>
        <label>Test</label> <input onChange={handleChange} value={level} />
      </Grid.Row>
    </Grid>
  );
}
