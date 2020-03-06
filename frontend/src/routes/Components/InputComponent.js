import React, { Component } from "react";
import Style from "style-it";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class InputComponent extends Component {
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

    function hasIcon(props) {
      if (props.icon) {
        return (
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon"> <FontAwesomeIcon icon={props.icon} /></span>
          </div>
        );
      }
    }

    function inputGroup(props){
      let classes=[];

      if(props.required){
        classes.push("required");
      }
      return(
      <div className={classes.join(" ")}>
      <label className="control-label">{props.label}</label>
      
      <div className="input-group">
        {hasIcon(props)}
        <input
          type={props.type}
          className="form-control"
          name={props.name}
          placeholder={props.placeholder}
          value={props.value || ""}
          min={props.min}
          onChange={props.onChange}
          required={props.required}
        />
      </div>
    </div>
      );
    }
    return Style.it(
      `${styles}`,
      inputGroup(this.props)
    );
  }
}

export default InputComponent;
