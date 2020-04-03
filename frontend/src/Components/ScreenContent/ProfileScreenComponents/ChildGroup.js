import React, { Component } from 'react';
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastSelectComponent from '../../ToastSelectComponent'
import ToastButtonComponent from '../../ToastButtonComponent'

class ChildGroup extends Component {
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
      data: [...this.state.data, { childfname: '', childeducation: '', childbirthyear: '' }]
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
               type='text'
               label="Child's First Name"
               placeholder="Type in your child's first name"
               value={data.childfname}
               name='childfname'
               onChange={this.handleChange('childfname',idx)}
             />
             <InputComponent
               type='text'
               label="Child's Education"
               placeholder="Type in your child's education"
               value={data.childeducation}
               name='childeducation'
               onChange={this.handleChange('childeducation',idx)}
             />
           </div>
           <div className='column'>

             <ToastSelectComponent
               options='birthyearOptions'
               label="Child's Birth Year"
               name='childbirthyear'
               list='childbirthyear'
               id='childbirthyear'
               placeholder="Type in your child's birth year"
               value={data.childbirthyear}
               onChange={this.handleChange('childbirthyear',idx)}
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


export default ChildGroup;
