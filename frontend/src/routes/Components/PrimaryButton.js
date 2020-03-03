import React, { Component } from "react";
class PrimaryButton extends Component {
    render() {
        const primary = {
            background: "var(--toast-gradient-1)",
            borderRadius: "0.625rem",
            float: "right",
            minWidth: "8rem",
        };
        return ( <button className = "btn"
            type = "submit"
            style = { primary } > { this.props.label } </button>
        );
    }
}

export default PrimaryButton;