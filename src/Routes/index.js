import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import ExampleContainer from '../containers/ExampleContainer';
import EnsureLoggedInContainer from '../containers/EnsureLoggedInContainer';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <EnsureLoggedInContainer>
          <Route path="/" component={ExampleContainer} />
        </EnsureLoggedInContainer>
      </HashRouter>
    );
  }
}

export default Routes;
