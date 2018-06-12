import React from 'react';
import { Image, Grid, Header } from 'semantic-ui-react';

import ahmed from '../assets/team/ahmed.jpeg';
import ali from '../assets/team/ali.jpg';
import julie from '../assets/team/julie.jpeg';
import tudor from '../assets/team/tudor.jpg';
import mellisa from '../assets/team/mellisa.jpeg';
import peter from '../assets/team/peter.jpeg';

export default ({ height }) => (
  <Grid
    container
    columns={3}
    centered
    style={{ minHeight: height - 150, paddingBottom: '2em', paddingTop: '2em' }}
  >
    <Grid.Row>
      <Grid.Column textAlign="center" width={16}>
        <Header as="h4">Meet the team</Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign="center">
        <Image centered circular size="small" src={peter} />
        <Header as="h3">
          Peter Robinson
          <Header.Subheader>The Jackson Laboratory for Genomic Medicine</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Image centered circular size="small" src={mellisa} />
        <Header as="h3">
          Melissa Haendel
          <Header.Subheader>Oregon State University</Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column textAlign="center">
        <Image centered circular size="small" src={julie} />
        <Header as="h3">
          Julie McMurry
          <Header.Subheader>Monarch Initiative</Header.Subheader>
        </Header>
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
