import React from "react";
import Style from "style-it";

class ToastSelect extends React.Component {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus(e) {
    e.currentTarget.parentNode.classList.add("focused");
  }

  onBlur(e) {
    e.currentTarget.parentNode.classList.remove("focused");
  }

  getClasses() {
    let classes = ["container"];

    if (this.props.required) {
      classes.push("required");
    }
    return classes.join(" ");
  }

  render() {
    const styles = `
    select {
      align-self: center;
      background-color: var(--toast-neutral-6);
      font-size: 1rem;
      height: 3rem;
      min-width: 15rem;
      width: 100%;
      color: var(--toast-neutral-1);
      border: none;
      outline: none;
    }

    .select-wrapper {
      display: flex;
      border-radius: 20rem;
      height: 3rem;
      overflow: hidden;
      background: var(--toast-neutral-6);
      margin: 0.5rem 0 1.5rem 0;
      padding: 0 0.5rem;
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
      box-shadow: 0 0 5px var(--toast-blue-1);
    }
    `;

    var dropdownOptions = this.props.options.map((select) => (
      <option key={select.id}>{select.value}</option>
    ));

    return Style.it(
      `${styles}`,
      <div className={this.getClasses()}>
        <label className="input-label">{this.props.label}</label>

        <div className="select-wrapper">
          <select
            type="text"
            name={this.props.name}
            label={this.props.label}
            list={this.props.list}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          >
            {dropdownOptions}
          </select>
        </div>
      </div>
    );
  }
}

export default ToastSelect;
