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
  Card,
  Popup,
  Statistic,
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import calc from "./calc";

function TFTForm({ units }) {
  const [form, setForm] = useState({
    champ: { name: "" },
    level: 1,
    taken: 1,
    otherTaken: 0,
    gold: 2,
    duplicate: 1,
  });
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    console.log(form);
  }, [form.champ]);
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
  const handleDrop = (e, { value }) => {
    const selected = units.find((champ) => champ.name === value);
    if (selected === undefined) {
      setForm({ ...form, champ: { name: "" } });
    } else {
      if (selected.cost === 1) {
        setForm({ ...form, champ: selected, level: 1 });
      } else if (selected.cost === 2) {
        setForm({ ...form, champ: selected, level: 3 });
      } else if (selected.cost === 3) {
        setForm({ ...form, champ: selected, level: 4 });
      } else if (selected.cost === 4) {
        setForm({ ...form, champ: selected, level: 5 });
      } else if (selected.cost === 5) {
        setForm({ ...form, champ: selected, level: 7 });
      }

      // console.log(selected);
    }
    // setForm({ ...form, champ: selected });
  };

  //maps unit list to an array with fields for the drop down
  const unitList = units.map((unit) => {
    return {
      key: unit.name,
      value: unit.name,
      text: unit.name,
      image: {
        avatar: true,
        src: unit.image,
      },
    };
  });
  return (
    <Grid textAlign="center" columns={2} container stackable>
      <Grid.Row>
        <Grid.Column width={3}>
          <Dropdown
            onChange={handleDrop}
            clearable
            search
            selection
            options={unitList}
            placeholder="Select Unit"
            value={form.champ.name}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          {form.champ.image ? (
            // <Item>
            //   <Item.Image src={form.champ.image} />

            //   <Item.Content>
            //     <Item.Header>
            //       <h1>{form.champ.name}</h1>
            //     </Item.Header>
            //     <Item.Meta>
            //       {form.champ.cost} <Icon name="bitcoin" color="yellow" />
            //     </Item.Meta>

            //   </Item.Content>

            // </Item>
            <div></div>
          ) : (
            <></>
          )}
        </Grid.Column>
        <Grid.Column width={5}>
          <div>
            Player Level
            <Image src="/Images/Set3/levelup.png" avatar />:
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
            Copies Owned:
            {/* <Image src="/Images/Set3/galaxy_small_starcluster.png" />: */}
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
          </div>
          <div>
            Other Taken :
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
            <Popup
              content="Any units of the same cost owned by opponents"
              trigger={<Icon name="exclamation circle" color="blue" />}
            />
          </div>
          <div>
            Gold
            <Icon name="bitcoin" size="big" color="yellow" />:{" "}
            <input
              className={styles.put}
              type="text"
              name="gold"
              value={form.gold}
              min="0"
              max="999"
              onChange={updateField}
              maxLength="3"
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
            Copies needed
            <Icon name="star" color="yellow" />:
            <input
              className={styles.put}
              type="text"
              name="duplicate"
              value={form.duplicate}
              min="1"
              max="99"
              onChange={updateField}
              maxLength="1"
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
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Button
          content="Calculate"
          color="yellow"
          onClick={() => setAnswer(calc(form))}
        />
      </Grid.Row>
      <div className="result">
        <Grid.Row>
          {answer ? (
            <Statistic
              horizontal
              value={answer}
              label={<Icon name="percent" size="large" />}
              color="yellow"
            />
          ) : (
            <></>
          )}
        </Grid.Row>
        <style jsx>{`
          .result {
            margin-top: 2em;
          }
        `}</style>
      </div>
    </Grid>
  );
}

export default TFTForm;
