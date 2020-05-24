import React from "react";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";
import ToastSelect from "../../toast/toast-select";
import ToastIcon from "../../toast/toast-icon";
import ToastShowHideInput from "../../toast/toast-show-hide-input";

import { connect } from "react-redux";

import {
  getFirstName,
  getMiddleName,
  getLastName,
  getBirthYear,
  getCity,
  getState,
  getCities,
  getSalaryAfterTax,
  getAdditionalIncome,
} from "../../../redux/selectors";

import { stateOptions, getBirthYearOptions } from "../../../utils/select-utils";

import {
  setProfileValue,
  setFinancesValue,
  fetchCities,
} from "../../../redux/actions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.dismissError = this.dismissError.bind(this);

    this.error = React.createRef();
  }

  validationClasses() {
    let classes = ["error"];
    if (this.validationMessage() === "") {
      classes.push("hidden");
    }
    return classes.join(" ");
  }

  validationMessage() {
    let validation = [];
    if (!this.props.firstName) {
      validation.push("first name");
    }
    if (!this.props.lastName) {
      validation.push("last name");
    }
    if (!this.props.salaryAfterTax) {
      validation.push("net income");
    }
    return validation.join(", ");
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.props.setProfileValue(name, value);
  }

  handleIncomeChange(event) {
    const { name, value } = event.target;
    this.props.setFinancesValue(name, value);
  }

  handleStateChange(event) {
    const { value } = event.target;
    this.props.setProfileValue("state", value);
    this.props.fetchCities(value);
  }

  dismissError() {
    this.error.current.classList.add("hidden");
  }

  getClasses() {
    let classes = ["overflow"];

    if (this.props.currentStep !== 0) {
      classes.push("hidden");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    hr {
      width: 100%;
      margin: 2rem 0;
    }

    .profile {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    .row {
      align-items: center;
    }

    .overflow {
      overflow-y: auto;
      overflow-x: hidden;
      height: calc(90vh - 10.5rem);
    }

    .error {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--toast-red-transparent);
      width: 93%;
      border-radius: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding: 0.5rem;
    }

    .error-text {
      font-size: 0.875rem;
      color: var(--toast-red);
    }

    .error-icon {
      cursor: pointer;
    }

    .hidden {
      display: none;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <div className="profile">
          <div ref={this.error} className={this.validationClasses()}>
            <p className="error-text">
              Please fill out the required fields: {this.validationMessage()}
            </p>
            <div onClick={this.dismissError}>
              <div className="error-icon">
                <ToastIcon
                  name="x"
                  width={24}
                  height={24}
                  strokeWidth={2}
                  stroke="var(--toast-red)"
                />
              </div>
            </div>
          </div>
          <ToastInput
            type="text"
            label="First Name"
            placeholder="Type in your first name"
            value={this.props.firstName}
            name="firstName"
            onChange={this.handleChange}
            required
            readOnly={this.props.readOnly}
            helpText="Enter your first name. This field is required."
            noScroll
          />

          <ToastInput
            type="text"
            label="Middle Name"
            placeholder="Type in your middle name"
            value={this.props.middleName}
            name="middleName"
            onChange={this.handleChange}
            readOnly={this.props.readOnly}
            helpText="Enter your middle name."
            noScroll
          />

          <ToastInput
            type="text"
            label="Last Name"
            placeholder="Type in your last name"
            value={this.props.lastName}
            name="lastName"
            onChange={this.handleChange}
            required
            readOnly={this.props.readOnly}
            helpText="Enter your last name. This field is required."
          />

          <ToastSelect
            options={getBirthYearOptions()}
            name="birthYear"
            label="Birth Year"
            list="birthYear"
            placeholder="Select your birth year"
            value={this.props.birthYear}
            id="birthYear"
            onChange={this.handleChange}
            readOnly={this.props.readOnly}
            helpText="Select your birth year. This field is required."
            required
          />

          <ToastSelect
            options={stateOptions.map((state) => state.name)}
            name="state"
            label="State"
            placeholder="Select your state"
            value={this.props.state}
            id="state"
            onChange={this.handleStateChange}
            readOnly={this.props.readOnly}
            helpText="Select the state you live in."
          />

          <ToastSelect
            options={this.props.cities}
            name="city"
            label="City"
            placeholder="Select your city"
            value={this.props.city}
            id="city"
            onChange={this.handleChange}
            readOnly={this.props.readOnly}
            helpText="Select the city you live in."
          />
        </div>

        <hr />
        <h4>Income</h4>

        <div className="row">
          <div className="column">
            <ToastInput
              type="number"
              min={0}
              label="Personal Annual Net Income (After Taxes)"
              placeholder="Type in your income"
              value={this.props.salaryAfterTax}
              name="salaryAfterTax"
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              onChange={this.handleIncomeChange}
              step={1}
              readOnly={this.props.readOnly}
              helpText="Enter your income after taxes (take home pay)."
              required
            />
          </div>

          <div className="column">
            <ToastShowHideInput
              id="additionalIncome"
              label="Add Additional Income"
              readOnly={this.props.readOnly}
            >
              <ToastInput
                type="number"
                label="Additional Income (Annual)"
                name="additionalIncome"
                placeholder="Type in your additional income"
                min={0}
                step={1}
                iconName="dollarsign"
                iconWidth={20}
                iconHeight={20}
                value={this.props.additionalIncome}
                onChange={this.handleIncomeChange}
                readOnly={this.props.readOnly}
                helpText="Enter the amount of additional income you receive."
              />
            </ToastShowHideInput>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  firstName: getFirstName(state),
  middleName: getMiddleName(state),
  lastName: getLastName(state),
  birthYear: getBirthYear(state),
  city: getCity(state),
  state: getState(state),
  cities: getCities(state),
  salaryAfterTax: getSalaryAfterTax(state),
  additionalIncome: getAdditionalIncome(state),
});

export default connect(mapStateToProps, {
  setProfileValue,
  setFinancesValue,
  fetchCities,
})(Profile);
