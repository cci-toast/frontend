import React from "react";
import Style from "style-it";
import ToastToggle from "../../toast/toast-toggle";
import { numWithCommas, calcMonthlyValue } from "../../../utils/plan-utils";

import { connect } from "react-redux";

import {
  getSavings,
  getFixedExpenses,
  getSpending,
} from "../../../redux/selectors";

import ToastPieChart from "../../toast/toast-pie-chart";

class Budgeting extends React.Component {
  constructor(props) {
    super(props);

    this.data = [
      {
        name: "Spending",
        value: this.props.spending,
        fill: "var(--toast-purple-2)",
      },
      {
        name: "Fixed Expenses",
        value: this.props.fixedExpenses,
        fill: "var(--toast-purple-1)",
      },
      {
        name: "Savings",
        value: this.props.savings,
        fill: "var(--toast-purple-3)",
      },
    ];
  }

  getCaption() {
    return `Given that your monthly income is $${numWithCommas(
      calcMonthlyValue(this.props.salaryAfterTax)
    )}, we recommend you set aside $${numWithCommas(
      this.props.fixedExpenses
    )} for fixed expenses or expenses that can’t be easily changed such as rent/mortgage or subscriptions. 
    We also recommend you set aside $${numWithCommas(
      this.props.spending
    )} for spending and $${numWithCommas(
      this.props.savings
    )} for savings for this month.  `;
  }

  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 4) {
      classes.push("hidden");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    .wrapper {
        display: flex;
    }
    
    .hidden {
        display: none;
    }
    `;

    return Style.it(
      `${styles}`,

      <div className={this.getClasses()}>
        <ToastToggle active="Target" inactive="Current" />

        <ToastPieChart
          label={this.data}
          salaryAfterTax={this.props.salaryAfterTax}
          data={this.data}
          caption={this.getCaption()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savings: getSavings(state),
  fixedExpenses: getFixedExpenses(state),
  spending: getSpending(state),
});

export default connect(mapStateToProps)(Budgeting);
