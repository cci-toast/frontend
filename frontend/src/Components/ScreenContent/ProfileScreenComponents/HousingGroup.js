import React, { Component } from 'react';
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastSelectComponent from '../../ToastSelectComponent'
import ToastButtonComponent from '../../ToastButtonComponent'


class BillsGroup extends Component {
  
  state = {
    count: 0,
    data: []
  }
  
  handleChange = (key,idx) => event => {
    var copy = this.state.data;
    copy[idx][key] = event.target.value;
    this.setState({ data: copy });
  };


  duplicateInput = (event) => {
    event.preventDefault();
    this.setState({
      data: [...this.state.data, {housingtype:'', housingamount:''}]
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
              options='housingOptions'
              name='housingtype'
              label='Housing Type'
              list='housingtype'
              placeholder='Type in your housing type'
              value={data.housingtype}
              id='housingtype'
              onChange={this.handleChange('housingtype',idx)}
            />
          </div>

          <div className='column'>
            <InputComponent
              type='number'
              label='Housing Amount'
              name='housingamount'
              placeholder='Type in your amount spent on housing this month'
              min={0.0}
              step={0.01}
              iconName='dollarsign'
              iconWidth={20}
              iconHeight={20}
              value={data.housingamount}
              onChange={this.handleChange('housingamount',idx)}
            />
          </div>
          </div>
        ))}
        
        <Center>
          <ToastButtonComponent handleClick={this.duplicateInput} tertiary label={this.props.label} />
        </Center>
        <hr/>
      </div>
</React.Fragment>
    );
  }
}


export default BillsGroup;
