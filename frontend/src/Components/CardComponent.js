import React, { Component } from "react";
import Style from "style-it";

class CardComponent extends Component {
  render() {
    const styles = `
    .card {
    background-color: var(--toast-white);
    padding: 2.5rem 2rem 3.8rem;
    border-radius: 3rem 3rem 0rem 0rem;
    width: 60rem;
    box-shadow: 0px 10px 20px 5px var(--toast-neutral-3-transparent);
    }
      `;

    return Style.it(
      `${styles}`,
      <main className="card">{this.props.children}</main>
    );
  }
}

export default CardComponent;
