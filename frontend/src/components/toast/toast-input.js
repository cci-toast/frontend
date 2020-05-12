import React from "react";
import Style from "style-it";

import ToastIcon from "./toast-icon";

class ToastInput extends React.Component {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onMouseOverHelp = this.onMouseOverHelp.bind(this);
    this.onMouseOutHelp = this.onMouseOutHelp.bind(this);

    this.helpOverlay = React.createRef();
    this.triangle = React.createRef();

    if (this.props.search) {
      this.backgroundColor = "var(--toast-white)";
    } else if (this.props.readOnly) {
      this.backgroundColor = "var(--toast-neutral-5)";
      this.cursor = "not-allowed";
    } else {
      this.backgroundColor = "var(--toast-neutral-6)";
      this.cursor = "text";
    }

    if (this.props.medium) {
      this.width = "69%";
    } else {
      this.width = "24rem";
    }

    if (this.props.helpExamples) {
      this.helpOverlayMargin = "-4rem";
    } else {
      this.helpOverlayMargin = "-3rem";
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

  onMouseOverHelp() {
    this.helpOverlay.current.classList.remove("hidden");
    this.triangle.current.classList.remove("hidden");
  }

  onMouseOutHelp() {
    this.helpOverlay.current.classList.add("hidden");
    this.triangle.current.classList.add("hidden");
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

    if (this.props.medium) {
      classes.push("medium");
    }

    return classes.join(" ");
  }

  getLabelIconClasses() {
    let classes = ["label-icon"];

    if (this.props.medium) {
      classes.push("medium");
    } else {
      classes.push("label-icon-default");
    }

    return classes.join(" ");
  }

  getHelpIconClasses() {
    let classes = ["help-icon"];

    if (this.props.readOnly || this.props.search || this.props.select) {
      classes.push("hidden");
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
      padding: 0.75rem 1rem;
      color: var(--toast-neutral-1);
      width: 24.5rem;
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
      margin: 0.5rem 2rem 1.5rem 0;
      width: 24.5rem;
    }

    .input-group-search {
      display: flex;
      border-radius: 2rem;
      background-color: ${this.backgroundColor};
      border: 1px solid var(--toast-neutral-4);
      width: 20rem;
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

    .medium {
      width: 70%;
    }

    .label-icon-default {
      width: 24.5rem;
    }

    .label-icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .help-icon {
      margin-right: 1rem;
    }

    .help-overlay {
      background-color: var(--toast-neutral-1);
      border-radius: 0.5rem;
      padding: 0.5rem;
      color: var(--toast-neutral-6);
      font-size: 0.8125rem;
      position: absolute;
      margin-top: ${this.helpOverlayMargin};
      margin-left: 1rem;
    }

    .help-overlay p {
      color: var(--toast-neutral-6);
      font-size: 0.8125rem;
      margin: 0;
      width: 100%;
    }

    .help-examples {
      font-style: italic;
    }

    .hidden {
      display: none;
    }

    .help-container {
      display: flex;
      justify-content: flex-end;
      width: ${this.width};
    }

    .triangle {
      margin-top: -1rem;
      margin-left: -0.5rem;
      position: absolute;
      fill: var(--toast-neutral-1);
    }
    `;

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <div className="help-container">
          <div className="help-overlay hidden" ref={this.helpOverlay}>
            <p>
              {this.props.helpText}
              <br />
              <span
                className={this.props.helpExamples ? "help-examples" : "hidden"}
              >
                Examples:{" "}
              </span>
              {this.props.helpExamples}
            </p>
          </div>
          <svg
            height="20"
            width="20"
            className="triangle hidden"
            ref={this.triangle}
          >
            <polygon points="0,0 20,0 10,10" />
          </svg>
        </div>

        <div className={this.getLabelIconClasses()}>
          <label className="input-label">{this.props.label}</label>
          <div
            className={this.getHelpIconClasses()}
            onMouseOver={this.onMouseOverHelp}
            onMouseOut={this.onMouseOutHelp}
          >
            <ToastIcon
              name="helpcircle"
              width={20}
              height={20}
              stroke="var(--toast-neutral-1)"
              strokeWidth={2}
            />
          </div>
        </div>

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
