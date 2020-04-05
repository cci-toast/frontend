import React from "react";
import Style from "style-it";

import ToastIcon from "./toast-icon";

class ToastInput extends React.Component {
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

    function getIcon(props) {
      if (props.iconName) {
        return (
          <div className="input-group-prepend">
            <ToastIcon
              name={props.iconName}
              width={props.iconWidth}
              height={props.iconHeight}
              stroke={props.iconStroke}
              strokeWidth={props.iconStrokeWidth}
              fill={props.iconFill}
            ></ToastIcon>
          </div>
        );
      }
    }

    function getInputGroup(props) {
      let classes = [];

      if (props.required) {
        classes.push("required");
      }
      return (
        <div className={classes.join(" ")}>
          <label className="input-label">{props.label}</label>

          <div className="input-group">
            {getIcon(props)}
            <input
              type={props.type}
              name={props.name}
              placeholder={props.placeholder}
              defaultValue={props.defaultValue || ""}
              min={props.min}
              list={props.list}
              max={props.max}
              onChange={props.onChange}
              required={props.required}
              step={props.step}
            />
          </div>
        </div>
      );
    }
    return Style.it(`${styles}`, getInputGroup(this.props));
  }
}

export default ToastInput;
