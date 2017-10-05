import React, { Component } from 'react';
import { Route, HashRouter, withRouter } from 'react-router-dom';
import ExampleContainer from '../containers/ExampleContainer';
import EnsureLoggedInContainer from '../containers/EnsureLoggedInContainer';

const EnsureLoggedInContainerWithRouter = withRouter(EnsureLoggedInContainer);

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <EnsureLoggedInContainerWithRouter>
          <Route path="/" component={ExampleContainer} />
        </EnsureLoggedInContainerWithRouter>
      </HashRouter>
    );
  }
}

export default Routes;
