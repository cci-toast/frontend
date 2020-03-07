import React, { Component } from "react";
import Logo from "../logo.png";

import Style from "style-it";

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

class MainNav extends Component {
  render() {
    const styles = `
    .nav {
      background: var(--toast-gradient-2);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 10rem;
      border-top-right-radius: 3rem;
      border-bottom-right-radius: 3rem;
    }
    
    .main-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    
    .logo {
      width: 6rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    .icon {
      color: var(--toast-white);
      width: 1.5rem;
      height: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    .caption {
      color: var(--toast-neutral-6);
    }
    
    .icon-caption {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      padding: 0.4rem 0 0.4rem 0;
    }

    .icon-caption:last-child {
      margin-bottom: 2rem;
    }
    
    .icon-caption:hover {
      background-color: var(--toast-purple-transparent);
      mix-blend-mode: screen;
    }
`;

    function getMainNav(props) {
      if (props.advisor) {
        return (
          <React.Fragment>
            <div className="main-links">
              <Link to="/">
                <img src={Logo} rel="icon" alt="" className="logo" />
              </Link>

              <Link to="/clients" className="icon-caption">
                <FontAwesomeIcon icon={faUsers} className="icon" />
                <span className="caption">Clients</span>
              </Link>

              <Link to="/configurations" className="icon-caption">
                <FontAwesomeIcon icon={faSlidersH} className="icon" />
                <span className="caption">Configuration</span>
              </Link>
            </div>

            <Link to="/" className="icon-caption">
              <FontAwesomeIcon icon={faPowerOff} className="icon" />
              <span className="caption">Log Out</span>
            </Link>
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <div className="main-links">
              <Link to="/">
                <img src={Logo} rel="icon" alt="" className="logo" />
              </Link>

              <Link to="/clientprofile" className="icon-caption">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <span className="caption">Profile</span>
              </Link>

              <Link to="/clientplan" className="icon-caption">
                <FontAwesomeIcon icon={faChartBar} className="icon" />
                <span className="caption">Plan</span>
              </Link>

              <Link to="/clientactionitems" className="icon-caption">
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                <span className="caption">Action Items</span>
              </Link>

              <Link to="/clientadvisorcontact" className="icon-caption">
                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                <span className="caption">Advisor</span>
              </Link>
            </div>

            <Link to="/" className="icon-caption">
              <FontAwesomeIcon icon={faPowerOff} className="icon" />
              <span className="caption">Log Out</span>
            </Link>
          </React.Fragment>
        );
      }
    }

    return Style.it(
      `${styles}`,
      <div className="nav">{getMainNav(this.props)}</div>
    );
  }
}

export default MainNav;
