import React from "react";
import Style from "style-it";

import EmergencySavings from "../page_content/plan/emergency-savings";
import Protection from "../page_content/plan/protection";
import Debt from "../page_content/plan/debt";
import Retirement from "../page_content/plan/retirement";
import Budgeting from "../page_content/plan/budgeting";

import { connect } from "react-redux";

import {
  getSalaryAfterTax,
  getPartnerSalaries,
  getAge,
} from "../../redux/selectors";

class PlanContent extends React.Component {
  onSubmit() {
    // submit form
  }

  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <form onSubmit={this.onSubmit}>
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
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  salaryAfterTax: getSalaryAfterTax(state),
  partnerSalaries: getPartnerSalaries(state),
  age: getAge(state),
});

export default connect(mapStateToProps)(PlanContent);
