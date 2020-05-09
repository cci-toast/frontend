import React from "react";
import Style from "style-it";
import ToastInput from "../../toast/toast-input";
import ToastSelect from "../../toast/toast-select";
import ToastShowHideInput from "../../toast/toast-show-hide-input";
import { connect } from "react-redux";

import {
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
    .hidden {
      display: none;
    }

    hr {
      width: 100%;
      margin: 2rem 0;
    }

    button {
      margin-bottom: 1.5rem;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <h4>Savings</h4>

        <ToastShowHideInput
          id="retirement"
          label="Add Retirement"
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="number"
            label="Retirement Savings"
            name="retirement"
            placeholder="Type in your retirement savings"
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

        <hr />
        <h4>Bills</h4>

        <ToastShowHideInput
          id="housing"
          label="Add Housing"
          readOnly={this.props.readOnly}
        >
          <ToastSelect
            options={housingOptions}
            name="housingType"
            label="Housing Type"
            id="housingType"
            value={this.props.housingType}
            onChange={this.handleChange}
            readOnly={this.props.readOnly}
            placeholder="Select your housing type"
          />

          <ToastInput
            type="number"
            label="Housing (Monthly)"
            name="housingAmount"
            placeholder="Type in your amount spent on housing"
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

        <ToastShowHideInput
          id="bill"
          label="Add Bills"
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="number"
            label="Bills (Monthly)"
            name="bill"
            placeholder="Type in your amount spent on bills"
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

        <ToastShowHideInput
          id="utility"
          label="Add Utilities"
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="number"
            label="Utilities (Monthly)"
            name="utility"
            placeholder="Type in your amount spent on utilities"
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

        <ToastShowHideInput
          id="protection"
          label="Add Life Insurance"
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="number"
            label="Life Insurance (Monthly)"
            name="protectionMonthly"
            placeholder="Type in your amount spent on life insurance"
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
            label="Insurance Policy Coverage"
            name="protectionPolicy"
            placeholder="Type in your life insurance coverage"
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

        <ToastShowHideInput
          id="loanDebt"
          label="Add Loans & Debt"
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="number"
            label="Loans & Debt (Monthly)"
            name="loanDebt"
            placeholder="Type in your payment towards loans & debt"
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

        <hr />
        <h4>Expenses</h4>

        <ToastShowHideInput
          id="shopping"
          label="Add Shopping"
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="number"
            label="Shopping (Monthly)"
            name="shopping"
            placeholder="Type in your amount spent on shopping"
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

        <ToastShowHideInput
          id="leisure"
          label="Add Leisure"
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="number"
            label="Leisure (Monthly)"
            name="leisure"
            placeholder="Type in your amount spent on leisure"
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

        <ToastShowHideInput
          id="transportation"
          label="Add Transportation"
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="number"
            label="Transportation (Monthly)"
            name="transportation"
            placeholder="Type in your amount spent on transportation"
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

        <ToastShowHideInput
          id="subscriptions"
          label="Add Subscriptions"
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="number"
            label="Subscription (Monthly)"
            name="subscription"
            placeholder="Type in your amount spent on subscriptions"
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

        <ToastShowHideInput
          id="other"
          label="Add Other"
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="number"
            label="Other (Monthly)"
            name="other"
            placeholder="Type in your amount spent on other items"
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
    );
  }
}

const mapStateToProps = (state) => ({
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
