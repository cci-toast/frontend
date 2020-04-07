import React from "react";
import Style from "style-it";

import ToastSaveCancel from "../toast/toast-save-cancel";

import Profile from "./profile/profile";
import Finances from "./profile/finances";
import Family from "./profile/family";
import Goals from "./profile/goals.js";

import { connect } from "react-redux";
import { getCurrentStep } from "../../redux/selectors";
import { incrementStep, decrementStep, resetStep } from "../../redux/actions";

const goalOptions = [
  { id: 0, value: "I want to save money to pay off my credit card" },
  { id: 1, value: "I want to save money to pay off student debt" },
  { id: 2, value: "I want to save money for a vacation" },
  { id: 3, value: "I want to save money to buy/rent a property" },
  { id: 4, value: "I want to create an emergency savings fund" },
  { id: 5, value: "I want to save money to prepare for retirement" },
  { id: 6, value: "Other (Type in)" },
];

const stateOptions = [
  { id: 0, value: "Alabama" },
  { id: 1, value: "Alaska" },
  { id: 2, value: "Arizona" },
  { id: 3, value: "Arkansas" },
  { id: 4, value: "California" },
  { id: 5, value: "Colorado" },
  { id: 6, value: "Connecticut" },
  { id: 7, value: "Delaware" },
  { id: 8, value: "Florida" },
  { id: 9, value: "Georgia" },
  { id: 10, value: "Hawaii" },
  { id: 11, value: "Idaho" },
  { id: 12, value: "Illinois" },
  { id: 13, value: "Indiana" },
  { id: 14, value: "Iowa" },
  { id: 15, value: "Kansas" },
  { id: 16, value: "Kentucky" },
  { id: 17, value: "Louisiana" },
  { id: 18, value: "Maine" },
  { id: 19, value: "Maryland" },
  { id: 20, value: "Massachusetts" },
  { id: 21, value: "Michigan" },
  { id: 22, value: "Minnesota" },
  { id: 23, value: "Mississippi" },
  { id: 24, value: "Missouri" },
  { id: 25, value: "Montana" },
  { id: 26, value: "Nebraska" },
  { id: 27, value: "Nevada" },
  { id: 28, value: "New Hampshire" },
  { id: 29, value: "New Jersey" },
  { id: 30, value: "New Mexico" },
  { id: 31, value: "New York" },
  { id: 32, value: "North Carolina" },
  { id: 33, value: "North Dakota" },
  { id: 34, value: "Ohio" },
  { id: 35, value: "Oklahoma" },
  { id: 36, value: "Oregon" },
  { id: 37, value: "Pennsylvania" },
  { id: 38, value: "Rhode Island" },
  { id: 39, value: "South Carolina" },
  { id: 40, value: "South Dakota" },
  { id: 41, value: "Tennessee" },
  { id: 42, value: "Texas" },
  { id: 43, value: "Utah" },
  { id: 44, value: "Vermont" },
  { id: 45, value: "Virginia" },
  { id: 46, value: "Washington" },
  { id: 47, value: "West Virginia" },
  { id: 48, value: "Wisconsin" },
  { id: 49, value: "Wyoming" },
];

class ProfileContent extends React.Component {
  constructor(props) {
    super(props);
    this.props.resetStep();

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.props.incrementStep();
  }

  prev() {
    this.props.decrementStep();
  }

  hidePrevButton() {
    return this.props.currentStep === 1;
  }

  hideNextButton() {
    return this.props.currentStep === 4;
  }

  onSubmit() {
    // submit form
  }

  render() {
    const styles = `
    .save-cancel {
      display: flex;
      justify-content: flex-end;
    }

    .container {
      height: calc(90vh - 5rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <Profile
            currentStep={this.props.currentStep}
            stateOptions={stateOptions}
          />
          <Finances currentStep={this.props.currentStep} />
          <Family currentStep={this.props.currentStep} />
          <Goals
            currentStep={this.props.currentStep}
            goalOptions={goalOptions}
          />
        </form>
        <div className="save-cancel">
          <ToastSaveCancel
            saveClicked={this.next}
            cancelClicked={this.prev}
            saveLabel="next"
            cancelLabel="previous"
            hideSave={this.hideNextButton()}
            hideCancel={this.hidePrevButton()}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStep: getCurrentStep(state),
});

export default connect(mapStateToProps, {
  incrementStep,
  decrementStep,
  resetStep,
})(ProfileContent);
