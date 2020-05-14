import React from "react";
import Style from "style-it";

import { connect } from "react-redux";

import { numWithCommas } from "../../../utils/plan-utils";

import {
  getRetirementTargetSavings,
  getRetirement,
} from "../../../redux/selectors";

import ToastBarChart from "../../toast/toast-bar-chart";

class Retirement extends React.Component {
  constructor(props) {
    super(props);

    this.data = [
      {
        name: "Your Total Savings",
        value: this.props.retirementSavings,
        fill: "var(--toast-purple-2)",
      },
      {
        name: "Total Target Savings",
        value: this.props.retirementTargetSavings,
        fill: "url(#gradient)",
      },
    ];
  }

  getCaption() {
    return `Given your age and personal annual net income is $${this.props.salaryAfterTax}, we recommend you set aside $261,000 for
    your retirement savings.`;
  }

  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 3) {
      classes.push("hide");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    .hide {
      display: none;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <ToastBarChart
          salaryAfterTax={this.props.salaryAfterTax}
          header={`$${numWithCommas(this.props.retirementTargetSavings)}`}
          data={this.data}
          subheader={this.props.retirementSavings}
          caption={this.getCaption()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  retirementTargetSavings: getRetirementTargetSavings(state),
  retirementSavings: getRetirement(state),
});

export default connect(mapStateToProps)(Retirement);
