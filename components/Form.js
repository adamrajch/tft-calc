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
function TFTForm() {
  const [champ, setChamp] = useState("");
  const [lvl, setlvl] = useState(1);
  // const
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
            Player Level: {lvl}{" "}
            <Icon name="angle up" color="yellow" onClick={} />
            <Icon name="angle down" color="yellow" />
          </div>
          <div>Unit Taken: </div>
          <div>
            Gold: <Icon name="angle up" color="yellow" />
            <Icon name="angle down" color="yellow" />
          </div>
          <div>
            Copies needed: <Icon name="angle up" color="yellow" />
            <Icon name="angle down" color="yellow" />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Row>
          <Header as="h2">Specs</Header>
        </Grid.Row>
      </Grid.Row>
    </Grid>
  );
}

export default TFTForm;
