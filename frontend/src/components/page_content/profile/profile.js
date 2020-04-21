import React from "react";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";
import ToastSelect from "../../toast/toast-select";

import { connect } from "react-redux";

import {
  getFirstName,
  getMiddleName,
  getLastName,
  getBirthYear,
  getCity,
  getState,
  getCities,
} from "../../../redux/selectors";

import { stateOptions, getBirthYearOptions } from "../../../utils/select-utils";

import { setProfileValue, fetchCities } from "../../../redux/actions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);

    this.props.fetchCities("Alabama");
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.props.setProfileValue(name, value);
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
        <div className="row">
          <div className="column">
            <ToastInput
              type="text"
              label="First Name"
              placeholder="Type in your first name"
              defaultValue={this.props.firstName}
              name="firstName"
              onChange={this.handleChange}
              required
            />
            <ToastInput
              type="text"
              label="Last Name"
              placeholder="Type in your last name"
              defaultValue={this.props.lastName}
              name="lastName"
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="column">
            <ToastInput
              type="text"
              label="Middle Name"
              placeholder="Type in your middle name"
              defaultValue={this.props.middleName}
              name="middleName"
              onChange={this.handleChange}
            />
            <ToastSelect
              options={getBirthYearOptions()}
              name="birthYear"
              label="Birth Year"
              list="birthYear"
              placeholder="Type in your birth year"
              defaultValue={this.props.birthYearOptions}
              id="birthYear"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="column">
            <ToastSelect
              options={this.props.cities}
              name="city"
              label="City"
              placeholder="Select your city"
              value={this.props.city || this.props.cities[0]}
              id="city"
              onChange={this.handleChange}
            />
          </div>
          <div className="column">
            <ToastSelect
              options={stateOptions.map((state) => state.name)}
              name="state"
              label="State"
              placeholder="Select your state"
              value={this.props.state || stateOptions[0].state}
              id="state"
              onChange={this.handleStateChange}
            />
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
});

export default connect(mapStateToProps, {
  setProfileValue,
  fetchCities,
})(Profile);
