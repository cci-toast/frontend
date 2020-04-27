import React from "react";
import Style from "style-it";

import ToastIcon from "./toast/toast-icon";
import ToastMenu from "./toast/toast-menu";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setProfileValue, fetchClientProfile } from "../redux/actions";

class ClientListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.menuLabels = ["Profile", "Plan", "Action Items"];
    this.menuIconNames = ["user", "barchart", "checkcircle"];
    this.menuLinks = ["profile", "plan", "actionitems"];

    this.setClient = this.setClient.bind(this);
  }

  setClient(event) {
    let name = event.target.innerHTML.split(" ");
    let firstName = name[0];
    let middleName = name[1];
    let lastName = name[2];
    this.props.setProfileValue("id", this.props.id);
    // these should be set already
    // this.props.setProfileValue("firstName", firstName);
    // this.props.setProfileValue("middleName", middleName);
    // this.props.setProfileValue("lastName", lastName);

    this.props.fetchClientProfile();
  }

  render() {
    const styles = `
    .entry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1.75rem;
        border-radius: 0.625rem;
        margin-bottom: 0.5rem;
        height: 1.75rem;
    }
    
    .entry:nth-child(odd) {
        background-color: var(--toast-neutral-6);
    }
    
    .entry:nth-child(even) {
        background-color: var(--toast-neutral-5);
    }

    .link {
      font-weight: bold;
    }

    .link:hover {
      color: var(--toast-blue-2);
    }

    .ellipsis {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 0.25rem;
      cursor: pointer;
    }

    .entry:nth-child(odd) .ellipsis:hover {
      background: var(--toast-neutral-5);
    }

    .entry:nth-child(even) .ellipsis:hover {
      background: var(--toast-neutral-4);
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="entry">
<<<<<<< HEAD
        <a
          href="/profile"
          className="link"
          onClick={this.setClient}
          title="Click to view the client's profile"
        >
=======
        <Link to="/profile" className="link" onClick={this.setClient}>
>>>>>>> [#161] - write to client profile api
          {this.props.firstName} {this.props.middleName} {this.props.lastName}
        </Link>

        <ToastMenu
          labels={this.menuLabels}
          iconNames={this.menuIconNames}
          links={this.menuLinks}
          firstName={this.props.firstName}
          middleName={this.props.middleName}
          lastName={this.props.lastName}
        >
          <div className="ellipsis">
            <ToastIcon
              name="ellipsis"
              width={24}
              height={24}
              fill="var(--toast-neutral-1)"
              title="Click to view your client's profile, plan, action items"
            />
          </div>
        </ToastMenu>
      </div>
    );
  }
}

export default connect(null, {
  setProfileValue,
  fetchClientProfile,
})(ClientListEntry);
