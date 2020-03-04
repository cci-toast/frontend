import React, { Component } from "react";
class PrimaryButton extends Component {
  render() {
    const primary = {
      background: "var(--toast-gradient-1)",
      float: "right",
      padding: "0.84rem 2.14rem"
    };

    if (this.props.round) {
      return (
        <button className="btn round" type="submit" style={primary}>
          {this.props.label}
        </button>
      );
    } else {
      return (
        <button className="btn" type="submit" style={primary}>
          {this.props.label}
        </button>
      );
    }
  }
}

export default PrimaryButton;
