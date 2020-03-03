import React, { Component } from "react";
class TertiaryButton extends Component {
  render() {
    const tertiary = {
      backgroundColor: "var(--toast-white)",
      borderRadius: "0.625rem",
      border: "0.05rem var(--toast-neutral-2) solid",
      color: "var(--toast-neutral-2)",
      minWidth: "12rem",
    };
    return (
      <button className="btn" style={tertiary} type="button" onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
}

export default TertiaryButton;
