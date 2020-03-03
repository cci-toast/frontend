import React, { Component } from "react";
class DateInput extends Component {
  render() {

    return (
      <div>
        <label className="control-label">{this.props.label}</label>
        <div className="input-group">
          <input
            type="date"
            className="form-control"
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            required
          />
        </div>
      </div>
    );
  }
}

export default DateInput;