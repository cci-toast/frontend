import React, { Component } from "react";
import Style from "style-it";

class Card extends Component {
  render() {
    const styles = `
    .card {
      margin-left: 4rem;
    background-color: var(--toast-white);
    padding: 3rem 2rem 3.8rem;
    border-radius: 3rem 3rem 0rem 0rem;
    width: 60rem;
    margin-top: 3rem;
    box-shadow: 0px 10px 20px 5px var(--toast-neutral-3-transparent);
    }
      `;

    return Style.it(
      `${styles}`,
      <main className="card">{this.props.children}</main>
    );
  }
}

export default Card;
