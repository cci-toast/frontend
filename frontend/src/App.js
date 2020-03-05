import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./index.css";

import Signin from "./routes/Signin";

// Client Portal Screens
import ClientProfile from "./routes/ClientScreens/ClientProfile";
import ClientPlan from "./routes/ClientScreens/ClientPlan";
import ClientAdvisorContact from "./routes/ClientScreens/ClientAdvisorContact";
import ClientActionItems from "./routes/ClientScreens/ClientActionItems";

// Advisor Portal Screens
import Clients from "./routes/AdvisorScreens/Clients";
import Configurations from "./routes/AdvisorScreens/Configurations";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/clientprofile" component={ClientProfile} />
          <Route exact path="/clientplan" component={ClientPlan} />
          <Route
            exact
            path="/clientadvisorcontact"
            component={ClientAdvisorContact}
          />
          <Route
            exact
            path="/clientactionitems"
            component={ClientActionItems}
          />
          <Route />
        </Switch>

        <Switch>
          <Route exact path="/configurations" component={Configurations} />
          <Route exact path="/clients" component={Clients} />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
