import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import Center from 'react-center';
import Style from 'style-it';

import InputComponent from './InputComponent';
import SaveCancelComponent from './SaveCancelComponent';
import ToastButtonComponent from './ToastButtonComponent';
import DropdownComponent from './DropdownComponent';

const goalOptions = [
  { id: 0, value: 'I want to save money to pay off my credit card' },
  { id: 1, value: 'I want to save money to pay off student debt' },
  { id: 2, value: 'I want to save money for a vacation' },
  { id: 3, value: 'I want to save money to buy/rent a property' },
  { id: 4, value: 'I want to create an emergency savings fund' },
  { id: 5, value: 'I want to save money to prepare for retirement' },
  { id: 6, value: 'Other (Type in)'}
];

const stateOptions=[
{ id: 0, value: 'Alabama'},
{ id: 1, value: 'Alaska'},
{ id: 2, value: 'Arizona'},
{ id: 3, value: 'Arkansas'},
{ id: 4, value: 'California'},
{ id: 5, value: 'Colorado'},
{ id: 6, value: 'Connecticut'},
{ id: 7, value: 'Delaware'},
{ id: 8, value: 'Florida'}, 
{ id: 9, value: 'Georgia'},
{ id: 10, value: 'Hawaii'},
{ id: 11, value: 'Idaho'},
{ id: 12, value: 'Illinois'},
{ id: 13, value: 'Indiana'},
{ id: 14, value: 'Iowa'},
{ id: 15, value: 'Kansas'},
{ id: 16, value: 'Kentucky'},
{ id: 17, value: 'Louisiana'},
{ id: 18, value: 'Maine'}, 
{ id: 19, value: 'Maryland'},
{ id: 20, value: 'Massachusetts'},
{ id: 21, value: 'Michigan'},
{ id: 22, value: 'Minnesota'},
{ id: 23, value: 'Mississippi'},
{ id: 24, value: 'Missouri'},
{ id: 25, value: 'Montana'},
{ id: 26, value: 'Nebraska'},
{ id: 27, value: 'Nevada'},
{ id: 28, value: 'New Hampshire'},
{ id: 29, value: 'New Jersey'},
{ id: 30, value: 'New Mexico'},
{ id: 31, value: 'New York'},
{ id: 32, value: 'North Carolina'},
{ id: 33, value: 'North Dakota'},
{ id: 34, value: 'Ohio'},
{ id: 35, value: 'Oklahoma'},
{ id: 36, value: 'Oregon'}, 
{ id: 37, value: 'Pennsylvania'},
{ id: 38, value: 'Rhode Island'},
{ id: 39, value: 'South Carolina'},
{ id: 40, value: 'South Dakota'},
{ id: 41, value: 'Tennessee'},
{ id: 42, value: 'Texas'},
{ id: 43, value: 'Utah'},
{ id: 44, value: 'Vermont'},
{ id: 45, value: 'Virginia'},
{ id: 46, value: 'Washington'},
{ id: 47, value: 'West Virginia'},
{ id: 48, value: 'Wisconsin'},
{ id: 49, value: 'Wyoming'}
]

class ClientProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 5 ? 6 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  };

  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  };

  hidePrevButton = () => {
    return this.state.currentStep === 1;
  };

  hideNextButton = () => {
    return this.state.currentStep === 6;
  };

  render() {
    function ClientInformation(props) {
      if (props.currentStep !== 1) {
        return null;
      }
      return (
        <React.Fragment>
          <div className='row'>
            <div className='column'>
              <InputComponent
                type='text'
                label='First Name'
                placeholder='Type in your first name'
                value={props.fname}
                name='fname'
                onChange={props.handleChange}
                required
              />
              <InputComponent
                type='text'
                label='Last Name'
                placeholder='Type in your last name'
                value={props.lname}
                name='lname'
                onChange={props.handleChange}
                required
              />
            </div>

            <div className='column'>
              <InputComponent
                type='text'
                label='Middle Name'
                placeholder='Type in your middle name'
                value={props.mname}
                name='mname'
                onChange={props.handleChange}
              />

              <InputComponent
                type='number'
                label='Birth Year'
                value={props.bday}
                placeholder='Type in your birth year'
                name='bday'
                onChange={props.handleChange}
                min={1}
                max={9999}
                required
              />
            </div>
          </div>

          <hr />
          <div className='row'>
            <div className='column'>
              <InputComponent
                type='text'
                label='City'
                placeholder='Type in your city'
                value={props.city}
                name='city'
                onChange={props.handleChange}
              />
            </div>
            <div className='column'>
            <DropdownComponent
            options={stateOptions}
            name='state' 
            label='State'
            list='state'
            placeholder='Type in your state'
            value={props.state}
            id="state"
            onChange={props.handleChange}
          />
            </div>
          </div>
        </React.Fragment>
      );
    }

    function Finances(props) {
      if (props.currentStep !== 2) {
        return null;
      }
      return (
        <React.Fragment>
          <h4>Income</h4>
          <div className='row'>
            <div className='column'>
              <InputComponent
                type='number'
                min={0.0}
                label='Annual Salary Before Taxes'
                placeholder='50,000'
                value={props.salarynotax}
                name='salarynotax'
                icon={faDollarSign}
                onChange={props.handleChange}
                step={0.01}
                required
              />
            </div>
            <div className='column'>
              <InputComponent
                type='number'
                min={0.0}
                label='Annual Salary After Taxes'
                placeholder='50,000'
                value={props.salarytax}
                name='salarytax'
                icon={faDollarSign}
                onChange={props.handleChange}
                step={0.01}
                required
              />
            </div>
          </div>
          <Center>
            <ToastButtonComponent tertiary label='Add Additional Income' />
          </Center>
        </React.Fragment>
      );
    }

    function Bills(props) {
      if (props.currentStep !== 3) {
        return null;
      }
      return (
        <React.Fragment>
          <h4>Bills</h4>
          <Center>
            <ToastButtonComponent tertiary label='Add Housing' />
          </Center>
          <hr />
          <Center>
            <ToastButtonComponent tertiary label='Add Bill' />
          </Center>
          <hr />
          <Center>
            <ToastButtonComponent tertiary label='Add Utility' />
          </Center>
          <hr />
          <Center>
            <ToastButtonComponent tertiary Button label='Add Insurance' />
          </Center>
          <hr />
          <Center>
            <ToastButtonComponent tertiary label='Add Loan / Debt' />
          </Center>
        </React.Fragment>
      );
    }

    function Expenses(props) {
      if (props.currentStep !== 4) {
        return null;
      }
      return (
        <React.Fragment>
          <h4>Expenses</h4>

          <div className='row'>
            <div className='column'>
              <InputComponent
                type='text'
                label='Shopping Description'
                name='shoppingdescription'
                placeholder='Type in your shopping description'
                value={props.shoppingdescription}
                onChange={props.handleChange}
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
                icon={faDollarSign}
                value={props.shoppingamount}
                onChange={props.handleChange}
              />
            </div>
          </div>
          <Center>
            <ToastButtonComponent tertiary label='Add Shopping' />
          </Center>
          <hr />

          <Center>
            <ToastButtonComponent tertiary label='Add Leisure' />
          </Center>
          <hr />

          <Center>
            <ToastButtonComponent tertiary label='Add Transportation' />
          </Center>
          <hr />

          <Center>
            <ToastButtonComponent tertiary label='Add Subscriptions' />
          </Center>

          <hr />
          <Center>
            <ToastButtonComponent tertiary label='Add Miscellaneous' />
          </Center>
        </React.Fragment>
      );
    }

    function FamilyInformation(props) {
      if (props.currentStep !== 5) {
        return null;
      }
      return (
        <React.Fragment>
          <div className='row'>
            <div className='column'>
              <InputComponent
                type='text'
                label="Partner's First Name"
                name='spousefname'
                placeholder="Type in your partner's first name"
                value={props.spousefname}
                onChange={props.handleChange}
              />
              <InputComponent
                type='number'
                label="Partner's Birth Year"
                name='spousebday'
                placeholder="Type in your partner's birth year"
                value={props.spousebday}
                onChange={props.handleChange}
                min={1}
                max={9999}
              />
            </div>
            <div className='column'>
              <InputComponent
                type='text'
                label="Partner's Last Name"
                name='spouselname'
                placeholder="Type in your partner's last name"
                value={props.spouselname}
                onChange={props.handleChange}
              />
              <InputComponent
                type='number'
                min={0.0}
                label="Partner's Annual Salary After Taxes"
                placeholder='50,000'
                value={props.spousesalary}
                name='spousesalary'
                icon={faDollarSign}
                onChange={props.handleChange}
                step={0.01}
              />
            </div>
          </div>
          <Center>
            <ToastButtonComponent tertiary label='Add Partner' />
          </Center>
          <hr />

          <div className='row'>
            <div className='column'>
              <InputComponent
                type='text'
                label="Child's First Name"
                placeholder="Type in your child's first name"
                value={props.childfname}
                name='childfname'
                onChange={props.handleChange}
              />
              <InputComponent
                type='text'
                label="Child's Education"
                placeholder="Type in your child's education"
                value={props.childfname}
                name='childfname'
                onChange={props.handleChange}
              />
            </div>
            <div className='column'>
              <InputComponent
                type='number'
                label="Child's Birth Year"
                name='spousebday'
                placeholder="Type in your child's birth year"
                value={props.childbday}
                onChange={props.handleChange}
                min={1}
                max={9999}
              />
            </div>
          </div>

          <Center>
            <ToastButtonComponent tertiary label='Add Child' />
          </Center>
        </React.Fragment>
      );
    }

    function Goals(props) {
      if (props.currentStep !== 6) {
        return null;
      }
      return (
        <React.Fragment>
          <DropdownComponent
            options={goalOptions}
            name='goal' 
            label='Goal 1'
            list='goals'
            placeholder='Type in your goal'
            value={props.goal}
            id="goals"
            onChange={props.handleChange}
          />

          <div className='row'>
            <div className='column'>
              <InputComponent
                type='number'
                label='Dollar Amount'
                name='dollarAmount'
                placeholder='1,000'
                min={0}
                icon={faDollarSign}
                value={props.dollarAmount}
                onChange={props.handleChange}
              />
            </div>
            <div className='column'>
              <InputComponent
                type='date'
                label='Goal End Date'
                value={props.goalEndDate}
                name='goalEndDate'
                onChange={props.handleChange}
              />
            </div>
          </div>


          {/* TODO: Add inputs on button click */}
          <Center>
            <ToastButtonComponent tertiary label='Add Goal' />
          </Center>
        </React.Fragment>
      );
    }

    const styles = `
    .save-cancel {
      display: flex;
      justify-content: flex-end;
    }

    .container {
      height: calc(100vh - 10rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    `;

    return Style.it(
      `${styles}`,
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <ClientInformation
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            fname={this.state.fname}
            mname={this.state.mname}
            lname={this.state.lname}
            bday={this.state.bday}
            city={this.state.city}
            state={this.state.state}
            zipcode={this.state.zipcode}
          />
          <Finances
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            salarynotax={this.state.salarynotax}
            salarytax={this.state.salarytax}
          />
          <Bills
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
          <Expenses
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            shoppingdescription={this.state.shoppingdescription}
            shoppingamount={this.state.shoppingamount}
          />
          <FamilyInformation
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            spousefname={this.state.spousefname}
            spouselname={this.state.spouselname}
            spousebday={this.state.spousebday}
            spousesalary={this.state.spousesalary}
            numchildren={this.state.numchildren}
            childfname={this.state.childfname}
            childbday={this.state.childbday}
          />
          <Goals
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            goal={this.state.goal}
            dollarAmount={this.state.dollarAmount}
            goalEndDate={this.state.goalEndDate}
          />
        </form>
        <div className='save-cancel'>
          <SaveCancelComponent
            saveClicked={this.next}
            cancelClicked={this.prev}
            saveLabel='next'
            cancelLabel='previous'
            hideSave={this.hideNextButton()}
            hideCancel={this.hidePrevButton()}
          ></SaveCancelComponent>
        </div>
      </div>
    );
  }
}

export default ClientProfileContent;
