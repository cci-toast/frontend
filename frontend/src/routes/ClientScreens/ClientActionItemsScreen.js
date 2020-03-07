import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplateComponent from "../Components/ScreenTemplateComponent";

class ClientActionItemsScreen extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplateComponent client actionitems></ScreenTemplateComponent>
      </React.Fragment>
    );
  }
}

export default ClientActionItemsScreen;
