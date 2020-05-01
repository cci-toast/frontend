import React from "react";
import Style from "style-it";

class Debt extends React.Component {
  getClasses() {
    let classes = [""];

    if (this.props.currentStep !== 2) {
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

export default Debt;
