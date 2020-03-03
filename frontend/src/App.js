import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Logo from "./logo.png"
import "./index.css";

import Signin from './routes/Signin';

//Client Portal Screens
import ClientProfile from './routes/ClientScreens/ClientProfile';
import ClientPlan from './routes/ClientScreens/ClientPlan';
import ClientAdvisorContact from './routes/ClientScreens/ClientAdvisorContact';
import ClientActionItems from './routes/ClientScreens/ClientActionItems';

//Advisor Portal Screens
import Clients from './routes/AdvisorScreens/Clients';
import Configurations from './routes/AdvisorScreens/Configurations';


import { faUser, faChartBar, faCheckCircle, faAddressCard, faPowerOff, faUsers, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Center from 'react-center';

import Card from './routes/Components/Card'


const logo = {
  width: '3.125rem', 
  paddingTop: '0.625rem', 
  paddingBottom: '0.3125rem'
}

const signoutClientSpacer={
  paddingBottom: '50vh' 
}

const signoutAdvisorSpacer={
  paddingBottom: '64.8vh' 
}
const clientAdvisorHeader={
  backgroundColor: '#CCCCCC',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const signinHeader={
  backgroundColor: 'white',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const profileNavText={
fontSize: '0.625rem', 
position: 'absolute', 
top: '0.9375rem', 
left: '1.0625rem'
}

const clientsNavText={
  fontSize: '0.625rem', 
  position: 'absolute', 
  top: '0.9375rem', 
  left: '1.0625rem'
  }

  const configurationNavText={
    fontSize: '0.625rem', 
    position: 'absolute', 
    top: '0.9375rem', 
    left: '0.2rem'
    }
  
const planNavText={
  fontSize: '0.625rem', 
  position: 'absolute', 
  top: '0.9375rem', 
  left: '1.375rem'
}


const actionItemsNavText={
  fontSize: '0.625rem', 
  position: 'absolute', 
  top: '0.9375rem', 
  left: '0.25rem'
}

const advisorContactNavText={
  fontSize: '0.625rem', 
  position: 'absolute', 
  top: '0.9375rem', 
  left: '0.25rem'
}

const signoutNavText={
  fontSize: '0.625rem', 
  position: 'absolute', 
  top: '0.9375rem', 
  left: '0.9rem'
}

const SigninContainer = () => (
  <div style={signinHeader}>
      <div>
        <Route path="/" component={Signin} />
      </div>
  </div>
)

const ClientContainer = () => (
  <div style={clientAdvisorHeader}>
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
                  <NavItem eventKey="clientprofile" active={location.pathname === '/clientprofile'} >
                    <NavIcon>
                      <FontAwesomeIcon icon={faUser} />
                      <span style={profileNavText}>Profile</span>
                    </NavIcon>

                  </NavItem>

                  <NavItem eventKey="clientplan" active={location.pathname === '/clientplan'}>
                    <NavIcon>
                      <FontAwesomeIcon icon={faChartBar} />
                      <span style={planNavText}>Plan</span>
                    </NavIcon>
                  </NavItem>


                  <NavItem eventKey="clientactionitems" active={location.pathname === '/clientactionitems'} >
                    <NavIcon>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span style={actionItemsNavText}>Action Items</span>
                    </NavIcon>
                  </NavItem>

                  <NavItem eventKey="clientadvisorcontact" active={location.pathname === '/clientadvisorcontact'}>
                    <NavIcon>
                      <FontAwesomeIcon icon={faAddressCard} />
                      <span style={advisorContactNavText}>Advisor Contact</span>
                    </NavIcon>
                  </NavItem>

                  <div style={signoutClientSpacer}></div>

  
                  <NavItem eventKey="/" onClick={() => window.location.reload(history.push("/"))} >
                    <NavIcon>
                      <FontAwesomeIcon icon={faPowerOff} />
                      <span style={signoutNavText}>Sign Out</span>
                      </NavIcon>
                      </NavItem>
                </SideNav.Nav>
              </SideNav>
         
        

    
              <Card>
                <Route exact path="/clientprofile" component={ClientProfile} />
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
)

const AdvisorContainer = () => (
  <div style={clientAdvisorHeader}>
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
                  <NavItem eventKey="clients" active={location.pathname === '/clients'} >
                    <NavIcon>
                      <FontAwesomeIcon icon={faUsers} />
                      <span style={clientsNavText}>Clients</span>
                    </NavIcon>
                  </NavItem>
                  <NavItem eventKey="configurations" active={location.pathname === '/configurations'} >
                    <NavIcon>
                      <FontAwesomeIcon icon={faSlidersH} />
                      <span style={configurationNavText}>Configurations</span>
                    </NavIcon>
                  </NavItem>

                
                  <div style={signoutAdvisorSpacer}></div>

  
                  <NavItem eventKey="/" onClick={() => window.location.reload(history.push("/"))} >
                    <NavIcon>
                      <FontAwesomeIcon icon={faPowerOff} />
                      <span style={signoutNavText}>Sign Out</span>
                      </NavIcon>
                      </NavItem>
                </SideNav.Nav>
              </SideNav>
         
      
              <Card>
              <Route exact path="/configurations" component={Configurations} />
              <Route exact path="/clients" component={Clients} />
              </Card>
            </div>

          )}
          />
        </Router>
      </div>
  </div>
)


class App extends Component {

  render() {
    return (
      <div>
       
      <Switch>
        <Route exact path="/" component={SigninContainer} />
        <Route exact path="/clientprofile" component={ClientContainer} />
        <Route exact path="/clientplan" component={ClientContainer} />
        <Route exact path="/clientadvisorcontact" component={ClientContainer} />
        <Route exact path="/clientactionitems" component={ClientContainer} />
        <Route />

      </Switch>
        

      <Switch>
      <Route exact path="/" component={SigninContainer} />
        <Route exact path="/configurations" component={AdvisorContainer} />
        <Route exact path="/clients" component={AdvisorContainer} />
        <Route />
      </Switch>



</div>
    );
  }
}

export default App;

