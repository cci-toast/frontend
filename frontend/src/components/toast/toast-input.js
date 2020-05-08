import React from "react";
import Style from "style-it";

import ToastIcon from "./toast-icon";

class ToastInput extends React.Component {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);

    if (this.props.search) {
      this.backgroundColor = "var(--toast-white)";
    } else if (this.props.readOnly) {
      this.backgroundColor = "var(--toast-neutral-5)";
      this.cursor = "not-allowed";
    } else {
      this.backgroundColor = "var(--toast-neutral-6)";
      this.cursor = "text";
    }
  }

  onFocus(e) {
    if (!this.props.readOnly) {
      e.currentTarget.parentNode.classList.add("focused");
    }
  }

  onBlur(e) {
    e.currentTarget.parentNode.classList.remove("focused");
  }

  getIcon() {
    if (this.props.iconName) {
      return (
        <div className="input-group-prepend">
          <ToastIcon
            name={this.props.iconName}
            width={this.props.iconWidth}
            height={this.props.iconHeight}
            stroke={this.props.iconStroke}
            strokeWidth={this.props.iconStrokeWidth}
            fill={this.props.iconFill}
          />
        </div>
      );
    }
  }

  getClasses() {
    let classes = [];

    if (this.props.required) {
      classes.push("required");
    }

    return classes.join(" ");
  }

  getInputClasses() {
    let classes = [];

    if (this.props.search) {
      classes.push("input-group-search");
    } else {
      classes.push("input-group");
    }

    if (this.props.short) {
      classes.push("short");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    input {
      border-radius: 20rem;
      background-color: ${this.backgroundColor};
      font-size: 1rem;
      border: none;
      height: 1.5rem;
      min-width: 15rem;
      width: 100%;
      padding: 0.75rem 1rem;
      color: var(--toast-neutral-1);
    }

    input[type="date"] {
      font-family: Inter;
      font-style: italic;
      font-size: 1rem;
      color: var(--toast-neutral-3);
    }

    input::-webkit-calendar-picker-indicator {
      opacity: 100;
      color: var(--toast-neutral-3);
    }
    
    input {
      box-shadow: none;
      cursor: ${this.cursor};
    }
    
    .input-group {
      display: flex;
      border-radius: 2rem;
      background-color: ${this.backgroundColor};
      margin: 0.5rem 0 1.5rem 0;
    }

    .input-group-search {
      display: flex;
      border-radius: 2rem;
      background-color: ${this.backgroundColor};
      border: 1px solid var(--toast-neutral-4);
    }
    
    .input-group-prepend {
      height: 1rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${this.backgroundColor};
      border-top-left-radius: 20rem;
      border-bottom-left-radius: 20rem;
      color: var(--toast-neutral-1);
      padding: 1rem 0 1rem 1rem;
    }
    
    .required .input-label:after {
      content: "*";
      color: var(--toast-red);
      margin-left: 0.125rem;
    }
    
    .focused {
      box-shadow: 0 0 5px var(--toast-blue-2);
    }

    .short {
      width: 70%;
    }

    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <label className="input-label">{this.props.label}</label>

        <div className={this.getInputClasses()}>
          {this.getIcon()}
          <input
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value || ""}
            min={this.props.min}
            list={this.props.list}
            title={this.props.placeholder}
            max={this.props.max}
            onChange={this.props.onChange}
            required={this.props.required}
            step={this.props.step}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            readOnly={this.props.readOnly}
          />
        </div>
      </div>
    );
  }
}

export default ToastInput;
