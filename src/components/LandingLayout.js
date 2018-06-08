import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import SearchBarContainer from '../containers/SearchBarContainer';
import Team from '../components/Team';
import logo from '../logo.svg';

export default () => (
  <div>
    <Grid centered style={{ paddingTop: '10%', paddingBottom: 50 }}>
      <Grid.Row>
        <Grid.Column width={8}>
          <Image size="small" centered src={logo} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <SearchBarContainer />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Link to="/tutorial">Take a tour</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Team />
  </div>
);
