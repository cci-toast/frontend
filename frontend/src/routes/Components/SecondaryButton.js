import React, { Component } from "react";
import Style from "style-it";

class SecondaryButton extends Component {
  render() {
    const styles = `
    .secondary {
      background-color: var(--toast-blue-1);
      float: right;
    }

    .round {
      border-radius: 2rem;
    }
    `;

    if (this.props.round) {
      return Style.it(
        `${styles}`,
        <button
          className="secondary round"
          type={this.props.type}
          onClick={this.props.handleClick}
        >
          {this.props.icon}
          {this.props.label}
        </button>
      );
    } else {
      return Style.it(
        `${styles}`,
        <button
          className="secondary"
          type={this.props.type}
          onClick={this.props.handleClick}
        >
          {this.props.icon}
          {this.props.label}
        </button>
      );
    }
  }
}
export default SecondaryButton;
