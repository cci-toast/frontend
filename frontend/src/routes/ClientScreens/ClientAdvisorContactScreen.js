import React, { Component } from "react";
import Style from "style-it";

import ScreenTemplateComponent from "../Components/ScreenTemplateComponent";

class ClientAdvisorContactScreen extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplateComponent client advisorcontact></ScreenTemplateComponent>
      </React.Fragment>
    );
  }
}

export default ClientAdvisorContactScreen;
