import React from "react";

import Profile from "./profile/profile";
import Finances from "./profile/finances";
import Family from "./profile/family";
import Goals from "./profile/goals.js";
import ToastLoading from "../toast/toast-loading";

import { resetStep } from "../../redux/actions";
import { isLoading } from "../../redux/selectors";
import { connect } from "react-redux";

class ProfileContent extends React.Component {
  componentDidMount() {
    this.props.resetStep();
  }

  isAdvisor() {
    return this.props.user === "advisor";
  }

  getContent() {
    if (this.props.isLoading) {
      return <ToastLoading />;
    } else {
      return (
        <React.Fragment>
          <Profile
            currentStep={this.props.currentStep}
            readOnly={this.isAdvisor()}
          />
          <Finances
            currentStep={this.props.currentStep}
            readOnly={this.isAdvisor()}
          />
          <Family
            currentStep={this.props.currentStep}
            readOnly={this.isAdvisor()}
          />
          <Goals
            currentStep={this.props.currentStep}
            readOnly={this.isAdvisor()}
          />
        </React.Fragment>
      );
    }
  }

  render() {
    return this.getContent();
  }
}

const mapStateToProps = (state) => ({
  isLoading: isLoading(state),
});

export default connect(mapStateToProps, { resetStep })(ProfileContent);
