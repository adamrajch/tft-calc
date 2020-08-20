import { Grid, Form, Input, Icon, Button } from "semantic-ui-react";
import { useState } from "react";
function TFTForm() {
  const [champ, setChamp] = useState("");
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
          <Form></Form>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <div>Display Specs</div>
      </Grid.Row>
    </Grid>
  );
}

export default TFTForm;
