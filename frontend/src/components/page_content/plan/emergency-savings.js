import React from "react";
import Style from "style-it";

import { connect } from "react-redux";

import {
  getSavingsLowerBound,
  getSavingsUpperBound,
} from "../../../redux/selectors";

import { numWithCommas, calcMonthlyValue } from "../../../utils/plan-utils";

import ToastBarChart from "../../toast/toast-bar-chart";

class EmergencySavings extends React.Component {
  constructor(props) {
    super(props);

    this.data = [
      {
        name: "Minimum Target Savings",
        value: this.props.lowerBound,
        fill: "var(--toast-purple-2)",
      },
      {
        name: "Target Savings",
        value: this.props.upperBound,
        fill: "url(#gradient)",
      },
      {
        name: "Your Income",
        value: this.props.salaryAfterTax,
        fill: "var(--toast-blue-1)",
      },
    ];
  }

  getHeader() {
    return `$${numWithCommas(this.props.lowerBound)}-$${numWithCommas(
      this.props.upperBound
    )}`;
  }

  getCaption() {
    return `Given that your personal annual net income is $${numWithCommas(
      this.props.salaryAfterTax
    )}, your minimum recommended
    emergency savings is $${numWithCommas(this.props.lowerBound)}. Your
    target recommended emergency savings is $${numWithCommas(
      this.props.upperBound
    )} for this year. We recommend you
    set aside around $${numWithCommas(
      calcMonthlyValue(this.props.lowerBound)
    )} to $${numWithCommas(
      calcMonthlyValue(this.props.upperBound)
    )} per month to
    reach this goal.`;
  }

  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 0) {
      classes.push("hide");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    .hide {
      visibility: hidden;
      position: absolute;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <ToastBarChart
          salaryAfterTax={this.props.salaryAfterTax}
          header={this.getHeader()}
          data={this.data}
          subheader={this.props.salaryAfterTax}
          caption={this.getCaption()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lowerBound: getSavingsLowerBound(state),
  upperBound: getSavingsUpperBound(state),
});

export default connect(mapStateToProps)(EmergencySavings);
