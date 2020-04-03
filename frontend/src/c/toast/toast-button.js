import React from "react";
import Style from "style-it";

import ToastIcon from "./toast-icon";

class ToastButton extends React.Component {
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

    function getIcon(props) {
      if (props.iconName) {
        return (
          <div className="icon">
            <ToastIcon
              name={props.iconName}
              width={props.iconWidth}
              height={props.iconHeight}
              stroke={props.iconStroke}
              strokeWidth={props.iconStrokeWidth}
              fill={props.iconFill}
            ></ToastIcon>
          </div>
        );
      }
    }

    function getButton(props) {
      let classes = ["button"];

      if (props.primary) {
        classes.push("primary");
      } else if (props.secondary) {
        classes.push("secondary");
      } else if (props.tertiary) {
        classes.push("tertiary");
      } else if (props.quaternary) {
        classes.push("quaternary");
      }

      if (props.round) {
        classes.push("round");
      }

      if (props.hidden) {
        classes.push("hidden");
      }

      if (props.iconName) {
        classes.push("icon-button");
      }

      return Style.it(
        `${styles}`,
        <button
          className={classes.join(" ")}
          type="Button"
          onClick={props.handleClick}
        >
          {getIcon(props)}
          {props.label}
        </button>
      );
    }

    return getButton(this.props);
  }
}

export default ToastButton;
