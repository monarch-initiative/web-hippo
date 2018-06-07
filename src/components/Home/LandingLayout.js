import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import SearchBarContainer from '../../containers/SearchBarContainer';
import Team from '../../components/Team';

export default ({ height }) => (
  <div>
    <Grid centered style={{ minHeight: height - 500, paddingTop: '10%' }}>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <h1>HIPPO</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <SearchBarContainer />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Link to="/query/6001">Take a tour</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Team />
  </div>
);
