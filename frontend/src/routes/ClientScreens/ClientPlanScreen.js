import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplate from "../Components/ScreenTemplate";

class ClientPlanScreen extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplate client plan></ScreenTemplate>
      </React.Fragment>
    );
  }
}

export default ClientPlanScreen;
