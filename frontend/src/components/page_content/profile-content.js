import React from "react";
import Style from "style-it";

import Profile from "./profile/profile";
import Finances from "./profile/finances";
import Family from "./profile/family";
import Goals from "./profile/goals.js";
import { resetStep } from "../../redux/actions";
import { connect } from "react-redux";

class ProfileContent extends React.Component {
  componentDidMount() {
    this.props.resetStep();
  }

  isAdvisor() {
    return this.props.user === "advisor";
  }

  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
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

export default connect(null, { resetStep })(ProfileContent);
