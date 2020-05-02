import React from "react";
import Style from "style-it";
import ToastInput from "../../toast/toast-input";
import ToastSelect from "../../toast/toast-select";
import ToastDuplicateButton from "../../toast/toast-duplicate-button";

import { connect } from "react-redux";

import {
  getSalaryAfterTaxValue,
  getAdditionalIncomeValue,
  getRetirementValue,
  getHousingValue,
  getBillValue,
  getUtilityValue,
  getProtectionValue,
  getLoanDebtValue,
  getShoppingValue,
  getLeisureValue,
  getTransportationValue,
  getSubscriptionValue,
  getOtherValue,
} from "../../../redux/selectors";

import {
  setSalaryAfterTaxValue,
  setAdditionalIncomeValue,
  addAdditionalIncome,
  setRetirementValue,
  addRetirement,
  setHousingValue,
  addHousing,
  addBill,
  setBillValue,
  addUtility,
  setUtilityValue,
  addLoanDebt,
  setLoanDebtValue,
  addShopping,
  setShoppingValue,
  setProtectionValue,
  addProtection,
  addLeisure,
  setLeisureValue,
  addTransportation,
  setTransportationValue,
  addSubscription,
  setSubscriptionValue,
  addOther,
  setOtherValue,
} from "../../../redux/actions";
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
    this.props.setSalaryAfterTaxValue(name, value);
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
            required
          />

          <ToastDuplicateButton
            id="additionalIncome"
            maxItems={1}
            label="Add Additional Income"
            fields={{
              additionalIncome: "",
            }}
            value={this.props.additionalIncome}
            onChange={this.props.setAdditionalIncomeValue}
            onDuplicate={this.props.addAdditionalIncome}
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
            />
          </ToastDuplicateButton>
        </div>

        <div>
          <h4>Savings</h4>
          <ToastDuplicateButton
            id="retirement"
            maxItems={1}
            label="Add Retirement"
            fields={{
              retirementSavings: "",
            }}
            value={this.props.retirement}
            onChange={this.props.setRetirementValue}
            onDuplicate={this.props.addRetirement}
          >
            <ToastInput
              type="number"
              label="Retirement Savings"
              name="retirementSavings"
              placeholder="Type in how much you have total in savings for retirement"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
            />
          </ToastDuplicateButton>
        </div>

        <div>
          <h4>Bills</h4>

          <ToastDuplicateButton
            id="housing"
            maxItems={1}
            label="Add Housing"
            fields={{
              housingType: "",
              housingAmount: "",
            }}
            value={this.props.housing}
            onChange={this.props.setHousingValue}
            onDuplicate={this.props.addHousing}
          >
            <ToastSelect
              options={housingOptions}
              name="housingType"
              label="Housing Type"
              id="housingType"
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
            />
          </ToastDuplicateButton>
          <hr />

          <ToastDuplicateButton
            id="bill"
            maxItems={1}
            label="Add Bills"
            fields={{
              billAmount: "",
            }}
            value={this.props.bill}
            onChange={this.props.setBillValue}
            onDuplicate={this.props.addBill}
          >
            <ToastInput
              type="number"
              label="Bill Amount"
              name="billAmount"
              placeholder="Type in your amount spent on bills this month"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
            />
          </ToastDuplicateButton>

          <hr />

          <ToastDuplicateButton
            id="utility"
            maxItems={1}
            label="Add Utilities"
            fields={{
              utilityAmount: "",
            }}
            value={this.props.utility}
            onChange={this.props.setUtilityValue}
            onDuplicate={this.props.addUtility}
          >
            <ToastInput
              type="number"
              label="Utility Amount"
              name="utilityAmount"
              placeholder="Type in the total amount spent on utilities this month"
              min={0.0}
              step={0.01}
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
            />
          </ToastDuplicateButton>
          <hr />

          <ToastDuplicateButton
            id="protection"
            maxItems={1}
            label="Add Life Insurance"
            fields={{
              protectionMonthly: "",
              protectionPolicy: "",
            }}
            value={this.props.protection}
            onChange={this.props.setProtectionValue}
            onDuplicate={this.props.addProtection}
          >
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
            />
          </ToastDuplicateButton>
          <hr />

          <ToastDuplicateButton
            id="loanDebt"
            maxItems={1}
            label="Add Loans/Debts"
            fields={{
              loanDebt: "",
            }}
            value={this.props.loanDebt}
            onChange={this.props.setLoanDebtValue}
            onDuplicate={this.props.addLoanDebt}
          >
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
            />
          </ToastDuplicateButton>
        </div>

        <div>
          <h4>Expenses</h4>

          <ToastDuplicateButton
            id="shopping"
            maxItems={1}
            label="Add Shopping"
            fields={{
              shopping: "",
            }}
            value={this.props.shopping}
            onChange={this.props.setShoppingValue}
            onDuplicate={this.props.addShopping}
          >
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
            />
          </ToastDuplicateButton>

          <hr />

          <ToastDuplicateButton
            id="leisure"
            maxItems={1}
            label="Add Leisure"
            fields={{
              leisure: "",
            }}
            value={this.props.leisure}
            onChange={this.props.setLeisureValue}
            onDuplicate={this.props.addLeisure}
          >
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
            />
          </ToastDuplicateButton>
          <hr />

          <ToastDuplicateButton
            id="transportation"
            maxItems={1}
            label="Add Transportation"
            fields={{
              transportation: "",
            }}
            value={this.props.transportation}
            onChange={this.props.setTransportationValue}
            onDuplicate={this.props.addTransportation}
          >
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
            />
          </ToastDuplicateButton>

          <hr />

          <ToastDuplicateButton
            id="subscriptions"
            maxItems={1}
            label="Add Subscriptions"
            fields={{
              subscriptions: "",
            }}
            value={this.props.subscription}
            onChange={this.props.setSubscriptionValue}
            onDuplicate={this.props.addSubscription}
          >
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
            />
          </ToastDuplicateButton>

          <hr />

          <ToastDuplicateButton
            id="other"
            maxItems={1}
            label="Add Other"
            fields={{
              other: "",
            }}
            value={this.props.other}
            onChange={this.props.setOtherValue}
            onDuplicate={this.props.addOther}
          >
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
            />
          </ToastDuplicateButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  salaryAfterTax: getSalaryAfterTaxValue(state),
  additionalIncome: getAdditionalIncomeValue(state),
  retirement: getRetirementValue(state),
  housing: getHousingValue(state),
  bill: getBillValue(state),
  utility: getUtilityValue(state),
  protection: getProtectionValue(state),
  loanDebt: getLoanDebtValue(state),
  shopping: getShoppingValue(state),
  leisure: getLeisureValue(state),
  transportation: getTransportationValue(state),
  subscription: getSubscriptionValue(state),
  other: getOtherValue(state),
});

export default connect(mapStateToProps, {
  setSalaryAfterTaxValue,
  setAdditionalIncomeValue,
  setRetirementValue,
  addRetirement,
  setHousingValue,
  addHousing,
  setBillValue,
  addBill,
  setUtilityValue,
  addUtility,
  setProtectionValue,
  addProtection,
  setLoanDebtValue,
  addLoanDebt,
  setShoppingValue,
  addShopping,
  addAdditionalIncome,
  addLeisure,
  setLeisureValue,
  addTransportation,
  setTransportationValue,
  addSubscription,
  setSubscriptionValue,
  addOther,
  setOtherValue,
})(Finances);
