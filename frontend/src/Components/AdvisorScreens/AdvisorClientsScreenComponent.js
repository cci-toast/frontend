import React, { Component } from 'react';
import Style from 'style-it';

import ScreenTemplateComponent from '../ScreenTemplateComponent';

class AdvisorClientsScreenComponent extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplateComponent
          user='advisor'
          page='clients'
        ></ScreenTemplateComponent>
      </React.Fragment>
    );
  }
}

export default AdvisorClientsScreenComponent;
