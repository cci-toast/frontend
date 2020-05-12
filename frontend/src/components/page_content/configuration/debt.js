import React from "react";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";

import { setPlanValue } from "../../../redux/actions";

import { connect } from "react-redux";

import { getDebtMultiplier } from "../../../redux/selectors";

class Debt extends React.Component {
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

    if (this.props.currentStep !== 2) {
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
          Target annual debt repayment = monthly income *{" "}
          <span className="variable">multiplier</span>
        </p>

        <hr />

        <ToastInput
          type="number"
          label="Multiplier"
          name="debtRepaymentFactor"
          placeholder="Type in the multiplier"
          min={0}
          step={1}
          value={this.props.debt}
          onChange={this.handleChange}
          helpText="Type in the multiplier for debt repayment."
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  debt: getDebtMultiplier(state),
});

export default connect(mapStateToProps, { setPlanValue })(Debt);
