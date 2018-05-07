import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import UnsubscribeContainer from './containers/UnsubscribeContainer';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/unsubscribe/:subscriptionId" component={UnsubscribeContainer} />
      <Route path="/query/:searchIds" component={HomeContainer} />
      <Route path="/" component={HomeContainer} />
    </Switch>
  </BrowserRouter>
);
export default App;
