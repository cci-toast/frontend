import React from "react";
import Style from "style-it";

import ToastIcon from "./toast-icon";

class ToastButton extends React.Component {
  getIcon() {
    if (this.props.iconName) {
      return (
        <div className="icon">
          <ToastIcon
            name={this.props.iconName}
            width={this.props.iconWidth}
            height={this.props.iconHeight}
            stroke={this.props.iconStroke}
            strokeWidth={this.props.iconStrokeWidth}
            fill={this.props.iconFill}
          ></ToastIcon>
        </div>
      );
    }
  }

  getClasses() {
    let classes = ["button"];

    if (this.props.primary) {
      classes.push("primary");
    } else if (this.props.secondary) {
      classes.push("secondary");
    } else if (this.props.tertiary) {
      classes.push("tertiary");
    } else if (this.props.quaternary) {
      classes.push("quaternary");
    }

    if (this.props.round) {
      classes.push("round");
    }

    if (this.props.hidden) {
      classes.push("hidden");
    }

    if (this.props.iconName) {
      classes.push("icon-button");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .primary {
      background: var(--toast-gradient-1);
      float: right;
      padding: 1rem 2.5rem;
      text-transform: uppercase;
      font-size: 1.25rem;
    }

    .primary:hover {
      box-shadow: 0px 5px 12px 1px var(--toast-blue-2-transparent);
    }

    .secondary {
      background-color: var(--toast-blue-1);
      float: right;
      text-transform: uppercase;
      padding: 0.75rem 0;
    }

    .secondary:hover {
      filter: brightness(0.95);
    }

    .tertiary {
      background-color: var(--toast-white);
      border: 1px var(--toast-neutral-4) solid;
      color: var(--toast-neutral-2);
      padding: 0.75rem 1rem;
      min-width: 12rem;
    }

    .tertiary:hover {
      box-shadow: 0px 1px 8px 0px var(--toast-neutral-3-transparent);
    }

    .quaternary {
      color: var(--toast-black);
      float: right;
      padding: 0.75rem 0;
      text-transform: uppercase;
    }

    .quaternary:hover {
      background-color: var(--toast-neutral-3-transparent);
    }

    .round {
      border-radius: 2rem;
    }

    .hidden {
      display: none;
    }
    
    .icon {
      margin-right: 0.5rem;
    }
    
    .icon-button {
      text-transform: uppercase;
      white-space: nowrap;
      min-width: 5rem;
    }
    `;

    return Style.it(
      `${styles}`,
      <button
        className={this.getClasses()}
        type="Button"
        onClick={this.props.handleClick}
      >
        {this.getIcon()}
        {this.props.label}
      </button>
    );
  }
}

export default ToastButton;
