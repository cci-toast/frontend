import React from "react";
import Style from "style-it";

class ToastCard extends React.Component {
  render() {
    const styles = `
    .card {
      background-color: var(--toast-white);
      padding: 3.5rem 3rem 3.8rem;
      border-radius: 3rem 3rem 0rem 0rem;
      width: 53rem;
      box-shadow: 0px 5px 7px 3px var(--toast-neutral-3-transparent);
    }
      `;

    return Style.it(
      `${styles}`,
      <div className="card">{this.props.children}</div>
    );
  }
}

export default ToastCard;
