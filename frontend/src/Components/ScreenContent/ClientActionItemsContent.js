import React from 'react';
import Style from 'style-it';

import CheckboxComponent from '../CheckboxComponent';
import SaveCancelComponent from '../SaveCancelComponent';

class ClientActionItemsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
    };
  }

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  hidePrevButton = () => {
    return this.state.currentStep === 1;
  };

  hideNextButton = () => {
    return this.state.currentStep === 5;
  };

  render() {
    const styles = `
    .save-cancel {
      display: flex;
      justify-content: flex-end;
    }

    .container {
      height: calc(90vh - 5rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className='container'>
        <div>
          <CheckboxComponent text='action item text' />
          <CheckboxComponent text='action item text' />
          <CheckboxComponent text='action item text' />
          <CheckboxComponent text='action item text' />
        </div>
        <div className='save-cancel'>
          <SaveCancelComponent
            saveClicked={this.next}
            cancelClicked={this.prev}
            saveLabel='next'
            cancelLabel='previous'
            hideSave={this.hideNextButton()}
            hideCancel={this.hidePrevButton()}
          ></SaveCancelComponent>
        </div>
      </div>
    );
  }
}

export default ClientActionItemsContent;
