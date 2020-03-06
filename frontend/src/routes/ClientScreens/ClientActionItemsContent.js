import React from "react";

import Checkbox from "../Components/Checkbox";

class ClientActionItemsContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <h3>Your Action Items</h3> */}
        <Checkbox text="action item text" />
        <Checkbox text="action item text" />
        <Checkbox text="action item text" />
        <Checkbox text="action item text" />
      </React.Fragment>
    );
  }
}

export default ClientActionItemsContent;
