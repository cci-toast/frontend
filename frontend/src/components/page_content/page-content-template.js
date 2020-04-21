import React from "react";
import Style from "style-it";

import ToastSaveCancel from "../toast/toast-save-cancel";

import { connect } from "react-redux";
import {
  getCurrentStep,
  getHideSave,
  getHideCancel,
} from "../../redux/selectors";
import {
  incrementStep,
  decrementStep,
  resetStep,
  setHideSaveCancel,
} from "../../redux/actions";

import ActionItemsContent from "./action-items-content";
import AdvisorContactContent from "./advisor-contact-content";
import ClientsContent from "./clients-content";
import ConfigurationContent from "./configuration-content";
import PlanContent from "./plan-content";
import ProfileContent from "./profile-content";

class PageContentTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.props.resetStep();

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.saveLabel = "Next";
  }

  next() {
    if (this.saveLabel === "View Plan") {
      document.location.href = "/plan";
    } else {
      this.props.incrementStep();
    }
  }

  prev() {
    this.props.decrementStep();
  }

  setHideSaveCancel(save, cancel) {
    this.props.setHideSaveCancel(save, cancel);
  }

  setFactorsSaveCancel() {
    this.setHideSaveCancel(
      this.props.currentStep === 4,
      this.props.currentStep === 0
    );
  }

  setProfileSaveCancel() {
    if (this.props.currentStep === 3) {
      this.saveLabel = "View Plan";
    }
    this.setHideSaveCancel(null, this.props.currentStep === 0);
  }

  getContent() {
    switch (this.props.page) {
      case "profile":
        this.setProfileSaveCancel();
        return <ProfileContent {...this.props} />;
      case "plan":
        this.setFactorsSaveCancel();
        return <PlanContent {...this.props} />;
      case "actionitems":
        this.setFactorsSaveCancel();
        return <ActionItemsContent {...this.props} />;
      case "advisorcontact":
        return <AdvisorContactContent {...this.props} />;
      case "clients":
        return <ClientsContent {...this.props} />;
      case "configuration":
        this.setFactorsSaveCancel();
        return <ConfigurationContent {...this.props} />;
      default:
        return <React.Fragment />;
    }
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
        {this.getContent()}
        <div className="save-cancel">
          <ToastSaveCancel
            saveClicked={this.next}
            cancelClicked={this.prev}
            saveLabel={this.saveLabel}
            cancelLabel="previous"
            hideCancel={this.props.hideCancel}
            hideSave={this.props.hideSave}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStep: getCurrentStep(state),
  hideSave: getHideSave(state),
  hideCancel: getHideCancel(state),
});

export default connect(mapStateToProps, {
  incrementStep,
  decrementStep,
  resetStep,
  setHideSaveCancel,
})(PageContentTemplate);
