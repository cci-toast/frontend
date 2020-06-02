import React from "react";
import Style from "style-it";

import ClientNav from "./client-nav";
import ToastSearch from "./toast/toast-search";

class MainHeader extends React.Component {
  getLeftSide() {
    switch (this.props.leftside) {
      case "header":
        return <h2>{this.props.header}</h2>;
      default:
        return <React.Fragment />;
    }
  }

  getRightSide() {
    switch (this.props.rightside) {
      case "nav":
        return <ClientNav />;
      case "search":
        return <ToastSearch />;
      default:
        return <React.Fragment />;
    }
  }

  render() {
    const styles = `
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 10vh;
      width: calc(100vw - 13rem - 8rem);
    }

    .wrapper-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .autosave {
      font-style: italic;
      color: var(--toast-neutral-1);
      align-self: flex-end;
      margin: 0 5rem 0.5rem 0;
      font-size: 0.875rem;
    }

    .autosave::before {
    content: "*";
    color: var(--toast-red);
    margin-left: 0.125rem;
    }
    
    .hide-autosave {
      visibility: hidden;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="wrapper">
        <div className="wrapper-top">
          {this.getLeftSide()}
          {this.getRightSide()}
        </div>

        <div
          className={this.props.autoSaveHeader ? "autosave" : "hide-autosave"}
        >
          = Required field. Your progress is autosaved.
        </div>
      </div>
    );
  }
}
export default MainHeader;
