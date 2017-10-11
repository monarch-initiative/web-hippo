import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import ExampleContainer from '../containers/ExampleContainer';
// import EnsureLoggedInContainer from '../containers/EnsureLoggedInContainer';

// const EnsureLoggedInContainerWithRouter = withRouter(EnsureLoggedInContainer);

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={ExampleContainer} />
      </HashRouter>
    );
  }
}

export default Routes;
