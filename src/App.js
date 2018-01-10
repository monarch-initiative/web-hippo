import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';

const App = () => (
  <HashRouter>
    <Route path="/" component={HomeContainer} />
  </HashRouter>
);
export default App;
