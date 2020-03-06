import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Center from "react-center";
import { Link } from "react-router-dom";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import Logo from "./logo.png";

import InputComponent from "./Components/InputComponent";
import ToastButton from "./Components/ToastButton";

import Style from "style-it";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

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
    alert("Email, Password: " + this.state.email + " " + this.state.password);
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
      margin-top: 1.25rem;
      height: calc(100vh - 1.25rem);
      padding-top: 5rem;
    }

    .sign-in-spacer {
      padding-top: 5rem;
    }

    .toast-title {
      color: var(--toast-white);
      font-family: Libra Baskerville;
    }

    .toast-tag-line {
      color: var(--toast-white);
      font-style: italic;
    }
      `;

    return Style.it(
      `${styles}`,
      <div>
        <Row>
          <Col md="6" className="hero-bg-left">
            <div className="center-content">
              <Center>
                <img src={Logo} rel="icon" alt="" className="logo" />
              </Center>

              <Center>
                <h1 className="toast-title">toast</h1>
              </Center>
              <Center>
                <p className="toast-tag-line">Financial planning made easier</p>
              </Center>
            </div>
          </Col>

          <Col md="6" className="sign-in-spacer">
            <form onSubmit={this.submitHandler}>
              <Col className="mb-3">
                <h2>Sign In</h2>
                <br />
                <InputComponent
                  placeholder="Type in your email"
                  type="email"
                  icon={faUser}
                  label="Email"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                  required
                />
              </Col>
              <br />
              <Col mb="3">
                <InputComponent
                  placeholder="Type in your password"
                  type="password"
                  icon={faLock}
                  label="Password"
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.password}
                  required
                />
              </Col>
              <br />
              <Center>
                <Link to="/clientprofile">
                  <ToastButton primary round label="Sign In" />
                </Link>
              </Center>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Signin;
