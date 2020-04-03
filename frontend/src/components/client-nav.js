import React from "react";
import Style from "style-it";

import ToastButton from "./toast/toast-button";

class ClientNav extends React.Component {
  render() {
    const styles = `
    .wrapper {
       display: flex;
       justify-self: flex-end;
    }
    `;

    function getButton(label, iconName, href) {
      return (
        <a href={`/${href}`}>
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
        </a>
      );
    }

    return Style.it(
      `${styles}`,
      <div className="wrapper">
        {getButton("profile", "user", "profile")}
        {getButton("plan", "barchart", "plan")}
        {getButton("action items", "checkcircle", "actionitems")}
      </div>
    );
  }
}
export default ClientNav;
