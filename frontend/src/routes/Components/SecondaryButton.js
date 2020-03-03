import React, { Component } from "react";
class SecondaryButton extends Component {
  render() {
    const secondary = {
      backgroundColor: "var(--toast-blue-1)",
      borderRadius: "0.625rem",
      float:"right",
      minWidth: "8rem",
    }
    return (
      <button className="btn" style={secondary} type={this.props.type} onClick={this.props.handleClick}>{this.props.icon}{this.props.label} </button>
    );
  }
}
export default SecondaryButton;
