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
  deleteChild,
  deletePartner,
} from "../../../redux/actions";

import {
  childEducationOptions,
  getBirthYearOptions,
} from "../../../utils/select-utils";

class Family extends React.Component {
  getClasses() {
    let classes = ["overflow "];

    if (this.props.currentStep !== 2) {
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

    .overflow {
      overflow-y: auto;
      height: calc(72vh - 5.5rem);
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
          onDelete={this.props.deletePartner}
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="text"
            label="Partner's First Name"
            name="firstName"
            placeholder="Type in your partner's first name"
            readOnly={this.props.readOnly}
            helpText="Enter your partner's first name."
          />

          <ToastInput
            type="text"
            label="Partner's Last Name"
            name="lastName"
            placeholder="Type in your partner's last name"
            readOnly={this.props.readOnly}
            helpText="Enter your partner's last name."
          />

          <ToastSelect
            options={getBirthYearOptions()}
            name="birthYear"
            label="Partner's Birth Year"
            list="birthYear"
            placeholder="Select your partner's birth year"
            id="birthYear"
            iconWidth={20}
            iconHeight={20}
            readOnly={this.props.readOnly}
            helpText="Select your partner's birth year."
          />

          <ToastInput
            type="number"
            min={0}
            label="Partner's Personal Annual Net Income"
            placeholder="Type in your partner's income"
            name="salary"
            iconName="dollarsign"
            step={1}
            iconWidth={20}
            iconHeight={20}
            readOnly={this.props.readOnly}
            helpText="Enter your partner's personal annual net income. This is their income after taxes (take home pay)."
          />
        </ToastDuplicateInputButton>

        <hr />

        <ToastDuplicateInputButton
          label="Add Child"
          fields={{ firstName: "", education: "", birthYear: 2020 }}
          value={this.props.children}
          onChange={this.props.setChildListValue}
          onDuplicate={this.props.addChild}
          onDelete={this.props.deleteChild}
          readOnly={this.props.readOnly}
        >
          <ToastInput
            type="text"
            label="Child's First Name"
            placeholder="Type in your child's first name"
            name="firstName"
            readOnly={this.props.readOnly}
            helpText="Enter your child's first name."
          />

          <ToastSelect
            options={childEducationOptions}
            name="education"
            label="Child's Education"
            list="childEducation"
            placeholder="Select your child's education"
            id="childEducation"
            readOnly={this.props.readOnly}
            helpText="Select your child's level of education."
          />

          <ToastSelect
            options={getBirthYearOptions()}
            name="birthYear"
            label="Child's Birth Year"
            list="childBirthYear"
            placeholder="Select your child's birth year"
            id="childBirthYear"
            readOnly={this.props.readOnly}
            helpText="Select your child's birth year."
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
  deleteChild,
  deletePartner,
})(Family);
