import React from "react";
import Style from "style-it";

import ToastLogo from "../toast-logo.png";
import ToastButton from "./toast/toast-button";
import ToastInput from "./toast/toast-input";
import ToastIcon from "./toast/toast-icon";

import { connect } from "react-redux";

import { getEmail, getPassword, getUser } from "../redux/selectors";
import {
  setEmail,
  setPassword,
  loginClient,
  loginAdvisor,
} from "../redux/actions";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.dismissError = this.dismissError.bind(this);

    this.error = React.createRef();
  }

  login() {
    switch (this.props.user) {
      case "client":
        this.props.loginClient();
        document.location.href = "/profile";
        break;
      case "advisor":
        this.props.loginAdvisor();
        document.location.href = "/clients";
        break;
      default:
        this.error.current.classList.remove("hidden");
        break;
    }
  }

  setEmail(event) {
    this.props.setEmail(event.target.value);
  }

  setPassword(event) {
    this.props.setPassword(event.target.value);
  }

  dismissError() {
    this.error.current.classList.add("hidden");
  }

  render() {
    const styles = `
    .logo {
      width: 30%;
      padding-top: 2.5rem;
    }

    .hero {
      align-items: center;
      background: var(--toast-gradient-2);
      border-top-right-radius: 5rem;
      margin-top: 3rem;
      height: calc(100vh - 8rem);
      padding-top: 5rem;
    }

    .login-container {
      align-items: center;
      margin-top: 10rem;
    }

    .toast {
      color: var(--toast-white);
      font-family: Libra Baskerville;
    }

    .tag-line {
      color: var(--toast-white);
      font-style: italic;
    }

    .login-button {
      display: flex;
      justify-content: center;
      width: 70%;
    }

    .inputs {
      margin: 2rem 0;
    }

    .inputs>div {
      margin-bottom: 2rem;
    }

    .error {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--toast-red-transparent);
      width: 60%;
      border-radius: 1rem;
      margin-top: 1rem;
      padding: 1rem;
    }

    .error-text {
      font-size: 0.875rem;
      color: var(--toast-red);
    }

    .error-icon {
      cursor: pointer;
    }

    .hidden {
      display: none;
    }

    .login-content {
      width: 40vw;
    }
      `;

    return Style.it(
      `${styles}`,
      <div>
        <div className="row">
          <div className="column hero">
            <img src={ToastLogo} rel="icon" alt="" className="logo" />
            <h1 className="toast">toast</h1>
            <p className="tag-line">Financial planning made easier</p>
          </div>

          <div className="column login-container">
            <div className="login-content">
              <h2>Sign In</h2>

              <div ref={this.error} className="error hidden">
                <p className="error-text">Incorrect email or password.</p>
                <div onClick={this.dismissError}>
                  <div className="error-icon">
                    <ToastIcon
                      name="x"
                      width={24}
                      height={24}
                      strokeWidth={2}
                      stroke="var(--toast-red)"
                    />
                  </div>
                </div>
              </div>

              <div className="inputs">
                <ToastInput
                  placeholder="Type in your email"
                  type="email"
                  iconName="user"
                  iconWidth={24}
                  iconHeight={24}
                  label="Email"
                  onChange={this.setEmail}
                  name="email"
                  value={this.props.email}
                  short
                  required
                />
                <ToastInput
                  placeholder="Type in your password"
                  type="password"
                  iconName="lock"
                  iconWidth={24}
                  iconHeight={24}
                  label="Password"
                  onChange={this.setPassword}
                  name="password"
                  value={this.props.password}
                  short
                  required
                />
              </div>

              <div className="login-button">
                <ToastButton
                  primary
                  round
                  label="Sign In"
                  handleClick={this.login}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: getEmail(state),
  password: getPassword(state),
  user: getUser(state),
});

export default connect(mapStateToProps, {
  setEmail,
  setPassword,
  loginClient,
  loginAdvisor,
})(Login);
