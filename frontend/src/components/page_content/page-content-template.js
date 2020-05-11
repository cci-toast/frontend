import React from "react";
import Style from "style-it";

import ToastSaveCancel from "../toast/toast-save-cancel";

import { connect } from "react-redux";
import { getCurrentStep, getClientId } from "../../redux/selectors";
import { incrementStep, decrementStep } from "../../redux/actions";

import ActionItemsContent from "./action-items-content";
import AdvisorContactContent from "./advisor-contact-content";
import ClientsContent from "./clients-content";
import ConfigurationContent from "./configuration-content";
import PlanContent from "./plan-content";
import ProfileContent from "./profile-content";

class PageContentTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.getSave = this.getSave.bind(this);
  }

  next() {
    if (this.getSave() === "View Plan") {
      document.location.href = "/plan";
    } else {
      this.props.incrementStep();
    }
  }

  prev() {
    this.props.decrementStep();
  }

  getHideCancel() {
    return this.props.clientId === "" || this.props.currentStep === 0;
  }

  getHideSave() {
    return (
      (this.props.clientId === "" && this.props.currentStep !== 0) ||
      (this.props.currentStep === 4 && this.props.page !== "profile")
    );
  }

  getSave() {
    if (this.props.page === "profile" && this.props.currentStep === 3) {
      return "View Plan";
    } else {
      return "Next";
    }
  }

  showContent() {
    return this.props.clientId !== "";
  }

  getContent() {
    switch (this.props.page) {
      case "profile":
        return <ProfileContent {...this.props} />;
      case "plan":
        return <PlanContent {...this.props} showContent={this.showContent()} />;
      case "actionitems":
        return (
          <ActionItemsContent
            {...this.props}
            showContent={this.showContent()}
          />
        );
      case "advisorcontact":
        return <AdvisorContactContent {...this.props} />;
      case "clients":
        return <ClientsContent {...this.props} />;
      case "configuration":
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
            saveLabel={this.getSave()}
            cancelLabel="Previous"
            hideCancel={this.getHideCancel()}
            hideSave={this.getHideSave()}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStep: getCurrentStep(state),
  clientId: getClientId(state),
});

export default connect(mapStateToProps, {
  incrementStep,
  decrementStep,
})(PageContentTemplate);
