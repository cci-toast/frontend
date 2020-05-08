import React from "react";
import Style from "style-it";

class ToastCheckbox extends React.Component {
  getLabelClasses() {
    let classes = ["label"];

    if (this.props.hideLabel) {
      classes.push("hidden");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    .input-group {
      display: flex;
      align-items: center;
    }
    
    input[type="checkbox"] {
      background-color: var(--toast-neutral-5);
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 3px;
      border: none;
      -webkit-appearance: none;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      cursor: pointer;
      font-size: 13px;
    }
  
    input[type="checkbox"]:checked:before {
      content: '✔';
      color: var(--toast-neutral-2);
      font-size: 13px;
    }

    .hidden {
      display: none;
    }

    .label {
      margin-left: 0.5rem;
      color: var(--toast-neutral-1);
    }
    `;

    return Style.it(
      `${styles}`,
      <div className="input-group">
        <input type="checkbox" title="Checkbox" />
        <label className={this.getLabelClasses()}>{this.props.text}</label>
      </div>
    );
  }
}
export default ToastCheckbox;
