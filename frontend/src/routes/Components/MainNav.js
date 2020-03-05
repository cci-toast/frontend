import React, { Component } from "react";
import Logo from "../logo.png";

import { Link } from "react-router-dom";
import {
  faUser,
  faChartBar,
  faCheckCircle,
  faAddressCard,
  faPowerOff,
  faUsers,
  faSlidersH
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const logo = {
  width: "6rem",
  marginTop: "1rem",
  marginBottom: "2rem"
};

const nav = {
  background: "var(--toast-gradient-2)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "10rem",
  borderTopRightRadius: "3rem",
  borderBottomRightRadius: "3rem",
  padding: "1rem 0"
};

const mainLinks = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const icon = {
  color: "var(--toast-white)",
  width: "1.5rem",
  height: "1.5rem",
  marginBottom: "0.5rem"
};

// this only exists to switch to css class easier w 'style it'
// (to add a hover state later)
const iconCaption = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
};

const caption = {
  marginBottom: "1.5rem",
  color: "var(--toast-neutral-6)"
};

const ClientNav = () => (
  <div style={nav}>
    <div style={mainLinks}>
      <Link to="/">
        <img src={Logo} rel="icon" alt="" style={logo} />
      </Link>

      <Link to="/clientprofile">
        <div style={iconCaption}>
          <FontAwesomeIcon icon={faUser} style={icon} />
          <span style={caption}>Profile</span>
        </div>
      </Link>

      <Link to="/clientplan">
        <div style={iconCaption}>
          <FontAwesomeIcon icon={faChartBar} style={icon} />
          <span style={caption}>Plan</span>
        </div>
      </Link>

      <Link to="/clientactionitems">
        <div style={iconCaption}>
          <FontAwesomeIcon icon={faCheckCircle} style={icon} />
          <span style={caption}>Action Items</span>
        </div>
      </Link>

      <Link to="/clientadvisorcontact">
        <div style={iconCaption}>
          <FontAwesomeIcon icon={faAddressCard} style={icon} />
          <span style={caption}>Advisor</span>
        </div>
      </Link>
    </div>

    <Link to="/">
      <div style={iconCaption}>
        <FontAwesomeIcon icon={faPowerOff} style={icon} />
        <span style={caption}>Log Out</span>
      </div>
    </Link>
  </div>
);

const AdvisorNav = () => (
  <div style={nav}>
    <div style={mainLinks}>
      <Link to="/">
        <img src={Logo} rel="icon" alt="" style={logo} />
      </Link>

      <Link to="/clients">
        <div style={iconCaption}>
          <FontAwesomeIcon icon={faUsers} style={icon} />
          <span style={caption}>Clients</span>
        </div>
      </Link>

      <Link to="/configurations">
        <div style={iconCaption}>
          <FontAwesomeIcon icon={faSlidersH} style={icon} />
          <span style={caption}>Configuration</span>
        </div>
      </Link>
    </div>

    <Link to="/">
      <div style={iconCaption}>
        <FontAwesomeIcon icon={faPowerOff} style={icon} />
        <span style={caption}>Log Out</span>
      </div>
    </Link>
  </div>
);

class MainNav extends Component {
  render() {
    if (this.props.advisor) {
      return <AdvisorNav></AdvisorNav>;
    } else {
      return <ClientNav></ClientNav>;
    }
  }
}

export default MainNav;
