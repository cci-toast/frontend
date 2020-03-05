import React, { Component } from "react";
import Style from "style-it";

class PrimaryButton extends Component {
  render() {
    const styles = `
    .primary {
      background: var(--toast-gradient-1);
      float: right;
      padding: 0.84rem 2.14rem;
    }

    .round {
      border-radius: 2rem;
    }
    `;

    if (this.props.round) {
      return Style.it(
        `${styles}`,
        <button className="primary round" type="submit">
          {this.props.label}
        </button>
      );
    } else {
      return Style.it(
        `${styles}`,
        <button className="primary" type="submit">
          {this.props.label}
        </button>
      );
    }
  }
}

export default PrimaryButton;
