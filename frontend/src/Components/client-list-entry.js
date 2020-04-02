import React from "react";
import Style from "style-it";

class ClientListEntry extends React.Component {
  render() {
    const styles = `
    .entry {
        padding: 1rem;
        border-radius: 0.625rem;
        margin: 0.3rem;
    }
    
    .entry:nth-child(odd) {
        background-color: var(--toast-neutral-6);
    }
    
    .entry:nth-child(even) {
        background-color: var(--toast-neutral-5);
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="entry">
        <a href="/profile">{this.props.clientName}</a>
      </div>
    );
  }
}
export default ClientListEntry;
