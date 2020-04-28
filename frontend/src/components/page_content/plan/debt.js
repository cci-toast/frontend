import React from "react";
import Style from "style-it";

import { connect } from "react-redux";

import { getDebtMonthly, getSalaryAfterDebt } from "../../../redux/selectors";

import { numWithCommas, calcMonthlyValue } from "../../../utils/plan-utils";

import ToastPieChart from "../../toast/toast-pie-chart";

class Debt extends React.Component {
  constructor(props) {
    super(props);

    this.data = [
      {
        name: "Salary After Debt",
        value: this.props.salaryAfterDebt,
        fill: "var(--toast-neutral-3)",
      },
      {
        name: "Target Savings",
        value: this.props.debtMonthly,
        fill: "url(#gradient)",
      },
    ];
  }

  getHeader() {
    return `$${numWithCommas(this.props.debtMonthly)}`;
  }

  getCaption() {
    return `Given that your monthly income is $${numWithCommas(
      calcMonthlyValue(this.props.salaryAfterTax)
    )}, we recommend you put at least $${numWithCommas(
      this.props.debtMonthly
    )} towards repaying debt for this month. You are currently on track.
    `;
  }

  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 2) {
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
        <ToastPieChart
          label={this.data}
          salaryAfterTax={this.props.salaryAfterTax}
          header={this.getHeader()}
          data={this.data}
          subheader={calcMonthlyValue(this.props.salaryAfterTax)}
          caption={this.getCaption()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  debtMonthly: getDebtMonthly(state),
  salaryAfterDebt: getSalaryAfterDebt(state),
});

export default connect(mapStateToProps)(Debt);
