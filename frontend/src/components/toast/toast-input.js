import React from "react";
import Style from "style-it";

import ToastIcon from "./toast-icon";

class ToastInput extends React.Component {
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

  render() {
    const styles = `
    input {
      border-radius: 20rem;
      background-color: var(--toast-neutral-6);
      font-size: 1rem;
      border: none;
      height: 1.5rem;
      min-width: 15rem;
      width: 100%;
      padding: 0.75rem 1rem;
      margin: 0.75rem 0 1.75rem 0;
      color: var(--toast-neutral-1);
    }

    input[type="date"] {
      font-family: Inter;
      font-style: italic;
      font-size: 1rem;
      color: var(--toast-neutral-3);
    }

    .input-label {
      margin-bottom: 0.5rem;
    }

    .input-group {
      display: flex;
     }

    .input-group-prepend {
      height: 1rem;
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--toast-neutral-6);
      border-top-left-radius: 20rem;
      border-bottom-left-radius: 20rem;
      color: var(--toast-neutral-1);
      padding: 1rem 1.5rem 1rem 1rem;
      margin: 0.75rem -1.5rem 1.75rem 0;
    }

    .required .input-label:after {
        content: "*";
        color: var(--toast-red);
        margin-left: 0.125rem;
      }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <label className="input-label">{this.props.label}</label>

        <div className="input-group">
          {this.getIcon()}
          <input
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            defaultValue={this.props.defaultValue || ""}
            min={this.props.min}
            list={this.props.list}
            max={this.props.max}
            onChange={this.props.onChange}
            required={this.props.required}
            step={this.props.step}
          />
        </div>
      </div>
    );
  }
}

export default ToastInput;
