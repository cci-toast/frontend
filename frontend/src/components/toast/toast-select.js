import React from "react";
import Style from "style-it";

import ToastInput from "./toast-input";

class ToastSelect extends React.Component {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.showInput = this.showInput.bind(this);

    this.input = React.createRef();
    this.select = React.createRef();

    if (this.props.readOnly) {
      this.backgroundColor = "var(--toast-neutral-5)";
      this.cursor = "not-allowed";
    } else {
      this.backgroundColor = "var(--toast-neutral-6)";
      this.cursor = "default";
    }
  }

  showInput() {
    let select = this.select.current.children[0];
    for (let i = 0; i < select.options.length; i++) {
      if (
        select.options[i].selected &&
        select.options[i].value === "Other (Type in)"
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
    } else if (this.props.name === "description") {
      return "Type in your goal";
    }
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
      margin: 0.5rem 2rem 1.5rem 0;
      padding: 0 0.5rem;
      cursor: ${this.cursor};
      width: 23.5rem;
    }

    .container {
      height: 6.25rem;
    }

    .required .input-label:after {
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

    .short {
      width: 48%;
    }
    `;

    var dropdownOptions = this.props.options.map((option) => (
      <option key={this.props.options.indexOf(option)}>{option}</option>
    ));

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <label className="input-label">{this.props.label}</label>

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
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default ToastSelect;
