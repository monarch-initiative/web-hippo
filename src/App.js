import React from 'react';
import { Route, HashRouter, withRouter } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';

const App = () => (
  <HashRouter>
    <Route path="/" component={withRouter(HomeContainer)} />
  </HashRouter>
);
export default App;
