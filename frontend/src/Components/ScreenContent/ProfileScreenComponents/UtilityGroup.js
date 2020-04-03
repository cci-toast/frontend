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
      data: [...this.state.data, { utilitytype: '', utilityamount: '' }]
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
                  options='utilityOptions'
                  name='utilitytype'
                  label='Utility Type'
                  list='utilitytype'
                  placeholder='Type in your utility type'
                  value={data.utilitytype}
                  id='utilitytype'
                  onChange={this.handleChange('utilitytype', idx)}
                />
              </div>

              <div className='column'>
                <InputComponent
                  type='number'
                  label='Utility Amount'
                  name='utilityamount'
                  placeholder='Type in your amount spent on utilities this month'
                  min={0.0}
                  step={0.01}
                  iconName='dollarsign'
                  iconWidth={20}
                  iconHeight={20}
                  value={data.utilityamount}
                  onChange={this.handleChange('utilityamount', idx)}
                />
              </div>
              <hr />
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
