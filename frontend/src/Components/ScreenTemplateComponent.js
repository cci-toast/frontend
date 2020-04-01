import React, { Component } from 'react';
import Style from 'style-it';

import CardComponent from './CardComponent';
import LeftNavComponent from './LeftNavComponent';
import MainHeaderComponent from './MainHeaderComponent';
import MainNavComponent from './MainNavComponent';
import AdvisorClientsContent from './ScreenContent/AdvisorClientsContent';
import AdvisorConfigsContent from './ScreenContent/AdvisorConfigsContent';
import ClientActionItemsContent from './ScreenContent/ClientActionItemsContent';
import ClientAdvisorContactContent from './ScreenContent/ClientAdvisorContactContent';
import ClientPlanContent from './ScreenContent/ClientPlanContent';
import ClientProfileContent from './ScreenContent/ClientProfileContent';

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
        case 'profile':
          return <ClientProfileContent></ClientProfileContent>;
        case 'plan':
          return <ClientPlanContent></ClientPlanContent>;
        case 'actionitems':
          return <ClientActionItemsContent></ClientActionItemsContent>;
        case 'advisorcontact':
          return <ClientAdvisorContactContent></ClientAdvisorContactContent>;
        case 'clients':
          return <AdvisorClientsContent></AdvisorClientsContent>;
        case 'configs':
          return <AdvisorConfigsContent></AdvisorConfigsContent>;
        default:
          return <React.Fragment></React.Fragment>;
      }
    }

    function getMainNav(props) {
      switch (props.user) {
        case 'advisor':
          return <MainNavComponent advisor></MainNavComponent>;
        case 'client':
          return <MainNavComponent client></MainNavComponent>;
        default:
          return <React.Fragment></React.Fragment>;
      }
    }

    function getLeftNav(props) {
      switch (props.page) {
        case 'profile':
          return <LeftNavComponent profile></LeftNavComponent>;
        case 'clients':
          return <LeftNavComponent hidden></LeftNavComponent>;
        case 'advisorcontact':
          return <LeftNavComponent hidden></LeftNavComponent>;
        default:
          return <LeftNavComponent></LeftNavComponent>;
      }
    }

    function getMainHeader(props) {
      switch (props.page) {
        case 'profile':
          return (
            <MainHeaderComponent
              header='Your Profile'
              leftside='header'
              rightside='nav'
            ></MainHeaderComponent>
          );
        case 'plan':
          return (
            <MainHeaderComponent
              header='Your Plan'
              leftside='header'
            ></MainHeaderComponent>
          );
        case 'actionitems':
          return (
            <MainHeaderComponent
              header='Your Action Items'
              leftside='header'
            ></MainHeaderComponent>
          );
        case 'advisorcontact':
          return (
            <MainHeaderComponent
              header='Your Advisor'
              leftside='header'
            ></MainHeaderComponent>
          );
        case 'clients':
          return (
            <MainHeaderComponent
              header='Your Clients'
              leftside='header'
            ></MainHeaderComponent>
          );
        case 'configs':
          return (
            <MainHeaderComponent
              header='Configure Factors'
              leftside='header'
            ></MainHeaderComponent>
          );
        default:
          return <MainHeaderComponent></MainHeaderComponent>;
      }
    }

    return Style.it(
      `${styles}`,
      <div>
        <div className='nav-content-container'>
          {getMainNav(this.props)}
          <div className='right-content'>
            {getMainHeader(this.props)}
            <div className='leftnav-card'>
              {getLeftNav(this.props)}
              <CardComponent>{getScreenContent(this.props)}</CardComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenTemplateComponent;
