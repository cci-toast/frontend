import React, { Component } from "react";
import Style from "style-it";

class CheckboxComponent extends Component {
  render() {
    const styles = `
    .input-group {
        display: flex;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="input-group">
        <input type="checkbox" />
        <label>{this.props.text}</label>
      </div>
    );
  }
}
export default CheckboxComponent;
