import React, { Component } from "react";
class SecondaryButton extends Component {
  render() {
    const secondary = {
      backgroundColor: "#0364FF",
      borderRadius: "0.625rem",
      bottom:"0rem",
      right:"15rem"
    }
    return (
      <button className="btn float-right" style={secondary} type={this.props.type} onClick={this.props.handleClick}>{this.props.icon}{this.props.label} </button>
    );
  }
}
export default SecondaryButton;
