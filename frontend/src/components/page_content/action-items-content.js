import React from "react";
import Style from "style-it";

import ToastCheckbox from "../toast/toast-checkbox";

import { connect } from "react-redux";

class ActionItemsContent extends React.Component {
  render() {
    const styles = `
    .action-items {
      display: flex;
      flex-direction: column;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="action-items">
        <ToastCheckbox text="action item text" />
        <ToastCheckbox text="action item text" />
        <ToastCheckbox text="action item text" />
        <ToastCheckbox text="action item text" />
      </div>
    );
  }
}

export default connect(null)(ActionItemsContent);
