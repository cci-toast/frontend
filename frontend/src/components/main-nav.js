import React from "react";
import { Link } from "react-router-dom";
import Style from "style-it";

import ToastLogo from "../toast-logo.png";
import ToastIcon from "./toast/toast-icon";

class MainNav extends React.Component {
  getLink(link, linkName, iconName) {
    return (
      <Link to={`/${link}`} className="icon-caption">
        <ToastIcon
          name={iconName}
          width={35}
          height={45}
          stroke="var(--toast-white)"
          strokeWidth={1}
        />
        <span className="caption">{linkName}</span>
      </Link>
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
      background-color: var(--toast-purple-transparent);
      mix-blend-mode: screen;
    }
`;

    return Style.it(
      `${styles}`,
      <div className="nav">
        <div className="main-links">
          <Link to="/">
            <img src={ToastLogo} rel="icon" alt="" className="logo" />
          </Link>

          {this.getLinks()}
        </div>

        {this.getLink("", "Log Out", "power")}
      </div>
    );
  }
}

export default MainNav;
