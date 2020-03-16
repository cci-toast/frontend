import React, { Component } from "react";
import Style from "style-it";

class ClientboxComponent extends Component {
  render() {
    const styles = `
    .client-box {
        padding: 1rem;
        border-radius: 0.625rem;
        margin: 0.3rem;
    }
    
    .client-box:nth-child(odd) {
        background-color: var(--toast-neutral-6);
    }
    
    .client-box:nth-child(even) {
        background-color: var(--toast-neutral-5);
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="client-box">
        <a href="/clientprofile">{this.props.clientName}</a>
      </div>
    );
  }
}
export default ClientboxComponent;
