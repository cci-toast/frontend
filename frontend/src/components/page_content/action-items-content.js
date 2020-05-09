import React from "react";
import Style from "style-it";

import EmergencySavings from "../page_content/action-items/emergency-savings";
import Protection from "../page_content/action-items/protection";
import Debt from "../page_content/action-items/debt";
import Retirement from "../page_content/action-items/retirement";
import Budgeting from "../page_content/action-items/budgeting";
import ToastEmpty from "../toast/toast-empty";

import { connect } from "react-redux";
import { resetStep } from "../../redux/actions";

class ActionItemsContent extends React.Component {
  componentDidMount() {
    this.props.resetStep();
  }

  isAdvisor() {
    return this.props.user === "advisor";
  }

  getContent() {
    if (this.props.showContent) {
      return (
        <div className="action-items">
          <EmergencySavings
            currentStep={this.props.currentStep}
            readOnly={this.isAdvisor()}
          />
          <Protection
            currentStep={this.props.currentStep}
            readOnly={this.isAdvisor()}
          />
          <Debt
            currentStep={this.props.currentStep}
            readOnly={this.isAdvisor()}
          />
          <Retirement
            currentStep={this.props.currentStep}
            readOnly={this.isAdvisor()}
          />
          <Budgeting
            currentStep={this.props.currentStep}
            readOnly={this.isAdvisor()}
          />
        </div>
      );
    } else {
      return (
        <ToastEmpty
          header="No Action Items Available"
          caption={this.getCaption()}
        />
      );
    }
  }

  getCaption() {
    if (this.props.user === "client") {
      return "You currently do not have any action items. Navigate to your profile page and fill out the form to get a baseline plan and action items.";
    } else if (this.props.user === "advisor") {
      return "Your client does not have any action items yet. They have not filled out the necessary fields on their profile.";
    }
  }

  render() {
    const styles = `
    .action-items {
      display: flex;
      flex-direction: column;
    }
    `;

    return Style.it(`${styles}`, this.getContent());
  }
}

export default connect(null, { resetStep })(ActionItemsContent);
