import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import SearchBarContainer from '../containers/SearchBarContainer';
import logo from '../logo.svg';

export default ({ height }) => (
  <Grid centered style={{ minHeight: height - 150, paddingTop: '10%' }}>
    <Grid.Row>
      <Grid.Column width={16}>
        <Image size="small" centered src={logo} />
      </Grid.Column>
      <Grid.Column width={8}>
        <SearchBarContainer />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={4} textAlign="right">
        <Link to="/tutorial">Take a tour</Link>
      </Grid.Column>
      <Grid.Column width={4} textAlign="left">
        <Link to="/team">Meet the team</Link>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
