import React from "react";
import Style from "style-it";

import ToastCheckbox from "../toast/toast-checkbox";
import ToastSaveCancel from "../toast/toast-save-cancel";

import { connect } from "react-redux";

import { getCurrentStep } from "../../redux/selectors";

import { incrementStep } from "../../redux/actions";
import { decrementStep } from "../../redux/actions";
import { resetStep } from "../../redux/actions";

class ActionItemsContent extends React.Component {
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
    return this.props.currentStep === 5;
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
})(ActionItemsContent);
