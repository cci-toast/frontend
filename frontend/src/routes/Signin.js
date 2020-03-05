import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Center from "react-center";
import { Link } from "react-router-dom";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "./logo.png";

import PrimaryButton from "./Components/PrimaryButton";

import Style from "style-it";

class Signin extends Component {
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

    .input-group {
      display: flex;
     }

     .input-group-text {
      background-color: var(--toast-neutral-6);
      border-radius: 20rem;
      color: var(--toast-neutral-1);
      padding: 0rem 0.75rem;
    }

     .form-control {
       border-radius: 20rem;
       background-color: var(--toast-neutral-6);
       font-size: 0.96rem;
     }
  
     .required .control-label:after {
       content: "*";
       color: var(--toast-red);
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
                <label>Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Type in your email"
                    required
                  />
                </div>
              </Col>
              <br />
              <Col mb="3">
                <label> Password</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Type in your password"
                    required
                  />
                </div>
              </Col>
              <br />
              <Center>
                <Link to="/clientprofile">
                  <PrimaryButton round label="Sign In" />
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
