import React from "react";
import Style from "style-it";

import EmergencySavings from "../page_content/configuration/emergency-savings";
import Protection from "../page_content/configuration/protection";
import Debt from "../page_content/configuration/debt";
import Retirement from "../page_content/configuration/retirement";
import Budgeting from "../page_content/configuration/budgeting";
import { resetStep, setSearchTerm } from "../../redux/actions";
import { connect } from "react-redux";

class ConfigurationContent extends React.Component {
  componentDidMount() {
    this.props.resetStep();
    this.props.setSearchTerm("");
  }

  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <EmergencySavings currentStep={this.props.currentStep} />
        <Protection currentStep={this.props.currentStep} />
        <Debt currentStep={this.props.currentStep} />
        <Retirement currentStep={this.props.currentStep} />
        <Budgeting currentStep={this.props.currentStep} />
      </React.Fragment>
    );
  }
}

export default connect(null, { resetStep, setSearchTerm })(
  ConfigurationContent
);
