import React from 'react';
import { Grid } from 'semantic-ui-react';
import SearchBarContainer from '../../containers/SearchBarContainer';

export default ({ height }) => (
  <div style={{ minHeight: height - 200, marginBottom: '5em', paddingTop: '15em' }}>
    <Grid centered>
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
    </Grid>
  </div>
);
