import React from "react";

import EmergencySavings from "../page_content/plan/emergency-savings";
import Protection from "../page_content/plan/protection";
import Debt from "../page_content/plan/debt";
import Retirement from "../page_content/plan/retirement";
import Budgeting from "../page_content/plan/budgeting";
import ToastEmpty from "../toast/toast-empty";

import { connect } from "react-redux";

import {
  getSalaryAfterTaxValue,
  getPartnerSalaries,
  getAge,
} from "../../redux/selectors";
import { resetStep } from "../../redux/actions";

class PlanContent extends React.Component {
  componentDidMount() {
    this.props.resetStep();
  }

  getContent() {
    if (this.props.showContent) {
      return (
        <React.Fragment>
          <EmergencySavings
            currentStep={this.props.currentStep}
            salaryAfterTax={this.props.salaryAfterTax}
          />
          <Protection
            currentStep={this.props.currentStep}
            salaryAfterTax={this.props.salaryAfterTax}
            age={this.props.age}
          />
          <Debt
            currentStep={this.props.currentStep}
            salaryAfterTax={this.props.salaryAfterTax}
          />
          <Retirement
            currentStep={this.props.currentStep}
            salaryAfterTax={this.props.salaryAfterTax}
            age={this.props.age}
          />
          <Budgeting
            currentStep={this.props.currentStep}
            salaryAfterTax={this.props.salaryAfterTax}
          />
        </React.Fragment>
      );
    } else {
      return (
        <ToastEmpty header="No Plan Available" caption={this.getCaption()} />
      );
    }
  }

  getCaption() {
    if (this.props.user === "client") {
      return "You currently do not have a plan. Navigate to your profile page and fill out the form to get a baseline plan and action items.";
    } else if (this.props.user === "advisor") {
      return "Your client does not have a baseline plan yet. They have not filled out the necessary fields on their profile.";
    }
  }

  render() {
    return this.getContent();
  }
}

const mapStateToProps = (state) => ({
  salaryAfterTax: getSalaryAfterTaxValue(state),
  partnerSalaries: getPartnerSalaries(state),
  age: getAge(state),
});

export default connect(mapStateToProps, { resetStep })(PlanContent);
