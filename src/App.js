import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import UnsubscribeContainer from './containers/UnsubscribeContainer';
import TutorialPage from './components/TutorialPage';
import ResultLayout from './components/ResultLayout';
import LandingLayout from './components/LandingLayout';

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/unsubscribe/:subscriptionId" component={UnsubscribeContainer} />
      <Route path="/query/:searchIds" component={() => <HomeContainer content={ResultLayout} />} />
      <Route path="/tutorial" component={() => <HomeContainer content={TutorialPage} />} />
      <Route path="/" component={() => <HomeContainer content={LandingLayout} />} />
    </Switch>
  </HashRouter>
);
export default App;
