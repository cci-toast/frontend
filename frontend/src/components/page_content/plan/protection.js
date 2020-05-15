import React from "react";
import Style from "style-it";

import { connect } from "react-redux";

import {
  getProtectionPolicyPlan,
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

    .col h5 {
      margin: 0;
    }

    .col h2 {
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
      background: var(--toast-gradient-1);
    }

    .text-grad {
      background: var(--toast-gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
    }

    .horiz-line-container {
      position: absolute;
      height: 47vh;
      width: 44rem;
    }

    .table-item {
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <div className="chart">
          <div className="table">
            <div className="col">
              <div className="table-item">
                <h5>Target Policy</h5>
              </div>

              <svg height="2" width="100%">
                <line x1="300" y1="1" x2="0" y2="1" className="line" />
              </svg>

              <div className="table-item">
                <h5>Current Policy</h5>
              </div>
            </div>

            <div className="col">
              <div className="table-item">
                <h2 className="text-bg">
                  {`$${numWithCommas(this.props.policyPlan)}`}
                </h2>
              </div>

              <svg height="2" width="100%">
                <line x1="300" y1="1" x2="0" y2="1" className="line" />
              </svg>

              <div className="table-item">
                <h2 className="text-grad">{`$${numWithCommas(
                  this.props.policy || 0
                )}`}</h2>
              </div>
            </div>
          </div>
        </div>
        <p className="caption">
          Given that your personal annual net income is $
          {numWithCommas(this.props.salaryAfterTax)}, we recommend you have a
          life insurance policy of ${numWithCommas(this.props.policyPlan)}.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  policyPlan: getProtectionPolicyPlan(state),
  policy: getProtectionPolicy(state),
});

export default connect(mapStateToProps)(Protection);
