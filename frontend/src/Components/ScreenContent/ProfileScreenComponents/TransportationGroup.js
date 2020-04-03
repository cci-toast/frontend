import React, { Component } from 'react';
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastSelectComponent from '../../ToastSelectComponent'
import ToastButtonComponent from '../../ToastButtonComponent'


class UtilityGroup extends Component {

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
      data: [...this.state.data, { transportationtype: '', transportationamount: '' }]
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.data.map((data, idx) => (
            <div className='row' key={idx}>
            <div className='column'>
              <ToastSelectComponent
                options='transportationOptions'
                label='Transportation Type'
                name='transportationtype'
                list='transportationtype'
                id='transportationtype'
                placeholder='Type in your transportation type'
                value={data.transportationtype}
                onChange={this.handleChange('transportationtype', idx)}
              />
            </div>

            <div className='column'>
              <InputComponent
                type='number'
                label='Transportation Amount'
                name='transportationamount'
                placeholder='Type in your amount spent on transportation items'
                min={0.0}
                step={0.01}
                iconName='dollarsign'
                iconWidth={20}
                iconHeight={20}
                value={data.transportationamount}
                onChange={this.handleChange('transportationamount', idx)}
              />
            </div>
          <hr/>
          </div>

          ))}

          <Center>
            <ToastButtonComponent handleClick={this.duplicateInput} tertiary label={this.props.label} />
          </Center>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}


export default UtilityGroup;
