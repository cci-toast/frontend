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
              value={this.props.firstName}
              name="firstName"
              onChange={this.handleChange}
              required
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
          </div>

          <div className="column">
            <ToastInput
              type="text"
              label="Middle Name"
              placeholder="Type in your middle name"
              value={this.props.middleName}
              name="middleName"
              onChange={this.handleChange}
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
            />
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="column">
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
          </div>
          <div className="column">
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
