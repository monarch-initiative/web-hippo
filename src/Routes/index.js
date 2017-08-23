import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import ExampleContainer from '../containers/ExampleContainer';

class Routes extends Component {
  render() {
    // How this is structured https://medium.com/@dabit3/beginner-s-guide-to-react-router-53094349669#.eak1uik49
    return (
      <HashRouter >
        <Route path="/" component={ExampleContainer} />
      </HashRouter >
    );
  }
}

export default Routes;
