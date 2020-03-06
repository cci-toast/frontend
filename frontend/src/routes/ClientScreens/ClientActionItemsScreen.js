import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplate from "../Components/ScreenTemplate";

class ClientActionItemsScreen extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplate client actionitems></ScreenTemplate>
      </React.Fragment>
    );
  }
}

export default ClientActionItemsScreen;
