import React, { Component } from "react";
import Style from "style-it";

class CurrencyInput extends Component {
  render() {
    const styles = `
    .input-group {
      display: flex;
     }

     .input-group-text {
       background-color: var(--toast-neutral-6);
       border-radius: 20rem;
       color: var(--toast-neutral-1);
       padding: 0rem 0.75rem;
     }
  
     .form-control {
       border-radius: 20rem;
       background-color: var(--toast-neutral-6);
       font-size: 0.96rem;
     }
  
     .required .control-label:after {
       content: "*";
       color: var(--toast-red);
     }
    `;
    return Style.it(
      `${styles}`,
      <div>
        <label className="control-label">{this.props.label}</label>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              {" "}
              $
            </span>
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
