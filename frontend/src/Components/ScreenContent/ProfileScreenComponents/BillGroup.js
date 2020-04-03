import React, { Component } from 'react';
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastSelectComponent from '../../ToastSelectComponent'
import ToastButtonComponent from '../../ToastButtonComponent'

class BillGroup extends Component {
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
      data: [...this.state.data, { billtype: '', billamount: '' }]
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
                  options='billOptions'
                  name='billtype'
                  label='Bill Type'
                  list='billtype'
                  placeholder='Type in your bill type'
                  value={data.billtype}
                  id='billtype'
                  onChange={this.handleChange('billtype', idx)}
                />
              </div>

              <div className='column'>
                <InputComponent
                  type='number'
                  label='Bill Amount'
                  name='billamount'
                  placeholder='Type in your amount spent on bills this month'
                  min={0.0}
                  step={0.01}
                  iconName='dollarsign'
                  iconWidth={20}
                  iconHeight={20}
                  value={data.billamount}
                  onChange={this.handleChange('billamount', idx)}
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


export default BillGroup;
