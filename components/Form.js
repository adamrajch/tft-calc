import {
  Grid,
  Form,
  Input,
  Icon,
  Button,
  Header,
  Label,
} from "semantic-ui-react";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import calc from "./calc";

function TFTForm() {
  const [champ, setChamp] = useState("");
  const [lvl, setlvl] = useState(1);
  const [taken, setTaken] = useState(0);
  const [otherTaken, setOtherTaken] = useState(0);
  const [gold, setGold] = useState(0);
  const [dup, setDup] = useState(1);
  const [calculated, setCalculated] = useState(false);
  const [form, setForm] = useState({
    champ: "",
    level: 1,
    taken: 0,
    otherTaken: 0,
    gold: 0,
    duplicate: 1,
  });
  const [help, setHelp] = useState(false);

  const updateField = (e) => {
    if (isNaN(parseInt(e.target.value))) {
      console.log("value ", e.target.value);
    } else {
      const val = parseInt(e.target.value, 10);
      console.log("value ", e.target.value);
      setForm({
        ...form,
        [e.target.name]: val,
      });
    }
  };
  return (
    <Grid textAlign="center" columns={2} container>
      <Grid.Row>
        <Grid.Column width={6}>
          <Input
            placeholder="Search unit..."
            value={champ}
            onChange={(e) => setChamp(e.target.value)}
          >
            <input />
            <Button
              icon="search"
              onClick={() => console.log(champ)}
              color="green"
            />
          </Input>
        </Grid.Column>
        <Grid.Column width={6}>
          <div>
            Player Level:
            <input
              className={styles.put}
              type="text"
              name="level"
              value={form.level}
              min="1"
              max="9"
              onChange={updateField}
              maxLength="1"
            />
            <Icon
              name="angle up"
              color="yellow"
              onClick={() =>
                form.level < 9
                  ? setForm((prev) => ({ ...prev, level: prev.level + 1 }))
                  : console.log(form.level)
              }
            />
            <Icon
              name="angle down"
              color="yellow"
              onClick={() =>
                form.level > 1
                  ? setForm((prev) => ({ ...prev, level: prev.level - 1 }))
                  : console.log(form.level)
              }
            />
          </div>
          <div>
            Unit Taken:
            <input
              className={styles.put}
              type="text"
              name="taken"
              value={form.taken}
              min="1"
              max="99"
              onChange={updateField}
              maxLength="2"
            />
            <Icon
              name="angle up"
              color="yellow"
              onClick={() =>
                form.taken < 50
                  ? setForm((prev) => ({ ...prev, taken: prev.taken + 1 }))
                  : console.log(form.taken)
              }
            />
            <Icon
              name="angle down"
              color="yellow"
              onClick={() =>
                form.taken > 1
                  ? setForm((prev) => ({ ...prev, taken: prev.taken - 1 }))
                  : console.log(form.taken)
              }
            />
            Other Taken:
            <input
              className={styles.put}
              type="text"
              name="otherTaken"
              value={form.otherTaken}
              min="1"
              max="99"
              onChange={updateField}
              maxLength="2"
            />
            <Icon
              name="angle up"
              color="yellow"
              onClick={() =>
                form.otherTaken < 50
                  ? setForm((prev) => ({
                      ...prev,
                      otherTaken: prev.otherTaken + 1,
                    }))
                  : console.log(form.otherTaken)
              }
            />
            <Icon
              name="angle down"
              color="yellow"
              onClick={() =>
                form.otherTaken > 1
                  ? setForm((prev) => ({
                      ...prev,
                      otherTaken: prev.otherTaken - 1,
                    }))
                  : console.log(form.otherTaken)
              }
            />
          </div>
          <div>
            Gold:{" "}
            <input
              className={styles.put}
              type="text"
              name="gold"
              value={form.gold}
              min="0"
              max="999"
              onChange={updateField}
              maxlength="3"
            />
            <Icon
              name="angle up"
              color="yellow"
              size="big"
              onClick={() =>
                form.gold < 990
                  ? setForm((prev) => ({ ...prev, gold: prev.gold + 10 }))
                  : console.log("hello there")
              }
            />
            <Icon
              name="angle up"
              color="yellow"
              onClick={() =>
                form.gold < 998
                  ? setForm((prev) => ({ ...prev, gold: prev.gold + 2 }))
                  : console.log("hello there")
              }
            />
            <Icon
              name="angle down"
              color="yellow"
              onClick={() =>
                form.gold >= 2
                  ? setForm((prev) => ({ ...prev, gold: prev.gold - 2 }))
                  : console.log("hello there")
              }
            />
            <Icon
              name="angle down"
              color="yellow"
              size="big"
              onClick={() =>
                form.gold >= 10
                  ? setForm((prev) => ({ ...prev, gold: prev.gold - 10 }))
                  : console.log("hello there")
              }
            />
          </div>
          <div>
            Copies needed:{" "}
            <input
              className={styles.put}
              type="text"
              name="duplicate"
              value={form.duplicate}
              min="1"
              max="99"
              onChange={updateField}
              maxlength="1"
            />
            <Icon
              name="angle up"
              color="yellow"
              onClick={() =>
                form.duplicate < 9
                  ? setForm((prev) => ({
                      ...prev,
                      duplicate: prev.duplicate + 1,
                    }))
                  : console.log("hello there")
              }
            />
            <Icon
              name="angle down"
              color="yellow"
              onClick={() =>
                form.duplicate > 1
                  ? setForm((prev) => ({
                      ...prev,
                      duplicate: prev.duplicate - 1,
                    }))
                  : console.log("hello there")
              }
            />
          </div>
          <div>
            <Button
              content="Calculate"
              color="yellow"
              onClick={() => console.log(calc(lvl))}
            />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Row>
          <Header as="h2">Specs</Header>
          <div>
            {calculated === true ? (
              <div>hello</div>
            ) : (
              <div> nothing here boys</div>
            )}
            champ:{champ} gold: {gold} copies: {dup}
            level: {lvl}
          </div>
        </Grid.Row>
      </Grid.Row>
    </Grid>
  );
}

export default TFTForm;
