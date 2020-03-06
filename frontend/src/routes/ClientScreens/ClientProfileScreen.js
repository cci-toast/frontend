import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplate from "../Components/ScreenTemplate";

class ClientProfileScreen extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplate client profile></ScreenTemplate>
      </React.Fragment>
    );
  }
}

export default ClientProfileScreen;
