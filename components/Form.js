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

  const handleLvl = (e) => {
    const lvl_int = parseInt(e.target.value, 10);
    if (lvl_int >= 1 && lvl_int <= 9) {
      setlvl(lvl_int);
    }
  };
  const handleGold = () => {
    const gold_int = parseInt(e.target.value, 10);
    if ((lvl = _int >= 1 && lvl_int <= 9)) {
      setlvl(lvl_int);
    }
  };
  const handleCalc = () => {
    console.log(champList);
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
              value={lvl}
              onChange={handleLvl}
              maxLength="1"
            />
            <Icon
              name="angle up"
              color="yellow"
              onClick={() => (lvl < 9 ? setlvl(lvl + 1) : console.log(lvl))}
            />
            <Icon
              name="angle down"
              color="yellow"
              onClick={() => (lvl > 1 ? setlvl(lvl - 1) : console.log(lvl))}
            />
          </div>
          <div>
            Unit Taken:
            <input
              className={styles.put}
              value={taken}
              onChange={(e) => setTaken(e.target.value)}
            />
            <Icon
              name="angle up"
              color="yellow"
              onClick={() =>
                taken < 9 ? setTaken(lvl + 1) : console.log(taken)
              }
            />
            <Icon
              name="angle down"
              color="yellow"
              onClick={() =>
                taken > 1 ? setTaken(lvl - 1) : console.log(taken)
              }
            />
            Other Taken:
            <input
              className={styles.put}
              value={otherTaken}
              onChange={(e) => setOtherTaken(e.target.value)}
            />
            <Icon
              name="angle up"
              color="yellow"
              onClick={() =>
                taken < 9 ? setOtherTaken(lvl + 1) : console.log(otherTaken)
              }
            />
            <Icon
              name="angle down"
              color="yellow"
              onClick={() =>
                taken > 1 ? setOtherTaken(lvl - 1) : console.log(otherTaken)
              }
            />
          </div>
          <div>
            Gold: <input className={styles.put} value={gold} />
            <Icon
              name="angle up"
              color="yellow"
              size="big"
              onClick={() => setGold(gold + 10)}
            />
            <Icon
              name="angle up"
              color="yellow"
              onClick={() => setGold(gold + 2)}
            />
            <Icon
              name="angle down"
              color="yellow"
              onClick={() =>
                gold >= 2 ? setGold(gold - 2) : console.log(gold)
              }
            />
            <Icon
              name="angle down"
              color="yellow"
              size="big"
              onClick={() =>
                gold >= 10 ? setGold(gold - 10) : console.log(gold)
              }
            />
          </div>
          <div>
            Copies needed: <input className={styles.put} value={dup} />
            <Icon
              name="angle up"
              color="yellow"
              onClick={() => setDup(dup + 1)}
            />
            <Icon
              name="angle down"
              color="yellow"
              onClick={() => (dup >= 2 ? setDup(dup - 1) : console.log(dup))}
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
