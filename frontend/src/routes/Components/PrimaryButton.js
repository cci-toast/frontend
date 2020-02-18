import React, { Component } from "react";
class PrimaryButton extends Component {
  render() {
    const primary = {
      background: "linear-gradient(45deg, #721ebe, #3260b3)",
      borderRadius: "0.625rem",
      bottom:"0rem",
      right:"15rem",
      float:"right"
    };
    return (
      <button className="btn" type="submit" style={primary}>{this.props.label}</button>
    );
  }
}

export default PrimaryButton;
