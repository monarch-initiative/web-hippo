import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import MainContainer from './containers/MainContainer';

const App = () => (
  <HashRouter>
    <Route path="/" component={MainContainer} />
  </HashRouter>
);
export default App;
