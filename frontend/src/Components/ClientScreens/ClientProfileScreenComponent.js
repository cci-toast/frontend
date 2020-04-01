import React, { Component } from 'react';
import Style from 'style-it';

import ScreenTemplateComponent from '../ScreenTemplateComponent';

class ClientProfileScreenComponent extends Component {
  render() {
    const styles = ``;

    return Style.it(
      `${styles}`,
      <React.Fragment>
        <ScreenTemplateComponent
          user='client'
          page='profile'
        ></ScreenTemplateComponent>
      </React.Fragment>
    );
  }
}

export default ClientProfileScreenComponent;
