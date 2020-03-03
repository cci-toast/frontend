import React, { Component } from "react";
class Checkbox extends Component {
    render() {
        return (
            <div className="input-group">
                <input type="checkbox"/>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
export default Checkbox;