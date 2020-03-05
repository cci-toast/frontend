import React, { Component } from "react";
import Style from "style-it";

class DateInput extends Component {
  render() {
    const styles = `
    .input-group {
      display: flex;
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
