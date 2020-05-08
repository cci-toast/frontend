import React from "react";

import Style from "style-it";

import ToastInput from "../../toast/toast-input";
import ToastSelect from "../../toast/toast-select";
import ToastDuplicateInputButton from "../../toast/toast-duplicate-input-button";

import { connect } from "react-redux";

import { getPartners, getChildren } from "../../../redux/selectors";

import {
  addPartner,
  addChild,
  setPartnerListValue,
  setChildListValue,
} from "../../../redux/actions";

import {
  childEducationOptions,
  getBirthYearOptions,
} from "../../../utils/select-utils";

class Family extends React.Component {
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
        <ToastDuplicateInputButton
          id="partner"
          label="Add Partner"
          fields={{
            firstName: "",
            birthYear: "",
            lastName: "",
            salary: "",
          }}
          value={this.props.partners}
          onChange={this.props.setPartnerListValue}
          onDuplicate={this.props.addPartner}
        >
          <ToastInput
            type="text"
            label="Partner's First Name"
            name="firstName"
            placeholder="Type in your partner's first name"
          />
          <ToastInput
            type="text"
            label="Partner's Last Name"
            name="lastName"
            placeholder="Type in your partner's last name"
          />
          <ToastSelect
            options={getBirthYearOptions()}
            name="birthYear"
            label="Partner's Birth Year"
            list="birthYear"
            placeholder="Type in your partner's birth year"
            id="birthYear"
            iconWidth={20}
            iconHeight={20}
          />
          <ToastInput
            type="number"
            min={0.0}
            label="Partner's Annual Salary After Taxes"
            placeholder="50,000"
            name="salary"
            iconName="dollarsign"
            step={0.01}
            iconWidth={20}
            iconHeight={20}
          />
        </ToastDuplicateInputButton>
        <hr />

        <ToastDuplicateInputButton
          label="Add Child"
          fields={{ firstName: "", education: "", birthYear: 2020 }}
          value={this.props.children}
          onChange={this.props.setChildListValue}
          onDuplicate={this.props.addChild}
        >
          <ToastInput
            type="text"
            label="Child's First Name"
            placeholder="Type in your child's first name"
            name="firstName"
          />

          <ToastSelect
            options={childEducationOptions}
            name="education"
            label="Child's Education"
            list="childEducation"
            placeholder="Type in your child's education"
            id="childEducation"
          />

          <ToastSelect
            options={getBirthYearOptions()}
            name="birthYear"
            label="Child's Birth Year"
            list="childBirthYear"
            placeholder="Type in your child's birth year"
            id="childBirthYear"
          />
        </ToastDuplicateInputButton>
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
  addPartner,
  addChild,
})(Family);
