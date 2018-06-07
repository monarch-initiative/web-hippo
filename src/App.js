import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import UnsubscribeContainer from './containers/UnsubscribeContainer';
import TutorialPage from './components/TutorialPage';

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/unsubscribe/:subscriptionId" component={UnsubscribeContainer} />
      <Route path="/query/:searchIds" component={HomeContainer} />
      <Route path="/tutorial" component={TutorialPage} />
      <Route path="/" component={HomeContainer} />
    </Switch>
  </HashRouter>
);
export default App;
