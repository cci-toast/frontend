import React from "react";
import Center from "react-center";
import Style from "style-it";

import ToastInput from "../../toast/toast-input";
import ToastButton from "../../toast/toast-button";
import ToastSelect from "../../toast/toast-select";

import { connect } from "react-redux";

import { getPartners, getChildren } from "../../../redux/selectors";

import { setPartnerListValue, setChildListValue } from "../../../redux/actions";

import {
  birthYearOptions,
  childEducationOptions,
} from "../../../utils/select-utils";

class Family extends React.Component {
  constructor(props) {
    super(props);
    this.setPartner = this.setPartner.bind(this);
    this.setChildListValue = this.setChildListValue.bind(this);
  }

  setPartner(event) {
    const { name, value } = event.target;
    this.props.setPartnerListValue(0, name, value);
  }

  setChildListValue(event) {
    const { name, value } = event.target;
    this.props.setChildListValue(0, name, value);
  }

  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 2) {
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
              label="Partner's First Name"
              name="firstName"
              placeholder="Type in your partner's first name"
              defaultValue={this.props.partners[0].firstName}
              onChange={this.setPartner}
            />
            <ToastSelect
              options={birthYearOptions}
              name="partnerbirthYear"
              label="Partner's Birth Year"
              list="partnerbirthYear"
              placeholder="Type in your partner's birth year"
              value={this.props.partners[0].birthYear}
              id="partnerbirthYear"
              onChange={this.setPartner}
            />
          </div>
          <div className="column">
            <ToastInput
              type="text"
              label="Partner's Last Name"
              name="lastName"
              placeholder="Type in your partner's last name"
              defaultValue={this.props.partners[0].lastName}
              onChange={this.setPartner}
            />
            <ToastInput
              type="number"
              min={0.0}
              label="Partner's Annual Salary After Taxes"
              placeholder="50,000"
              defaultValue={this.props.partners[0].salary}
              name="salary"
              iconName="dollarsign"
              onChange={this.setPartner}
              step={0.01}
            />
          </div>
        </div>
        <Center>
          <ToastButton tertiary label="Add Partner" />
        </Center>
        <hr />

        <div className="row">
          <div className="column">
            <ToastInput
              type="text"
              label="Child's First Name"
              placeholder="Type in your child's first name"
              value={this.props.children[0].firstName}
              name="firstName"
              onChange={this.setChildListValue}
            />

            <ToastSelect
              options={childEducationOptions}
              name="childEducation"
              label="Child's Education"
              list="childEducation"
              placeholder="Type in your child's education"
              value={this.props.children[0].education}
              id="childEducation"
              onChange={this.setChildListValue}
            />
          </div>
          <div className="column">
            <ToastSelect
              options={birthYearOptions}
              name="childbirthYear"
              label="Child's Birth Year"
              list="childbirthYear"
              placeholder="Type in your child's birth year"
              value={this.props.children[0].birthYear}
              id="childbirthYear"
              onChange={this.setChildListValue}
            />
          </div>
        </div>

        <Center>
          <ToastButton tertiary label="Add Child" />
        </Center>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  partners: getPartners(state),
  children: getChildren(state),
});

export default connect(mapStateToProps, {
  setPartnerListValue,
  setChildListValue,
})(Family);
