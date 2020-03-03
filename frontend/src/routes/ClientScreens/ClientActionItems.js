import React from 'react';
import Checkbox from "../Components/Checkbox";
class ClientActionItems extends React.Component {


  render() {
    return (
      <div>
        <h4 className="title">Your Action Items</h4>
        <Checkbox text="action item text"/>
        <Checkbox text="action item text"/>
        <Checkbox text="action item text"/>
        <Checkbox text="action item text"/>
      </div>
    );
  }
}

export default ClientActionItems;