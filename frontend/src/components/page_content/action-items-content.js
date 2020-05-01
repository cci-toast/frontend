import React from "react";
import Style from "style-it";

import EmergencySavings from "../page_content/action-items/emergency-savings";
import Protection from "../page_content/action-items/protection";
import Debt from "../page_content/action-items/debt";
import Retirement from "../page_content/action-items/retirement";
import Budgeting from "../page_content/action-items/budgeting";

import { resetStep } from "../../redux/actions";

import { connect } from "react-redux";

class ActionItemsContent extends React.Component {
  componentDidMount() {
    this.props.resetStep();
  }
  render() {
    const styles = `
    .action-items {
      display: flex;
      flex-direction: column;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="action-items">
        <EmergencySavings currentStep={this.props.currentStep} />
        <Protection currentStep={this.props.currentStep} />
        <Debt currentStep={this.props.currentStep} />
        <Retirement currentStep={this.props.currentStep} />
        <Budgeting currentStep={this.props.currentStep} />
      </div>
    );
  }
}

export default connect(null, { resetStep })(ActionItemsContent);
