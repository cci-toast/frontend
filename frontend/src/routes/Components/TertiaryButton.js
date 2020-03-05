import React, { Component } from "react";
import Style from "style-it";

class TertiaryButton extends Component {
  render() {
    const styles = `
    .tertiary {
      background-color: var(--toast-white);
      border: 1px var(--toast-neutral-4) solid;
      color: var(--toast-neutral-2);
      min-width: 12rem;
      padding: 0.5rem 1rem;
    }

    .round {
      border-radius: 2rem;
    }
    `;

    if (this.props.round) {
      return Style.it(
        `${styles}`,
        <button
          className="tertiary round"
          type="button"
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </button>
      );
    } else {
      return Style.it(
        `${styles}`,
        <button
          className="tertiary"
          type="button"
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </button>
      );
    }
  }
}

export default TertiaryButton;
