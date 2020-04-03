import React, { Component } from 'react';
import Center from 'react-center';
import InputComponent from '../../InputComponent'
import ToastSelectComponent from '../../ToastSelectComponent'
import ToastButtonComponent from '../../ToastButtonComponent'

class PartnerGroup extends Component {
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
      data: [...this.state.data, { partnerfname: '', partnerbirthyear: '', partnerlname: '', partnersalary: ''}]
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
                    label="Partner's First Name"
                    name='partnerfname'
                    placeholder="Type in your partner's first name"
                    value={data.partnerfname}
                    onChange={this.handleChange('partnerfname', idx)}
                  />
                  <ToastSelectComponent
                    options='birthyearOptions'
                    label="Partner's Birth Year"
                    name='partnerbirthyear'
                    list='partnerbirthyear'
                    id='partnerbirthyear'
                    placeholder="Type in your partner's birth year"
                    value={data.partnerbirthyear}
                    onChange={this.handleChange('partnerbirthyear', idx)}
                  />
                </div>
                <div className='column'>
                  <InputComponent
                    type='text'
                    label="Partner's Last Name"
                    name='partnerlname'
                    placeholder="Type in your partner's last name"
                    value={data.partnerlname}
                    onChange={this.handleChange('partnerlname', idx)}
                  />
                  <InputComponent
                    type='number'
                    min={0.0}
                    label="Partner's Annual Salary Before Taxes"
                    placeholder='50,000'
                    value={data.partnersalary}
                    name='partnersalary'
                    iconName='dollarsign'
                    iconWidth={20}
                    iconHeight={20}
                    step={0.01}
                    onChange={this.handleChange('partnersalary', idx)}
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


export default PartnerGroup;
