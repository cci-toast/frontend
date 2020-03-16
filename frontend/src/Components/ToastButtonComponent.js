import React, { Component } from "react";
import Style from "style-it";

class ToastButton extends Component {
  render() {
    const styles = `
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
    }

    .secondary:hover {
      filter: brightness(0.95);
    }

    .tertiary {
      background-color: var(--toast-white);
      border: 1px var(--toast-neutral-4) solid;
      color: var(--toast-neutral-2);
      min-width: 12rem;
      padding: 0.5rem 1rem;
    }

    .tertiary:hover {
      box-shadow: 0px 1px 8px 0px var(--toast-neutral-3-transparent);
    }

    .quaternary {
      color: var(--toast-black);
      float: right;
      text-transform: uppercase;
    }

    .quaternary:hover {
      background-color: var(--toast-neutral-3-transparent);
    }

    .round {
      border-radius: 2rem;
    }
    `;

    function getButton(props) {
      let classes = [];

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

      return Style.it(
        `${styles}`,
        <button
          className={classes.join(" ")}
          type="Button"
          onClick={props.handleClick}
        >
          {props.label}
        </button>
      );
    }

    return getButton(this.props);
  }
}

export default ToastButton;
