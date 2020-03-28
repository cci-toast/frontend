import React, { Component } from "react";
import Style from "style-it";
import InputComponent from "./InputComponent"


class DropdownComponent extends Component {
  render() {
    const styles = `
    `;
    var dropdownOptions = this.props.options.map(function (select) {
      return (
        <option data-value={select.id} value={select.value} />
      );
    });

    return Style.it(`${styles}`,
      <React.Fragment>
        <InputComponent type='text' name={this.props.name} label={this.props.label} list={this.props.list} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />
        <datalist id={this.props.id}>
          {dropdownOptions}
        </datalist>
      </React.Fragment>
    );
  }
}

export default DropdownComponent;