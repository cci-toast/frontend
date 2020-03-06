import React, { Component } from "react";
import Style from "style-it";

class TextInput extends Component {
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
