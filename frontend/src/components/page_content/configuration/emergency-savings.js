import React from "react";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";

import { connect } from "react-redux";

import {
  getSavingsFactorLowerBound,
  getSavingsFactorUpperBound,
} from "../../../redux/selectors";

import { setPlanValue } from "../../../redux/actions";

class EmergencySavings extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.props.setPlanValue(name, value);
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
      display: none;
    }

    .header {
      margin-bottom: 1.5rem;
    }

    .variable {
      color: var(--toast-purple-2);
    }

    hr {
      margin: 2rem 0;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <h3 className="header">Formula</h3>
        <p>
          Target savings = monthly income *{" "}
          <span className="variable">upper bound</span>
        </p>
        <p>
          Minimum savings = monthly income *{" "}
          <span className="variable">lower bound</span>
        </p>

        <hr />

        <div className="row">
          <ToastInput
            type="number"
            label="Upper bound"
            name="emergencySavingsFactorUpper"
            placeholder="Type in the upper bound"
            min={0.0}
            step={0.01}
            value={this.props.upperBound}
            onChange={this.handleChange}
            helpText="Type in the multiplier for the upper bound."
          />

          <ToastInput
            type="number"
            label="Lower bound"
            name="emergencySavingsFactorLower"
            placeholder="Type in the lower bound"
            min={0.0}
            step={0.01}
            value={this.props.lowerBound}
            onChange={this.handleChange}
            helpText="Type in the multiplier for the lower bound."
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  upperBound: getSavingsFactorUpperBound(state),
  lowerBound: getSavingsFactorLowerBound(state),
});

export default connect(mapStateToProps, { setPlanValue })(EmergencySavings);
