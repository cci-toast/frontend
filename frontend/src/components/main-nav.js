import React from "react";
import { NavLink } from "react-router-dom";
import Style from "style-it";

import ToastLogo from "../toast-logo.png";
import ToastIcon from "./toast/toast-icon";

import { connect } from "react-redux";

import { isLoggedInAdvisor, isLoggedInClient } from "../redux/selectors";
import { logoutClient, logoutAdvisor, resetLogin } from "../redux/actions";
class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.logOut = this.logOut.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    if (this.props.isLoggedInClient) {
      document.location.href = "/profile";
    } else if (this.props.isLoggedInAdvisor) {
      document.location.href = "/clients";
    }
  }

  logOut() {
    this.props.logoutClient();
    this.props.logoutAdvisor();
    this.props.resetLogin();
  }

  getLogOut() {
    return (
      <NavLink to="/" className="icon-caption" onClick={this.logOut}>
        <ToastIcon
          name="power"
          width={35}
          height={45}
          stroke="var(--toast-white)"
          strokeWidth={1}
        />
        <span className="caption">Log Out</span>
      </NavLink>
    );
  }

  getLink(link, linkName, iconName) {
    return (
      <NavLink
        to={`/${link}`}
        className="icon-caption"
        activeClassName="icon-caption-active"
        exact={true}
      >
        <ToastIcon
          name={iconName}
          width={35}
          height={45}
          stroke="var(--toast-white)"
          strokeWidth={1}
        />
        <span className="caption">{linkName}</span>
      </NavLink>
    );
  }

  getLinks() {
    switch (this.props.user) {
      case "advisor":
        return (
          <React.Fragment>
            {this.getLink("clients", "Clients", "users")}
            {this.getLink("configuration", "Configuration", "sliders")}
          </React.Fragment>
        );
      case "client":
        return (
          <React.Fragment>
            {this.getLink("profile", "Profile", "user")}
            {this.getLink("plan", "Plan", "barchart")}
            {this.getLink("actionitems", "Action Items", "checkcircle")}
            {this.getLink("advisorcontact", "Advisor", "addresscard")}
          </React.Fragment>
        );
      default:
        return <React.Fragment />;
    }
  }

  render() {
    const styles = `
    .nav {
      background: var(--toast-gradient-2);
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-width: 8rem;
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
      cursor: pointer;
    }
    
    .caption {
      color: var(--toast-neutral-6);
      letter-spacing: 0.25px;
    }
    
    .icon-caption {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      padding: .75rem 0 1rem 0;
    }

    .icon-caption:last-child {
      margin-bottom: 2rem;
    }
    
    .icon-caption:hover {
      background-color: var(--toast-purple-2-transparent);
      mix-blend-mode: screen;
    }
    .icon-caption-active {
      background-color: var(--toast-purple-2);
      mix-blend-mode: luminosity;
    }

`;

    return Style.it(
      `${styles}`,
      <div className="nav">
        <div className="main-links">
          <img
            src={ToastLogo}
            rel="icon"
            alt=""
            className="logo"
            onClick={this.goHome}
          />

          {this.getLinks()}
        </div>

        {this.getLogOut()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedInAdvisor: isLoggedInAdvisor(state),
  isLoggedInClient: isLoggedInClient(state),
});

export default connect(mapStateToProps, {
  logoutClient,
  logoutAdvisor,
  resetLogin,
})(MainNav);
