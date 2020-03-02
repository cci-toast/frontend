import React, { Component } from "react";


class Clientbox extends Component {
    render() {
        return (
            <div className="client-box">
            <a href="/clientprofile">{this.props.clientName}</a>
          </div>
        );
    }
}
export default Clientbox;