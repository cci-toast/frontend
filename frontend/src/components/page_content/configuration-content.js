import React from "react";
import Style from "style-it";

import EmergencySavings from "../page_content/configuration/emergency-savings";
import Protection from "../page_content/configuration/protection";
import Debt from "../page_content/configuration/debt";
import Retirement from "../page_content/configuration/retirement";
import Budgeting from "../page_content/configuration/budgeting";
import { resetStep } from "../../redux/actions";
import { connect } from "react-redux";

class ConfigurationContent extends React.Component {
  onSubmit() {
    // submit form
  }

  componentDidMount() {
    this.props.resetStep();
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

export default connect(null, { resetStep })(ConfigurationContent);
