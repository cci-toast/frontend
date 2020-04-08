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
} from "../../../redux/selectors";

import { setProfileValue } from "../../../redux/actions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.props.setProfileValue(name, value);
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

            <ToastInput
              type="number"
              label="Birth Year"
              defaultValue={this.props.birthYear}
              placeholder="Type in your birth year"
              name="birthYear"
              onChange={this.handleChange}
              min={1}
              max={9999}
              required
            />
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="column">
            <ToastInput
              type="text"
              label="City"
              placeholder="Type in your city"
              defaultValue={this.props.city}
              name="city"
              onChange={this.handleChange}
            />
          </div>
          <div className="column">
            <ToastSelect
              options={this.props.stateOptions}
              name="state"
              label="State"
              list="state"
              placeholder="Type in your state"
              defaultValue={this.props.state}
              id="state"
              onChange={this.handleChange}
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
});

export default connect(mapStateToProps, {
  setProfileValue,
})(Profile);
