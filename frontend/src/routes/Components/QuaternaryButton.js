import React, { Component } from "react";
class QuaternaryButton extends Component {
  render() {
    const quaternary={
      color:"#1A1A1A",
      borderRadius: "0.625rem",
      border: "0.0625rem solid #0364FF",
      float:"right",
      minWidth: "8rem",
  };

    return (
      <button className="btn" style={quaternary} type={this.props.type} onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
}

export default QuaternaryButton;
