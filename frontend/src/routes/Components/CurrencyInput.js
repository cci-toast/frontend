
import React, { Component } from "react";
class CurrencyInput extends Component {
  render() {

    return (
      <div>
            <label className="control-label">{this.props.label}</label>
           
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon"> $</span>
              </div>
              <input
                type="number"
                className="form-control"
                name={this.props.name}
                placeholder={this.props.placeholder}
                min="0"
                value={this.props.value}
                onChange={this.props.onChange}
                required
              />
            </div>
      </div>
    );
  }
}

export default CurrencyInput;

