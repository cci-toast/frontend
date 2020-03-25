import React, { Component } from 'react';
import Style from 'style-it';

class CheckboxComponent extends Component {
  render() {
    const styles = `
    .input-group {
      display: flex;
      align-items: center;
    }
    
    input[type="checkbox"] {
      background-color: var(--toast-neutral-5);
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 3px;
      border: none;
      -webkit-appearance: none;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      cursor: pointer;
      font-size: 13px;
    }
  
    input[type="checkbox"]:checked:before {
      content: '✔';
      color: var(--toast-neutral-2);
      font-size: 13px;
    }

    .hidden {
      display: none;
    }

    .label {
      margin-left: 0.5rem;
      color: var(--toast-neutral-1);
    }
    `;

    function getLabelClasses(props) {
      let classes = ['label'];

      if (props.hideLabel) {
        classes.push('hidden');
      }

      return classes.join(' ');
    }

    return Style.it(
      `${styles}`,
      <div className='input-group'>
        <input type='checkbox' />
        <label className={getLabelClasses(this.props)}>{this.props.text}</label>
      </div>
    );
  }
}
export default CheckboxComponent;
