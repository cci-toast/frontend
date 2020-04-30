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
       justify-content: space-between;
       align-items: center;
       height: 10vh;
       width: calc(100vw - 13rem - 8rem);
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="wrapper">
        {this.getLeftSide()}
        {this.getRightSide()}
      </div>
    );
  }
}
export default MainHeader;
