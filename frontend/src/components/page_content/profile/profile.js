import React from "react";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";
import ToastSelect from "../../toast/toast-select";
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

  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 0) {
      classes.push("hidden");
    }

    return classes.join(" ");
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

    .profile {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }

    .row {
      align-items: center;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <div className="profile">
          <ToastInput
            type="text"
            label="First Name"
            placeholder="Type in your first name"
            value={this.props.firstName}
            name="firstName"
            onChange={this.handleChange}
            required
            readOnly={this.props.readOnly}
          />

          <ToastInput
            type="text"
            label="Middle Name"
            placeholder="Type in your middle name"
            value={this.props.middleName}
            name="middleName"
            onChange={this.handleChange}
            readOnly={this.props.readOnly}
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
          />
        </div>

        <hr />
        <h4>Income</h4>

        <div className="row">
          <div className="column">
            <ToastInput
              type="number"
              min={0.0}
              label="Personal Annual Net Income (After Taxes)"
              placeholder="Type in your income"
              value={this.props.salaryAfterTax}
              name="salaryAfterTax"
              iconName="dollarsign"
              iconWidth={20}
              iconHeight={20}
              onChange={this.handleIncomeChange}
              step={0.01}
              readOnly={this.props.readOnly}
              required
            />
          </div>

          <div className="column">
            <ToastShowHideInput
              id="additionalIncome"
              label="Add Additional Income"
            >
              <ToastInput
                type="number"
                label="Additional Income (Annual)"
                name="additionalIncome"
                placeholder="Type in your additional income"
                min={0.0}
                step={0.01}
                iconName="dollarsign"
                iconWidth={20}
                iconHeight={20}
                value={this.props.additionalIncome}
                onChange={this.handleIncomeChange}
                readOnly={this.props.readOnly}
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
