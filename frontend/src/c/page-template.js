import React from "react";
import Style from "style-it";

import MainHeader from "./main-header";
import MainNav from "./main-nav";
import ActionItemsContent from "./page_content/action-items-content";
import AdvisorContactContent from "./page_content/advisor-contact-content";
import ClientsContent from "./page_content/clients-content";
import ConfigurationContent from "./page_content/configuration-content";
import PlanContent from "./page_content/plan-content";
import ProfileContent from "./page_content/profile-content";
import ToastCard from "./toast/toast-card";
import ToastPageNav from "./toast/toast-page-nav";

class PageTemplate extends React.Component {
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
    }

    .right-content {
      width: calc(100% - 10rem);
      margin: 1rem 6.5rem 0 6.5rem;
    }
      `;

    function getScreenContent(props) {
      switch (props.page) {
        case "profile":
          return <ProfileContent></ProfileContent>;
        case "plan":
          return <PlanContent></PlanContent>;
        case "actionitems":
          return <ActionItemsContent></ActionItemsContent>;
        case "advisorcontact":
          return <AdvisorContactContent></AdvisorContactContent>;
        case "clients":
          return <ClientsContent></ClientsContent>;
        case "configs":
          return <ConfigurationContent></ConfigurationContent>;
        default:
          return <React.Fragment></React.Fragment>;
      }
    }

    function getMainNav(props) {
      switch (props.user) {
        case "advisor":
          return <MainNav advisor></MainNav>;
        case "client":
          return <MainNav client></MainNav>;
        default:
          return <React.Fragment></React.Fragment>;
      }
    }

    function getLeftNav(props) {
      switch (props.page) {
        case "profile":
          return <ToastPageNav profile></ToastPageNav>;
        case "clients":
          return <ToastPageNav hidden></ToastPageNav>;
        case "advisorcontact":
          return <ToastPageNav hidden></ToastPageNav>;
        default:
          return <ToastPageNav></ToastPageNav>;
      }
    }

    function getMainHeader(props) {
      switch (props.page) {
        case "profile":
          return (
            <MainHeader
              header="Your Profile"
              leftside="header"
              rightside="nav"
            ></MainHeader>
          );
        case "plan":
          return <MainHeader header="Your Plan" leftside="header"></MainHeader>;
        case "actionitems":
          return (
            <MainHeader
              header="Your Action Items"
              leftside="header"
            ></MainHeader>
          );
        case "advisorcontact":
          return (
            <MainHeader header="Your Advisor" leftside="header"></MainHeader>
          );
        case "clients":
          return (
            <MainHeader header="Your Clients" leftside="header"></MainHeader>
          );
        case "configs":
          return (
            <MainHeader
              header="Configure Factors"
              leftside="header"
            ></MainHeader>
          );
        default:
          return <MainHeader></MainHeader>;
      }
    }

    return Style.it(
      `${styles}`,
      <div>
        <div className="nav-content-container">
          {getMainNav(this.props)}
          <div className="right-content">
            {getMainHeader(this.props)}
            <div className="leftnav-card">
              {getLeftNav(this.props)}
              <ToastCard>{getScreenContent(this.props)}</ToastCard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageTemplate;
