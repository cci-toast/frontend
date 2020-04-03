import React, { Component } from 'react';
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastSelectComponent from '../../ToastSelectComponent'
import ToastButtonComponent from '../../ToastButtonComponent'

class GoalGroup extends Component {
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
             <div key={idx}>
             <ToastSelectComponent
               options="goalOptions"
               name='goal'
               label='Goal'
               list='goals'
               placeholder='Type in your goal'
               value={data.goal}
               id='goals'
               onChange={this.handleChange('goal',idx)}
             />
   
             <div className='row'>
               <div className='column'>
                 <InputComponent
                   type='number'
                   label='Dollar Amount'
                   name='dollaramount'
                   placeholder='1,000'
                   min={0.0}
                   step={0.01}
                   iconName='dollarsign'
                   iconWidth={20}
                   iconHeight={20}
                   value={data.dollaramount}
                   onChange={this.handleChange('dollaramount',idx)}
                 />
               </div>
               <div className='column'>
                 <InputComponent
                   type='date'
                   label='Goal End Date'
                   value={data.goalEndDate}
                   name='goalenddate'
                   onChange={this.handleChange('goalenddate',idx)}
                 />
               </div>
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


export default GoalGroup;
