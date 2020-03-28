import React, { Component } from 'react';
import Center from 'react-center';
import { Link } from 'react-router-dom';
import Style from 'style-it';

import Logo from '../logo.png';
import InputComponent from './InputComponent';
import ToastButtonComponent from './ToastButtonComponent';

class SigninScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  submitHandler(event) {
    alert('Email, Password: ' + this.state.email + ' ' + this.state.password);
    event.preventDefault();
  }

  render() {
    const styles = `
    .center-content {
      justify-content: center;
      align-items: center;
    }

    .logo {
      width: 30%;
      padding-top: 2.5rem;
    }

    .hero-bg-left {
      background: var(--toast-gradient-2);
      border-radius: 0rem 5rem 0rem 0rem;
      margin-left: -0.9375rem;
      margin-top: 3rem;
      height: calc(100vh - 8rem);
      padding-top: 5rem;
    }

    .sign-in-spacer {
      padding: 5rem 3rem;
    }

    .toast-title {
      color: var(--toast-white);
      font-family: Libra Baskerville;
    }

    .toast-tag-line {
      color: var(--toast-white);
      font-style: italic;
    }

    .column-full {
      display: flex;
      flex-direction: column;
    }
      `;

    return Style.it(
      `${styles}`,
      <div>
        <div className='row'>
          <div className='column hero-bg-left'>
            <div className='center-content'>
              <Center>
                <img src={Logo} rel='icon' alt='' className='logo' />
              </Center>

              <Center>
                <h1 className='toast-title'>toast</h1>
              </Center>
              <Center>
                <p className='toast-tag-line'>Financial planning made easier</p>
              </Center>
            </div>
          </div>

          <div className='column sign-in-spacer'>
            <form onSubmit={this.submitHandler}>
              <div className='column-full'>
                <h2>Sign In</h2>
                <br />
                <InputComponent
                  placeholder='Type in your email'
                  type='email'
                  iconName='user'
                  iconWidth={24}
                  iconHeight={24}
                  label='Email'
                  onChange={this.handleChange}
                  name='email'
                  value={this.state.email}
                  required
                />

                <br />
                <InputComponent
                  placeholder='Type in your password'
                  type='password'
                  iconName='lock'
                  iconWidth={24}
                  iconHeight={24}
                  label='Password'
                  onChange={this.handleChange}
                  name='password'
                  value={this.state.password}
                  required
                />
              </div>
              <br />
              <Center>
                <Link to='/clientprofile'>
                  <ToastButtonComponent primary round label='Sign In' />
                </Link>
              </Center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SigninScreenComponent;
