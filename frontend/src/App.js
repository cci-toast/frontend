import './index.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AdvisorClientsScreenComponent from './Components/AdvisorScreens/AdvisorClientsScreenComponent';
import AdvisorConfigsScreenComponent from './Components/AdvisorScreens/AdvisorConfigsScreenComponent';
import ClientActionItemsScreenComponent from './Components/ClientScreens/ClientActionItemsScreenComponent';
import ClientAdvisorContactScreenComponent from './Components/ClientScreens/ClientAdvisorContactScreenComponent';
import ClientPlanScreenComponent from './Components/ClientScreens/ClientPlanScreenComponent';
import ClientProfileScreenComponent from './Components/ClientScreens/ClientProfileScreenComponent';
import SigninScreenComponent from './Components/SigninScreenComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={SigninScreenComponent} />
          <Route
            exact
            path='/clientprofile'
            component={ClientProfileScreenComponent}
          />
          <Route
            exact
            path='/clientplan'
            component={ClientPlanScreenComponent}
          />
          <Route
            exact
            path='/clientadvisorcontact'
            component={ClientAdvisorContactScreenComponent}
          />
          <Route
            exact
            path='/clientactionitems'
            component={ClientActionItemsScreenComponent}
          />
          <Route />
        </Switch>

        <Switch>
          <Route
            exact
            path='/configurations'
            component={AdvisorConfigsScreenComponent}
          />
          <Route
            exact
            path='/clients'
            component={AdvisorClientsScreenComponent}
          />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
