import React, { Component } from 'react';
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastButtonComponent from '../../ToastButtonComponent'

class MiscGroup extends Component {
  state = {
    count: 0,
    data: []
  }

  handleChange = (key, idx) => event => {
    var copy = this.state.data;
    copy[idx][key] = event.target.value;
    this.setState({ data: copy });
  };

  duplicateInput = (event) => {
    event.preventDefault();
    this.setState({
      data: [...this.state.data, { miscellaneoustype: '', miscellaneousamount: '' }]
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.data.map((data, idx) => (
            <div className='row' key={idx}>
            <div className='column'>
              <InputComponent
                type="text"
                label='Miscellaneous Type'
                name='miscellaneoustype'
                placeholder='Type in your miscellaneous expense type'
                value={data.miscellaneoustype}
                onChange={this.handleChange('miscellaneoustype', idx)}
              />
            </div>

            <div className='column'>
              <InputComponent
                type='number'
                label='Miscellaneous Amount'
                name='miscellaneousamount'
                placeholder='Type in your amount spent on miscellaneous items'
                min={0.0}
                step={0.01}
                iconName='dollarsign'
                iconWidth={20}
                iconHeight={20}
                value={data.miscellaneousamount}
                onChange={this.handleChange('miscellaneousamount', idx)}
              />
            </div>
          </div>
          ))}

          <Center>
            <ToastButtonComponent handleClick={this.duplicateInput} tertiary label={this.props.label} />
          </Center>
        </div>
      </React.Fragment>
    );
  }
}


export default MiscGroup;
