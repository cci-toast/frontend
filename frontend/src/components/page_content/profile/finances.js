import React from "react";
import Style from "style-it";
import ToastInput from "../../toast/toast-input";
import ToastSelect from "../../toast/toast-select";
import ToastShowHideInput from "../../toast/toast-show-hide-input";
import { connect } from "react-redux";

import {
  getSalaryAfterTax,
  getAdditionalIncome,
  getRetirement,
  getHousingType,
  getHousingAmount,
  getBill,
  getUtility,
  getProtectionMonthly,
  getProtectionPolicy,
  getLoanDebt,
  getShopping,
  getLeisure,
  getTransportation,
  getSubscription,
  getOther,
} from "../../../redux/selectors";

import { setFinancesValue } from "../../../redux/actions";
import { housingOptions } from "../../../utils/select-utils";

class Finances extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 1) {
      classes.push("hidden");
    }

    return classes.join(" ");
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.props.setFinancesValue(name, value);
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

          <ToastInput
            type="number"
            min={0.0}
            label="Personal Annual Net Income (Take Home Pay After Taxes)"
            placeholder="50,000"
            value={this.props.salaryAfterTax}
            name="salaryAfterTax"
            iconName="dollarsign"
            iconWidth={20}
            iconHeight={20}
            onChange={this.handleChange}
            step={0.01}
            readOnly={this.props.readOnly}
            required
          />

          <ToastShowHideInput
            id="additionalIncome"
            label="Add Additional Income"
          >
            <ToastInput
              type="number"
              label="Additional Income"
              name="additionalIncome"
              placeholder="Type your amount earned on additional income annually"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.additionalIncome}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>
        </div>

        <div>
          <h4>Savings</h4>
          <ToastShowHideInput id="retirement" label="Add Retirement">
            <ToastInput
              type="number"
              label="Retirement Savings"
              name="retirement"
              placeholder="Type in how much you have total in savings for retirement"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              value={this.props.retirement}
              iconWidth={20}
              iconHeight={20}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>
        </div>

        <div>
          <h4>Bills</h4>

          <ToastShowHideInput id="housing" label="Add Housing">
            <ToastSelect
              options={housingOptions}
              name="housingType"
              label="Housing Type"
              id="housingType"
              value={this.props.housingType}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />

            <ToastInput
              type="number"
              label="Housing Amount"
              name="housingAmount"
              placeholder="Type in your amount spent on housing this month"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.housingAmount}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>
          <hr />

          <ToastShowHideInput id="bill" label="Add Bills">
            <ToastInput
              type="number"
              label="Bill Amount"
              name="bill"
              placeholder="Type in your amount spent on bills this month"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.bill}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>

          <hr />

          <ToastShowHideInput id="utility" label="Add Utilities">
            <ToastInput
              type="number"
              label="Utility Amount"
              name="utility"
              placeholder="Type in the total amount spent on utilities this month"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.utility}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>
          <hr />

          <ToastShowHideInput id="protection" label="Add Life Insurance">
            <ToastInput
              type="number"
              label="Insurance Amount"
              name="protectionMonthly"
              placeholder="Type in your amount spent on life insurance this month"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.protectionMonthly}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />

            <ToastInput
              type="number"
              label="Insurance Policy"
              name="protectionPolicy"
              placeholder="Type in how much your life insurance coverage plan is"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.protectionPolicy}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>
          <hr />

          <ToastShowHideInput id="loanDebt" label="Add Loans/Debts">
            <ToastInput
              type="number"
              label="Loan/Debt Amount"
              name="loanDebt"
              placeholder="Type in your total monthly payment towards loans/debts"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.loanDebt}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>
        </div>

        <div>
          <h4>Expenses</h4>

          <ToastShowHideInput id="shopping" label="Add Shopping">
            <ToastInput
              type="number"
              label="Shopping Amount"
              name="shopping"
              placeholder="Type in your amount spent on shopping items"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.shopping}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>

          <hr />

          <ToastShowHideInput id="leisure" label="Add Leisure">
            <ToastInput
              type="number"
              label="Leisure Amount"
              name="leisure"
              placeholder="Type in your amount spent on leisure items"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.leisure}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>
          <hr />

          <ToastShowHideInput id="transportation" label="Add Transportation">
            <ToastInput
              type="number"
              label="Transportation Amount"
              name="transportation"
              placeholder="Type in your amount spent total on transportation"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.transportation}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>

          <hr />

          <ToastShowHideInput id="subscriptions" label="Add Subscriptions">
            <ToastInput
              type="number"
              label="Subscription Amount"
              name="subscription"
              placeholder="Type in your amount spent on subscription items"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.subscription}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>

          <hr />

          <ToastShowHideInput id="other" label="Add Other">
            <ToastInput
              type="number"
              label="Other Amount"
              name="other"
              placeholder="Type in your total amount spent on other items"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              value={this.props.other}
              onChange={this.handleChange}
              readOnly={this.props.readOnly}
            />
          </ToastShowHideInput>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  salaryAfterTax: getSalaryAfterTax(state),
  additionalIncome: getAdditionalIncome(state),
  retirement: getRetirement(state),
  housingType: getHousingType(state),
  housingAmount: getHousingAmount(state),
  bill: getBill(state),
  utility: getUtility(state),
  protectionPolicy: getProtectionPolicy(state),
  protectionMonthly: getProtectionMonthly(state),
  loanDebt: getLoanDebt(state),
  shopping: getShopping(state),
  leisure: getLeisure(state),
  transportation: getTransportation(state),
  subscription: getSubscription(state),
  other: getOther(state),
});

export default connect(mapStateToProps, {
  setFinancesValue,
})(Finances);
