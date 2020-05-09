import React from "react";
import Style from "style-it";

class ToastCheckbox extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.readOnly) {
      this.backgroundColor = "var(--toast-neutral-4)";
      this.cursor = "not-allowed";
    } else {
      this.backgroundColor = "var(--toast-neutral-5)";
      this.cursor = "pointer";
    }
  }

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
      background-color: ${this.backgroundColor};
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 3px;
      border: none;
      -webkit-appearance: none;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      cursor: ${this.cursor};
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
        <input
          type="checkbox"
          title="Checkbox"
          disabled={this.props.readOnly}
        />
        <label className={this.getLabelClasses()}>{this.props.text}</label>
      </div>
    );
  }
}
export default ToastCheckbox;
