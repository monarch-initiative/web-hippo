import React from 'react';
import { Route, HashRouter, withRouter } from 'react-router-dom';

import MainContainer from './containers/MainContainer';

const App = () => (
  <HashRouter>
    <Route path="/" component={withRouter(MainContainer)} />
  </HashRouter>
);
export default App;
