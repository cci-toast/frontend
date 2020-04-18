import React from "react";
import Style from "style-it";

import ToastInput from "./toast-input";

class ToastSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      value: this.props.value,
    };
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ temp: value, value: value });
    if (this.props.onChange) this.props.onChange(event);
  }

  onFocus(event) {
    this.setState({ temp: this.state.value, value: "" });
    if (this.props.onFocus) this.props.onFocus(event);
  }

  onBlur(event) {
    this.setState({ value: this.state.temp });
    if (this.props.onBlur) this.props.onBlur(event);
  }

  render() {
    const styles = ``;

    var dropdownOptions = this.props.options.map((select) => (
      <option key={select.id} value={select.value} />
    ));

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ToastInput
          type="text"
          name={this.props.name}
          label={this.props.label}
          list={this.props.list}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <datalist id={this.props.id}>{dropdownOptions}</datalist>
      </React.Fragment>
    );
  }
}

export default ToastSelect;
