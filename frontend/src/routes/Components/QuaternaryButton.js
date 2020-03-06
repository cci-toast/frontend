import React, { Component } from "react";
import Style from "style-it";

class QuaternaryButton extends Component {
  render() {
    const styles = `
    .quaternary {
      color: var(--toast-black);
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
          className="quaternary round"
          type={this.props.type}
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </button>
      );
    } else {
      return Style.it(
        `${styles}`,
        <button
          className="quaternary"
          type={this.props.type}
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </button>
      );
    }
  }
}

export default QuaternaryButton;
