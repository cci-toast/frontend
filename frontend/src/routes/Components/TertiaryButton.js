import React, { Component } from "react";
class TertiaryButton extends Component {
  render() {
    const tertiary = {
      backgroundColor: "white",
      borderRadius: "0.625rem",
      border: "0.05rem #949494 solid",
      color: "#949494",
      minWidth: "12rem",
    };
    return (
      <button className="btn" style={tertiary} type="button" onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
}

export default TertiaryButton;
