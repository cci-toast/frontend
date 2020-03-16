import React from "react";

import CheckboxComponent from "./CheckboxComponent";

class ClientActionItemsContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <h3>Your Action Items</h3> */}
        <CheckboxComponent text="action item text" />
        <CheckboxComponent text="action item text" />
        <CheckboxComponent text="action item text" />
        <CheckboxComponent text="action item text" />
      </React.Fragment>
    );
  }
}

export default ClientActionItemsContent;
