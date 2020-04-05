import React from "react";
import Center from "react-center";
import { Link } from "react-router-dom";
import Style from "style-it";

import ToastLogo from "../../toast-logo.png";
import ToastButton from "../toast/toast-button";
import ToastInput from "../toast/toast-input";

import { connect } from "react-redux";

import { getEmail } from "../../redux/selectors";
import { getPassword } from "../../redux/selectors";

import { setEmail } from "../../redux/actions";
import { setPassword } from "../../redux/actions";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  setEmail(event) {
    this.props.setEmail(event.target.value);
  }

  setPassword(event) {
    this.props.setPassword(event.target.value);
  }

  submitHandler(event) {
    alert("Email, Password: " + this.props.email + " " + this.props.password);
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
        <div className="row">
          <div className="column hero-bg-left">
            <div className="center-content">
              <Center>
                <img src={ToastLogo} rel="icon" alt="" className="logo" />
              </Center>

              <Center>
                <h1 className="toast-title">toast</h1>
              </Center>
              <Center>
                <p className="toast-tag-line">Financial planning made easier</p>
              </Center>
            </div>
          </div>

          <div className="column sign-in-spacer">
            <form onSubmit={this.submitHandler}>
              <div className="column-full">
                <h2>Sign In</h2>
                <br />
                <ToastInput
                  placeholder="Type in your email"
                  type="email"
                  iconName="user"
                  iconWidth={24}
                  iconHeight={24}
                  label="Email"
                  onChange={this.setEmail}
                  name="email"
                  defaultValue={this.props.email}
                  required
                />

                <br />
                <ToastInput
                  placeholder="Type in your password"
                  type="password"
                  iconName="lock"
                  iconWidth={24}
                  iconHeight={24}
                  label="Password"
                  onChange={this.setPassword}
                  name="password"
                  defaultValue={this.props.password}
                  required
                />
              </div>
              <br />
              <Center>
                <Link to="/profile">
                  <ToastButton primary round label="Sign In" />
                </Link>
              </Center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: getEmail(state),
  password: getPassword(state),
});

export default connect(mapStateToProps, { setEmail, setPassword })(Login);
