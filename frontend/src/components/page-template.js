import React from "react";
import Style from "style-it";

import MainHeader from "./main-header";
import MainNav from "./main-nav";
import AdvisorContactContent from "./page_content/advisor-contact-content";
import ClientsContent from "./page_content/clients-content";
import ToastCard from "./toast/toast-card";
import ToastPageNav from "./toast/toast-page-nav";
import ToastHelp from "./toast/toast-help";
import PageContentTemplate from "./page_content/page-content-template";

import { connect } from "react-redux";
import { getFirstName, getMiddleName, getLastName } from "../redux/selectors";

class PageTemplate extends React.Component {
  getScreenContent() {
    switch (this.props.page) {
      case "advisorcontact":
        return <AdvisorContactContent {...this.props} />;
      case "clients":
        return <ClientsContent {...this.props} />;
      default:
        return <PageContentTemplate {...this.props} />;
    }
  }

  getLeftNav() {
    switch (this.props.page) {
      case "profile":
        return <ToastPageNav profile />;
      case "clients":
        return <ToastPageNav hidden />;
      case "advisorcontact":
        return <ToastPageNav hidden />;
      default:
        return <ToastPageNav />;
    }
  }

  getMainHeader() {
    if (this.props.user === "client") {
      switch (this.props.page) {
        case "profile":
          return <MainHeader header="Your Profile" leftside="header" />;
        case "plan":
          return <MainHeader header="Your Plan" leftside="header" />;
        case "actionitems":
          return <MainHeader header="Your Action Items" leftside="header" />;
        case "advisorcontact":
          return <MainHeader header="Your Advisor" leftside="header" />;
        case "clients":
          return <MainHeader header="Your Clients" leftside="header" />;
        case "configuration":
          return <MainHeader header="Configure Factors" leftside="header" />;
        default:
          return <MainHeader />;
      }
    } else if (this.props.user === "advisor") {
      switch (this.props.page) {
        case "profile":
          return (
            <MainHeader
              header={`${this.props.firstName} ${this.props.middleName} ${this.props.lastName}'s Profile`}
              leftside="header"
              rightside="nav"
            />
          );
        case "plan":
          return (
            <MainHeader
              header={`${this.props.firstName} ${this.props.middleName} ${this.props.lastName}'s Plan`}
              leftside="header"
              rightside="nav"
            />
          );
        case "actionitems":
          return (
            <MainHeader
              header={`${this.props.firstName} ${this.props.middleName} ${this.props.lastName}'s Action Items`}
              leftside="header"
              rightside="nav"
            />
          );
        case "clients":
          return <MainHeader header="Your Clients" leftside="header" />;
        case "configuration":
          return <MainHeader header="Configure Factors" leftside="header" />;
        default:
          return <MainHeader />;
      }
    }
  }

  render() {
    const styles = `
    .nav-content-container {
        display: flex;
        justify-content: space-between;
        background-color: var(--toast-neutral-5);
    }
    
    .leftnav-card {
        display: flex;
        justify-content: space-between;
        height: calc(90vh - 1rem);
        width: calc(100vw - 13rem - 8rem);
    }

    .right-content {
      width: calc(100vw - 8rem);
      margin: 1rem 6.5rem 0 6.5rem;
    }
    `;

    return Style.it(
      `${styles}`,
      <div>
        <ToastHelp {...this.props} />
        <div className="nav-content-container">
          <MainNav user={this.props.user} />
          <div className="right-content">
            {this.getMainHeader()}
            <div className="leftnav-card">
              {this.getLeftNav()}
              <ToastCard>{this.getScreenContent()}</ToastCard>
            </div>
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
});

export default connect(mapStateToProps)(PageTemplate);
