import React from "react";
import Style from "style-it";

import ToastInput from "./toast-input";
import ToastIcon from "./toast-icon";

class ToastSelect extends React.Component {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.showInput = this.showInput.bind(this);
    this.onMouseOverHelp = this.onMouseOverHelp.bind(this);
    this.onMouseOutHelp = this.onMouseOutHelp.bind(this);

    this.input = React.createRef();
    this.select = React.createRef();
    this.helpOverlay = React.createRef();
    this.triangle = React.createRef();

    if (this.props.readOnly) {
      this.backgroundColor = "var(--toast-neutral-5)";
      this.cursor = "not-allowed";
    } else {
      this.backgroundColor = "var(--toast-neutral-6)";
      this.cursor = "default";
    }

    if (this.props.helpExamples) {
      this.helpOverlayMargin = "-4rem";
    } else {
      this.helpOverlayMargin = "-3rem";
    }
  }

  componentDidMount() {
    this.showInput();
  }

  showInput() {
    let select = this.select.current.children[0];
    for (let i = 0; i < select.options.length; i++) {
      if (
        (select.options[i].selected &&
          select.options[i].value === "Other (Type in)") ||
        (!this.props.options.includes(this.props.value) &&
          this.props.value !== "")
      ) {
        this.input.current.classList.remove("hidden");
        this.select.current.classList.add("hidden");
      }
    }
  }

  onFocus(e) {
    e.currentTarget.parentNode.classList.add("focused");
  }

  onBlur(e) {
    e.currentTarget.parentNode.classList.remove("focused");
  }

  getPlaceholder() {
    if (this.props.name === "education") {
      return "Type in your child's education";
    } else if (this.props.name === "goal") {
      return "Type in your goal";
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
    let classes = ["container"];

    if (this.props.required) {
      classes.push("required");
    }

    if (this.props.short) {
      classes.push("short");
    }

    return classes.join(" ");
  }

  getHelpIconClasses() {
    let classes = ["help-icon"];

    if (this.props.readOnly || this.props.search) {
      classes.push("hidden");
    }

    return classes.join(" ");
  }

  render() {
    const styles = `
    select {
      align-self: center;
      background-color: ${this.backgroundColor};
      font-size: 1rem;
      height: 3rem;
      min-width: 15rem;
      width: 100%;
      color: var(--toast-neutral-1);
      border: none;
      outline: none;
      cursor: ${this.cursor};
    }

    .select-wrapper {
      display: flex;
      border-radius: 20rem;
      height: 3rem;
      overflow: hidden;
      background: ${this.backgroundColor};
      margin: 0.5rem 2rem 1.5rem 0.25rem;
      padding: 0 0.5rem;
      cursor: ${this.cursor};
      width: 23rem;
    }

    .container {
      height: 6.25rem;
    }

    .required .input-label-select:after {
      content: "*";
      color: var(--toast-red);
      margin-left: 0.125rem;
    }

    .focused {
      box-shadow: 0 0 5px var(--toast-blue-2);
    }

    .hidden {
      display: none;
    }

    .label-icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 24.5rem;
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

    .help-container {
      display: flex;
      justify-content: flex-end;
      width: 24rem;
    }

    .triangle {
      margin-top: -1rem;
      margin-left: -0.5rem;
      position: absolute;
      fill: var(--toast-neutral-1);
    }
    `;

    var dropdownOptions = this.props.options.map((option) => (
      <option key={this.props.options.indexOf(option)}>{option}</option>
    ));

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()} onMouseOut={this.onMouseOutHelp}>
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

        <div className="label-icon">
          <label className="input-label-select">{this.props.label}</label>
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

        <div
          className="select-wrapper"
          onChange={this.showInput}
          ref={this.select}
        >
          <select
            type="text"
            name={this.props.name}
            onChange={this.props.onChange}
            value={this.props.value}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            disabled={this.props.readOnly}
            title={this.props.placeholder}
          >
            <option value="" disabled>
              {this.props.placeholder}
            </option>
            {dropdownOptions}
          </select>
        </div>

        <div ref={this.input} className="hidden">
          <ToastInput
            type="text"
            placeholder={this.getPlaceholder()}
            name={this.props.name}
            onChange={this.props.onChange}
            value={this.props.value}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            disabled={this.props.readOnly}
            title={this.props.placeholder}
            select
          />
        </div>
      </div>
    );
  }
}

export default ToastSelect;
