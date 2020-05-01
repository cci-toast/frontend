import React from "react";
import Style from "style-it";

import EmergencySavings from "../page_content/configurations/emergency-savings";
import Protection from "../page_content/configurations/protection";
import Debt from "../page_content/configurations/debt";
import Retirement from "../page_content/configurations/retirement";
import Budgeting from "../page_content/configurations/budgeting";

import { setStep } from "../../redux/actions";
import { connect } from "react-redux";

class ConfigurationContent extends React.Component {
  onSubmit() {
    // submit form
  }

  componentDidMount() {
    this.props.setStep(0);
  }

  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <form onSubmit={this.onSubmit}>
        <EmergencySavings currentStep={this.props.currentStep} />
        <Protection currentStep={this.props.currentStep} />
        <Debt currentStep={this.props.currentStep} />
        <Retirement currentStep={this.props.currentStep} />
        <Budgeting currentStep={this.props.currentStep} />
      </form>
    );
  }
}

export default connect(null, { setStep })(ConfigurationContent);
