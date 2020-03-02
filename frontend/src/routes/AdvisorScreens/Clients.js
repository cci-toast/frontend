import React from 'react';
import Clientbox from "../Components/Clientbox";
class Clients extends React.Component {

  render() {
    return (
      <div>
        <h4 className="title">Your Clients</h4>
        <Clientbox clientName="John Smith" />
        <Clientbox clientName="Blah Blah"/>
        
      </div>
    );
  }
}

export default Clients;