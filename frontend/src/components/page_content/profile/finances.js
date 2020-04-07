import React from "react";
import Center from "react-center";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";
import ToastButton from "../../toast/toast-button";

import { connect } from "react-redux";

import {
  getSalaryAfterTax,
  getSalaryBeforeTax,
  getShopping,
} from "../../../redux/selectors";

import { setFinancesValue, setShoppingListValue } from "../../../redux/actions";

class Finances extends React.Component {
  constructor(props) {
    super(props);
    this.setFinancesValue = this.setFinancesValue.bind(this);
    this.setShoppingListValue = this.setShoppingListValue.bind(this);
  }

  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 2) {
      classes.push("hidden");
    }

    return classes.join(" ");
  }

  setFinancesValue(event) {
    const { name, value } = event.target;
    this.props.setFinancesValue(name, value);
  }

  setShoppingListValue(event) {
    const { name, value } = event.target;
    this.props.setShoppingListValue(0, name, value);
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
        <div>
          <h4>Income</h4>
          <div className="row">
            <div className="column">
              <ToastInput
                type="number"
                min={0.0}
                label="Annual Salary Before Taxes"
                placeholder="50,000"
                defaultValue={this.props.salaryBeforeTax}
                name="salaryNoTax"
                iconName="dollarsign"
                iconWidth={20}
                iconHeight={20}
                onChange={this.setFinancesValue}
                step={0.01}
                required
              />
            </div>
            <div className="column">
              <ToastInput
                type="number"
                min={0.0}
                label="Annual Salary After Taxes"
                placeholder="50,000"
                defaultValue={this.props.salaryAfterTax}
                name="salaryTax"
                iconName="dollarsign"
                iconWidth={20}
                iconHeight={20}
                onChange={this.setFinancesValue}
                step={0.01}
                required
              />
            </div>
          </div>
          <Center>
            <ToastButton tertiary label="Add Additional Income" />
          </Center>
        </div>
        <div>
          <h4>Bills</h4>
          <Center>
            <ToastButton tertiary label="Add Housing" />
          </Center>
          <hr />
          <Center>
            <ToastButton tertiary label="Add Bill" />
          </Center>
          <hr />
          <Center>
            <ToastButton tertiary label="Add Utility" />
          </Center>
          <hr />
          <Center>
            <ToastButton tertiary Button label="Add Insurance" />
          </Center>
          <hr />
          <Center>
            <ToastButton tertiary label="Add Loan / Debt" />
          </Center>
        </div>

        <div>
          <h4>Expenses</h4>

          <div className="row">
            <div className="column">
              <ToastInput
                type="text"
                label="Shopping Description"
                name="description"
                placeholder="Type in your shopping description"
                defaultValue={this.props.shopping[0].description}
                onChange={this.setShoppingListValue}
              />
            </div>

            <div className="column">
              <ToastInput
                type="number"
                label="Shopping Amount"
                name="amount"
                placeholder="Type in your amount spent on shopping items"
                min={0.0}
                step={0.01}
                iconName="dollarsign"
                iconWidth={20}
                iconHeight={20}
                defaultValue={this.props.shopping[0].amount}
                onChange={this.setShoppingListValue}
              />
            </div>
          </div>
          <Center>
            <ToastButton tertiary label="Add Shopping" />
          </Center>
          <hr />

          <Center>
            <ToastButton tertiary label="Add Leisure" />
          </Center>
          <hr />

          <Center>
            <ToastButton tertiary label="Add Transportation" />
          </Center>
          <hr />

          <Center>
            <ToastButton tertiary label="Add Subscriptions" />
          </Center>

          <hr />
          <Center>
            <ToastButton tertiary label="Add Miscellaneous" />
          </Center>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  salaryBeforeTax: getSalaryBeforeTax(state),
  salaryAfterTax: getSalaryAfterTax(state),
  shopping: getShopping(state),
});

export default connect(mapStateToProps, {
  setFinancesValue,
  setShoppingListValue,
})(Finances);
