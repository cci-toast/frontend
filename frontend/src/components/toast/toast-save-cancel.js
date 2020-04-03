import React from "react";
import Style from "style-it";

import ToastButton from "./toast-button";

class ToastSaveCancel extends React.Component {
  render() {
    const styles = `
    .wrapper {
       display: flex;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="wrapper">
        <ToastButton
          quaternary
          handleClick={this.props.cancelClicked}
          type="button"
          label={this.props.cancelLabel}
          hidden={this.props.hideCancel}
        />

        <ToastButton
          secondary
          handleClick={this.props.saveClicked}
          type="button"
          label={this.props.saveLabel}
          hidden={this.props.hideSave}
        />
      </div>
    );
  }
}
export default ToastSaveCancel;
