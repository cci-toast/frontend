import React, { Component } from "react";
import {
  Route,
  Switch, Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

import Logo from "./logo.png"
import "./index.css";

import Login from './routes/Login';

//Client Portal Screens
import ClientForm from './routes/ClientScreens/ClientForm';
import ClientPlan from './routes/ClientScreens/ClientPlan';
import ClientAdvisorContact from './routes/ClientScreens/ClientAdvisorContact';
import ClientActionItems from './routes/ClientScreens/ClientActionItems';

import { faUser, faChartBar, faCheckCircle, faAddressCard, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Center from 'react-center';

import Card from './routes/Components/Card'

const logo = {
  width: '50px', 
  paddingTop: '10px', 
  paddingBottom: '5px'
}

const paddingBottom={
  paddingBottom: '50vh' 
}


const LoginContainer = () => (
  <div className="App-header loginBackground">
    <div className="App-intro">
      <div>
        <Route path="/" component={Login} />
      </div>
    </div>
  </div>
)


const ClientContainer = () => (
  <div className="App-header clientadvisorBackground">
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
                  <img src={Logo} rel="icon" alt="" style={logo} />
                </Center>
                <SideNav.Nav>
                  <NavItem eventKey="clientform" active={location.pathname === '/clientform'} >
                    <NavIcon>
                      <FontAwesomeIcon icon={faUser} />
                      <span style={{ fontSize: '10px', position: 'absolute', top: '15px', left: '17px' }}>Profile</span>
                    </NavIcon>

                  </NavItem>

                  <NavItem eventKey="clientplan" active={location.pathname === '/clientplan'}>
                    <NavIcon>
                      <FontAwesomeIcon icon={faChartBar} />
                      <span style={{ fontSize: '10px', position: 'absolute', top: '15px', left: '22px' }}>Plan</span>
                    </NavIcon>
                  </NavItem>


                  <NavItem eventKey="clientactionitems" active={location.pathname === '/clientactionitems'} >
                    <NavIcon>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span style={{ fontSize: '10px', position: 'absolute', top: '15px', left: '4px' }}>Action Items</span>
                    </NavIcon>
                  </NavItem>

                  <NavItem eventKey="clientadvisorcontact" active={location.pathname === '/clientadvisorcontact'}>
                    <NavIcon>
                      <FontAwesomeIcon icon={faAddressCard} />
                      <span style={{ fontSize: '10px', position: 'absolute', top: '15px', left: '4px' }}>Advisor Contact</span>
                    </NavIcon>
                  </NavItem>

                  <div style={paddingBottom}></div>

  
                  <NavItem eventKey="/" onClick={() => window.location.reload(history.push("/"))} >
                    <NavIcon>
                      <FontAwesomeIcon icon={faPowerOff} />
                      <span style={{ fontSize: '10px', position: 'absolute', top: '15px', left: '17px' }}>Logout</span>
                      </NavIcon>
                      </NavItem>
                </SideNav.Nav>
              </SideNav>
         
      
              <Card>
                <Route exact path="/clientform" component={ClientForm} />
                <Route exact path="/clientplan" component={ClientPlan} />
                <Route exact path="/clientadvisorcontact" component={ClientAdvisorContact} />
                <Route exact path="/clientactionitems" component={ClientActionItems} />
              </Card>
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
      <div>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/clientform" component={ClientContainer} />
        <Route exact path="/clientplan" component={ClientContainer} />
        <Route exact path="/clientadvisorcontact" component={ClientContainer} />
        <Route exact path="/clientactionitems" component={ClientContainer} />
        <Route />

      </Switch>



</div>
    );
  }
}

export default App;

