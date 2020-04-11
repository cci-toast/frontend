import React from "react";
import Style from "style-it";

import ToastIcon from "./toast/toast-icon";
import ToastMenu from "./toast/toast-menu";

class ClientListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.menuLabels = ["Profile", "Plan", "Action Items"];
    this.menuIconNames = ["user", "barchart", "checkcircle"];
    this.menuLinks = ["profile", "plan", "actionitems"];
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
      color: var(--toast-blue-1);
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
        <a href="/profile" className="link">
          {this.props.firstName} {this.props.middleName} {this.props.lastName}
        </a>

        <ToastMenu
          labels={this.menuLabels}
          iconNames={this.menuIconNames}
          links={this.menuLinks}
        >
          <div className="ellipsis">
            <ToastIcon
              name="ellipsis"
              width={24}
              height={24}
              fill="var(--toast-neutral-1)"
            />
          </div>
        </ToastMenu>
      </div>
    );
  }
}
export default ClientListEntry;
