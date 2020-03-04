import React from "react";
import Checkbox from "../Components/Checkbox";
class ClientActionItems extends React.Component {
  render() {
    return (
      <div>
        <h3>Your Action Items</h3>
        <Checkbox text="action item text" />
        <Checkbox text="action item text" />
        <Checkbox text="action item text" />
        <Checkbox text="action item text" />
      </div>
    );
  }
}

export default ClientActionItems;
