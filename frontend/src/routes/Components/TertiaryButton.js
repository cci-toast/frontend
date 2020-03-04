import React, { Component } from "react";
class TertiaryButton extends Component {
  render() {
    const tertiary = {
      backgroundColor: "var(--toast-white)",
      border: "1px var(--toast-neutral-4) solid",
      color: "var(--toast-neutral-2)",
      minWidth: "12rem",
      padding: "0.5rem 1rem"
    };

    if (this.props.round) {
      return (
        <button
          className="btn round"
          style={tertiary}
          type="button"
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </button>
      );
    } else {
      return (
        <button
          className="btn"
          style={tertiary}
          type="button"
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </button>
      );
    }
  }
}

export default TertiaryButton;
