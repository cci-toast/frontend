import "../index.css";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./login";
import PageTemplate from "./page-template";

import PrivateRoute from "./private-route";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute
            exact
            path="/profile"
            component={PageTemplate}
            user="client"
            page="profile"
          />
          <PrivateRoute
            exact
            path="/plan"
            component={PageTemplate}
            user="client"
            page="plan"
          />
          <PrivateRoute
            exact
            path="/advisorcontact"
            component={PageTemplate}
            user="client"
            page="advisorcontact"
          />
          <PrivateRoute
            exact
            path="/actionitems"
            component={PageTemplate}
            user="client"
            page="actionitems"
          />
          <PrivateRoute
            exact
            path="/configuration"
            component={PageTemplate}
            user="advisor"
            page="configuration"
          />
          <PrivateRoute
            exact
            path="/clients"
            component={PageTemplate}
            user="advisor"
            page="clients"
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
