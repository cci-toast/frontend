import React, { Component } from 'react';
import Style from 'style-it';
import InputComponent from '../InputComponent';
import IncomeGroup from './ProfileScreenComponents/IncomeGroup';
import BillGroup from './ProfileScreenComponents/BillGroup';
import HousingGroup from './ProfileScreenComponents/HousingGroup';
import InsuranceGroup from './ProfileScreenComponents/InsuranceGroup';
import UtilityGroup from './ProfileScreenComponents/UtilityGroup';
import LoanDebtGroup from './ProfileScreenComponents/LoanDebtGroup';
import ShoppingGroup from './ProfileScreenComponents/ShoppingGroup';
import LeisureGroup from './ProfileScreenComponents/LeisureGroup';
import TransportationGroup from './ProfileScreenComponents/TransportationGroup';
import ToastSelectComponent from '../ToastSelectComponent'
import SaveCancelComponent from '../SaveCancelComponent'
import SubscriptionGroup from './ProfileScreenComponents/SubscriptionGroup';
import MiscGroup from './ProfileScreenComponents/MiscGroup';
import ChildGroup from './ProfileScreenComponents/ChildGroup';
import PartnerGroup from './ProfileScreenComponents/PartnerGroup';
import GoalGroup from './ProfileScreenComponents/GoalGroup';

class ClientProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
    };
  }

  handleChange = event => {
    const {name, value } = event.target;
    this.setState({ [name]: value });
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
    //var parent = this;
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

              <ToastSelectComponent
                options="birthyearOptions"
                name='birthyear'
                label='Birth Year'
                list='birthyear'
                placeholder='Type in your birth year'
                value={props.birthyear}
                id='birthyear'
                onChange={props.handleChange}
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

              <ToastSelectComponent
                options="stateOptions"
                name='state'
                label='State'
                list='state'
                placeholder='Type in your state'
                value={props.state}
                id='state'
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
                iconName='dollarsign'
                iconWidth={20}
                iconHeight={20}
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
                iconName='dollarsign'
                iconWidth={20}
                iconHeight={20}
                onChange={props.handleChange}
                step={0.01}
                required
              />
            </div>
          </div>
          <IncomeGroup label='Add Additional Income' />

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
          <HousingGroup label='Add Housing' />
          <BillGroup label='Add Bill' />
          <UtilityGroup label='Add Utility' />
          <InsuranceGroup label='Add Insurance' />
          <LoanDebtGroup label='Add Loan/Debt' />
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
          <ShoppingGroup label='Add Shopping' />
          <LeisureGroup label='Add Leisure' />
          <TransportationGroup label='Add Transportation' />
          <SubscriptionGroup label='Add Subscription' />
          <MiscGroup label='Add Miscellaneous' />
        </React.Fragment>
      );
    }

    function FamilyInformation(props) {
      if (props.currentStep !== 5) {
        return null;
      }
      return (
        <React.Fragment>
          <PartnerGroup label='Add Partner' />
          <ChildGroup label='Add Child' />
        </React.Fragment>
      );
    }

    function Goals(props) {
      if (props.currentStep !== 6) {
        return null;
      }
      return (

        <GoalGroup label='Add Goal' />
      );
    }

    const styles = `
    .save-cancel {
      display: flex;
      justify-content: flex-end;
    }

    .container {
      height: calc(90vh - 5rem);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .hideDiv {
      display: None;
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
            birthyear={this.state.birthyear}
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
          />
          <FamilyInformation
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
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
