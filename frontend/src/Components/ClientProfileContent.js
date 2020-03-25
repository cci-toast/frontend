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
                type='date'
                label='Date of Birth'
                value={props.bday}
                name='bday'
                onChange={props.handleChange}
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
        <div>
          <h4>Income</h4>
          <div className='row'>
            <div className='column'>
              <InputComponent
                type='number'
                min='0'
                label='Annual Salary Before Taxes'
                placeholder='Type in your annual salary before taxes'
                value={props.income}
                name='income'
                icon={faDollarSign}
                onChange={props.handleChange}
                required
              />
            </div>
            <div className='column'>
              <InputComponent
                type='number'
                min='0'
                label='Annual Salary After Taxes'
                placeholder='Type in your annual salary after taxes'
                value={props.income}
                name='income'
                icon={faDollarSign}
                onChange={props.handleChange}
              />
            </div>
          </div>
          <Center>
            <ToastButtonComponent tertiary label='+ Additional Income' />
          </Center>

          <div className='spacer-quaternary'></div>
        </div>
      );
    }

    function Bills(props) {
      if (props.currentStep !== 3) {
        return null;
      }
      return (
        <div>
          <h4>Bills</h4>
          <Center>
            <ToastButtonComponent tertiary label='+ Housing' />
          </Center>
          <hr />
          <Center>
            <ToastButtonComponent tertiary label='+ Bill' />
          </Center>
          <hr />
          <Center>
            <ToastButtonComponent tertiary label='+ Utility' />
          </Center>
          <hr />
          <Center>
            <ToastButtonComponent tertiary Button label='+ Insurance' />
          </Center>
          <hr />
          <Center>
            <ToastButtonComponent tertiary label='+ Loan / Debt' />
          </Center>
        </div>
      );
    }

    function Expenses(props) {
      if (props.currentStep !== 4) {
        return null;
      }
      return (
        <div>
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
                min='0'
                icon={faDollarSign}
                value={props.shoppingamount}
                onChange={props.handleChange}
              />
            </div>
          </div>
          <Center>
            <ToastButtonComponent tertiary label='+ Shopping' />
          </Center>
          <hr />

          <Center>
            <ToastButtonComponent tertiary label='+ Leisure' />
          </Center>
          <hr />

          <Center>
            <ToastButtonComponent tertiary label='+ Transportation' />
          </Center>
          <hr />

          <Center>
            <ToastButtonComponent tertiary label='+ Subscriptions' />
          </Center>
        </div>
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
                label="Spouse's First Name"
                name='spousefname'
                placeholder="Type in your spouse's first name"
                value={props.spousefname}
                onChange={props.handleChange}
              />
              <InputComponent
                type='date'
                label="Spouse's Date of Birth"
                name='spousebday'
                value={props.spousebday}
                onChange={props.handleChange}
              />
            </div>
            <div className='column'>
              <InputComponent
                type='text'
                label="Spouse's Last Name"
                name='spouselname'
                placeholder="Type in your spouse's last name"
                value={props.spouselname}
                onChange={props.handleChange}
              />
            </div>
          </div>
          <Center>
            <ToastButtonComponent tertiary label='+ Partner' />
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
                type='date'
                label="Child's Date of Birth"
                value={props.childbday}
                name='childbday'
                onChange={props.handleChange}
              />
            </div>
            <div className='column'>
              <InputComponent
                type='text'
                label="Child's Last Name"
                placeholder="Type in your child's last name"
                value={props.childlname}
                name='childlname'
                onChange={props.handleChange}
              />
            </div>
          </div>

          <Center>
            <ToastButtonComponent tertiary label='+ Child' />
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
            <ToastButtonComponent tertiary label='+ Short Term Goal' />
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
            <ToastButtonComponent tertiary label='+ Long Term Goal' />
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
            income={this.state.income}
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
            numchildren={this.state.numchildren}
            childfname={this.state.childfname}
            childlname={this.state.childlname}
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
