import React from "react";
import Style from "style-it";

import { Link } from "react-router-dom";

import ToastButton from "./toast/toast-button";

class ClientNav extends React.Component {
  getButton(label, iconName, href) {
    return (
      <Link to={`/${href}`} className="link">
        <ToastButton
          tertiary
          type="button"
          label={label}
          iconName={iconName}
          iconWidth={25}
          iconHeight={25}
          iconStroke="var(--toast-neutral-1)"
          iconStrokeWidth={2}
        />
      </Link>
    );
  }

  render() {
    const styles = `
    .wrapper {
       width: 30rem;
    }

    .link:focus {
      box-shadow: 0 0 5px var(--toast-blue-2);
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="wrapper">
        {this.getButton("profile", "user", "profile")}
        {this.getButton("plan", "barchart", "plan")}
        {this.getButton("action items", "checkcircle", "actionitems")}
      </div>
    );
  }
}
export default ClientNav;
