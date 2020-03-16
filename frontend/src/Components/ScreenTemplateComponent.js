import React, { Component } from "react";
import Style from "style-it";

import MainNavComponent from "./MainNavComponent";

import ClientProfileContent from "./ClientProfileContent";
import ClientPlanContent from "./ClientPlanContent";
import ClientActionItemsContent from "./ClientActionItemsContent";
import ClientAdvisorContactContent from "./ClientAdvisorContactContent";

import AdvisorClientsContent from "./AdvisorClientsContent";
import AdvisorConfigsContent from "./AdvisorConfigsContent";

import CardComponent from "./CardComponent";
import LeftNavComponent from "./LeftNavComponent";

class ScreenTemplateComponent extends Component {
  render() {
    const styles = `
    .nav-content-container {
        display: flex;
        justify-content: space-between;
        background-color: var(--toast-neutral-5);
    }
    
    .leftnav-card {
        display: flex;
        justify-content: space-evenly;
        margin-top: 3rem;
        width: calc(100vw - 10rem);
    }
      `;

    function getScreenContent(props) {
      if (props.profile) {
        return <ClientProfileContent></ClientProfileContent>;
      } else if (props.plan) {
        return <ClientPlanContent></ClientPlanContent>;
      } else if (props.actionitems) {
        return <ClientActionItemsContent></ClientActionItemsContent>;
      } else if (props.advisorcontact) {
        return <ClientAdvisorContactContent></ClientAdvisorContactContent>;
      } else if (props.clients) {
        return <AdvisorClientsContent></AdvisorClientsContent>;
      } else if (props.configs) {
        return <AdvisorConfigsContent></AdvisorConfigsContent>;
      } else {
        return <React.Fragment></React.Fragment>;
      }
    }

    function getMainNav(props) {
      if (props.advisor) {
        return <MainNavComponent advisor></MainNavComponent>;
      } else {
        return <MainNavComponent client></MainNavComponent>;
      }
    }

    function getLeftNav(props) {
      if (props.profile) {
        return <LeftNavComponent profile></LeftNavComponent>;
      } else if (props.clients || props.advisorcontact) {
        return <LeftNavComponent hidden></LeftNavComponent>;
      } else {
        return <LeftNavComponent></LeftNavComponent>;
      }
    }

    return Style.it(
      `${styles}`,
      <div className="nav-content-container">
        {getMainNav(this.props)}
        <div className="leftnav-card">
          {getLeftNav(this.props)}
          <CardComponent>{getScreenContent(this.props)}</CardComponent>
        </div>
      </div>
    );
  }
}

export default ScreenTemplateComponent;
