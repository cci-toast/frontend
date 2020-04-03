import React, { Component } from 'react';
import ToastButtonComponent from '../../ToastButtonComponent'
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastSelectComponent from '../../ToastSelectComponent'

class LoanDebtGroup extends Component {

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
      data: [...this.state.data, { loandebttype: '', loandebtamount: '' }]
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
                  options="loandebtOptions"
                  name='loandebttype'
                  label='Loan/Debt Type'
                  list='loandebttype'
                  placeholder='Type in your loan/debt type'
                  value={data.loandebttype}
                  id='loandebttype'
                  onChange={this.handleChange('loandebttype', idx)}
                />
              </div>

              <div className='column'>
                <InputComponent
                  type='number'
                  label='Loan/Debt Amount'
                  name='loandebtamount'
                  placeholder='Type in your monthly payment towards your loan/debt'
                  min={0.0}
                  step={0.01}
                  iconName='dollarsign'
                  iconWidth={20}
                  iconHeight={20}
                  value={data.loandebtamount}
                  onChange={this.handleChange('loandebtamount', idx)}
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


export default LoanDebtGroup;
