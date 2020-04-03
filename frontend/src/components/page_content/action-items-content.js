import React from "react";
import Style from "style-it";

import ToastCheckbox from "../toast/toast-checkbox";
import ToastSaveCancel from "../toast/toast-save-cancel";

class ActionItemsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };
  }

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  hidePrevButton = () => {
    return this.state.currentStep === 1;
  };

  hideNextButton = () => {
    return this.state.currentStep === 5;
  };

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
        <div>
          <ToastCheckbox text="action item text" />
          <ToastCheckbox text="action item text" />
          <ToastCheckbox text="action item text" />
          <ToastCheckbox text="action item text" />
        </div>
        <div className="save-cancel">
          <ToastSaveCancel
            saveClicked={this.next}
            cancelClicked={this.prev}
            saveLabel="next"
            cancelLabel="previous"
            hideSave={this.hideNextButton()}
            hideCancel={this.hidePrevButton()}
          ></ToastSaveCancel>
        </div>
      </div>
    );
  }
}

export default ActionItemsContent;
