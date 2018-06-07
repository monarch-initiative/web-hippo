import React from 'react';
import { Image, Grid, Header } from 'semantic-ui-react';

import ahmed from '../assets/team/ahmed.jpeg';
import ali from '../assets/team/ali.jpg';
import julie from '../assets/team/julie.jpeg';
import tudor from '../assets/team/tudor.jpg';

export default () => (
  <Grid container columns={4} centered style={{ marginBottom: '2em' }}>
    <Grid.Row>
      <Grid.Column textAlign="center" width={16}>
        <Header as="h4">Meet the team</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign="center">
        <Image centered circular size="small" src={tudor} />
        <Header as="h3">
          Tudor Groza
          <Header.Subheader>KCCG, Garvan</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Image centered circular size="small" src={julie} />
        <Header as="h3">
          Julie McMurry
          <Header.Subheader>Monarch Initiative</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Image centered circular size="small" src={ahmed} />
        <Header as="h3">
          Ahmed Muaz
          <Header.Subheader>KCCG, Garvan</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Image centered circular size="small" src={ali} />
        <Header as="h3">
          Ali Azarkhish
          <Header.Subheader>KCCG, Garvan</Header.Subheader>
        </Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
