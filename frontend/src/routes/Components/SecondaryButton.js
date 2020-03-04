import React, { Component } from "react";
class SecondaryButton extends Component {
  render() {
    const secondary = {
      backgroundColor: "var(--toast-blue-1)",
      float: "right"
    };

    if (this.props.round) {
      return (
        <button
          className="btn round"
          style={secondary}
          type={this.props.type}
          onClick={this.props.handleClick}
        >
          {this.props.icon}
          {this.props.label}
        </button>
      );
    } else {
      return (
        <button
          className="btn"
          style={secondary}
          type={this.props.type}
          onClick={this.props.handleClick}
        >
          {this.props.icon}
          {this.props.label}
        </button>
      );
    }
  }
}
export default SecondaryButton;
