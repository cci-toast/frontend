import React, { Component } from "react";
class QuaternaryButton extends Component {
    render() {
        const quaternary = {
            color: "var(--toast-black)",
            borderRadius: "0.625rem",
            float: "right",
            minWidth: "8rem",
        };

        return ( <button className = "btn"
            style = { quaternary }
            type = { this.props.type }
            onClick = { this.props.handleClick } > { this.props.label } </button>
        );
    }
}

export default QuaternaryButton;