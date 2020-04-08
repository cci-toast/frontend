import React from "react";
import Style from "style-it";

import ToastSaveCancel from "../toast/toast-save-cancel";
import EmergencySavings from "../page_content/plan/emergency-savings";
import Protection from "../page_content/plan/protection";
import Debt from "../page_content/plan/debt";
import Retirement from "../page_content/plan/retirement";
import Budgeting from "../page_content/plan/budgeting";

import { connect } from "react-redux";

import { getCurrentStep } from "../../redux/selectors";

import { incrementStep, decrementStep, resetStep } from "../../redux/actions";

import {
  getSalaryAfterTax,
  getPartnerSalaries,
  getAge,
} from "../../redux/selectors";

class PlanContent extends React.Component {
  constructor(props) {
    super(props);
    this.props.resetStep();

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.props.incrementStep();
  }

  prev() {
    this.props.decrementStep();
  }

  hidePrevButton() {
    return this.props.currentStep === 0;
  }

  hideNextButton() {
    return this.props.currentStep === 4;
  }

  render() {
    const styles = `
    .save-cancel {
      display: flex;
      justify-content: flex-end;
    }

    .container {
      height: calc(90vh - 5rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="container">
        <form>
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
            partnerIncomes={this.props.partnerIncomes}
          />
          <Budgeting
            currentStep={this.props.currentStep}
            salaryAfterTax={this.props.salaryAfterTax}
          />
        </form>
        <div className="save-cancel">
          <ToastSaveCancel
            saveClicked={this.next}
            cancelClicked={this.prev}
            saveLabel="next"
            cancelLabel="previous"
            hideSave={this.hideNextButton()}
            hideCancel={this.hidePrevButton()}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStep: getCurrentStep(state),
  salaryAfterTax: getSalaryAfterTax(state),
  partnerSalaries: getPartnerSalaries(state),
  age: getAge(state),
});

export default connect(mapStateToProps, {
  incrementStep,
  decrementStep,
  resetStep,
})(PlanContent);
