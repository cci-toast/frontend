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
      data: [...this.state.data, { shoppingtype: '', shoppingamount: '' }]
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
              options='shoppingOptions'
              label='Shopping Type'
              name='shoppingtype'
              list='shoppingtype'
              id='shoppingtype'
              placeholder='Type in your shopping type'
              value={data.shoppingtype}
              onChange={this.handleChange('shoppingtype', idx)}
            />
          </div>

          <div className='column'>
            <InputComponent
              type='number'
              label='Shopping Amount'
              name='shoppingamount'
              placeholder='Type in your amount spent on shopping items'
              min={0.0}
              step={0.01}
              iconName='dollarsign'
              iconWidth={20}
              iconHeight={20}
              value={data.shoppingamount}
              onChange={this.handleChange('shoppingamount', idx)}
            />
          </div>
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
