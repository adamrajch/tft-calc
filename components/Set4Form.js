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
  FormInput,
} from "semantic-ui-react";
import styles from "../styles/Set4.module.css";
import { useState, useEffect } from "react";
import calc from "./calc";
export default function Set4Form({ units }) {
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
      if (form.champ.pool == form.taken) {
        setAnswer([0, 0, 0]);
      } else {
        setAnswer(calc(form));
      }
    }
  };

  useEffect(() => {
    if (form.champ.pool < form.taken) {
      setForm({ ...form, taken: form.champ.pool - 1 });
    }
    if (form.otherTaken > form.champ.all - form.taken) {
      const newOT = form.champ.all - form.taken - 1;
      setForm({ ...form, otherTaken: newOT });
    }
    if (answer) {
      setAnswer(calc(form));
    }
  }, [form.champ]);
  useEffect(() => {
    console.log(answer);
  }, [answer]);

  useEffect(() => {
    if (answer) {
      setAnswer(calc(form));
    }
  }, [form.level]);
  useEffect(() => {
    if (form.champ.cost && form.taken > form.champ.pool) {
      setForm({ ...form, taken: form.champ.pool });
    }
    if (answer) {
      setAnswer(calc(form));
    }
  }, [form.taken]);
  useEffect(() => {
    if (form.champ.cost && form.otherTaken > form.champ.all - form.taken) {
      setForm({ ...form, otherTaken: form.champ.all - form.taken });
    }
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

  const handleDrop = (e, { value }) => {
    const selected = units.find((champ) => champ.name === value);

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
  const handleLevel = (e) => {
    const yeet = parseInt(e.target.value, 10);
    const mod = yeet % 10;
    if (isNaN(e.target.value)) {
      return;
    } else if (form.champ.cost == null) {
      if (mod <= 9 && mod > 0) {
        setForm({ ...form, level: mod });
      }
    } else {
      if (form.champ.cost === 1) {
        setForm({ ...form, level: mod });
      } else if (form.champ.cost === 2 && mod >= 2) {
        setForm({ ...form, level: mod });
      } else if (form.champ.cost === 3 && mod >= 4) {
        setForm({ ...form, level: mod });
      } else if (form.champ.cost === 4 && mod >= 5) {
        setForm({ ...form, level: mod });
      } else if (form.champ.cost === 5 && mod >= 7) {
        setForm({ ...form, level: mod });
      }
    }
  };

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
  const handleLevelArrow = () => {
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
  const handleCopies = () => {
    if (!form.champ.pool) {
      setForm((prev) => ({ ...prev, taken: prev.taken + 1 }));
    } else {
      if (form.champ.cost === 1 && form.taken < form.champ.pool) {
        setForm((prev) => ({ ...prev, taken: prev.taken + 1 }));
      } else if (form.champ.cost === 2 && form.taken < form.champ.pool) {
        setForm((prev) => ({ ...prev, taken: prev.taken + 1 }));
      } else if (form.champ.cost === 3 && form.taken < form.champ.pool) {
        setForm((prev) => ({ ...prev, taken: prev.taken + 1 }));
      } else if (form.champ.cost === 4 && form.taken < form.champ.pool) {
        setForm((prev) => ({ ...prev, taken: prev.taken + 1 }));
      } else if (form.champ.cost === 5 && form.taken < form.champ.pool) {
        setForm((prev) => ({ ...prev, taken: prev.taken + 1 }));
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
        src: unit.image[1],
      },
      traits: unit.traits,
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
                  onChange={handleLevel}
                  // maxLength="1"
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
                      onClick={handleLevelArrow}
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
                <Icon name="angle up" color="yellow" onClick={handleCopies} />
                <Icon
                  name="angle down"
                  color="yellow"
                  onClick={() =>
                    form.taken >= 1
                      ? setForm((prev) => ({
                          ...prev,
                          taken: prev.taken - 1,
                        }))
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
                  onClick={() => console.log("yeet")}
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
          <div className={styles.pad}>
            <Button
              content="Calculate"
              color="yellow"
              inverted
              onClick={calculate}
              size="large"
            />
          </div>
        </Grid.Column>
      </Grid.Row>
      <div className="result">
        <Grid.Row>
          {answer !== null ? (
            <div className={styles.boxanswer}>
              Probability to be offered 1 to 3 copies based on game state
              <div className={styles.answer}>
                <Item>
                  <Item.Image src={form.champ.image[1]} />
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
                        <Statistic color="yellow" inverted key={stat + i}>
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
