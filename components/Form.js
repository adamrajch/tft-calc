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
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import calc from "./calc";

function TFTForm({ units }) {
  const [form, setForm] = useState({
    champ: { name: "" },
    level: 1,
    taken: 0,
    otherTaken: 0,
    gold: 2,
    duplicate: 1,
  });
  const [answer, setAnswer] = useState(null);
  const calculate = () => {
    if (form.gold < 2) {
      setForm({ ...form, gold: 2 });
    }

    if (form.champ.cost) {
      setAnswer(calc(form));
    }
  };

  useEffect(() => {
    if (answer) {
      setAnswer(calc(form));
    }
  }, [form.champ]);
  useEffect(() => {
    // console.log(answer);
  }, [answer]);

  useEffect(() => {
    if (answer) {
      setAnswer(calc(form));
    }
  }, [form.level]);
  useEffect(() => {
    if (answer) {
      setAnswer(calc(form));
    }
  }, [form.taken]);
  useEffect(() => {
    if (answer) {
      setAnswer(calc(form));
    }
  }, [form.otherTaken]);
  useEffect(() => {
    if (answer) {
      if (form.gold === 1) {
      } else {
        setAnswer(calc(form));
      }
    }
  }, [form.gold]);

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
  const handleLevel = () => {
    if (!form.champ.cost && form.level > 1) {
      setForm((prev) => ({ ...prev, level: prev.level - 1 }));
    } else {
      if (form.champ.cost === 1 && form.level > 1) {
        setForm((prev) => ({ ...prev, level: prev.level - 1 }));
      } else if (form.champ.cost === 2 && form.level > 3) {
        setForm((prev) => ({ ...prev, level: prev.level - 1 }));
      } else if (form.champ.cost === 3 && form.level > 4) {
        setForm((prev) => ({ ...prev, level: prev.level - 1 }));
      } else if (form.champ.cost === 4 && form.level > 5) {
        setForm((prev) => ({ ...prev, level: prev.level - 1 }));
      } else if (form.champ.cost === 5 && form.level > 7) {
        setForm((prev) => ({ ...prev, level: prev.level - 1 }));
      }
    }
  };
  const handleOtherTaken = () => {
    if (!form.champ.cost) {
      setForm((prev) => ({ ...prev, otherTaken: prev.otherTaken + 1 }));
    } else {
      const num = form.champ.all - form.taken;
      if (form.otherTaken < num) {
        setForm((prev) => ({ ...prev, otherTaken: prev.otherTaken + 1 }));
      }
    }
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

        <Grid.Column width={5}>
          <div className={styles.border}>
            <div>
              <div className={styles.formdiv}>
                <label className={styles.formlabel}>
                  Player Level <Image src="/Images/Set3/levelup.png" avatar />:
                </label>

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
                <span className={styles.stack}>
                  <Item>
                    <Icon
                      name="angle up"
                      color="yellow"
                      onClick={() =>
                        form.level < 9
                          ? setForm((prev) => ({
                              ...prev,
                              level: prev.level + 1,
                            }))
                          : () => console.log(form.level)
                      }
                    />
                  </Item>
                  <Item>
                    <Icon
                      name="angle down"
                      color="yellow"
                      onClick={handleLevel}
                    />
                  </Item>
                </span>
              </div>
            </div>
            <div className={styles.formdiv}>
              <label className={styles.formlabel}>Copies Taken :</label>

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
              <span className={styles.stack}>
                <Icon
                  name="angle up"
                  color="yellow"
                  onClick={() =>
                    form.taken < 50
                      ? setForm((prev) => ({ ...prev, taken: prev.taken + 1 }))
                      : () => console.log(form.taken)
                  }
                />
                <Icon
                  name="angle down"
                  color="yellow"
                  onClick={() =>
                    form.taken >= 1
                      ? setForm((prev) => ({ ...prev, taken: prev.taken - 1 }))
                      : () => console.log(form.taken)
                  }
                />
              </span>
              <Popup
                content="Chosen unit owned by you or other players"
                trigger={<Icon name="exclamation circle" color="blue" />}
              />
            </div>
            <div className={styles.formdiv}>
              <label className={styles.formlabel}>
                Same Cost Units Taken :
              </label>
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
              <span className={styles.stack}>
                <Icon
                  name="angle up"
                  color="yellow"
                  onClick={handleOtherTaken}
                />
                <Icon
                  name="angle down"
                  color="yellow"
                  onClick={() =>
                    form.otherTaken > 0
                      ? setForm((prev) => ({
                          ...prev,
                          otherTaken: prev.otherTaken - 1,
                        }))
                      : () => console.log(form.otherTaken)
                  }
                />
              </span>
              <Popup
                content="Any units of the same cost that are taken out of the pool"
                trigger={<Icon name="exclamation circle" color="blue" />}
              />
            </div>
            <div className={styles.formdiv}>
              <label className={styles.formlabel}>
                Gold <Icon name="bitcoin" size="big" color="yellow" />:
              </label>

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
              <span className={styles.stack}>
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
                  name="angle down"
                  color="yellow"
                  size="big"
                  onClick={() =>
                    form.gold >= 10
                      ? setForm((prev) => ({ ...prev, gold: prev.gold - 10 }))
                      : () => console.log("hello there")
                  }
                />
              </span>
              <span className={styles.stack}>
                <Icon
                  name="angle up"
                  color="yellow"
                  onClick={() =>
                    form.gold < 998
                      ? setForm((prev) => ({ ...prev, gold: prev.gold + 2 }))
                      : () => console.log("hello there")
                  }
                />
                <Icon
                  name="angle down"
                  color="yellow"
                  onClick={() =>
                    form.gold >= 4
                      ? setForm((prev) => ({ ...prev, gold: prev.gold - 2 }))
                      : () => console.log("hello there")
                  }
                />
              </span>
              <Popup
                content="Need minimum 2 Gold to roll for new units"
                trigger={<Icon name="exclamation circle" color="blue" />}
              />
            </div>
          </div>
          <Grid.Row>
            <div className={styles.pad}>
              <Button
                content="Calculate"
                color="yellow"
                inverted
                onClick={calculate}
                size="large"
              />
            </div>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>

      <div className="result">
        <Grid.Row>
          {answer !== null ? (
            <div className={styles.boxanswer}>
              Probability to be offered 1 to 3 copies based on game state
              <div className={styles.answer}>
                <Item>
                  <Item.Image src={form.champ.image} />
                  <Item.Content>
                    <Item.Header>
                      <h1 className={styles.boxheader}>{form.champ.name}</h1>
                    </Item.Header>
                  </Item.Content>
                </Item>
                <Statistic.Group>
                  {answer.map((stat, i) => {
                    if (i == 0) {
                      return (
                        <Statistic color="yellow" inverted key={stat}>
                          <Statistic.Label color="yellow">
                            {i + 1} Copy
                          </Statistic.Label>
                          <Statistic.Value>{stat}%</Statistic.Value>
                        </Statistic>
                      );
                    } else {
                      return (
                        <Statistic color="yellow" inverted key={stat}>
                          <Statistic.Label color="yellow">
                            {i + 1} Copies
                          </Statistic.Label>
                          <Statistic.Value>{stat}%</Statistic.Value>
                        </Statistic>
                      );
                    }
                  })}
                </Statistic.Group>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.border}>
                Calculate the probability to be offered 1 to 3 copies of the
                desired unit given the game state
              </div>
            </>
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
