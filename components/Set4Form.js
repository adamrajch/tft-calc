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
export default function Set4Form({ units }) {
  // const [level, setLevel] = useState("1");
  const [form, setForm] = useState({
    champ: { name: "" },
    level: 1,
    taken: 0,
    otherTaken: 0,
    gold: 2,
    duplicate: 1,
  });
  const [answer, setAnswer] = useState(null);
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
  const handleDrop = (e, { value }) => {
    const selected = units.find((champ) => champ.name === value);
    //if search is cleared

    if (selected === undefined) {
      setForm({ ...form, champ: { name: "" } });
      setAnswer(null);
    } else {
      if (selected.cost === 1) {
        setForm({ ...form, champ: selected });
      } else if (selected.cost === 2) {
        if (form.level < 3) {
          setForm({ ...form, champ: selected, level: 3 });
        } else {
          setForm({ ...form, champ: selected });
        }
      } else if (selected.cost === 3) {
        if (form.level < 4) {
          setForm({ ...form, champ: selected, level: 4 });
        } else {
          setForm({ ...form, champ: selected });
        }
      } else if (selected.cost === 4) {
        if (form.level < 5) {
          setForm({ ...form, champ: selected, level: 5 });
        } else {
          setForm({ ...form, champ: selected });
        }
      } else if (selected.cost === 5) {
        if (form.level < 7) {
          setForm({ ...form, champ: selected, level: 7 });
        } else {
          setForm({ ...form, champ: selected });
        }
      }
    }
  };
  const unitList = units.map((unit) => {
    return {
      key: unit.name,
      value: unit.name,
      text: unit.name,
      image: {
        avatar: true,
        src: unit.image[0],
      },
    };
  });
  return (
    <Grid textAlign="center" columns={2} container stackable inverted>
      <Grid.Row>
        <Grid.Column width={5}>
          <Dropdown
            onChange={handleDrop}
            clearable
            search
            selection
            options={unitList}
            placeholder="Select Unit"
            value={form.champ.name}
            fluid
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
