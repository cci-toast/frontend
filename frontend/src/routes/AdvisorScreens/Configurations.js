import React from "react";

import MainNav from "../Components/MainNav";
import Card from "../Components/Card";

class Configurations extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="nav-card">
          <MainNav client></MainNav>
          <Card>
            <h4 className="title">Configure Factors</h4>
          </Card>
        </div>
      </div>
    );
  }
}

export default Configurations;
