import React, { Component } from 'react';
import Style from 'style-it';

import ToastButtonComponent from './ToastButtonComponent';

class SaveCancelComponent extends Component {
  render() {
    const styles = `
    .wrapper {
       display: flex;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className='wrapper'>
        <ToastButtonComponent
          quaternary
          handleClick={this.props.cancelClicked}
          type='button'
          label={this.props.cancelLabel}
          hidden={this.props.hideCancel}
        />

        <ToastButtonComponent
          secondary
          handleClick={this.props.saveClicked}
          type='button'
          label={this.props.saveLabel}
          hidden={this.props.hideSave}
        />
      </div>
    );
  }
}
export default SaveCancelComponent;
