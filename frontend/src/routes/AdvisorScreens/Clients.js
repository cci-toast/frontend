import React from "react";
import Clientbox from "../Components/Clientbox";

import MainNav from "../Components/MainNav";
import Card from "../Components/Card";

class Clients extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="nav-card">
          <MainNav client></MainNav>
          <Card>
            <h4 className="title">Your Clients</h4>
            <Clientbox clientName="John Smith" />
            <Clientbox clientName="Blah Blah" />
          </Card>
        </div>
      </div>
    );
  }
}

export default Clients;
