import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./index.css";

import Signin from "./routes/Signin";

import ClientProfileScreen from "./routes/ClientScreens/ClientProfileScreen";
import ClientPlanScreen from "./routes/ClientScreens/ClientPlanScreen";
import ClientAdvisorContactScreen from "./routes/ClientScreens/ClientAdvisorContactScreen";
import ClientActionItemsScreen from "./routes/ClientScreens/ClientActionItemsScreen";

import AdvisorClientsScreen from "./routes/AdvisorScreens/AdvisorClientsScreen";
import AdvisorConfigsScreen from "./routes/AdvisorScreens/AdvisorConfigsScreen";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/clientprofile" component={ClientProfileScreen} />
          <Route exact path="/clientplan" component={ClientPlanScreen} />
          <Route
            exact
            path="/clientadvisorcontact"
            component={ClientAdvisorContactScreen}
          />
          <Route
            exact
            path="/clientactionitems"
            component={ClientActionItemsScreen}
          />
          <Route />
        </Switch>

        <Switch>
          <Route
            exact
            path="/configurations"
            component={AdvisorConfigsScreen}
          />
          <Route exact path="/clients" component={AdvisorClientsScreen} />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
