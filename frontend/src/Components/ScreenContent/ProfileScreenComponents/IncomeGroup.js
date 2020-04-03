import React, { Component } from 'react';
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastButtonComponent from '../../ToastButtonComponent'


class IncomeGroup extends Component {
  
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
      data: [...this.state.data, {additionalincome1:'', additionalincome2:''}]
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
           type='number'
           label='Additional Income'
           name='additionalincome1'
           placeholder='Type amount earned on additional income annually'
           min={0.0}
           step={0.01}
           iconName='dollarsign'
           iconWidth={20}
           iconHeight={20}
           value={data.additionalincome1}
           onChange={this.handleChange('additionalincome1',idx)}
         />
       </div>
       <div className='column'>
         <InputComponent
           type='number'
           label='Additional Income'
           name='additionalincome2'
           placeholder='Type amount earned on additional income annually'
           min={0.0}
           step={0.01}
           iconName='dollarsign'
           iconWidth={20}
           iconHeight={20}
           value={data.additionalincome2}
           onChange={this.handleChange('additionalincome2',idx)}
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


export default IncomeGroup;
