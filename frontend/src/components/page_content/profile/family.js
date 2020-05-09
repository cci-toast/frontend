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
    let classes = ["family"];

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
          maxItems={1}
        >
          <ToastInput
            type="text"
            label="Partner's First Name"
            name="firstName"
            placeholder="Type in your partner's first name"
            readOnly={this.props.readOnly}
          />

          <ToastInput
            type="text"
            label="Partner's Last Name"
            name="lastName"
            placeholder="Type in your partner's last name"
            readOnly={this.props.readOnly}
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
          />

          <ToastInput
            type="number"
            min={0.0}
            label="Partner's Personal Annual Net Income"
            placeholder="Type in your partner's income"
            name="salary"
            iconName="dollarsign"
            step={0.01}
            iconWidth={20}
            iconHeight={20}
            readOnly={this.props.readOnly}
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
          maxItems={2}
        >
          <ToastInput
            type="text"
            label="Child's First Name"
            placeholder="Type in your child's first name"
            name="firstName"
            readOnly={this.props.readOnly}
          />

          <ToastSelect
            options={childEducationOptions}
            name="education"
            label="Child's Education"
            list="childEducation"
            placeholder="Select your child's education"
            id="childEducation"
            readOnly={this.props.readOnly}
          />

          <ToastSelect
            options={getBirthYearOptions()}
            name="birthYear"
            label="Child's Birth Year"
            list="childBirthYear"
            placeholder="Select your child's birth year"
            id="childBirthYear"
            readOnly={this.props.readOnly}
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
