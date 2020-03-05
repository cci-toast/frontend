import React from "react";

import Checkbox from "../Components/Checkbox";
import MainNav from "../Components/MainNav";
import Card from "../Components/Card";

class ClientActionItems extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="nav-card">
          <MainNav client></MainNav>
          <Card>
            {/* <h3>Your Action Items</h3> */}
            <Checkbox text="action item text" />
            <Checkbox text="action item text" />
            <Checkbox text="action item text" />
            <Checkbox text="action item text" />
          </Card>
        </div>
      </div>
    );
  }
}

export default ClientActionItems;
