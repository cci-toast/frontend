import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Logo from "./logo.png"
import "./index.css";

import Login from './routes/Login';

//Client Portal Screens
import ClientForm from './routes/ClientForm';
import ClientPlan from './routes/ClientPlan';
import ClientAdvisorContact from './routes/ClientAdvisorContact';
import ClientActionItems from './routes/ClientActionItems';

import { faUser, faChartBar, faCheckCircle, faAddressCard, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Center from 'react-center';

const LoginContainer = () => (
  <div className="App-header" style={{ backgroundColor: 'white' }}>
    <div className="App-intro">
      <div>
        <Route path="/" component={Login} />
      </div>
    </div>
  </div>
)

const ClientContainer = () => (

  <div className="App-header" style={{ backgroundColor: '#CCCCCC' }}>
    <div className="App-intro">
      <div>
        <Router>
          <Route render={({ location, history }) => (
            <div className="container">
              <SideNav
                onSelect={(selected) => {
                  const to = '/' + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }

                }} >
                <Center>
                  <img src={Logo} rel="icon" alt="" style={{ width: '50px', paddingTop: '10px', paddingBottom: '5px' }} />
                </Center>
                <SideNav.Nav>
                  <NavItem eventKey="clientform" >
                    <NavIcon classnastyle={{ flexDirection: 'column' }} >
                      <FontAwesomeIcon icon={faUser} />
                      <span style={{ fontSize: '10px', position: 'absolute', top: '15px', left: '17px' }}>Profile</span>
                    </NavIcon>

                  </NavItem>

                  <NavItem eventKey="clientplan" >
                    <NavIcon>
                      <FontAwesomeIcon icon={faChartBar} />
                      <span style={{ fontSize: '10px', position: 'absolute', top: '15px', left: '22px' }}>Plan</span>
                    </NavIcon>
                  </NavItem>


                  <NavItem eventKey="clientactionitems">
                    <NavIcon>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span style={{ fontSize: '10px', position: 'absolute', top: '15px', left: '4px' }}>Action Items</span>
                    </NavIcon>
                  </NavItem>

                  <NavItem eventKey="clientadvisorcontact">
                    <NavIcon>
                      <FontAwesomeIcon icon={faAddressCard} />
                      <span style={{ fontSize: '10px', position: 'absolute', top: '15px', left: '4px' }}>Advisor Contact</span>
                    </NavIcon>
                  </NavItem>

                  <div style={{ paddingBottom: '40vh' }}></div>

                  {/*TODO*/}
                  <NavItem eventKey="logout">
                    <NavIcon>
                      <FontAwesomeIcon icon={faPowerOff} />
                      <span style={{ fontSize: '10px', position: 'absolute', top: '15px', left: '17px' }}>Logout</span>
                    </NavIcon>
                  </NavItem>

                </SideNav.Nav>
              </SideNav>
              <Route exact path="/clientform" component={ClientForm} />
              <Route exact path="/clientplan" component={ClientPlan} />
              <Route exact path="/clientadvisorcontact" component={ClientAdvisorContact} />
              <Route exact path="/clientactionitems" component={ClientActionItems} />

            </div>

          )}
          />
        </Router>
      </div>
    </div>
  </div>
)


class App extends Component {


  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/clientform" component={ClientContainer} />
        <Route exact path="/clientplan" component={ClientContainer} />
        <Route exact path="/clientadvisorcontact" component={ClientContainer} />
        <Route exact path="/clientactionitems" component={ClientContainer} />
        <Route />

      </Switch>




    );
  }
}

export default App;

