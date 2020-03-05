import React, { Component } from "react";
import Style from "style-it";

class Card extends Component {
  render() {
    const styles = `
    .card {
      margin-left: 4.375rem;
      background-color: var(--toast-white);
      padding: 3rem 2rem 3.8rem;
      border-radius: 1.25rem 1.25rem 0rem 0rem;
      width: 56.25rem;
      min-height: 39.3rem;
      margin-top: 3rem;
    }
      `;

    return Style.it(
      `${styles}`,
      <main className="card">{this.props.children}</main>
    );
  }
}

export default Card;
