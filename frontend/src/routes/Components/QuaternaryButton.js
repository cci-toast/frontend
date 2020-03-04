import React, { Component } from "react";
class QuaternaryButton extends Component {
  render() {
    const quaternary = {
      color: "var(--toast-black)",
      float: "right"
    };

    if (this.props.round) {
      return (
        <button
          className="btn round"
          style={quaternary}
          type={this.props.type}
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </button>
      );
    } else {
      return (
        <button
          className="btn"
          style={quaternary}
          type={this.props.type}
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </button>
      );
    }
  }
}

export default QuaternaryButton;
