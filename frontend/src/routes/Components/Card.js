import React, { Component } from "react";
class Card extends Component {
    render() {
      const card ={
        marginLeft: "4.375rem",
        backgroundColor: "white",
        padding: "3rem 2rem 3.8rem",
        borderRadius: "1.25rem 1.25rem 0rem 0rem",
        width: "56.25rem",
        minHeight: "39.3rem",
        marginTop:"3rem"
      }
      return (
        <main style={card}>{this.props.children}</main>
    );
  }
}

  export default Card;
