import React, { Component } from 'react';
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastSelectComponent from '../../ToastSelectComponent'
import ToastButtonComponent from '../../ToastButtonComponent'

class SubscriptionGroup extends Component {
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
      data: [...this.state.data, { subscriptiontype: '', subscriptionamount: '' }]
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
               options='subscriptionOptions'
               label='Subscription Type'
               name='subscriptiontype'
               list='subscriptiontype'
               id='subscriptiontype'
               placeholder='Type in your subscription type'
               value={data.subscriptiontype}
               onChange={this.handleChange('subscriptiontype', idx)}
             />
           </div>

           <div className='column'>
             <InputComponent
               type='number'
               label='Subscription Amount'
               name='subscriptionamount'
               placeholder='Type in your amount spent on subscription items'
               min={0.0}
               step={0.01}
               iconName='dollarsign'
               iconWidth={20}
               iconHeight={20}
               value={data.subscriptionamount}
               onChange={this.handleChange('subscriptionamount', idx)}
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


export default SubscriptionGroup;
