import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./index.css";

import SigninScreenComponent from "./Components/SigninScreenComponent";

import ClientProfileScreenComponent from "./Components/ClientScreens/ClientProfileScreenComponent";
import ClientPlanScreenComponent from "./Components/ClientScreens/ClientPlanScreenComponent";
import ClientAdvisorContactScreenComponent from "./Components/ClientScreens/ClientAdvisorContactScreenComponent";
import ClientActionItemsScreenComponent from "./Components/ClientScreens/ClientActionItemsScreenComponent";

import AdvisorClientsScreenComponent from "./Components/AdvisorScreens/AdvisorClientsScreenComponent";
import AdvisorConfigsScreenComponent from "./Components/AdvisorScreens/AdvisorConfigsScreenComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SigninScreenComponent} />
          <Route
            exact
            path="/clientprofile"
            component={ClientProfileScreenComponent}
          />
          <Route
            exact
            path="/clientplan"
            component={ClientPlanScreenComponent}
          />
          <Route
            exact
            path="/clientadvisorcontact"
            component={ClientAdvisorContactScreenComponent}
          />
          <Route
            exact
            path="/clientactionitems"
            component={ClientActionItemsScreenComponent}
          />
          <Route />
        </Switch>

        <Switch>
          <Route
            exact
            path="/configurations"
            component={AdvisorConfigsScreenComponent}
          />
          <Route
            exact
            path="/clients"
            component={AdvisorClientsScreenComponent}
          />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
