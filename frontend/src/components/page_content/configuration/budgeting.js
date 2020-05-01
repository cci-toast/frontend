import React from "react";
import Style from "style-it";

class Budgeting extends React.Component {
  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 4) {
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

    return Style.it(`${styles}`, <div className={this.getClasses()}></div>);
  }
}

export default Budgeting;
