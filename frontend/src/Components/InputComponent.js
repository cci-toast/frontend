import React, { Component } from "react";
import Style from "style-it";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class InputComponent extends Component {
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
      font-family: Roboto;
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
      background-color: var(--toast-neutral-6);
      border-top-left-radius: 20rem;
      border-bottom-left-radius: 20rem;
      color: var(--toast-neutral-1);
      padding: 1rem 1rem;
      margin: 0.75rem -1.5rem 1.75rem 0;
    }

    .required .input-label:after {
        content: "*";
        color: var(--toast-red);
        margin-left: 0.125rem;
      }
    `;

    function getIcon(props) {
      if (props.icon) {
        return (
          <div className="input-group-prepend">
            <FontAwesomeIcon icon={props.icon} />
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
              value={props.value || ""}
              min={props.min}
              onChange={props.onChange}
              required={props.required}
            />
          </div>
        </div>
      );
    }
    return Style.it(`${styles}`, getInputGroup(this.props));
  }
}

export default InputComponent;
