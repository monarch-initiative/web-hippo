import React from 'react';
import { Grid, Image, Menu } from 'semantic-ui-react';
import hpoLogo from '../assets/hpo-logo.png';
import monarchLogo from '../assets/monarch-logo.png';
import garvanLogo from '../assets/kccg-garvan-logo.png';

export default function Footer() {
  return (
    <div style={{ marginTop: 70 }}>
      <Grid padded>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Menu text>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Team</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={10}>
            <Image.Group>
              <Image size="small" src={garvanLogo} />
              <Image size="small" src={monarchLogo} />
              <Image size="small" src={hpoLogo} />
            </Image.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
