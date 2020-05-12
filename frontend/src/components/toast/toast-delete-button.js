import React from "react";
import Style from "style-it";

import ToastIcon from "./toast-icon";

class ToastDeleteButton extends React.Component {
  getIconClasses() {
    let classes = ["icon "];

    if (this.props.readOnly) {
      classes.push("hide-icon");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    .icon {
        cursor: pointer;
        padding-bottom: 0.5rem;
        float: right;
    }
    
    .hide-icon { 
      display: none;
    }
    `;

    return Style.it(
      `${styles}`,

      <div className={this.getIconClasses()} onClick={this.props.handleClick}>
        <ToastIcon
          name="trash"
          width={24}
          height={24}
          stroke="var(--toast-red)"
          strokeWidth={2}
          title="Delete"
        />
      </div>
    );
  }
}
export default ToastDeleteButton;
