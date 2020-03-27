import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import Center from 'react-center';
import Style from 'style-it';

import InputComponent from './InputComponent';
import SaveCancelComponent from './SaveCancelComponent';
import ToastButtonComponent from './ToastButtonComponent';

//import Select from "react-select";

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
              <InputComponent
                type='text'
                label='State'
                placeholder='Type in your state'
                value={props.state}
                name='state'
                onChange={props.handleChange}
              />
            </div>
          </div>

          <div className='spacer-tertiary'></div>
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

          <div className='spacer-quaternary'></div>
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
          <div>
            <InputComponent
              type='text'
              label='Short Term Goal (Examples: taking a vacation, buying a car)'
              placeholder='Type in your short term goal'
              value={props.shorttermgoal}
              name='shorttermgoal'
              onChange={props.handleChange}
              required
            />
          </div>
          {/* TODO: Add inputs on button click */}
          <Center>
            <ToastButtonComponent tertiary label='Add Short Term Goal' />
          </Center>

          <hr />

          <InputComponent
            type='text'
            label='Long Term Goal (Examples: buying a house, preparing for retirement)'
            placeholder='Type in your long term goal'
            value={props.longtermgoal}
            name='longtermgoal'
            onChange={props.handleChange}
            required
          />

          {/* TODO: Add inputs on button click */}
          <Center>
            <ToastButtonComponent tertiary label='Add Long Term Goal' />
          </Center>
          <div className='spacer-secondary'></div>
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
