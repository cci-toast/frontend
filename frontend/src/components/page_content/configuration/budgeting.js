import React from "react";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";

import { connect } from "react-redux";

import { setPlanValue } from "../../../redux/actions";

import {
  getSavingsMultiplier,
  getFixedExpensesMultiplier,
  getSpendingMultiplier,
} from "../../../redux/selectors";

class Budgeting extends React.Component {
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

    if (this.props.currentStep !== 4) {
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
          <span className="variable">multiplier</span>
        </p>
        <p>
          Target fixed expenses = monthly income *{" "}
          <span className="variable">multiplier</span>
        </p>
        <p>
          Target spending = monthly income *{" "}
          <span className="variable">multiplier</span>
        </p>

        <hr />

        <div className="row">
          <ToastInput
            type="number"
            label="Multiplier: Savings"
            name="budgetSavingsFactor"
            placeholder="Type in the multiplier"
            min={0}
            step={1}
            value={this.props.savings}
            onChange={this.handleChange}
            helpText="Type in the multiplier for savings."
          />

          <ToastInput
            type="number"
            label="Multiplier: Fixed Expenses"
            name="budgetFixedExpensesFactor"
            placeholder="Type in the multiplier"
            min={0}
            step={1}
            value={this.props.fixedExpenses}
            onChange={this.handleChange}
            helpText="Type in the multiplier for fixed expenses."
          />
        </div>
        <ToastInput
          type="number"
          label="Multiplier: Spending"
          name="budgetSpendingFactor"
          placeholder="Type in the multiplier"
          min={0}
          step={1}
          value={this.props.spending}
          onChange={this.handleChange}
          helpText="Type in the multiplier for spending."
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savings: getSavingsMultiplier(state),
  fixedExpenses: getFixedExpensesMultiplier(state),
  spending: getSpendingMultiplier(state),
});

export default connect(mapStateToProps, { setPlanValue })(Budgeting);
