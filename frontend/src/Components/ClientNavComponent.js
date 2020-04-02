import React, { Component } from 'react';
import Style from 'style-it';

import ToastButtonComponent from './ToastButtonComponent';

class ClientNavComponent extends Component {
  render() {
    const styles = `
    .wrapper {
       display: flex;
       justify-self: flex-end;
    }
    `;

    function getButton(label, iconName, href) {
      return (
        <a href={`/${href}`}>
          <ToastButtonComponent
            tertiary
            type='button'
            label={label}
            iconName={iconName}
            iconWidth={25}
            iconHeight={25}
            iconStroke='var(--toast-neutral-1)'
            iconStrokeWidth={2}
          />
        </a>
      );
    }

    return Style.it(
      `${styles}`,
      <div className='wrapper'>
        {getButton('profile', 'user', 'clientprofile')}
        {getButton('plan', 'barchart', 'clientplan')}
        {getButton('action items', 'checkcircle', 'clientactionitems')}
      </div>
    );
  }
}
export default ClientNavComponent;
