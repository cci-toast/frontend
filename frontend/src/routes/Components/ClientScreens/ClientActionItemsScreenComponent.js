import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplateComponent from "../ScreenTemplateComponent";

class ClientActionItemsScreenComponent extends Component {
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

export default ClientActionItemsScreenComponent;
