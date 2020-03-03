import React, { Component } from "react";
class TextInput extends Component {
  render() {

    return (
        <div>
        <label className="control-label">{this.props.label}</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value}
            pattern={this.props.pattern}
            onChange={this.props.onChange}
            required
          />
        </div>
        </div>
    );
  }
}

export default TextInput;


