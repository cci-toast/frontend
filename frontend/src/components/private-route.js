import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { isLoggedInClient, isLoggedInAdvisor } from "../redux/selectors";
import { resetLogin } from "../redux/actions";

class PrivateRoute extends React.Component {
  isLoggedIn() {
    if (this.props.isLoggedInClient && this.props.user === "client") {
      return (
        <Route
          exact
          path={this.props.path}
          render={() => (
            <this.props.component user="client" page={this.props.page} />
          )}
        ></Route>
      );
    } else if (
      this.props.isLoggedInAdvisor &&
      this.props.page !== "advisorcontact"
    ) {
      return (
        <Route
          exact
          path={this.props.path}
          render={() => (
            <this.props.component user="advisor" page={this.props.page} />
          )}
        ></Route>
      );
    } else {
      this.props.resetLogin();
      return <Redirect to="/" />;
    }
  }
  render() {
    return this.isLoggedIn();
  }
}

const mapStateToProps = (state) => ({
  isLoggedInClient: isLoggedInClient(state),
  isLoggedInAdvisor: isLoggedInAdvisor(state),
});

export default connect(mapStateToProps, { resetLogin })(PrivateRoute);
