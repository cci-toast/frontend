import React from "react";
import Style from "style-it";
import ToastCheckbox from "../../toast/toast-checkbox";

class Protection extends React.Component {
  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 1) {
      classes.push("hide");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    .hide {
      display: none;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <ToastCheckbox text="action item text" />
        <ToastCheckbox text="action item text" />
        <ToastCheckbox text="action item text" />
        <ToastCheckbox text="action item text" />
      </div>
    );
  }
}

export default Protection;
