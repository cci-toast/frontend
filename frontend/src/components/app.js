import "../index.css";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ActionItems from "./pages/action-items";
import AdvisorContact from "./pages/advisor-contact";
import Clients from "./pages/clients";
import Configurations from "./pages/configurations";
import Login from "./pages/login";
import Plan from "./pages/plan";
import Profile from "./pages/profile";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/plan" component={Plan} />
          <Route exact path="/advisorcontact" component={AdvisorContact} />
          <Route exact path="/actionitems" component={ActionItems} />
          <Route />
        </Switch>

        <Switch>
          <Route exact path="/configurations" component={Configurations} />
          <Route exact path="/clients" component={Clients} />
          <Route />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
