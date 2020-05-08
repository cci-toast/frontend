import React from "react";
import Style from "style-it";

import { connect } from "react-redux";

import {
  getProtectionPolicyPlan,
  getProtectionMonthlyPlan,
  getProtectionMonthly,
  getProtectionPolicy,
} from "../../../redux/selectors";

import { numWithCommas } from "../../../utils/plan-utils";

class Protection extends React.Component {
  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 1) {
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

    .chart {
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: var(--toast-neutral-5);
      padding: 2rem 5rem 5rem 2rem;
      margin: 1.25rem 1rem 2rem 1rem;
      border-radius: 0.5rem;
      height: 47vh;
      width: 44rem;
    }

    .corner {
        visibility: hidden;
    }

    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 14rem;
    }

    .first-col {
      padding-right: 5rem;
    }

    .col h5 {
      padding: 0 0 1rem 0;
      margin: 0;
    }

    .table {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 47vh;
      max-width: 40rem;
    }

    .text-bg {
      padding: 0.25rem 0.75rem;
      color: var(--toast-white);
      border-radius: 0.5rem;
      margin: 0;
    }

    .bg-gradient {
      background: var(--toast-gradient-1);
    }

    .bg-blue {
      background-color: var(--toast-blue-1);
    }

    .text-grad {
      background: var(--toast-gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .text-blue {
      color: var(--toast-blue-1);
    }

    .caption {
      padding: 0 1rem 0 1rem;
    }

    .line {
      stroke: var(--toast-neutral-4);
      stroke-width: 2;
      stroke-linecap: round;
    }

    .vert-line-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 2rem;
    }

    .horiz-line-container {
      position: absolute;
      height: 47vh;
      width: 44rem;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <div className="chart">
          <div className="table">
            <div className="col first-col">
              <h5 className="corner">Corner</h5>
              <h5>Policy</h5>
              <h5>Monthly</h5>
            </div>
            <div className="col">
              <h5>Target</h5>
              <h2 className="text-bg bg-gradient">
                {`$${numWithCommas(this.props.policyPlan)}`}
              </h2>
              <h2 className="text-grad">{`$${numWithCommas(
                this.props.monthlyPlan
              )}`}</h2>
            </div>
            <div className="vert-line-container">
              <svg height="300" width="8" className="line">
                <line x1="2" y1="380" x2="2" y2="0" />
              </svg>
            </div>
            <div className="col">
              <h5>Current</h5>
              <h2 className="text-bg bg-blue">{`$${numWithCommas(
                this.props.policy
              )}`}</h2>
              <h2 className="text-blue">{`$${numWithCommas(
                this.props.monthly
              )}`}</h2>
            </div>
          </div>

          <svg height="210" width="500" className="horiz-line-container">
            <line x1="50" y1="260" x2="670" y2="260" className="line" />
          </svg>
        </div>
        <p className="caption">
          Given that your personal annual net income is $
          {numWithCommas(this.props.salaryAfterTax)}, we recommend you have a
          life insurance policy of ${numWithCommas(this.props.policyPlan)} with
          a monthly payment of ${numWithCommas(this.props.monthlyPlan)} per
          month.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  policyPlan: getProtectionPolicyPlan(state),
  monthlyPlan: getProtectionMonthlyPlan(state),
  policy: getProtectionPolicy(state),
  monthly: getProtectionMonthly(state),
});

export default connect(mapStateToProps)(Protection);
